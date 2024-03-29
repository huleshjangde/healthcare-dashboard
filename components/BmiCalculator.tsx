"use client";

import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mulish } from "next/font/google";

import Image from "next/image";

import { useEffect, useState } from "react";
import { MeasurementCard } from "./bmi/Measurement";
import CustomSelect from "./bmi/CustomSelect";

export const Mulishs = Mulish({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "vietnamese"],
});

export default function Bmi() {
  const [weight, setWeight] = useState<number>(40);
  const [height, setHeight] = useState<number>(125);
  const [bmi, setBmi] = useState("");

  useEffect(() => {
    const calculateBMI = () => {
      if (weight && height) {
        const heightInMeters = height / 100; // convert cm to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        setBmi(bmi.toFixed(2)); // set BMI with 2 decimal places
      }
    };
    calculateBMI();
  }, [weight, height]);

  return (
    <div
      className={`bg-black/80 h-fit flex flex-col  text-white w-screen sm:w-[50%] p-6 rounded-3xl ${Mulishs.className} `}
    >
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl font-bold mb-2">BMI Calculator</h1>
        <CustomSelect
          defaultValue="last-week"
          options={[
            { value: "last-week", label: "Last Week" },
            { value: "last-month", label: "Last Month" },
            { value: "last-year", label: "Last Year" },
          ]}
          className="my-custom-select"
        />
      </div>

      <div className="flex justify-between h-full sm:flex-row flex-col      items-center ">
        <div className="flex  gap-5 flex-col   justify-between    w-[300px] text-black mb-4">
          <div className="bg-[#F8DEBD] h-full rounded-md px-4 py-2 flex flex-col  items-end">
            <Image
              alt="Body shape"
              className=" h-7"
              height="50"
              src="/scale.png"
              width="100"
            />
            <div className="flex gap-4 items-center w-full py-2 justify-center">
              <p className="text-sm ">Height</p>

              <div className="text-lg">
                <input
                  className=" outline-none bg-transparent overflow-hidden w-8"
                  type="text"
                  value={height}
                  onChange={(e: any) => {
                    setHeight(e.target.value);
                  }}
                />{" "}
                cm
              </div>
            </div>
          </div>
          <div className="bg-[#D0FBFF] h-full rounded-md px-4 py-2 flex flex-col items-end">
            <Image
              alt="Body shape"
              className=" h-7"
              height="50"
              src="/scale.png"
              width="100"
            />
            <div className="flex gap-4 items-center w-full justify-center py-2">
              <p className="text-sm">Weight</p>
              <div className="text-lg">
                {" "}
                <input
                  className="outline-none bg-transparent overflow-hidden w-8"
                  type="text"
                  value={weight}
                  onChange={(e: any) => {
                    setWeight(e.target.value);
                  }}
                />{" "}
                kg
              </div>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="bg-[#4A4949] h-[200px] p-4 rounded-lg mb-6 w-full ml-5">
          <div className="flex justify-between  mb-2 flex-col ">
            <h2 className="text-[16px]  text-left">Body Mass Index (BMI)</h2>
            <div className=" flex justify-between items-center w-full my-5 text-base">
              {" "}
              <p className="text-[22px]">{bmi}</p>{" "}
              <Badge
                className="bg-[#D6FFDD] py-1 px-2 text-base rounded-sm"
                variant="secondary"
              >
                Your Healthy
              </Badge>{" "}
            </div>
          </div>
          <div className=" w-full  h-5 flex justify-center">
            {" "}
            <div className="h-3 w-3 border-2 border-white rounded-full bg-red-500"></div>
          </div>
          <div className="bg-gradient-to-r rounded-md from-sky-300 from-sky-600 via-green-400 via-yellow-200  to-red-300 h-5 w-full"></div>
          <div className="flex justify-between mt-2">
            <span>15</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40</span>
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className="mb-6 flex justify-between items-end">
        <div className=" flex flex-col justify-between h-[700px] pt-5 ">
          <div className="">
            <h2 className="text-[22px] font-bold mb-2 ">Body Measurements</h2>
            <p className="text-sm mb-4 text-[#CACACA] font-bold">
              Last checked 2 Days Ago
            </p>
            <p className="text-[14px] mb-4 bg-[#5E5E5E] px-2 py-1 sm:w-fit w-full rounded-md">
              Inverted Triangle Body Shape
            </p>
          </div>

          <div className="flex  h-full    justify-between items-center px-5 mb-4   gap-5">
            <div className="flex flex-col  h-full gap-5 justify-end  ">
              <MeasurementCard
                label="Chest (in)"
                value={44.5}
                changeDirection="up"
              />

              <MeasurementCard
                label="Waist (in)"
                value={34}
                changeDirection="down"
              />
              <MeasurementCard
                label="Hip (in)"
                value={42.5}
                changeDirection="down"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col justify-end ">
          <Image
            alt="Body shape"
            className="h-1/2 sm:h-full"
            height="400"
            src="/male2.png"
            width="200"
          />
        </div>
      </div>
    </div>
  );
}
