import { useState, useContext } from "react";
import { DataDispatchContext } from "./DataContext";

export default function DataForm() {
  const dispatch = useContext(DataDispatchContext);

  const [form, setForm] = useState({
    nama: "",
    umur: "",
    kelas: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_SISWA",
      nama: form.nama,
      umur: form.umur,
      kelas: form.kelas,
    });

    setForm({ nama: "", umur: "", kelas: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Masukan Nama"
        name="nama"
        value={form.nama}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Masukan Umur"
        name="umur"
        value={form.umur}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Masukan Kelas"
        name="kelas"
        value={form.kelas}
        onChange={handleChange}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}
