FROM ruby:3.0 AS builder
RUN bundle config --global frozen 1

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .
RUN bundle exec nanoc

FROM nginx:stable-alpine
COPY --from=builder /app/output /usr/share/nginx/html
COPY --from=builder /app/output /var/www/html
