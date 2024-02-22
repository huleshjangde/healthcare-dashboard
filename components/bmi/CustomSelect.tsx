"use client";
import React from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

interface CustomSelectProps {
  defaultValue?: string;
  options: { value: string; label: string }[];
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  defaultValue,
  options,
  className,
}) => {
  return (
    <div
      className={`w-[200] rounded-md border-gray-600 text-gray-400 border-2 ${className}`}
    >
      <Select defaultValue={defaultValue}>
        <SelectTrigger id="timeframe">
          <SelectValue className="bg-[#4A4949]">{defaultValue}</SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#4A4949] text-white" position="popper">
          {options.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
