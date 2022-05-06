import axios from "axios";

const BASE_URL = "https://floating-eyrie-08969.herokuapp.com/api";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("tg_token")}` || "",
  },
});
