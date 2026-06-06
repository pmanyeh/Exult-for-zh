#!/bin/sh
# autogen.sh - Generate configure and Makefile.in files
# Run this script before ./configure when building from git source.

set -e

echo "Running autoreconf..."
autoreconf -v --install

echo ""
echo "Done! Now you can run:"
echo "  ./configure"
echo "  make -j\$(nproc 2>/dev/null || sysctl -n hw.logicalcpu 2>/dev/null || echo 4)"
