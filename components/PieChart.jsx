"use client";

import ReactApexChart from "react-apexcharts";
import Loading from "./Loading";

function PieChart() {
  const chatOptions = {
    series: [55, 31, 14],
    options: {
      colors: ["#98D89E", "#F6DC7D", "#EE8484"],
      stroke: {
        show: false,
      },
      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 10,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              enabled: false,
            },
          },
        },
      ],
    },
  };

  if (typeof window !== "undefined" && window.innerHeight)
    return (
      <div
        id="chart"
        className="w-full flex items-center flex-col pieChartWidth:flex-row justify-around"
      >
        <ReactApexChart
          options={chatOptions.options}
          series={chatOptions.series}
          type="pie"
          width={230}
        />

        <div className="flex flex-col gap-5 mt-3 pieChartWidth:mt-0">
          {chatOptions.options.labels.map((label, index) => (
            <div key={label}>
              <div className="flex gap-2 items-center mb-1">
                <div
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "100%",
                    backgroundColor: chatOptions.options.colors[index],
                  }}
                />
                <p className="font-bold text-sm text-black">{label}</p>
              </div>
              <p className="text-xs text-subTitle ml-5">
                {chatOptions.series[index]}%
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  else return <Loading />;
}

export default PieChart;
