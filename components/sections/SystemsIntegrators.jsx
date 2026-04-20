import React from "react";
import { AudienceDetail } from "./AudienceDetail";
import { audienceDetailsData } from "@/constant/audienceData";

export const SystemsIntegrators = () => {
  return <AudienceDetail data={audienceDetailsData.integrators} />;
};
