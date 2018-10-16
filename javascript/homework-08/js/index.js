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
const imageGallery = $qs('.js-image-gallery');
const activeValue = 3;

class Gallery {
  constructor({ items, parentNode, defaultActiveItem }) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
    this.fullview = $cel('div', { className: "fullview" });
    this.imgFullview = $cel("img", { src: "#", alt: "" });
    this.list = $cel('ul', { className: "list" });
  }

  createGalleryPreview() {
    let idx = 1;
    for (let item of this.items) {
      this.li = $cel('li', { className: "list__item" })
      this.img = $cel('img', { className: `index-${idx}` })

      this.img.setAttribute('src', item.preview);
      this.img.setAttribute('data-fullview', item.fullview);
      this.img.setAttribute('alt', item.alt);

      this.li.append(this.img);
      this.list.append(this.li);

      idx += 1;
    }
  }

  


}


const test = new Gallery({ items: galleryItems, parentNode: imageGallery, defaultActiveItem: activeValue })

console.log(test);


