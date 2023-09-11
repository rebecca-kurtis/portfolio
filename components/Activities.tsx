"use client";
import React from "react";
import { ActivitiesCardComponent } from "./ActivitiesCardComponent";
import { CardComponent } from "./CardComponent";



interface ActivitiesProps {}

export const Activities: React.FC<ActivitiesProps> = ({}) => {
  return (
    <div className="activitiesContainer" id='activities'>
      <div className="activitiesTitle">
        <h2>What&apos;s happening in my world:</h2>
      </div>
      <div className="activitiesContainerSpacer" />
      <div className="activitiesPointsContainer">
        <ActivitiesCardComponent cardTitle="Building My Skills" cardText="Diving into the world of mobile development with ReactNative and ExpoGo to build a Task App." buttonLink="https://github.com/rebecca-kurtis/task-app" buttonText='Check it out here!'></ActivitiesCardComponent>
        <div className="whyMePointsContainerSpacer" />
        <ActivitiesCardComponent cardTitle="What I am Excited About" cardText="For the month of September, I am participating in ULedger&apos;s Blockchain Developer Challenge." buttonLink="https://github.com/rebecca-kurtis/uledger-challenge" buttonText="Follow along here!"></ActivitiesCardComponent>
      </div>
    </div>
  );
};
