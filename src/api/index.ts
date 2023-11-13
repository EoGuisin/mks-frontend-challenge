import axios from "axios";

export async function fetchProducts() {
  return axios
    .get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
    .then((response) => response.data);
}

