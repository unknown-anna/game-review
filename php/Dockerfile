
FROM php:8.3-fpm

RUN rm /etc/apt/preferences.d/no-debian-php

# Install git
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git net-tools vim \
    libfreetype6-dev libjpeg62-turbo-dev libpng-dev libwebp-dev \
    zip unzip libzip-dev && \
    apt-get clean

# Install php extension
RUN docker-php-ext-install mysqli pdo pdo_mysql zip 
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp
RUN docker-php-ext-install -j$(nproc) gd

WORKDIR /var/www/html

# COPY composer.json /var/www/html
# RUN laravel new laravel-app
# RUN composer install
# RUN composer update
