ARG CLI_IMAGE
FROM ${CLI_IMAGE} as builder

FROM uselagoon/php-8.2-fpm

COPY --from=builder /app /app

