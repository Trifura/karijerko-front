import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ItemCard.css";
import { Link } from "react-router-dom";

function ItemCard({ onJobSelect }) {
  const [jobPosts, setJobPosts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://karijerko-api-qo5qt47cea-ez.a.run.app/job-ads/")
      .then((response) => {
        setJobPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch job postings. Please try again later.");
      });
  }, []);

  const handleClick = (event, index) => {
    event.stopPropagation(); // Prevents event bubbling up to parent elements
    const postId = jobPosts[index].id;

    // Toggle selection: if the current selected item is clicked again, deselect it
    if (postId === selectedItem) {
      setSelectedItem(null); // Deselect item
      onJobSelect(null); // Clear the job details panel
    } else {
      setSelectedItem(postId); // Select new item
      onJobSelect(postId); // Display the new job details
    }
  };

  const timeDifference = (postedDate) => {
    const difference = new Date() - new Date(postedDate);
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    return `Objavljeno prije ${daysDifference} dana`;
  };

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      {jobPosts.map((post, index) => (
        <div
          style={{ cursor: "pointer" }}
          key={index}
          className="job-post flex flex-row relative"
          onClick={(e) => handleClick(e, index)}
        >
          <div className="p-10 border-b border-solid sm:w-[600px] md:w-[320px] lg:w-[500px]">
            <div className="flex justify-between">
              <div>
                <div className="text-lg font-bold">{post.title}</div>
                <div className="text-sm">{post.company}</div>
              </div>
            </div>
            <div className="text-xs">{post.address}</div>
            <div className="text-[#58CC02] p-2 text-sm">
              {post.payFixed}€ po satu
            </div>
            <div className="text-sm p-1">{post.description}</div>
            <div className="absolute bottom-0 left-0 text-xs text-[#AFAFAF] p-2">
              {timeDifference(post.createdAt)}
            </div>
            {selectedItem === index && (
              <ItemCardInfo
                post={post}
                url={`http://yourdomain.com/job/${post.id}`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
