#!/bin/sh
cd /app && npm run server &
cd /app/frontend && npm run dev &
wait