import { useEffect, useState } from "react";

const useResize = () => {
  const [size, setSize] = useState(window.innerWidth);
  function checkSize() {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  });
  return { size };
};
export default useResize;
