# Industrial Asset Management Web

A React operations dashboard for managing industrial equipment across its
complete lifecycle: inventory, inspections, dispatch, returns, customers,
documents, and realtime status updates.

## Capabilities

- Equipment inventory with operational state and location tracking.
- Digital inspection records and PDF document views.
- Dispatch and return workflows with attached delivery documents.
- Customer, model, image, and user administration.
- Realtime updates through Socket.IO.
- Spreadsheet and PDF exports for operational reporting.
- Role-aware navigation for administrators and operators.

## Architecture

```text
React UI -> Redux Toolkit state -> REST API
                              -> Socket.IO events
                              -> presigned object-storage uploads
```

The browser never receives cloud credentials. Attachments are uploaded through
short-lived presigned URLs issued by the companion API.

## Requirements

- Node.js 18 or newer
- The `industrial-asset-management-api` service

## Configuration

Copy `.env.example` to `.env.local` and point the app to your API:

```env
REACT_APP_API_URL=http://localhost:3000
```

## Development

```bash
npm install
PORT=3001 npm start
```

## Validate

```bash
npm test -- --watchAll=false
npm run build
```

This repository contains no production credentials or customer datasets.
