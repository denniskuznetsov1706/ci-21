import React from "react";
import styles from "./Pricing.module.css";
const Pricing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pricing}>
        <h3>Pricing</h3>
      </div>
      <section className={styles.pricing__section}>
        <h4>Out best plans</h4>
        <div className={styles.pricing__items}>
          <div className={styles.pricing__item}>
            <div className={styles.pricing__header}>
              <h3>Basic</h3>
            </div>
            <div className={styles.pricing_cost}>
              <h6>$15.00 / Year</h6>
            </div>
            <div className={styles.pricing__list}>
              <ul>
                <li>Responsive Design</li>
                <li>Bootstrap Design</li>
                <li>Unlimited Support</li>
                <li>Free Trial version</li>
                <li>HTML5 CSS3 jQuery</li>
              </ul>
            </div>
            <div className={styles.pricing__action}>
              <a href="#" className={styles.btn}>Get Now</a>
            </div>
          </div>
          <div className={styles.pricing__item}>
            <div className={styles.pricing__header}>
              <h3>Standard</h3>
            </div>
            <div className={styles.pricing_cost}>
              <h6>$20.00 / Year</h6>
            </div>
            <div className={styles.pricing__list}>
              <ul>
                <li>Responsive Design</li>
                <li>Bootstrap Design</li>
                <li>Unlimited Support</li>
                <li>Free Trial version</li>
                <li>HTML5 CSS3 jQuery</li>
              </ul>
            </div>
            <div className={styles.pricing__action}>
              <a href="#" className={styles.btn}>Get Now</a>
            </div>
          </div>
          <div className={styles.pricing__item}>
            <div className={styles.pricing__header}>
              <h3>Advanced</h3>
            </div>
            <div className={styles.pricing_cost}>
              <h6>$15.00 / Year</h6>
            </div>
            <div className={styles.pricing__list}>
              <ul>
                <li>Responsive Design</li>
                <li>Bootstrap Design</li>
                <li>Unlimited Support</li>
                <li>Free Trial version</li>
                <li>HTML5 CSS3 jQuery</li>
              </ul>
            </div>
            <div className={styles.pricing__action}>
              <a href="#" className={styles.btn}>Get Now</a>
            </div>
          </div>
          <div className={styles.pricing__item}>
            <div className={styles.pricing__header}>
              <h3>Mighty</h3>
            </div>
            <div className={styles.pricing_cost}>
              <h6>$15.00 / Year</h6>
            </div>
            <div className={styles.pricing__list}>
              <ul>
                <li>Responsive Design</li>
                <li>Bootstrap Design</li>
                <li>Unlimited Support</li>
                <li>Free Trial version</li>
                <li>HTML5 CSS3 jQuery</li>
              </ul>
            </div>
            <div className={styles.pricing__action}>
              <a href="#" className={styles.btn}>Get Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
