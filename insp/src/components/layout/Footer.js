import React from 'react'
import {GrFacebook, GrInstagram} from 'react-icons/gr';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto h-full">
                <div className="flex h-full flex-wrap">
                    <div className="footer__col">
                        <h5>Odwiedź e-sklep:</h5>
                        <a href="https://neonail.pl/" target="_blank" rel="noopener noreferrer">
                            <img className="h-10" src={require("../../images/logo.png")} alt="" />
                        </a>
                    </div>
                    <div className="footer__col">
                        <h5>Obserwuj nas na:</h5>
                        <div className="footer__social">
                            <a href="https://www.facebook.com/neonailpl/" target="_blank" rel="noopener noreferrer">
                                <figure className="footer__ico">
                                    <GrFacebook />
                                </figure>
                            </a>
                            <a href="https://instagram.com/neonailpoland/" target="_blank" rel="noopener noreferrer">
                                <figure className="footer__ico">
                                    <GrInstagram />
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div className="footer__col">
                        <h5>Strona:</h5>
                        <ul className="footer__navigation">
                            <li><Link to ="/">Start</Link></li>
                            <li><Link to="/sprawdz">Sprawdź Inspiracje</Link></li>
                            <li><Link to="/dodaj-inspiracje">Dodaj Inspirację</Link></li>
                            <li><Link to="/abc-inspiracji">ABC Inspiracji</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
