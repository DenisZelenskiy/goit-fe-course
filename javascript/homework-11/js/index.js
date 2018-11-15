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

  const filter = [...document.querySelectorAll("input:checked")].reduce(
    (acc, { name, value }) => {
      if (!acc.hasOwnProperty(name)) {
        acc[name] = [];
      }

      acc[name].push(value);

      return acc;
    },
    {}
  );

  let isSize;
  let isColor;
  let isRelease_date;

  const laptopsFilter = laptops.filter(lap => {

    if (filter.size) {
      isSize = filter.size.includes(String(lap.size));
    } else {
      isSize = true;
    }
    if (filter.color) {
      isColor = filter.color.includes(lap.color);
    } else {
      isColor = true;
    }
    if (filter.release_date) {
      isRelease_date = filter.release_date.includes(String(lap.release_date));
    } else {
      isRelease_date = true;
    }
    console.log(isSize && isColor && isRelease_date);
    return isSize && isColor && isRelease_date;
  });

  // CREATE HTML
  const markup = laptopsFilter.reduce((acc, lap) => (acc += template(lap)), "");

  cards.innerHTML = markup;
};

form.addEventListener("submit", filter);
reset.addEventListener("click", () => {
  cards.innerHTML = "";
});
