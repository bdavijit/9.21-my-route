import { useEffect, useState } from "react";

const useBlogs = (SetDisplayBlog) => {
  const [blogs, SetBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.JSON").then(async (response) => {
      try {
        const data = await response.json();
        // console.log("response data?", data);
        SetBlogs(data);
        SetDisplayBlog(data.slice(0, 3));
      } catch (error) {
        console.log("Error happened here!");
        console.error(error);
      }
    });
  }, []);

  return [blogs, SetBlogs];
};
export default useBlogs;
