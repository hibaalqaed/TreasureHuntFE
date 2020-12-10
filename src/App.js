// Components
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";

import thingStore from "./stores/thingStore";

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
