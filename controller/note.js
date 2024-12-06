const { query } = require("../Database/db");

const tambahNote = async (req, res) => {
  const { title, datetime, note } = req.body;
  try {
    await query(`INSERT INTO notes (title, datetime, note) VALUES(?, ?, ?)`, [title, datetime, note]);
    return res.status(200).json({
      msg: "penambahan notes berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log("Penamahan notes gagal", error);
  }
};

const ambilDataNote = async (req, res) => {
  try {
    const result = await query(`SELECT * FROM notes`);
    return res.status(200).json({ msg: "ambil data berhasil", data: result });
  } catch (error) {
    console.log("ambil data gagall", error);
  }
};

const ubahNote = async (req, res) => {
  const { title, datetime, note } = req.body;
  const { id } = req.params;
  try {
    await query(`UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?`, [title, datetime, note, id]);
    return res.status(200).json({
      msg: "ubah data note berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log("ubah note gagal", error);
  }
};

const hapusNote = async (req, res) => {
  const { id } = req.params;
  try {
    await query(`DELETE FROM notes WHERE id = ?`, [id]);
    return res.status(200).json({ msg: "hapus note berhasil" });
  } catch (error) {
    console.log("Hapus note gagal", error);
  }
};

const ambilNoteID = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(`SELECT * FROM notes WHERE id = ?`, [id]);
    return res.status(200).json({ msg: "pengambilan data ID berhasil", data: result });
  } catch (error) {
    console.log("ambil data gagal", error);
  }
};

module.exports = {
  tambahNote,
  ambilDataNote,
  ubahNote,
  hapusNote,
  ambilNoteID,
};
