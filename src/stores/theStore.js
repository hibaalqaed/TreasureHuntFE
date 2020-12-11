import { makeAutoObservable } from "mobx";
import instance from "./instance";

class TheStore {
  things = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRandoms = async () => {
    try {
      const response = await instance.get("/random");
      this.things = response.data;
    } catch (error) {
      console.error("TheStore -> fetchRandoms -> error", error);
    }
  };

  fetchTreasures = async () => {
    try {
      const response = await instance.get("/treasure");
      this.things = response.data;
    } catch (error) {
      console.error("TheStore -> fetchTreasures -> error", error);
    }
  };

  createThings = async (newthing) => {
    try {
      const res = await instance.post("/", newthing);
      this.thins.push(res.data);
    } catch (error) {
      console.error("TheStore -> createThings -> error", error);
    }
  };
}

const theStore = new TheStore();
theStore.fetchRandoms();
theStore.fetchTreasures();

export default theStore;
