#!/bin/bash

echo "Cleaning node..."

kill $(ps aux | awk '/node/ {print $1}')
rm -Rf logs/

echo "Done!"