import { useEffect, useState } from "react";
import { addPost, updateData } from "../api/PostApi";

export const Form = ({ value, setValue, updateDataApi, setUpdateData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  let isEMpty = Object.keys(updateDataApi).length === 0;

  const addPostData = async () => {
    const res = await addPost(addData);
    console.log(res);

    if (res.status === 201 || res.status === 200) {
      setValue((prev) => [...prev, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  // UPDATE DATA
  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      console.log(res);
      if(res.status === 200){
         setValue((prev) => {
        return prev.map((currelem) => {
          return currelem.id === res.data.id ? res.data : currelem;
           
        });
      });
      setAddData({ title: "", body: "" });
      setUpdateData({})
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "ADD") {
      addPostData();
    } else if (action === "EDIT") {
      updatePostData();
    }
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
        <button type="submit" className="add" value={isEMpty ? "ADD" : "EDIT"}>
          {isEMpty ? "ADD" : "EDIT"}
        </button>
      </div>
    </form>
  );
};
