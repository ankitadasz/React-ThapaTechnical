import { useEffect } from "react";
import { useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";

export const Posts = () => {
  const [value, setValue] = useState([]);
  const removeItem = async (id) => {
    try {
        const res = await deletePost(id);
        if(res.status === 200){
            const newUpdatedPosts = value.filter((elem)=>{
                return  elem.id != id;
            })
            setValue(newUpdatedPosts);
        }
        else{
            console.log("Failed to delete the post:",res.status)
        }

        
    } catch (error) {
        console.log(error);
        
    }
  };

  const getPostData = async () => {
    try {
      const data = await getPost();
      console.log(data);
      setValue(data.data);
    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <ul className="box-container">
      {value.map((item,index) => {
        const { id, title, body } = item;
        return (
          <li key={item.id} className="box">
            <p>
              {index+1}
              {"."}
            </p>
            <h2>
              {"Tittle: "}
              {title}
            </h2>
            <p>
              {"News: "}
              {body}
            </p>
            <ul className="button-container">
              <button className="edit">EDIT</button>
              <button className="delete" onClick={() => removeItem(id)}>
                DELETE
              </button>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
