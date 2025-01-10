import React, { useState, useEffect } from "react";

export default function GridBlink() {
  const [storeTheclickBoxNumber, setStoreTheclickBoxNumber] = useState<number[]>(
    []
  );
  const boxs = new Array(9).fill(0); // Total boxes in the grid
  const maxSelected = 5; // Maximum number of selections allowed

  useEffect(() => {
    if (storeTheclickBoxNumber.length === maxSelected) {
      const interval = setInterval(() => {
        setStoreTheclickBoxNumber((prev) => {
          if (prev.length > 0) {
            return prev.slice(0,-1); // Remove the first (oldest) item
          } else {
            clearInterval(interval); // Clear interval once all items are removed
            return prev;
          }
        });
      }, 500); // Adjust the time interval for deselection speed
    }
  }, [storeTheclickBoxNumber]);

  const handleBoxClick = (index: number) => {
    if (storeTheclickBoxNumber.includes(index)) {
      // Deselect the clicked box
      setStoreTheclickBoxNumber((prev) =>
        prev?.filter((item) => item !== index)
      );
    } else {
      // Select the clicked box
      setStoreTheclickBoxNumber((prev) => [...prev, index]);
    }
  };

  return (
    <div className="h-screen bg-black text-white flex justify-center items-center">
      <div className="gridwrapper grid grid-cols-3">
        {boxs.map((_, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`w-[100px] ${
              storeTheclickBoxNumber.includes(index) ? "bg-slate-500" : ""
            } h-[100px] border cursor-pointer text-black flex justify-center items-center`}
          ></div>
        ))}
      </div>
    </div>
  );
}
