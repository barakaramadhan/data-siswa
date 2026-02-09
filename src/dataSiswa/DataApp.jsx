import { useImmerReducer } from "use-immer";
import DataForm from "./DataForm";
import DataTable from "./DataTable";

let id = 1;

const initialSiswa = [
  { id: id++, nama: "Andi", umur: 16, kelas: "X RPL" },
  { id: id++, nama: "Budi", umur: 17, kelas: "XI RPL" },
  { id: id++, nama: "Caca", umur: 16, kelas: "X RPL" },
  { id: id++, nama: "Deni", umur: 18, kelas: "XII RPL" },
];

function siswaReducer(siswa, action) {
  switch (action.type) {
    case "ADD_SISWA":
      siswa.push({
        id: id++,
        nama: action.nama,
        umur: action.umur,
        kelas: action.kelas,
      });
      break;

    case "CHANGE_SISWA": {
      const data = siswa.find((s) => s.id === action.id);
      if (data) {
        data.nama = action.nama;
        data.umur = action.umur;
        data.kelas = action.kelas;
      }
      break;
    }

    case "DELETE_SISWA": {
      const index = siswa.findIndex((s) => s.id === action.id);
      if (index !== -1) siswa.splice(index, 1);
      break;
    }

    default:
      break;
  }

  return siswa;
}

export default function SiswaApp() {
  const [siswa, dispatch] = useImmerReducer(siswaReducer, initialSiswa);

  function handleAddSiswa(data) {
    dispatch({ type: "ADD_SISWA", ...data });
  }

  function handleChangeSiswa(data) {
    dispatch({ type: "CHANGE_SISWA", ...data });
  }

  function handleDeleteSiswa(id) {
    dispatch({ type: "DELETE_SISWA", id });
  }

  return (
    <div className="app-container">
      <h1>Data Penerimaan Siswa</h1>

      <DataForm onAdd={handleAddSiswa} />

      <DataTable
        siswa={siswa}
        onChange={handleChangeSiswa}
        onDelete={handleDeleteSiswa}
      />
    </div>
  );
}
