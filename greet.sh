#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage: $(basename "$0") [OPTIONS]

Print a friendly greeting with the current timestamp.

Options:
  -n, --name NAME        Personalize the greeting.
  -f, --format FORMAT    Output format: iso (default), unix, timestamp
  -h, --help             Show this help and exit

Examples:
  $(basename "$0")
  $(basename "$0") -n Alice
  $(basename "$0") --format=unix
  $(basename "$0") --format timestamp

Exit codes:
  0  Success
  2  Usage error / invalid arguments
USAGE
}

# Defaults
name=""
format="iso"

# Parse arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    --name|-n)
      if [[ -z "${2:-}" || "${2:0:1}" = "-" ]]; then
        echo "Error: --name requires a value" >&2
        usage
        exit 2
      fi
      name="$2"
      shift 2
      ;;
    --format|-f)
      if [[ -z "${2:-}" || "${2:0:1}" = "-" ]]; then
        echo "Error: --format requires a value" >&2
        usage
        exit 2
      fi
      format="$2"
      shift 2
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      echo "Error: Unknown argument: $1" >&2
      usage
      exit 2
      ;;
  esac
done

# Timestamp helpers
iso_timestamp() {
  # Prefer GNU date's ISO output; fall back to a portable UTC format
  if date --iso-8601=seconds >/dev/null 2>&1; then
    date --iso-8601=seconds
  else
    date -u +"%Y-%m-%dT%H:%M:%SZ"
  fi
}

unix_timestamp() {
  date +%s
}

# Generate output based on format
case "$format" in
  iso)
    ts=$(iso_timestamp)
    ;;
  unix)
    ts=$(unix_timestamp)
    ;;
  timestamp)
    ts=$(iso_timestamp)
    printf '%s\n' "$ts"
    exit 0
    ;;
  *)
    echo "Error: Unknown format: $format" >&2
    usage
    exit 2
    ;;
esac

# Compose greeting
if [[ -n "$name" ]]; then
  printf 'Hello, %s! Current time: %s\n' "$name" "$ts"
else
  printf 'Hello! Current time: %s\n' "$ts"
fi
