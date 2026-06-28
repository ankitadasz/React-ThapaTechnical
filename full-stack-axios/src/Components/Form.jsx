import { useState } from "react";
import { addPost } from "../api/PostApi";

export const Form = ({value,setValue}) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  const addPostData = async () =>{
   const res= await addPost(addData);
   console.log(res);
   
   if (res.status === 201 || res.status === 200){
    setValue((prev)=>[...prev,res.data])
    setAddData({title:"",body:""});
   }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };
  
  const handleTitle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handlePost = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          className="input-title"
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleTitle}
        />
      </div>
      <div>
        <label htmlFor="title"></label>
        <input
          className="input-post"
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add Post"
          value={addData.body}
          onChange={handlePost}
        />
      </div>
      <div>
        <button type="submit" className="add">
          ADD
        </button>
      </div>
    </form>
  );
};
