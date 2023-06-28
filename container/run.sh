#!/bin/bash
ARG=$1
if [ "$ARG" == "build" ]; then
    echo "BUILD"
    docker build -t nest-cloud-run .
fi
if [ -z $ARG ]; then
    echo "RUN"
    docker run -p 3000:3000 nest-cloud-run
fi
