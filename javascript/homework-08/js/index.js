"use strict";
$on(document, "DOMContentLoaded", () => {
  const imageGallery = $qs(".js-image-gallery");
  const fullview = $cel("div", { className: "fullview" });
  const imgFullview = $cel("img", { src: "#", alt: "" });
  const galleryItems = [
    {
      preview: "img/preview-1.jpeg",
      fullview: "img/fullview-1.jpeg",
      alt: "alt text 1"
    },
    {
      preview: "img/preview-2.jpeg",
      fullview: "img/fullview-2.jpeg",
      alt: "alt text 2"
    },
    {
      preview: "img/preview-3.jpeg",
      fullview: "img/fullview-3.jpeg",
      alt: "alt text 3"
    },
    {
      preview: "img/preview-4.jpeg",
      fullview: "img/fullview-4.jpeg",
      alt: "alt text 4"
    },
    {
      preview: "img/preview-5.jpeg",
      fullview: "img/fullview-5.jpeg",
      alt: "alt text 5"
    },
    {
      preview: "img/preview-6.jpeg",
      fullview: "img/fullview-6.jpeg",
      alt: "alt text 6"
    }
  ];

  imageGallery.append(fullview);
  fullview.append(imgFullview);
  imageGallery.append(createListPreview(galleryItems));

  function createListPreview(items) {
    const list = $cel("ul", { className: "list" });

    for (let item of items) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.setAttribute("src", item.preview);
      img.setAttribute("data-fullview", item.fullview);
      img.setAttribute("alt", item.alt);
      li.appendChild(img);
      list.appendChild(li);
    }

    const defaultFullview =
      list.firstElementChild.firstElementChild.dataset.fullview;

    imgFullview.setAttribute("src", defaultFullview);
    return list;
  }

  const list = $qs(".list");

  $on(list, "click", changePreviewImg);

  function changePreviewImg(e) {
    const target = e.target;
    const srcFullview = e.target.dataset.fullview;
    console.log(target);

    if (target.nodeName !== "IMG") return;
    imgFullview.setAttribute("src", srcFullview);
  }
});
