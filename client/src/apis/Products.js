import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3001/products",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});