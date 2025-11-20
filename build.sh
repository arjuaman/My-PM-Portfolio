#!/usr/bin/env bash
# Build script for Render

echo "Installing dependencies..."
npm install

echo "Building application..."
npm run build

echo "Build complete!"
