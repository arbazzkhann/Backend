const galleryData = [
    {
      img: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg",
      caption: "Stylish Jeans",
    },
    {
      img: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg",
      caption: "City Sunset",
    },
    {
      img: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg",
      caption: "Minimalist Design",
    },
    {
      img: "https://images.pexels.com/photos/9219048/pexels-photo-9219048.jpeg",
      caption: "Serene Landscape",
    },
    {
      img: "https://images.pexels.com/photos/10689510/pexels-photo-10689510.jpeg",
      caption: "Cozy Interior",
    },
    {
      img: "https://images.pexels.com/photos/18530981/pexels-photo-18530981.jpeg",
      caption: "Fashion Trends",
    },
    {
      img: "https://images.pexels.com/photos/8386650/pexels-photo-8386650.jpeg",
      caption: "Artistic Vibes",
    },
    {
      img: "https://images.pexels.com/photos/9433289/pexels-photo-9433289.jpeg",
      caption: "Nature's Beauty",
    },
    {
      img: "https://images.pexels.com/photos/19807754/pexels-photo-19807754.jpeg",
      caption: "Modern Architecture",
    },
  ];
  let currentPage = 1;
  const itemsPerPage = 4;

  function renderGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = galleryData.slice(start, end);
    itemsToShow.forEach((item) => {
      const div = document.createElement("div");
      div.className = "gallery-item";
      div.innerHTML = `<img src="${item.img}" alt="Gallery Image"><div class="caption">${item.caption}</div>`;
      gallery.appendChild(div);
    });
    document.getElementById("page-num").innerText = currentPage;
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      renderGallery();
    }
  }

  function nextPage() {
    if (currentPage < Math.ceil(galleryData.length / itemsPerPage)) {
      currentPage++;
      renderGallery();
    }
  }

  renderGallery();