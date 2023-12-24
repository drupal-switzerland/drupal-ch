FROM uselagoon/php-8.2-cli-drupal as builder
COPY composer.json composer.lock /app/
COPY assets /app/assets
RUN composer install --no-dev --prefer-dist
COPY . /app

# Config directory should be non-writable.
RUN chmod 755 /app/docroot/sites/default && chmod 644 /app/docroot/sites/default/*

FROM uselagoon/php-8.2-cli-drupal
COPY --from=builder /app /app

ENV NODE_ENV production

# Define where the Drupal Root is located
ENV WEBROOT=docroot
ENV SB_ENVIRONMENT=amazeeio
