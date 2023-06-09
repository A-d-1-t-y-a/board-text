"use client";

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const chartData = {
    options: {
      colors: ["#9BDD7C", "#E9A0A0"],
      legend: {
        show: false,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "top",
        horizontalAlign: "right",
        floating: false,
        fontSize: "14px",
        fontFamily: "lato, lato",
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      chart: {
        id: "activityBar",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: ["", "Week 1", "Week 2", "Week 3", "Week 4"],
      },
      stroke: {
        curve: "smooth",
      },
    },
    series: [
      {
        name: "Guest",
        data: [30, 90, 45, 50, 10],
      },
      {
        name: "User",
        data: [91, 30, 40, 45, 90],
      },
    ],
  };

  const handleBounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const handleResize = handleBounce(() => {
      setWindowWidth(window.innerWidth);
    }, 200); // Adjust the debounce delay as needed

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerHeight)
    return (
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width={
          windowWidth < 770
            ? windowWidth - 250
            : windowWidth > 1190
            ? windowWidth - 520
            : windowWidth - 440
        }
        height={212}
      />
    );
  else return null;
};

export default LineChart;
