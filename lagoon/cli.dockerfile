FROM amazeeio/php:7.3-cli-drupal as builder
COPY composer.json composer.lock load.environment.php package.json package-lock.json /app/
COPY scripts /app/scripts
COPY patches /app/patches
RUN composer --profile install --no-dev --prefer-dist
RUN npm ci
COPY . /app
RUN npm run build-library && npm run build-storybook
RUN rm -rf /app/node_modules

FROM amazeeio/php:7.3-cli-drupal
COPY --from=builder /app /app

ENV NODE_ENV production

# Define where the Drupal Root is located
ENV WEBROOT=web
ENV SB_ENVIRONMENT=amazeeio
