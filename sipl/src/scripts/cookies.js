const cookiePopup = document.querySelector("#cookie-popup");
const cookiePopupAcceptBtn = document.querySelector("#cookie-popup-btn");
const cookiesAcceptedLSkey = "cookiesAccepted";

const acceptCookies = () => {
  cookiePopup.style.display = "none";
  localStorage.setItem(cookiesAcceptedLSkey, true);
  //setTimeout(showPopUp, 5000); // Można usunąć, jeśli nie potrzeba komunikatu wyświetlanego po zaakceptowaniu ciastek
};

const areCookiesAccepted = () => localStorage.getItem(cookiesAcceptedLSkey);

const verifyCookiesPopup = () => {
  if (areCookiesAccepted()) {
    // setTimeout(showPopUp, 5000); // Można usunąć, jeśli nie potrzeba komunikatu wyświetlanego po zaakceptowaniu ciastek
    return;
  }
  cookiePopup.style.display = "block";
  cookiePopupAcceptBtn.addEventListener("click", acceptCookies);
};

verifyCookiesPopup();
