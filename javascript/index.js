const toggle = document.getElementById("toggle");
const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
toggle.addEventListener('click', () => {
  if (toggle.checked == true) {
    basic.innerHTML = "<span>$</span> 199.99";
    professional.innerHTML = "<span>$</span> 249.99";
    master.innerHTML = "<span>$</span> 399.99";
  } else {
    basic.innerHTML = "<span>$</span> 19.99";
    professional.innerHTML = "<span>$</span> 24.99";
    master.innerHTML = "<span>$</span> 39.99";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  basic.innerHTML = "<span>$</span> 19.99";
    professional.innerHTML = "<span>$</span> 24.99";
    master.innerHTML = "<span>$</span> 39.99";
})
