import { useState } from "react";

export default function TaskForm({onSubmit}) {
  const [item, setItem] = useState("");

  function hadleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input value={item} onChange={hadleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
