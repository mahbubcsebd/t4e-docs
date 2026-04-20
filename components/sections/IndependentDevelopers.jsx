import React from "react";
import { AudienceDetail } from "./AudienceDetail";
import { audienceDetailsData } from "@/constant/audienceData";

export const IndependentDevelopers = () => {
  return <AudienceDetail data={audienceDetailsData.independent} />;
};
