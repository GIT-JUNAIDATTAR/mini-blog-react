import { Link } from "react-router-dom";

function BlogCard({ blog }) {


  return (
    
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div
        className="card h-100 shadow-lg border-0"
        style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
        }}
      >
       

        {/* Image */}
        <img
          src={`https://mcpbe.mangochairs.com${blog.image}`}
          className="card-img-top"
          alt={blog.title}
          style={{ height: "200px", objectFit: "contain" }}
        />

        {/* Body */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary fw-bold">
            {blog.title}
          </h5>

          <p className="card-text text-muted">
            {blog.short_description}
          </p>

          <Link
            to={`/blog/${blog.slug}`}
            className="btn btn-gradient mt-auto"
          >
            Read More <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
