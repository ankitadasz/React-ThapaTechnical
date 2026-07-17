import axios from "axios";
const api= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

export const fetchData = async() =>{
  const res= await api.get("/postsb");
  return res.status === 200 ? res.data : [];
}


