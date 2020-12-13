import { observer } from "mobx-react";
import React from "react";

const TreasureList = ({ things }) => {
  const treasureList = things.map((e) => <p>{e.name}</p>);

  return (
    <div>
      <p>This is the treasure list:</p>
      <p>{treasureList}</p>
    </div>
  );
};

export default observer(TreasureList);
