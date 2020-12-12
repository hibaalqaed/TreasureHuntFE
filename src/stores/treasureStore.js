import { makeAutoObservable } from "mobx";
import instance from "./instance";

class TreasureStore {
  treasurs = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTreasures = async () => {
    try {
      console.log("fetching treasure..");
      const response = await instance.get("/treasure");
      this.treasurs = response.data;
    } catch (error) {
      console.error("treasurStore -> fetchTreasures -> error", error);
    }
  };

  // createThings = async (newthing) => {
  //   try {
  //     const res = await instance.post("/", newthing);
  //     this.thins.push(res.data);
  //   } catch (error) {
  //     console.error("randomStore -> createThings -> error", error);
  //   }
  // };
}

const treasureStore = new TreasureStore();
treasureStore.fetchTreasures();

export default treasureStore;
