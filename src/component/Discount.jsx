import "../css/LandingPage.css";
import { Buttons } from "./Hero";

export default function Discount() {
  return (
    <div className="special">
      <div className="special-discount">
        <h3>Special discount for eligible students in university</h3>
        <Buttons type="btn-white">LEARN MORE</Buttons>
      </div>
    </div>
  );
}
