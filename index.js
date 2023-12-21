let api;
let monys = document.querySelectorAll(".monyMun ul li");
let inp = document.querySelectorAll("input");
let inpdiv = document.querySelectorAll(".namMon div");
fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2d99186803994185b445be11c928e68c"
)
  .then((e) => {
    if (e.status != 200) {
      document.querySelector(".titr").innerHTML = "Connection Error";
      document.querySelector(".titr").style.color = "red";
    }
    return e.json();
  })
  .then((e) => {
    api = e;
  });
monys.forEach((e) => {
  e.addEventListener("click", () => {
    inpdiv[1].innerHTML = e.innerHTML;
    inp[1].value = transform(e.innerHTML).toFixed(2);
  });
});
function transform(mon) {
  return api["rates"][mon] * inp[0].value;
}
inp[0].addEventListener("input", () => {
  inp[1].value = transform(inpdiv[1].innerHTML).toFixed(2);
});
inp[1].addEventListener("input", () => {
  inp[0].value = (inp[1].value / api["rates"][inpdiv[1].innerHTML]).toFixed(2);
});
