import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent/header";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./portfolio.scss";

const portfolioData = [
  {
    id: 2,
    name: "PCEE",
    image: ImageOne,
    link: "https://pcee-dash2.vercel.app/",
  },
  {
    id: 2,
    name: "Olympier",
    link: "https://olympierv2.vercel.app/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "My Portfolio",
    image: ImageThree,
    link: "https://dominic-portfolio-kappa.vercel.app/",
  },
  {
    id: 3,
    name: "Shepard Website",
    image: ImageFour,
    link: "https://shepard-one.vercel.app/",
  },
  {
    id: 2,
    name: "PCEE LandingPage",
    image: ImageFive,
    link: "https://pceefrontend.vercel.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const handleVisitLink = (link) => {
    window.location.href = link;
  };

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => handleVisitLink(item.link)}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
