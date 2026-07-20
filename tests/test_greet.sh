#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cmd="$root/greet.sh"

# Ensure executable for test run
if [[ ! -x "$cmd" ]]; then
  chmod +x "$cmd" || true
fi

echo "Running tests for $cmd"

# Test: default invocation
out="$($cmd)"
if ! echo "$out" | grep -E -q 'Hello! Current time: [0-9]{4}-[0-9]{2}-[0-9]{2}T'; then
  echo "[FAIL] Default output did not match expected pattern: $out" >&2
  exit 1
fi
echo "[PASS] default"

# Test: with name
out="$($cmd --name Alice)"
if ! echo "$out" | grep -E -q '^Hello, Alice! Current time: '; then
  echo "[FAIL] Name output unexpected: $out" >&2
  exit 1
fi
echo "[PASS] --name"

# Test: unix format
out="$($cmd --format unix)"
if ! echo "$out" | grep -E -q 'Hello! Current time: [0-9]{9,}$'; then
  echo "[FAIL] Unix format output unexpected: $out" >&2
  exit 1
fi
echo "[PASS] --format unix"

# Test: timestamp-only (machine-friendly)
out="$($cmd --format timestamp)"
if ! echo "$out" | grep -E -q '^[0-9]{4}-[0-9]{2}-'; then
  echo "[FAIL] Timestamp-only output unexpected: $out" >&2
  exit 1
fi
echo "[PASS] --format timestamp"

# Test: help exits 0 and prints usage
if ! $cmd --help >/dev/null 2>&1; then
  echo "[FAIL] --help failed" >&2
  exit 1
fi

echo "[PASS] --help"

echo "All tests passed."
