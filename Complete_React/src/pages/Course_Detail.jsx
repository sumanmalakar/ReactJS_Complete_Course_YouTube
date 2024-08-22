import React from "react";
import { useParams, Link,useLocation } from "react-router-dom";

const Course_Detail = () => {
  // console.log(useParams())
  // console.log(useLocation())
  const arr = [
    {
      id: "MERN001",
      course_name: "MERN_Stack",
      price: 10000,
      duration: "5 months",
    },
    {
      id: "JAVA002",
      course_name: "Java_Full_stack",
      price: 15000,
      duration: "5 months",
    },
    {
      id: "PY0102",
      course_name: "Python_Full_Stack",
      price: 5000,
      duration: "5 months",
    },
    {
      id: "REACT99",
      course_name: "React.JS",
      price: 25000,
      duration: "5 months",
    },
  ];
  const { id } = useParams();
  const location = useLocation();

  const course_deatil = arr.filter((data) => data.id == id);
  // console.log(course_deatil);
  return (
    <>
      <div>
        <h1>Course Id = {id}</h1>
        <h2>Course Name = {course_deatil[0].course_name}</h2>

        {location.pathname != "/courses/PY0102" && (
          <>
            <h2>Course Dur. = {course_deatil[0].duration}</h2>
            <h2>Course Price = {course_deatil[0].price}</h2>
          </>
        )}
      </div>
      <button>
        <Link
          to={"/courses"}
          style={{ textDecoration: "none", color: "black" }}
        >
          All Course
        </Link>
      </button>
    </>
  );
};

export default Course_Detail;
