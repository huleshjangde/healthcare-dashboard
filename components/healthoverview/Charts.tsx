import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const options: ApexOptions = {
  colors: ["#CA6B6E", "#478F96", "#D08726"],

  stroke: {
    lineCap: "square",
    width: 5,
    curve: "straight",
    colors: ["#fff"],
  },
  tooltip: {
    y: {
      formatter: function (value, opts) {
        let percent =
          opts.w.globals.seriesPercent[opts.seriesIndex][opts.dataPointIndex];
        return percent.toFixed(0) + "%";
      },
    },
  },
  yaxis: {
    min: 0,
    stepSize: 20,

    max: 80,
    tickAmount: 3,
    labels: {
      formatter: function (val) {
        return val + "%";
      },
    },
  },

  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,

            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      rangeBarOverlap: true,
      isFunnel3d: true,

      borderRadius: 5,
      columnWidth: "35%",
      borderRadiusApplication: "around",

      borderRadiusWhenStacked: "all",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    labels: {
      rotate: -45,
      show: true,
      rotateAlways: true,
    },
    tickPlacement: "on",
    axisTicks: {
      show: true,
    },

    categories: [
      "Jan 1",
      "Jan 2",
      "Jan 4",
      "Jan 5",
      "Jan 6",
      "Jan 7",
      "Jan 8",
      "Jan 9",
      "Jan 10",
      "Jan 11",
      "Jan 12",
      "Jan 13",
      "Jan 14",
      "Jan 15",
    ],
  },
  legend: {
    position: "bottom",
    itemMargin: {
      vertical: 10,
      horizontal: 10,
    },

    containerMargin: {
      top: 20,
    },

    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo: React.FC = () => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Aerobics",
        data: [35, 40, 60, 80, 30, 40, 60, 13, 10, 20, 40, 60, 13, 10],
      },
      {
        name: "Yoga",
        data: [20, 40, 60, 24, 60, 40, 60, 13, 10, 20, 40, 60, 13, 10],
      },
      {
        name: "Meditation",
        data: [20, 40, 60, 13, 10, 20, 40, 60, 13, 10, 20, 40, 60, 13, 10],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 h-fit flex flex-col  gap-0 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 flex  justify-between gap-4 sm:flex px-5 py-10">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Activity Growth
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block border-2 border-gray-200 px-5 py-2 rounded-sm">
            <select
              name="#"
              id="#"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none "
            >
              <option value="" className="dark:bg-boxdark">
                Jan 2021
              </option>
              <option value="" className="dark:bg-boxdark ">
                Feb 2021
              </option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className=" -ml-5 px-10 py-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={290}
            width={"100%"}
          />
        </div>

        {/* <ReactApexChart
            options={options2}
            series={state2.series}
            type="area"
            height={350}
            width={"100%"}
            
          /> */}
      </div>
    </div>
  );
};

export default ChartTwo;
