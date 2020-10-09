const popUp = document.querySelector(".pop-up");
const bannerBtm = document.querySelector(".foot-banner");

const getHeight = () => {
    const bannerHeight =  parseInt(window.getComputedStyle(bannerBtm).getPropertyValue("height"))
    console.log(bannerHeight);
    console.log(cookiePopup);
    cookiePopup.style.bottom = `${bannerHeight}px`
  }
  

const showPopUp = () => {
  popUp.style.display = "block";
  setTimeout(()=>{popUp.style.display = "none";bannerBtm.style.display = "block";} ,5000)
  const keyEsc = 27;
  const closePopUp = (evt) => {
    document.body.addEventListener(evt, e => {
      // console.log(e.target)
      if (e.keyCode === keyEsc) {
        popUp.style.display = "none";
      } else if (evt === "click" && e.target.className === "close") {
        popUp.style.display = "none";
      }
      bannerBtm.style.display = "block";
      // else if (e.target.className = "pop-up__container") {
        //   popUp.style.display = "none";
        // }
      })
    }
  closePopUp("click");
  closePopUp("keyup");
}



