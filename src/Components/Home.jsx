import React, { useState, useEffect } from "react";

import Typist from "react-typist";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, [count]);
  const text = [
    "Let today be the start of something new.",
    "Great",
    "Astonishing",
    "Usable",
    "Profitable"
  ];
  return (
    <div>
      {count && <Typist></Typist>}

      <img
        width="200"
        height="300"
        style={{ marginLeft: "400px" }}
        src={
          "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
        }
      />
    </div>
  );
};
export default Home;
