// Add your images here (files placed in site/images/)
const photos = [
    { src: "images/000071750030.jpg", caption: "Photo 1" },
    { src: "images/000071750031.jpg", caption: "Photo 2" },
    { src: "images/000071750033.jpg", caption: "Photo 3" },

  ];
  
  const grid = document.getElementById("grid");
  const dialog = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const caption = document.getElementById("caption");
  const closeBtn = document.getElementById("close");
  
  photos.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = p.src;
    img.alt = p.caption || "";
    card.appendChild(img);
  
    card.addEventListener("click", () => {
      lightboxImg.src = p.src;
      lightboxImg.alt = p.caption || "";
      caption.textContent = p.caption || "";
      dialog.showModal();
    });
  
    grid.appendChild(card);
  });
  
  closeBtn.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
  