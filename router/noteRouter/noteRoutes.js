const express = require("express");
const { tambahNote, ambilDataNote, ubahNote, hapusNote, ambilNoteID } = require("../../controller/note");

const noteRoutes = express();

noteRoutes.post("/note", tambahNote);
noteRoutes.get("/note", ambilDataNote);
noteRoutes.get("/note/:id", ambilNoteID);
noteRoutes.put("/note/:id", ubahNote);
noteRoutes.delete("/note/:id", hapusNote);

module.exports = noteRoutes;
