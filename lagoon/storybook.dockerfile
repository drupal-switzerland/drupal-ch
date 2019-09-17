FROM amazeeio/node:10-builder as nodebuilder
RUN mkdir -p /app/storybook
COPY package.json package-lock.json /app/
RUN npm ci --pure-lockfile
COPY storybook /app/storybook/
RUN npm run build-storybook

FROM amazeeio/nginx
COPY --from=nodebuilder /app/storybook/build /app

