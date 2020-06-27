import React, { useState, useEffect } from "react";
import Dialog from "../components/Dialog";

export function DialogPage(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h3>DialogPage</h3>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Dialog />}
    </div>
  );
}
