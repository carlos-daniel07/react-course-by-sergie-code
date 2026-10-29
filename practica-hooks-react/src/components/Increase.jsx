import React from "react";
const Increase = React.memo(({ increase }) => {
  console.log("Me estoy redibujando");
  return (
    <button
      onClick={() => {
        increase(5);
      }}
    >
      +1
    </button>
  );
});

export default Increase;
