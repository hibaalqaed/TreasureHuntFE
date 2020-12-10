// Buttons
import RandomButton from "./buttons/RandomButton";
import TreasureButton from "./buttons/TreasureButton";

const Home = () => {
  return (
    <div>
      <p>Welcome to the Tresure Hunt!</p>
      <RandomButton />
      <TreasureButton />
    </div>
  );
};

export default Home;
