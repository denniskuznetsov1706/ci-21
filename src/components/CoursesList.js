import React from "react";
import styles from "./Courses.module.css";
const CoursesList = ({ isActive, handleClick }) => {
  const CoursesListItem = [
    { title: "All", type: "all" },
    { title: "Web design", type: "web" },
    { title: "Mobile App", type: "mobile" },
    { title: "UI design", type: "design" },
  ];
  return (
    <>
      {CoursesListItem.map((course, index) => (
        <li
          key={index}
          className={
            isActive === index
              ? styles.courses__list_item + " " + styles.active
              : styles.courses__list_item
          }
          onClick={(e) => handleClick(e, index, course.type)}
        >
          <a
            href="#"
            className={styles.courses__list_link}
          >
            {course.title}
          </a>
        </li>
      ))}
    </>
  );
};

export default CoursesList;
