## Folio

- An offline-first, cross-platform e-reader for EPUBs and PDFs. Read anywhere, sync when online, and keep full control over your books and storage.

Why Folio?
Most reading apps depend too much on an internet connection or lock your files into proprietary formats. Folio is built local-first:

Instant & Offline: Your library, notes, and reading position live right on your device. Everything works seamlessly without an internet connection.

Background Sync: When you go online, your progress, highlights, and library metadata sync across all your devices through Supabase.

Cross-Platform: Built to run as a web app, a native Windows desktop app (via Tauri), and an Android app (via Capacitor).

Storage Control: Keep large book files purely local or upload them to cloud storage—you choose what syncs.

Tech Stack
Frontend: React, TypeScript, Vite

UI & Components: Tailwind CSS, shadcn/ui, Lucide Icons

Local Storage: Dexie.js (IndexedDB)

Backend & Cloud Services: Supabase (Auth, PostgreSQL with Row-Level Security, Storage)

Rendering Engines: epub.js for EPUBs, React-PDF for PDFs

Native Wrappers: Tauri for Windows, Capacitor for Android

How Sync Works
The local IndexedDB database is the main source of truth for the app interface. When you make changes—like adding a highlight or updating reading progress—the app updates locally first and places the update into a background sync queue.

Plaintext
+-------------------------------------------------------------------+
|                           YOUR DEVICE                             |
|                                                                   |
|   React App  <------ Reads / Writes ------>  Dexie.js (IndexedDB) |
|                                                      |            |
|                                            Appends to Outbox      |
|                                                      v            |
|                                                Sync Queue         |
+----------------------------------------------------|--------------+
                                                     |
                                         Pushes changes when online
                                                     v
+-------------------------------------------------------------------+
|                          SUPABASE CLOUD                           |
|                                                                   |
|  - Auth (Google & Discord OAuth)                                  |
|  - Database (PostgreSQL with RLS)                                 |
|  - Storage (Book files & covers)                                  |
+-------------------------------------------------------------------+