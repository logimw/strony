import React from "react"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import CookieConsent from "react-cookie-consent";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <section className="content">{children}</section>
      <Footer />
      <CookieConsent
          location="bottom"
          buttonText="Rozumiem"
          style={{ background: "rgba(0,0,0, .75)" }}
          >
        Nasz serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub wykorzystanie. Więcej informacji można znaleźć w naszej <a style={{textDecoration: "underline"}} href="https://www.neonail.pl/polityka-prywatnosci.html" target="_blank">Polityce prywatności</a>.
      </CookieConsent>
    </main>
  )
}

export default Layout
