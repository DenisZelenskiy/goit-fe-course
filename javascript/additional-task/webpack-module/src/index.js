// import "normalize.css";
// import imageUrl from "./img/img.jpeg";
// img.setAttribute("src", imageUrl);
import "@babel/polyfill";
import "./style.css";
import "./test.scss";

import articleTpl from "./template/article.hbs";

const article = articleTpl({ title: "HelLO", text: "tqweadsf" });
console.log(article);
