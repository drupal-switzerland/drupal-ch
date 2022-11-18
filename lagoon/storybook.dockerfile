FROM uselagoon/node-18-builder as nodebuilder
RUN mkdir -p /app/storybook
COPY package.json package-lock.json /app/
#RUN npm ci --legacy-peer-deps
COPY storybook /app/storybook/
#RUN npm run build-storybook

FROM uselagoon/nginx
COPY --from=nodebuilder /app/storybook/build /app

