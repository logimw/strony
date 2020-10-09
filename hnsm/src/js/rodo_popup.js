const cookiePopup = document.querySelector("#cookie-popup");
const cookiePopupAcceptBtn = document.querySelector("#cookie-popup-btn");
const cookiesAcceptedLSkey = "cookiesAccepted";

const acceptCookies = () => {
  cookiePopup.style.display = "none";
  localStorage.setItem(cookiesAcceptedLSkey, true);
};

const areCookiesAccepted = () => localStorage.getItem(cookiesAcceptedLSkey);

const verifyCookiesPopup = () => {
  if (areCookiesAccepted()) {
    return;
  }
  cookiePopup.style.display = "block";
  cookiePopupAcceptBtn.addEventListener("click", acceptCookies);
};

verifyCookiesPopup();