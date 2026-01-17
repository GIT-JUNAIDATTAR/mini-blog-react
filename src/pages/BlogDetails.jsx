import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://mcpbe.mangochairs.com/frontend/blogs/?slug=${slug}`)
      .then(res => res.json())
      .then(data => setBlog(data));
  }, [slug]);

  if (!blog) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading blog...</p>
      </div>
    );
  }

  return (
   <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-10 col-sm-12">

          <div className="card shadow-lg border-0 rounded-4">
            <img
              src= {`https://mcpbe.mangochairs.com${blog.image}`}
              alt={blog.image_alternate_text}
              className="card-img-top rounded-top-4"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />

            <div className="card-body p-4 p-md-5">
              <div className="d-flex flex-wrap justify-content-between mb-3">
                <span className="badge bg-primary fs-6">
                  {blog.product_category_name}
                </span>
                <span className="text-muted">{blog.publish_date}</span>
              </div>

              <h1 className="fw-bold mb-3">{blog.title}</h1>
              <p className="text-muted mb-4">By <strong>{blog.author}</strong></p>

              <div
                className="blog-content"
                style={{ lineHeight: "1.8", fontSize: "16px" }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
