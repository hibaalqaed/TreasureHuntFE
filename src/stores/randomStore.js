import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RandomStore {
  randoms = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRandom = async () => {
    try {
      console.log("fetching random..");
      const response = await instance.get("/random");
      this.randoms = response.data;
    } catch (error) {
      console.error("randomStore -> fetchRandoms -> error", error);
    }
  };
  // move this to other store

  // fetchTreasures = async () => {
  //   try {
  //     console.log("fetching treasure..");
  //     const response = await instance.get("/treasure");
  //     this.things = response.data;
  //   } catch (error) {
  //     console.error("randomStore -> fetchTreasures -> error", error);
  //   }
  // };

  //   createThings = async (newthing) => {
  //     try {
  //       const res = await instance.post("/", newthing);
  //       this.thins.push(res.data);
  //     } catch (error) {
  //       console.error("randomStore -> createThings -> error", error);
  //     }
  //   };
}

const randomStore = new RandomStore();
// randomStore.fetchTreasures();
randomStore.fetchRandom();

export default randomStore;
