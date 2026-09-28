# CampusBite Workspace Guidance

- [x] Clarify project requirements: React, TypeScript, Vite, and a responsive canteen ordering app.
- [x] Scaffold the project in the current workspace.
- [x] Implement student ordering, checkout, tracking, and staff management flows.
- [x] Keep demo authentication behind a replaceable adapter; never persist passwords.
- [x] Install the app icon dependency and document setup in `README.md`.
- [x] Compile and validate the application with the production build.
- [x] Provide local development run instructions.

## Project conventions

- Keep user-facing app changes in `src/CampusBite.tsx` and visual styles in `src/campusbite.css`.
- Keep sample domain data and types in `src/data.ts`.
- Use `src/services/auth.ts` as the seam for replacing demo authentication with a backend provider.
- Current persistence is browser-local and is for demonstration only. Do not treat it as secure or multi-user production storage.
- Run `npm run build` after application changes.
