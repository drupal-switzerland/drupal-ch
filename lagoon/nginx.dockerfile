ARG CLI_IMAGE
FROM ${CLI_IMAGE} as builder

FROM uselagoon/nginx-drupal

COPY --from=builder /app /app

COPY lagoon/nginx/redirects-map.conf /etc/nginx/redirects-map.conf

# Define where the Drupal Root is located
ENV WEBROOT=docroot

