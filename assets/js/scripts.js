document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Grafik Penjualan Ikan
  const salesCtx = document.getElementById("salesChart").getContext("2d");
  const salesData = {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "Penjualan Ikan Kecil",
        data: [500, 700, 800, 600, 650, 700, 800, 900, 750, 850, 950, 1100],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
      {
        label: "Penjualan Ikan Besar",
        data: [300, 450, 500, 400, 480, 500, 600, 650, 600, 700, 750, 900],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 1,
      },
      {
        label: "Total Penjualan",
        data: [
          800, 1150, 1300, 1000, 1130, 1200, 1400, 1550, 1350, 1550, 1700, 2000,
        ],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderWidth: 1,
        type: "line",
      },
    ],
  };

  const salesConfig = {
    type: "bar",
    data: salesData,
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  new Chart(salesCtx, salesConfig);

  // Grafik Pengeluaran Pakan
  const feedCtx = document.getElementById("feedChart").getContext("2d");
  const feedData = {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "Pengeluaran Pakan",
        data: [200, 300, 250, 270, 290, 320, 340, 330, 300, 310, 320, 330],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
      },
    ],
  };

  const feedConfig = {
    type: "bar",
    data: feedData,
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  new Chart(feedCtx, feedConfig);
});
