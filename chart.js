const ctx = document.getElementById("barchart").getContext("2d");
const barchart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2024", "2025", "2030", "2040"],
    datasets: [
      {
        label: "Global EV Charging Stations powered by Renewable Energy",

        data: [25, 30, 50, 70],

        backgroundColor: 
        [
          "rgba(0, 150, 126, 0.5)",
          "rgba(0, 150, 126, 0.5)",
          "rgba(0, 150, 126, 0.5)",
          "rgba(0, 150, 126, 0.5)",
        ],

        borderColor: 
        [
          "rgba(0, 88, 73, 2)",
          "rgba(0, 88, 73, 2)",
          "rgba(0, 88, 73, 2)",
          "rgba(0, 88, 73, 2)",
        ],

        borderWidth: 1,

      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
