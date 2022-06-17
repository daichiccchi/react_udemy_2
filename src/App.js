import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.text);

  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false));
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>スイッチ</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
