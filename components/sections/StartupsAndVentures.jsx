import React from "react";
import { AudienceDetail } from "./AudienceDetail";
import { audienceDetailsData } from "@/constant/audienceData";

export const StartupsAndVentures = () => {
  return <AudienceDetail data={audienceDetailsData.startups} />;
};
