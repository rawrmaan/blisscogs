# Blisscogs for Discogs
----------------------------------

Organize your Discogs collection into shelves! Features:
- Create shelves with your own custom names
- Drag and drop your releases into those shelves
- Rename the shelves, delete them, or remove releases from them
- No login required, app keeps your shelves saved between sessions

Live demo: http://blisscogs.herokuapp.com/

Prerequisites
----------------------------------
* Typescript Typings Manager `npm install -g typings`

Installation
----------------------------------
`npm install && typings install`

Running the Dev Server
----------------------------------
Add a file called `.env` and set your Discogs key and secret as follows:

```
DISCOGS_KEY=123abc
DISCOGS_SECRET=456def
```

After setting up the project, type `npm start` to start the Express dev server.

Compiling for production
----------------------------------
To compile the Javascript bundle for production, use `npm run build`.
