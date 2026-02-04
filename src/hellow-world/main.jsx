import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HellowWorld from "./HellowWorld";
import Container from "../container/Container";
import Table from "../Tabel/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import ToolBar from "../button/ToolBar";
import SeacrhForm from "../Form/SearchForm";
import SayHello from "../Form/SayHello";
import Counter from "../Form/Counter";
import "../Card/Card.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HellowWorld />
      <Table />
      <AlertButton
        text="Klik saya"
        message="Selamat datang di pondok tahfizh plus abudzar"
      />
      <MyButton text="Hancurkan" onSmash={() => alert("Button hancur")} />
      <MyButton text="Tekan" onSmash={() => alert("Button tertekan")} />

      <ToolBar
        onClick={(e) => {
          e.stopPropagation();
          alert("Toolbar clicked");
        }}
      />

      <SeacrhForm />
      <SayHello />
      <Counter />
    </Container>
  </StrictMode>,
);
