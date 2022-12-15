import React from "react";
import AddExperience from "./AddExperience";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function ExperienceUser() {
  const navigate = useNavigate();
  const experienceList = useSelector((state) => state.experience.experience);
  return (
    <div className="experience">
      <div className="experienceC4">
        <h4 className="mb-4">Job Experience</h4>
        <div>
          <AddExperience />
          <i
            className="bi bi-pencil-fill"
            onClick={() => navigate("/profile/experience")}
          ></i>
        </div>
      </div>
      {experienceList[0] ? (
        experienceList.map((xp, i) => (
          <div className="experienceDiv" key={xp._id}>
            <div className="experienceDivImg">
              <img
                src={xp.image ? xp.image : "https://placekitten.com/300"}
                alt={"experience company img"}
              />
            </div>
            <div className="experienceDivInfo">
              <h5>{xp.role}</h5>
              <h6>{xp.company}</h6>
              <p>
                {format(new Date(xp.startDate), "MMMM yyyy")} -{" "}
                {format(new Date(xp.endDate), "MMMM yyyy")} 4m
              </p>
              <p>{xp.area}</p>
              <p className="experienceDivInfoLast">{xp.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No experience to show</div>
      )}
    </div>
  );
}
