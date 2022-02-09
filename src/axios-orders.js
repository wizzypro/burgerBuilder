import axios from "axios";
import _ from "dotenv";

const instance = axios.create({
  baseURL: "https://burger-builder-app-e5f3e-default-rtdb.firebaseio.com/",
});

export default instance;
