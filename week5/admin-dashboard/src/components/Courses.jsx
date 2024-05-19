import { useEffect, useState } from "react";

export default function Courses() {
  //get all the contents only once
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses,", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
      });
    });
  }, []);
  return <div>{courses}</div>;
}
