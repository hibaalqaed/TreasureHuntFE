import React from "react";

const RandomList = ({ things }) => {
  const randomList = things.map((e) => <p>{e.name}</p>);

  return (
    <div>
      <p>This is random page</p>
      <p>{randomList}</p>
    </div>
  );
};

export default RandomList;
