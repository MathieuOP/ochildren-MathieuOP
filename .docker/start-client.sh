#!/bin/sh

if [ "$1" = "prod" ] ; then npm i -g http-server && sh run.sh ; else yarn start ; fi
