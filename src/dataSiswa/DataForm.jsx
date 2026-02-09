import { useState } from "react";

export default function DataForm({ onAdd }) {
  const [form, setForm] = useState({
    nama: "",
    umur: "",
    kelas: "",
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form);
    setForm({ nama: "", umur: "", kelas: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Masukan Nama" name="nama" value={form.nama} onChange={handleChange} />
      <input type="number"placeholder="Masukan Umur" name="umur" value={form.umur} onChange={handleChange} />
      <input type="text" placeholder="Masukan Kelas" name="kelas" value={form.kelas} onChange={handleChange} />
      <button type="submit">Tambah</button>
    </form>
  );
}
