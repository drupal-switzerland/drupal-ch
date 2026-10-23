ARG CLI_IMAGE
FROM ${CLI_IMAGE} as builder

FROM uselagoon/nginx-drupal

COPY --from=builder /app /app

COPY lagoon/nginx/redirects-map.conf /etc/nginx/redirects-map.conf

# Static lockdown: serve the mirror in static/ and never pass to PHP.
COPY static /app/static
COPY lagoon/nginx/static.conf /etc/nginx/conf.d/app.conf

# Define where the Drupal Root is located
ENV WEBROOT=web
ENV SB_ENVIRONMENT=amazeeio
