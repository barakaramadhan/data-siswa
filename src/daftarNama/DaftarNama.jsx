import { useState } from "react";
import { useImmer } from "use-immer";
import "./daftar.css";
export default function DaftarNama(){
    const [name, setName] = useState('');
    const [daftarNama, setDaftarNama] = useImmer([]);

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
        setDaftarNama((daftarNama) => {
            daftarNama.push(name);
        });
        setName('');
    }

  return (
  <div className="container">
    <div className="card">
      <h1 className="title">Daftar Nama</h1>

      <form className="form">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Masukkan nama..."
          className="input"
        />
        <button onClick={handleClick} className="btn">
          Add
        </button>
      </form>

      <h2 className="subtitle">List Nama</h2>

      <table className="table">
        <tbody>
          {daftarNama.map((name, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

    }
