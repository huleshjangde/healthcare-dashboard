"use client";
import Bmi from "@/components/Bmi";
import HealthOverview from "@/components/healthoverview/HealthOverview";
import React from "react";

const page = () => {
  return (
    <div className="flex sm:flex-row flex-col w-fit h-full items-center sm:p-0 mt-5 sm:m-0">
      {typeof window !== "undefined" && <HealthOverview />}
      <Bmi />
    </div>
  );
};

export default page;
