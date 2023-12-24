/**
 * @file
 * Webpack file for compiling JS and CSS files.
 */

const webpack = require('webpack');
const path = require('path');
const chalk = require('chalk');
const yaml = require('js-yaml');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const globImporter = require('node-sass-glob-importer');
const glob = require('glob');
const write_yaml = require('write-yaml');
const merge = require('lodash.merge');
const _set = require('lodash.set');
//
const partialConfig = glob.sync('./partials/**/*(*.scss|*.js)').reduce((acc, path) => {
  const pathArr = path.split('/');
  const entry = pathArr.slice(pathArr.indexOf('partials') + 1, -1).join('--').split('.')[0];
  let ext = pathArr[pathArr.length - 1].split('.').pop();

  if (!Object.prototype.hasOwnProperty.call(acc, entry)) {
    acc[entry] = {};
    _set(acc[entry], 'dependencies', ['themekit/themekit']);
  }
  if (ext === 'scss') {
    ext = 'css';
    const file = pathArr[pathArr.length - 1].replace('.scss', '').replace('_', '');
    _set(acc[entry], `css.theme['dist/css/${file}.css']`, {});
  }

  if (ext === 'js') {
    const file = pathArr[pathArr.length - 1].replace('.js', '').replace('_', '');
    if (file !== 'config') {
      _set(acc[entry], `js['dist/js/${file}.js']`, {});
    } else {
      const config = require(path);
      // set the default dep
      if (Object.prototype.hasOwnProperty.call(config, 'dependencies')) {
        config.dependencies.push('themekit/themekit');
      }
      // merge in the config js. does not support attributes yet.
      const merged = merge(acc[entry], config);
      acc[entry] = merged;
    }
  }

  return acc;
}, {});
const data = partialConfig;

write_yaml('partials.yml', data, (err) => {
  console.log(chalk.green('generating partials.yml'));
  if (err) {
    console.log(chalk.green('ERROR: Could not generate partials.yml'));
  }
});

const partialsCss = glob.sync('./partials/**/*.scss').reduce((acc, path) => {
  const pathArr = path.split('/');
  const entry = pathArr[pathArr.length - 1].replace('.scss', '').replace('_', '');
  acc[`css/${entry}`] = path;
  return acc;
}, {});

const partialsJs = glob.sync('./partials/**/*.js').reduce((acc, path) => {
  const pathArr = path.split('/');
  const entry = pathArr[pathArr.length - 1].replace('.js', '').replace('_', '');
  acc[`js/${entry}`] = path;
  return acc;
}, {});

const entryPoints = {
  'js/polyfill': 'babel-polyfill',
  'js/global': './global/js/src/global.js',
  'css/global': './global/sass/global.scss',
  // WYSIWYG
  'css/wysiwyg': './wysiwyg/wysiwyg.scss',
  ...partialsCss,
  ...partialsJs,
};

const compiledEntries = {};

for (const prop in entryPoints) {
  compiledEntries[prop] = entryPoints[prop];
}

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    context: __dirname,
    entry: compiledEntries,

    output: {
      path: `${__dirname}/dist`,
      filename: '[name].js',
    },

    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },

    externals: {
      jquery: 'jQuery',
    },

    devtool: isDev ? 'source-map' : false,

    plugins: [
      // The below will shim global jquery, the first two lines will replace $/jQuery
      // when require('jquery') is called. The third line, which we probably will always
      // need with Drupal, then uses the window.jQuery instead of the module jquery when
      // require('jquery') is called.
      // @TODO is this needed if we don't use jquery on the site?
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),

      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
    stats: { children: true },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          // Must add exceptions to this exclude statement for
          // anything that needs to be transpiled by babel.
          exclude: [/node_modules\/(?!foundation-sites)/],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    browsers: ['> 1%', 'last 2 versions'],
                  },
                }],
              ],
              plugins: [
                'babel-plugin-array-includes',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        },
        {
          test: /\.(png|jpg|gif|woff2?|ttf|otf|eot|svg)$/,
          exclude: '/node_modules/',
          loader: 'file-loader',
          options: {
            publicPath: '../',
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: isDev,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev,
            },
          }, {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./_base.scss";',
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, './node_modules/foundation-sites/scss'),
                  path.resolve(__dirname, './global/sass/base'),
                ],
                importer: globImporter(),
              },
              sourceMap: isDev,
            },
          }],
        },
      ],
    },
  };
};
