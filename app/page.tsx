"use client";
import Bmi from "@/components/Bmi";
import HealthOverview from "@/components/healthoverview/HealthOverview";
import React from "react";

const page = () => {
  return (
    <div className="flex w-fit h-screen">
      {typeof window !== "undefined" && <HealthOverview />}
      <Bmi />
    </div>
  );
};

export default page;
