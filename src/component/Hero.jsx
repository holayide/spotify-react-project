import "../css/LandingPage.css";

export function HeroPage() {
  return (
    <div className="hero-page">
      <h3>Get Premium free for 1 month</h3>

      <p className="info">
        Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.
      </p>

      <div className="btns">
        <Buttons>GET STARTED</Buttons>
        <Buttons type="btn-primary">SEE OTHER PLANS</Buttons>
      </div>

      <p className="terms">
        <span>Terms and conditions apply.</span> 1 month free not available for
        users who have already tried Premium
      </p>
    </div>
  );
}

export function Buttons({ type, children }) {
  const types = type;
  return <button className={types ? types : "btn"}>{children}</button>;
}
