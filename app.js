// charts in the main dashboard

// multi bar chart with chart js

multiBarChartData = {
  labels: ["سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
  datasets: [
    {
      label: "إجمالي مداخيل",
      data: [30, 50, 30, 339],
      backgroundColor: "#4C70F0",
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
    {
      barPercentage: 0.7,
      label: "صافي أرباح",
      data: [63, 26, 182, 46],
      categoryPercentage: 0.7,
      backgroundColor: "#F13C47",
    },
    {
      label: "مرتجعات مبيعات",
      barPercentage: 0.7,
      data: [43, 23, 42, 114],
      categoryPercentage: 0.7,
      backgroundColor: "#38BB94",
    },
    {
      label: "مرتجعات مشتريات",
      barPercentage: 0.7,
      categoryPercentage: 0.7,
      data: [4, 5, 20, 140],
      backgroundColor: "#FFD950",
    },
  ],
};

const multiBarCanavs = document.querySelector("#multibar-chart-canvas");
const multiBarCanavsConfig = {
  type: "bar",
  data: multiBarChartData,
  options: {
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          padding: 30,
          font: {
            family: "Montserrat-Arabic",
          },
          usePointStyle: true,
          pointSytle: "circle",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            family: "Montserrat-Arabic",
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: "Montserrat-Arabic",
          },
        },
      },
    },
  },
};
const multiBarChart = new Chart(multiBarCanavs, multiBarCanavsConfig);
