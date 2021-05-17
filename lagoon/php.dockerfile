ARG CLI_IMAGE
FROM ${CLI_IMAGE} as builder

FROM amazeeio/php:8.0-fpm

COPY --from=builder /app /app
ENV SB_ENVIRONMENT=amazeeio
