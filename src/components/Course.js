import React, { useEffect, useState } from "react";
import styles from "./Courses.module.css";
const Course = ({ allProjects }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [count, setCount] = useState(0);

  const showPhotoPost = (index) => {
    setIsModalShow(true);
    setCount(index);
  };

  useEffect(() => {
    if (count >= allProjects.length) {
      setCount(0);
    } else if (count < 0) {
      setCount(allProjects.length - 1);
    }
  }, [count, allProjects]);

  return (
    <>
      {allProjects.map((item, index) => (
        <a key={item.id} href="#" className={styles.courses__projects_item}>
          <div>
            <img src={item.imgSrc} className={styles.courses_img} />
          </div>
          <div className={styles.courses__projects_item_bottom}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a
              href="#"
              className={styles.btn}
              onClick={() => showPhotoPost(index)}
            >
              Learn More
            </a>
          </div>
        </a>
      ))}
      <div
        className={
          isModalShow
            ? styles.courses__modal
            : styles.courses__modal + " " + styles.hidden
        }
        onClick={() => setIsModalShow(false)}
      >
        <div
          className={styles.courses__content}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className={styles.courses__content_img}
            src={allProjects[count]?.imgSrc}
          />
          <div className={styles.courses__content_title}>
            <p>Portfolio name</p>
          </div>
          <button
            className={styles.courses__close_btn}
            onClick={() => setIsModalShow(false)}
          >
            &#215;
          </button>
          <button
            className={styles.courses__btn_prev}
            onClick={() => setCount(count - 1)}
          >
            &#60;
          </button>
          <button
            className={styles.courses__btn_next}
            onClick={() => setCount(count + 1)}
          >
            &#62;
          </button>
        </div>
      </div>
    </>
  );
};

export default Course;
