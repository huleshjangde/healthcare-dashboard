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
      className={`bg-black/80 h-fit flex flex-col  text-white w-[50%] p-6 rounded-3xl ${Mulishs.className} `}
    >
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl font-bold mb-2">BMI Calculator</h1>
        <div className="w-[200] rounded-md border-gray-600 text-gray-400 border-2  ">
          <Select defaultValue="last-week">
            <SelectTrigger id="timeframe">
              <SelectValue className="bg-[#4A4949]">Last Week</SelectValue>
            </SelectTrigger>
            <SelectContent
              className="bg-[#4A4949] text-white"
              position="popper"
            >
              <SelectItem defaultChecked value="last-week">
                Last Week
              </SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between h-full    items-center ">
        <div className="flex  gap-5 flex-col   justify-between   w-[300px] text-black mb-4">
          <div className="bg-[#F8DEBD] h-full rounded-md px-4 py-2 flex flex-col  items-end">
            <Image
              alt="Body shape"
              className=" h-7"
              height="50"
              src="/scale.png"
              width="100"
            />
            <div className="flex gap-4 items-center w-full justify-center">
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
            <div className="flex gap-4 items-center w-full justify-center">
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
      <div className="mb-6 flex justify-between items-center">
        <div className=" flex flex-col justify-between h-[700px] py-5">
          <div>
            <h2 className="text-[22px] font-bold mb-2 ">Body Measurements</h2>
            <p className="text-sm mb-4 text-[#CACACA] font-bold">
              Last checked 2 Days Ago
            </p>
            <p className="text-[14px] mb-4 bg-[#5E5E5E] px-2 py-1 w-fit rounded-md">
              Inverted Triangle Body Shape
            </p>
          </div>

          <div className="flex  h-full   justify-between items-center px-5 mb-4   gap-5">
            <div className="flex flex-col h-full gap-5 justify-end ">
              <div className="bg-white w-[150px] text-black rounded-md px-5 py-5 mb-2 flex flex-col justify-between items-center">
                <p className="text-[16px] text-[#5F5F5F]">Chest (in)</p>
                <p className="text-[24px]  font-semibold flex">
                  44.5 <ArrowUpIcon className="text-green-500" />
                </p>
              </div>

              <div className="bg-white text-black rounded-md px-5 py-3 mb-2 flex  flex-col justify-between items-center">
                <p className="text-[16px] text-[#5F5F5F] ">Waist (in)</p>
                <p className="text-[24px] font-semibold flex">
                  34 <ArrowDownIcon className="text-red-500" />
                </p>
              </div>

              <div className="bg-white text-black rounded-md px-5 py-3 flex  flex-col justify-between items-center">
                <p className="text-[16px] text-[#5F5F5F]">Hip (in)</p>
                <p className="text-[24px]  font-semibold flex ">
                  42.5 <ArrowDownIcon className="text-red-500" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <Image
            alt="Body shape"
            className="h-full"
            height="400"
            src="/male2.png"
            width="200"
          />
        </div>
      </div>
    </div>
  );
}

function ArrowDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}
