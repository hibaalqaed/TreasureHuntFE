import React from "react";

const RandomList = ({ things }) => {
  const randomList = things.map((e) => <p>{e.name}</p>);

  return (
    <div>
      <p>This is the random list:</p>
      <p>{randomList}</p>
    </div>
  );
};

export default RandomList;
