# CampusBite

A responsive college canteen ordering app built with React, TypeScript, and Vite. Students can browse and filter the menu, customize items, manage a cart, choose a pickup slot, track order progress, cancel eligible orders, and leave feedback. Canteen staff get a separate workspace for order processing, menu availability and pricing, pickup capacity, sales, popular items, and feedback.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Verify a production build with `npm run build`.

## Demo access

Open **Sign in** and select **Student** or **Canteen staff**. Any non-empty ID and password of at least eight characters works in this local demo. No password is stored. Choose staff to open the admin workspace; student checkout and staff actions share the same browser-local data.

## Project notes

- Sample menu data and domain types are in `src/data.ts`.
- `src/CampusBite.tsx` contains the student and staff workflows.
- `src/services/auth.ts` is the replaceable authentication adapter boundary.
- Menu, cart, orders, user session, and pickup capacity are stored in browser `localStorage` for this project demo.
- Authentication, payments, order synchronization across devices, and persistent server storage are not implemented. Replace the demo adapter and local persistence with backend services before real deployment.
