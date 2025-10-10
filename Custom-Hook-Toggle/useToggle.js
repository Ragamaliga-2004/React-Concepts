import { useState } from "react";

function useToggle(initialState = false) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  return { on, toggle };
}

export default useToggle;
