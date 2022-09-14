import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid jof-footer">
      <div className="container jof-footer__container">
        <div className="row justify-content-between jof-footer__row">
          <div className="col-12 col-md-4 jof-footer__col">
            <h3 className="jof-footer__header mb-3">Contact info</h3>

            <address className="u-margin-bottom-small">
              <h4>Better Place Living Ltd</h4>
              1 Slate Lane, Nuneaton, <br />
              CV10 9FL United Kingdom. <br />
              <a href="tel:+440758-146-7406">0758 146 7406</a>
              <br />
              <a href="tel:+440782-888-7031">0782 888 7031</a>
              <br />
              <a href="mailto: info@betterplaceliving.co.uk">
                info@betterplaceliving.co.uk
              </a>
            </address>

            <div className="jof-footer__icons mb-5">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook jof-footer__icon"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram jof-footer__icon"></i>
              </a>
              <a
                href="https://twitter.com/BetterPlaceLiv1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter-square jof-footer__icon"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin jof-footer__icon"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 jof-footer__col">
            <h3 className="jof-footer__header">Useful links</h3>
            <ul className="jof-footer__list">
              <li className="jof-footer__item">
                <a as={Link} href="/about-us" className="jof-footer__link">
                  About us
                </a>
              </li>
              <li className="jof-footer__item">
                <a as={Link} href="/contact-us" className="jof-footer__link">
                  Contact us
                </a>
              </li>
              <li className="jof-footer__item">
                <a as={Link} href="/careers" className="jof-footer__link">
                  Careers
                </a>
              </li>
              <li className="jof-footer__item">
                <a as={Link} href="/privacypolicy" className="jof-footer__link">
                  Contract of service
                </a>
              </li>
              <li className="jof-footer__item">
                <a as={Link} href="/terms" className="jof-footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 jof-footer__col">
            <div className="jof-footer__logo-box">
              <img
                alt="logo-white"
                src="img/logo-white.png"
                className="jof-footer__logo"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="u-center-text footer__copyright">
            <i>Copyright &copy; 2022 BPL</i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
