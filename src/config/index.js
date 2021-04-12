import axios from "axios";

const token = localStorage.getItem("token");
const url = "http://localhost:5000";
export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
