import "./ActiveToggle.css";
import { useState } from "react";

function ActiveToggle() {
  const [active, setActive] = useState(false);

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button type="button" onClick={() => setActive(!active)}>
        {active ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}

export default ActiveToggle;
