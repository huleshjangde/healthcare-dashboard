"use client";
import HealthOverview from "@/components/healthoverview/HealthOverview";
import React from "react";
import dynamic from "next/dynamic";
const BmiCalculator = dynamic(() => import("@/components/BmiCalculator"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="flex sm:flex-row flex-col w-fit h-full items-center sm:p-0 mt-5 sm:m-0">
      {typeof window !== "undefined" && <HealthOverview />}
      <BmiCalculator />
    </div>
  );
};

export default page;
