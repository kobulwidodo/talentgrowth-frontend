import React from "react";
import { Link } from "react-router-dom";
import slug from "slug";
import webinar from "../../assets/image/webinar.png";

const WebinarCard = ({ title, type, created, id }) => {
  const slugTitle = slug(title);
  const link = `/event/${type}/${slugTitle}/${id}`;
  return (
    <Link
      to={link}
      className="bg-[#FAFAFA] hover:bg-[#f3f3f3] drop-shadow-sm rounded-xl"
    >
      <img src={webinar} className="w-full" alt="" srcSet="" />
      <div className="px-5 py-4">
        <p className="text-xl font-medium text-[#211B3D]">{title}</p>
        <p className="mt-2">{created}</p>
      </div>
    </Link>
  );
};

export default WebinarCard;
