ARG PRODUCTION_IMAGE=nginx:alpine
ARG BASE_IMAGE=node:lts

# --------------> The development image
FROM $BASE_IMAGE AS development

ENV NODE_ENV=development
COPY --chown=1000:1000 . /workspaces/website
WORKDIR /workspaces/website
USER 1000:1000

CMD [ "sleep", "infinity" ]

# --------------> The production build stage
FROM $BASE_IMAGE AS production-build

ENV NODE_ENV=production
COPY . /app
WORKDIR /app

RUN npm ci --omit=dev
RUN npm run build:prod

# --------------> The production image
FROM ${PRODUCTION_IMAGE} AS production

# Remove default nginx website
RUN rm -rf html; mkdir html

COPY --from=production-build /app/dist /usr/share/nginx/html
# COPY .htpasswd /usr/share/nginx/html/.htpasswd
COPY ./nginx.conf /etc/nginx/

RUN chmod -R o+r /usr/share/nginx/html
WORKDIR /usr/share/nginx

ENTRYPOINT ["nginx", "-g", "daemon off;"]
