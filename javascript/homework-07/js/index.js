"use strict";

const post = {
  img: "https://placeimg.com/400/150/arch",
  title: "Post title 1",
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
  link: "link-1.com"
};

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

const createPostCard = post => {
  const poster = document.createElement("div");
  poster.classList.add("post");
  const postImage = document.createElement("img");
  postImage.classList.add("post__image");
  postImage.setAttribute("src", post.img);
  postImage.setAttribute("alt", "post image");
  const postTitle = document.createElement("h2");
  postTitle.classList.add("post__title");
  postTitle.textContent = post.title;
  const postText = document.createElement("p");
  postText.classList.add("post__text");
  postText.textContent = post.text;
  const button = document.createElement("a");
  button.classList.add("button");
  button.setAttribute("href", post.link);
  button.textContent = "Read more";
  poster.append(postImage, postTitle, postText, button);
  return poster;
};

const createCards = posts => {
  const arr = [];
  posts.forEach(elem => arr.push(createPostCard(elem)));
  return arr;
};

const arrPosts = createCards(posts);
const container = document.querySelector(".container");

container.append(...arrPosts);

