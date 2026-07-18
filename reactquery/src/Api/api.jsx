import axios from "axios";
const api= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

export const fetchData = async(page) =>{
  const res= await api.get(`/posts?_start=${page}&_limit=3`);
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
export const deletePost = (id) =>{
    return api.delete(`/posts/${id}`)
}


