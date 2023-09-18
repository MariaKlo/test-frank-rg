const form = document.querySelector(".blog-form");
const blog = document.querySelector(".blog-item");
const titleBlog = document.querySelector(".post-title");
const textBlog = document.querySelector(".post-text");
const dateBlog = document.querySelector(".post-date");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let titleData = document.querySelector(".blog-input").value;
  let textData = document.querySelector(".blog-textarea").value;
  let date = new Date();

  window.localStorage.setItem("title", `${titleData}`);
  window.localStorage.setItem("text", `${textData}`);
  window.localStorage.setItem("time", `${date}`);

  blog.classList.add("show");
  const title = localStorage.getItem("title");
  const text = localStorage.getItem("text");
  const time = localStorage.getItem("time");

  titleBlog.textContent = title;
  textBlog.textContent = text;
  dateBlog.textContent = time;
});
