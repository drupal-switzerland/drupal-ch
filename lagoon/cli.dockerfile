FROM uselagoon/php-8.2-cli-drupal as builder
COPY composer.json composer.lock load.environment.php /app/
COPY scripts /app/scripts
COPY patches /app/patches
RUN composer --profile install --no-dev --prefer-dist
COPY . /app

FROM uselagoon/node-18-builder as nodebuilder
COPY package.json package-lock.json /app/
#RUN npm ci --legacy-peer-deps
COPY . /app
#RUN npm run build-library
#RUN rm -rf /app/node_modules

# Config directory should be non-writable.
RUN chmod 755 /app/web/sites/default && chmod 644 /app/web/sites/default/*

FROM uselagoon/php-8.2-cli-drupal
COPY --from=nodebuilder /app /app
COPY --from=builder /app /app

ENV NODE_ENV production

# Define where the Drupal Root is located
ENV WEBROOT=web
ENV SB_ENVIRONMENT=amazeeio
