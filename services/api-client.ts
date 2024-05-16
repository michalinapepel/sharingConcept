import axios from "axios";

//THIS IS THE BACKEND URL, WHERE JSON FILE IS STORED
export default axios.create({
  baseURL: "http://localhost:3000",
});
