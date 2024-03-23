import "../css/footer.css";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot-top">
        <div className="top-right">
          <div>
            <Logo />
          </div>
          {/* 1 */}
          <div className="useful-links about">
            <ul>
              <li>-</li>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
          </div>
          {/* 2 */}
          <div className="useful-links">
            <ul>
              <li className="list-head">Communities</li>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>
          {/* 3 */}
          <div className="useful-links">
            <ul>
              <li className="list-head">Useful links</li>
              <li>Support</li>
              <li>Web Player</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
        </div>
        {/* left */}
        <div className="logo">
          <div>
            <img src="../../assets/insta.svg" alt="" id="insta" />
          </div>
          <div>
            <img src="../../assets/twitter.svg" alt="" id="twitter" />
          </div>
          <div>
            <img src="../../assets/facebook.svg" alt="" id="facebook" />
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <div className="world">
          <img src="../../assets/world.svg" alt="World" />
          <p>India(English)</p>
        </div>

        <div className="copy">
          <ul>
            <li>Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
          </ul>
          <div>@ 2023 Spotify AB</div>
        </div>
        {/* end copy */}
      </div>
      {/* end of foot bottom */}
    </div>
  );
}
