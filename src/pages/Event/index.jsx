import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventByType } from "../../api/models/event";
import Navbar from "../../components/Navbar";
import WebinarCard from "../../components/WebinarCard";

const Event = () => {
  const [events, setEvets] = useState([]);
  const { type } = useParams();

  const fetchEvents = async () => {
    try {
      const res = await getEventByType(type);
      setEvets(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchEvents();
  }, [type]);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-3 sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold text-[#31B380] text-center">
          YOUR FUTURE CAREER
        </h3>
        <h2 className="text-3xl font-semibold text-[#211B3D] text-center mt-2">
          {type === "webinar"
            ? "Webinar untuk ilmu bermanfaat"
            : "Ikuti kelas sekarang"}
        </h2>
        <div className="grid gap-x-8 gap-y-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10">
          {events.map((item, key) => {
            const date = new Date(Date.parse(item.date));
            return (
              <WebinarCard
                key={key}
                id={item.ID}
                title={item.title}
                type={type}
                created={`${date.toDateString()}, ${date.toLocaleTimeString()}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Event;
