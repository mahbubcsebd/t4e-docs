import React from "react";
import { AudienceDetail } from "./AudienceDetail";
import { audienceDetailsData } from "@/constant/audienceData";

export const SoftwareAndSaaS = () => {
  return <AudienceDetail data={audienceDetailsData.saas} />;
};
