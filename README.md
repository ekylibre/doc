# Documentation of Ekylibre

Documentation for the V2 of Ekylibre using Nanoc

## compile the documentation (HTML and PDF)

`cd doc`

`bundler install`

`bundler exec nanoc`

Go to output of your working directory

## launch live version

`cd doc`

`bundler exec nanoc live`

Go to http://localhost:3000/fr/demarrage/

## deploy live version using rsync and ssh

You must have the right configuration in your .ssh/config for the documentation server

`cd doc`

`bundler exec nanoc deploy`

## deploy live version using docker compose

Clone the repository on your host and run docker compose up
