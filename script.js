const form = document.querySelector("form");
const log = document.querySelector("#log123");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]}\r`;
  };
  log.innerText = output;
  event.preventDefault();
}, false);