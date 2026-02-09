import DataSiswa from "./DataSiswa";

export default function DataTable({ siswa, onChange, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {siswa.map((s, index) => (
          <DataSiswa
            key={s.id}
            siswa={s}
            nomor={index + 1} 
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
