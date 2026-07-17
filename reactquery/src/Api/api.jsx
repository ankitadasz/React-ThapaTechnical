import axios from "axios";
const api= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

export const fetchData = async() =>{
  const res= await api.get("/posts");
  return res.status === 200 ? res.data : [];
}
export const FetchIndvData = async (id) =>{
     try {
           const res= await api.get(`/posts/${id}`)
           console.log(res)
            return res.status === 200 ? res.data : [];
            
        } catch (error) {
            console.log(error)
            
        }
      
   
}


