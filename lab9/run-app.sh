#!/bin/bash

if [ ! -d logs ]; then
  mkdir ./logs/
fi

echo "Running app..."

echo -e "\n###" >> ./logs/server.log &
echo `date '+ %d/%m/%Y %H:%M:%S'` >> ./logs/server.log &
npm run-script server >> ./logs/server.log &

echo -e "\n###" >> ./logs/app.log &
echo `date '+ %d/%m/%Y %H:%M:%S'` >> ./logs/app.log &
npm start >> ./logs/app.log &

echo "App listening on http://localhost:3000"
echo "Server listening on http://localhost:3001"