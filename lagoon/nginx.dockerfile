ARG CLI_IMAGE
FROM ${CLI_IMAGE} as builder

FROM uselagoon/nginx-drupal

COPY --from=builder /app /app

COPY .lagoon/redirects-map.conf /etc/nginx/redirects-map.conf

# Define where the Drupal Root is located
ENV WEBROOT=web
ENV SB_ENVIRONMENT=amazeeio
