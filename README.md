# Documentation of Ekylibre

This project containt the following informations

* User Documentation for Ekylibre solution

## compile the documentation (HTML and PDF)

`cd doc`

`bundler install`

`bundler exec nanoc`

Go to output of your working directory

## launch live version

`cd doc`

`bundler exec nanoc live`

Go to http://localhost:3000

## deploy live version using gitlab pages

You must have the right configuration in your .ssh/config for the documentation server

`cd doc`

`bundler exec nanoc deploy`
