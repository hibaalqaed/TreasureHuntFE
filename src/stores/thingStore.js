import { makeAutoObservable } from "mobx";
import axios from "axios";

class ThingStore {
  constructor() {
    makeAutoObservable(this);
  }

  fetchThings = async () => {
    try {
      const response = await axios.get("http://localhost:8000/things");
      this.things = response.data;
    } catch (error) {
      console.error("ThingStore -> fetchThings -> error", error);
    }
  };
}

const thingStore = new ThingStore();
thingStore.fetchThings();

export default thingStore;
