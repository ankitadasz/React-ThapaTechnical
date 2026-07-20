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

export const updatePost = (id) =>{
    return api.patch(`/posts/${id}`,{title:"I have Updated"})
}
//infinite scrolling
export const fetchUsers= async({pageParam=1}) =>{
    try {
        const res=await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`)
        
        // console.log(res);
        // console.log(res.data)
        
        return res.data;
        
    
    }
    
    catch (error) {
        console.log(error);
        
    }

}
