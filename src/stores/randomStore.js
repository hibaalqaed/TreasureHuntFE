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
      const response = await instance.get("/things/random");
      this.randoms = response.data;
    } catch (error) {
      console.error("randomStore -> fetchRandoms -> error", error);
    }
  };
}

const randomStore = new RandomStore();
randomStore.fetchRandom();

export default randomStore;
