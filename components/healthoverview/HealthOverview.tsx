"use client";

import ChartTwo from "@/components/healthoverview/Charts";
import dynamic from "next/dynamic";

import { useState } from "react";
import { blood, heart, sugar } from "@/lib/area";
import { HealthCard } from "./HealthCard";
import Navbar from "./Navbar";
import UpcomingAppointment from "./UpcomingAppointment";

export default function HealthOverview() {
  interface ChartTwoState {
    series: {
      name: string;
      data: number[];
    }[];
  }

  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Aerobics",
        data: [10, 20, 15, 12],
      },
    ],
  });

  const healthCardData = [
    {
      bgClass: "bg-[#F8DEBD]",
      imageSrc: "/sugar.png",
      title: "Blood Sugar",
      value: "80",
      unit: "mg/dL",
      status: "Normal",
      chartOptions: sugar,
      series: [
        {
          name: "Blood Sugar",
          data: [10, 20, 15, 12],
        },
      ],
    },
    {
      bgClass: "bg-[#FBF0F3]",
      imageSrc: "/heart.png",
      title: "Heart Rate",
      value: "90",
      unit: "bpm",
      status: "Normal",
      chartOptions: heart,
      series: [
        {
          name: "Heart Rate",
          data: [10, 20, 15, 12],
        },
      ],
    },
    {
      bgClass: "bg-[#D0FBFF]",
      imageSrc: "/blood.png",
      title: "Blood Pressure",
      value: "102/72",
      unit: "mmHg",
      status: "Normal",
      chartOptions: blood,
      series: [
        {
          name: "Blood Pressure",
          data: [10, 20, 35, 12],
        },
      ],
    },
  ];

  return (
    <div className=" h-fit p-6 rounded-lg shadow-lg  ">
      <Navbar />

      <div className="flex  justify-between gap-4 mb-6 mt-2">
        {healthCardData.map((cardInfo, index) => (
          <HealthCard key={index} {...cardInfo} />
        ))}
      </div>

      {typeof window !== "undefined" && <ChartTwo />}
      <UpcomingAppointment />
    </div>
  );
}
