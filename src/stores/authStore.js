import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  user = null;
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    console.log("checkForToken -> token", token);
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      console.log("authStore -> signun -> res.data", res.data);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      console.log("authStore -> signin -> res.data", res.data);
      this.setUser(res.data.token);
    } catch (error) {
      //ctr+opt+l to console log
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
