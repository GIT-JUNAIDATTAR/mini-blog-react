import { useState } from "react";
import { useEffect } from "react";
import BlogCard from "../components/BlogCard";

function BlogList() {

  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch('https://mcpbe.mangochairs.com/frontend/blogs/?page=1&page_size=12')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setblogs(data.blogs);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
