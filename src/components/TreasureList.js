import React from "react";

const TreasureList = ({ things }) => {
  const treasureList = things.map((e) => <p>{e.name}</p>);

  return (
    <div>
      <p>This is treasure page</p>
      <p>{treasureList}</p>
    </div>
  );
};

export default TreasureList;
