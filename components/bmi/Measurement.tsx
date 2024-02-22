"use client";
import { ArrowDownIcon, ArrowUpIcon } from "./UpDown";

interface MeasurementProps {
  label: string;
  value: number;
  changeDirection?: "up" | "down";
}

export const MeasurementCard: React.FC<MeasurementProps> = ({
  label,
  value,
  changeDirection,
}) => {
  return (
    <div className="bg-white text-black rounded-md px-5 py-3 mb-2 flex flex-col justify-between items-center">
      <p className="text-[16px] text-[#5F5F5F]">{label}</p>
      <p className="text-[24px] flex items-center  font-semibold">
        <span> {value} </span>
        {changeDirection === "up" && <ArrowUpIcon className="text-green-500" />}
        {changeDirection === "down" && (
          <ArrowDownIcon className="text-red-500" />
        )}
      </p>
    </div>
  );
};
