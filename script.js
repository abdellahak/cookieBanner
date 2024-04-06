let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let age = document.querySelector("#age");
let submitbtn = document.querySelector("#submitbtn");

let cookieduration = 30;

function checkCookie() {
  if (getCookie("cookie") == "true") {
    return true;
  } else {
    return false;
  }
}

submitbtn.addEventListener("click", () => {
  setCookie("firstname", firstname.value, 30);
  setCookie("lastname", lastname.value, 30);
  setCookie("age", age.value, 30);
});

function addCookieDatToForm() {
  firstname.value = getCookie("firstname");
  lastname.value = getCookie("lastname");
  age.value = getCookie("age");
}

function afficheCookies() {
  document.getElementById("cookies").style.display = "block";
}
function accepterCookies() {
  setCookie("cookie", "true", 30);
  document.getElementById("cookies").style.display = "none";
}

function refuserCookie() {
  document.getElementById("cookies").style.display = "none";
  document.querySelectorAll("form a")[0].style.display = "none";
  document.querySelectorAll("form a")[1].style.display = "none";
  clearCookiesData();
}

document.onload = loadCookie();

function loadCookie() {
  if (!checkCookie()) {
    setTimeout(afficheCookies, 1000);
  }
}

function setCookie(name, value, duration) {
  const date = new Date();
  date.setTime(date.getTime() + duration * 24 * 60 * 60 * 1000);
  let expirationdate = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; SameSite=None;${expirationdate}`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  let cDecoded = decodeURIComponent(document.cookie);
  let cookies = cDecoded.split("; ");
  let result = null;
  cookies.forEach((element) => {
    elementSplit = element.split("=");
    if (elementSplit[0] == name) {
      result = elementSplit[1];
    }
  });
  return result;
}

function clearCookiesData() {
  let cDecoded = decodeURIComponent(document.cookie);
  let cookies = cDecoded.split("; ");
  cookies.forEach((element) => {
    let singleCookie = element.split("=");
    document.cookie = `${singleCookie[0]}=;max-age=0; path=/`;
  });
}
