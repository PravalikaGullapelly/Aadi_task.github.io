/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Simple Calculator using HTML, CSS, and JavaScript",
    description:
      "This project is a basic calculator built with HTML, CSS, and JavaScript that performs simple arithmetic operations such as addition, subtraction, multiplication, and division. The interface is designed to be clean and user-friendly, featuring clickable buttons for input and a display screen for results. JavaScript handles the core functionality, while HTML structures the layout, and CSS provides styling for an intuitive user experience.",
    url: "https://github.com/PravalikaGullapelly/OIBSIP_TASK1",
  },
  {
    title: "To-Do List Application using HTML, CSS, and JavaScript",
    description:
      "This project is a simple and interactive To-Do List app developed with HTML, CSS, and JavaScript. Users can add, delete, and mark tasks as completed in an intuitive interface. The app features a dynamic list that updates in real-time, allowing users to efficiently manage their tasks. JavaScript handles task management and interactions, while HTML provides the structure and CSS enhances the overall visual design, making the app user-friendly and responsive.",
    url: "https://github.com/PravalikaGullapelly/OIBSIP_TASK3",
  },
  {
    title: "Credit-Card-Fraud-Detection-Using-Logistic-Regression",
    description:
      "Credit Card Fraud Detection project aims to develop a machine learning model to identify fraudulent transactions in credit card data. Given the significant rise in online transactions, detecting fraud is crucial for financial institutions to mitigate risks and protect customers.",
    url: "https://github.com/PravalikaGullapelly/Credit-Card-Fraud-Detection-Using-Logistic-Regression",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
