const cards = document.querySelector(".js-cards");
const form = document.querySelector(".js-form");
const reset = form.querySelector('button[type="reset"]');

const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const source = document.querySelector(".template-card").innerHTML.trim();

const template = Handlebars.compile(source);

const filter = e => {
  e.preventDefault();

  const size = [...form.querySelectorAll('input[name="size"]:checked')];

  const color = [...form.querySelectorAll('input[name="color"]:checked')];

  const release_date = [
    ...document.querySelectorAll('input[name="release_date"]:checked')
  ];

  const objFilter = {
    size: size.map(elem => Number(elem.value)),
    color: color.map(elem => elem.value),
    release_date: release_date.map(elem => Number(elem.value))
  };

  let isSize;
  let isColor;
  let isRelease_date;

  const laptopsFilter = laptops.filter(lap => {
    if (objFilter.size.length > 0) {
      isSize = objFilter.size.includes(lap.size);
    } else {
      isSize = true;
    }
    if (objFilter.color.length > 0) {
      isColor = objFilter.color.includes(lap.color);
    } else {
      isColor = true;
    }
    if (objFilter.release_date.length > 0) {
      isRelease_date = objFilter.release_date.includes(lap.release_date);
    } else {
      isRelease_date = true;
    }

    return isSize && isColor && isRelease_date;
  });
  console.log(laptopsFilter);
  // CREATE HTML
  const markup = laptopsFilter.reduce((acc, lap) => (acc += template(lap)), "");

  cards.innerHTML = markup;
};

form.addEventListener("submit", filter);
reset.addEventListener("click", () => {
  cards.innerHTML = "";
});

