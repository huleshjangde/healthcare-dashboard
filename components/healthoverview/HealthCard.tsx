import Image from "next/image";
// import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const HealthCard = ({
  bgClass,
  imageSrc,
  title,
  value,
  unit,
  status,
  chartOptions,
  series,
}: any) => {
  return (
    <Card className="w-full h-[310px]">
      <CardHeader className="flex flex-row w-full gap-5 items-center justify-start">
        <div
          className={`w-16 h-10 ${bgClass} flex justify-center items-center rounded-md`}
        >
          <Image
            src={imageSrc}
            className="w-5 h-auto"
            width={80}
            height={80}
            alt={title}
          />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black ">
          <span className="text-3xl font-bold">{value}</span> {unit}
        </p>
        <p className={`text-black ${bgClass} w-fit px-4 mt-2 rounded-md`}>
          {status}
        </p>
        {typeof window !== "undefined" && (
          <Chart
            options={chartOptions}
            series={series}
            type="area"
            height={150}
            width={"100%"}
          />
        )}
      </CardContent>
    </Card>
  );
};
