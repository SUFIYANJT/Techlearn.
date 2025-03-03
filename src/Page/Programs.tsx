import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  link: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://techlearn-server.onrender.com/courses/")
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-muted">Loading courses...</p>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Available Courses</h1>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted">{course.description}</p>
                <p className="text-success fw-bold">₹{course.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    console.log(course);
                    //window.location.href = course.link; //
                    }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
