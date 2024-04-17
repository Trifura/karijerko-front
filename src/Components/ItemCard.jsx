import React, { useState } from "react";
import ItemCardInfo from "./ItemCardInfo";
import "./ItemCard.css";
import { CiBookmark } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";

function ItemCard() {
  const [selectedItem, setSelectedItem] = useState(null);

  const jobPosts = [
    {
      title:
        "Agent/ica za video identifikaciju na njemačkom jeziku (min. B1 razina)",
      company: "Media one d.o.o.",
      location: "Zagreb",
      description:
        "· svakodnevna komunikacija s novim korisnicima\n· provjeravanje identifikacijskih dokumenata putem video poziva\n· isključivo pozivi podrške korisnicima (nema prodajnih poziva).",
      postedDate: new Date("2024-04-06"),
    },
    {
      title: "Another Title",
      company: "Another Company",
      location: "Location 2",
      description: "Another Description",
      postedDate: new Date("2024-03-25"),
    },
    {
      title: "Yet Another Title",
      company: "Another Company",
      location: "Location 3",
      description: "Yet Another Description",
      postedDate: new Date("2024-03-18"),
    },
  ];

  const handleClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const timeDifference = (postedDate) => {
    const difference = new Date() - postedDate;
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    return `Objavljeno prije ${daysDifference} dana`;
  };

  return (
    <div>
      {jobPosts.map((post, index) => (
        <div key={index} className="job-post flex flex-row">
          <div
            className=" p-10 border-b border-solid sm:w-[600px] md:w-[300px] lg:w-[470px] "
            onClick={() => handleClick(index)}
          >
            <div className="width-3 flex justify-between">
              <div>
                <div>Company: {post.company}</div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(index)}
                >
                  Title: {post.title}
                </div>
              </div>
              <div className="">
                <CiBookmark className="bookmark-icon" />
                <GiCancel className="cancel-icon" />
              </div>
            </div>
            <div>Location: {post.location}</div>
            <div>{post.description}</div>
            <div className="bottom-0 left-0">
              {timeDifference(post.postedDate)}
            </div>
          </div>
          {selectedItem === index && <ItemCardInfo {...post} />}
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
