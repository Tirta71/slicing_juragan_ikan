const articles = [
  {
    date: "17",
    month: "Feb 2024",
    title: "Panduan Komprehensif untuk Memulai Peternak",
    description:
      "Jika Anda adalah seorang pemula yang ingin memulai peternakan ikan, langkah-langkah berikut ini.",
    imgSrc: "./assets/img/artikel/artikel_1.png",
    link: "detail_artikel.html",
  },
  {
    date: "19",
    month: "Mar 2024",
    title: "Manfaat Luar Biasa Konsumsi Ikan",
    description:
      "Konsumsi ikan secara teratur telah terkait dengan penurunan risiko penyakit jantung.",
    imgSrc: "./assets/img/artikel/artikel_2.png",
    link: "detail_artikel.html",
  },
  {
    date: "24",
    month: "Apr 2024",
    title: "Teknik Pembenihan Ikan Air Tawar",
    description: "Pembenihan ikan air tawar adalah proses penting.",
    imgSrc: "./assets/img/artikel/artikel_1.png",
    link: "detail_artikel.html",
  },
  {
    date: "28",
    month: "Apr 2024",
    title: "Panduan Jumlah Ikan Air Tawar yang Ideal",
    description:
      "Memilih jumlah ikan yang tepat untuk kolam air tawar Anda adalah langkah penting.",
    imgSrc: "./assets/img/artikel/artikel_4.png",
    link: "detail_artikel.html",
  },
  {
    date: "30",
    month: "Apr 2024",
    title: "5 Cara Budidaya Ikan Air Tawar",
    description:
      "Terdapat berbagai jenis metode budidaya ikan air tawar yang dapat Anda pilih. Di sini.",
    imgSrc: "./assets/img/artikel/artikel_5.png",
    link: "detail_artikel.html",
  },
];

const container = document.getElementById("articleContainer");

articles.forEach((article) => {
  const card = document.createElement("div");
  card.classList.add("card-article");

  card.innerHTML = `
      <div class="image-article">
          <img src="${article.imgSrc}" alt="${article.title}" />
      </div>
      <div class="container_content">
          <div class="content_card">
              <h1>${article.date}</h1>
              <span>${article.month}</span>
          </div>
          <div class="title_card">
              <h2>${article.title}</h2>
              <p>
                  ${article.description}
                  <a href="${article.link}">
                      Read More <span><img src="./assets/img/icon/Vector 9.png" alt="Arrow" /></span>
                  </a>
              </p>
          </div>
      </div>
    `;

  container.appendChild(card);
});

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  container.scrollBy({
    left: -container.clientWidth, // scroll by the width of the container
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  container.scrollBy({
    left: container.clientWidth, // scroll by the width of the container
    behavior: "smooth",
  });
});
