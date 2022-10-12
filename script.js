const form1 = document.querySelector("#form1");
const log = document.querySelector("#log");

const form2 = document.querySelector("#form2");
const result = document.querySelector("#result");

form1.addEventListener("submit", (event) => {
  const data = new FormData(form1);
//   let output = "";
//   let fname = data.get('fname');
//   let lname = data.get('lname');
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let color = data.get('color');
//   for (const entry of data) {
//     output = `${output}${entry[0]}=${entry[1]}\r`;
//   };
//   output = `Hi ${fname} ${lname}, you want to change background color to ${color}?`;
//   log.innerText = output;
  if (confirm(`Hi ${fname} ${lname}, comfirm change background color to ${color}?`)) {
    document.querySelector("html").style.background=color;
  }

  event.preventDefault();
}, false);

form2.addEventListener("submit", (event) => {
    let output = "";
    let km = document.getElementById("km").value;
    let fare = 2700;
    m = km * 1000;
    if (m > 2000) {
        let dist = m - 2000
        let count = (dist - dist % 200)/200;

        if (count > 35) {
            fare += 35 * 190 + (count-35) * 130
        } else {
            fare += count * 190
        }
    }
    fare = fare / 100;
    result.innerText = `The fare is ${fare}`;
    event.preventDefault();
},false);