"use strict";
// $on(document, "DOMContentLoaded", () => {
//   const imageGallery = $qs(".js-image-gallery");

// const galleryItems = [
//   {
//     preview: "img/preview-1.jpeg",
//     fullview: "img/fullview-1.jpeg",
//     alt: "alt text 1"
//   },
//   {
//     preview: "img/preview-2.jpeg",
//     fullview: "img/fullview-2.jpeg",
//     alt: "alt text 2"
//   },
//   {
//     preview: "img/preview-3.jpeg",
//     fullview: "img/fullview-3.jpeg",
//     alt: "alt text 3"
//   },
//   {
//     preview: "img/preview-4.jpeg",
//     fullview: "img/fullview-4.jpeg",
//     alt: "alt text 4"
//   },
//   {
//     preview: "img/preview-5.jpeg",
//     fullview: "img/fullview-5.jpeg",
//     alt: "alt text 5"
//   },
//   {
//     preview: "img/preview-6.jpeg",
//     fullview: "img/fullview-6.jpeg",
//     alt: "alt text 6"
//   }
// ];

//   function createGallery(arr) {

//     const fullview = $cel("div", { className: "fullview" });
//     const imgFullview = $cel("img", { src: "#", alt: "" });
//     const list = $cel("ul", { className: "list" });
//     const result = [];

//     fullview.append(imgFullview);

//     createListPreview(galleryItems)

//     function createListPreview(arr) {
//       let i = 1;
//       for (let item of arr) {
//         let li = document.createElement("li");
//         let img = document.createElement("img");
//         img.setAttribute("src", item.preview);
//         img.setAttribute("data-fullview", item.fullview);
//         img.setAttribute("alt", item.alt);
//         img.setAttribute('class', `index${i}`);
//         li.appendChild(img);
//         list.appendChild(li);
//         i += 1;

//       }
//     }

//     const defaultFullview = $qs('.index1', list).getAttribute("data-fullview");
//     imgFullview.setAttribute("src", defaultFullview);

//     result.push(fullview, list)

//     $on(list, "click", changePreviewImg);

//     function changePreviewImg(e) {
//       const target = e.target;
//       const srcFullview = target.dataset.fullview;
//       const imgList = $qsa("img", list);

//       if (target.nodeName !== "IMG") return;

//       imgFullview.setAttribute("src", srcFullview);

//       for (let img of imgList) {
//         img.classList.remove('active');
//       }

//       target.className += " active";

//     }

//     return result

//   }

//   imageGallery.append(...createGallery(galleryItems))
// });

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
const imageGallery = document.querySelector(".js-image-gallery");
const activeValue = 6;

class Gallery {
  constructor({ items, parentNode, defaultActiveItem }) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
    this.fullview = document.createElement("div");
    this.fullview.setAttribute("class", "fullview");

    this.imgFullview = document.createElement("img");
    this.imgFullview.setAttribute("src", '#');
    this.imgFullview.setAttribute("alt", 'fullview image');


    this.list = document.createElement("ul");
    this.list.setAttribute("class", "list");
  }

  createGallery() {

    // create list image

    let idx = 1;
    for (let item of this.items) {
      this.li = document.createElement('li');
      this.li.setAttribute('class', "list__item");

      this.img = document.createElement('img');
      this.img.setAttribute('class', `index-${idx}`)

      this.img.setAttribute("src", item.preview);
      this.img.setAttribute("data-fullview", item.fullview);
      this.img.setAttribute("alt", item.alt);

      this.li.append(this.img);
      this.list.append(this.li);

      idx += 1;
    }

    // create active Fullview

    const activeImg = this.list.querySelector(
      `img[class=index-${this.defaultActiveItem}]`
    );

    const defaultImg = this.list.querySelector(`img[class=index-1]`);

    const classActiveimg = "activeImg"

    if (activeImg !== null) {
      this.imgFullview.src = activeImg.dataset.fullview;
      activeImg.classList.add(classActiveimg);
    } else {
      this.imgFullview.src = defaultImg.dataset.fullview;
      defaultImg.classList.add(classActiveimg);
    }

    // HTML add FULLVIEW && LIST 

    this.fullview.append(this.imgFullview);
    this.parentNode.append(this.fullview, this.list);

    //  ADD event click

    $on(this.list, "click", event => {
      const target = event.target;
      const fullviewSRC = target.dataset.fullview;
      const nodeName = target.nodeName;
      const listImg = this.list.querySelectorAll("img");


      if (nodeName !== "IMG") return;

      this.imgFullview.setAttribute("src", fullviewSRC);

      listImg.forEach(img => img.classList.remove(classActiveimg));

      target.classList.add(classActiveimg)

    });
  }
}

const poly = new Gallery({
  items: galleryItems,
  parentNode: imageGallery,
  defaultActiveItem: activeValue
});

// const mango = new Gallery({
//   items: galleryItems,
//   parentNode: imageGallery,
//   defaultActiveItem: activeValue
// });
// const ajax = new Gallery({
//   items: galleryItems,
//   parentNode: imageGallery,
//   defaultActiveItem: activeValue
// });

poly.createGallery();
// mango.createGallery();
// ajax.createGallery();
