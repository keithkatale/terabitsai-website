#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f .env.local ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env.local
  set +a
fi

: "${NEXT_PUBLIC_POSTHOG_KEY:?Set NEXT_PUBLIC_POSTHOG_KEY in .env.local}"
: "${NEXT_PUBLIC_POSTHOG_HOST:?Set NEXT_PUBLIC_POSTHOG_HOST in .env.local}"

PROJECT_ID="${GCP_PROJECT_ID:-project-938c4883-348c-4c82-aa4}"
REGION="${GCP_REGION:-us-central1}"
SERVICE="${GCP_SERVICE:-terabits-ai-website}"

gcloud run deploy "$SERVICE" \
  --source . \
  --region "$REGION" \
  --project "$PROJECT_ID" \
  --allow-unauthenticated \
  --set-build-env-vars "NEXT_PUBLIC_POSTHOG_KEY=${NEXT_PUBLIC_POSTHOG_KEY},NEXT_PUBLIC_POSTHOG_HOST=${NEXT_PUBLIC_POSTHOG_HOST}" \
  --set-env-vars "NODE_ENV=production"

echo "Deployed: https://${SERVICE}-96333434256.${REGION}.run.app"
