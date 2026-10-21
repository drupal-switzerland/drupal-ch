#!/usr/bin/env bash
# Fails if any given path doesn't return 200 or renders a Drupal error page.
# Usage: scripts/smoke-test.sh http://127.0.0.1:8888 / /user/login /node/1
set -u
base=$1; shift
fail=0
for path in "$@"; do
  body=$(curl -sSL -o - -w '\n%{http_code}' "$base$path")
  code=${body##*$'\n'}
  if [ "$code" != 200 ] || grep -qiE 'unexpected error|Fatal error|Uncaught' <<<"$body"; then
    echo "FAIL $code $path"; fail=1
  else
    echo "ok   $code $path"
  fi
done
exit $fail
