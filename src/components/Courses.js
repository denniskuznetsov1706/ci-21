import React, { useEffect, useMemo, useState } from "react";
import styles from "./Courses.module.css";
import AllProjects from "../store/DataStore";
import Course from "./Course";
import CoursesList from "./CoursesList";
const Courses = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [curentProject, setCurentProject] = useState("all");
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    setAllProjects(AllProjects);
  }, []);

  const handleClick = (e, index, type) => {
    setCurentProject(type);
    setIsActive(index)
  };

  const currentProjects = useMemo(() => {
    return allProjects.filter((project) => project.type === curentProject);
  }, [curentProject, allProjects]);
  return (
    <div className={styles.container}>
      <div className={styles.courses}>
        <h3>Portfolio</h3>
      </div>
      <section className={styles.courses__main}>
        <ul className={styles.courses__list}>
          <CoursesList isActive={isActive} handleClick={handleClick}/>
        </ul>
        <div className={styles.courses__projects}>
            {curentProject === 'all' ? <Course allProjects={AllProjects} /> : <Course allProjects={currentProjects} />}
        </div>
      </section>
    </div>
  );
};

export default Courses;
