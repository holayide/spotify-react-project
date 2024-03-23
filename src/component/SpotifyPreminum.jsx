import "../css/LandingPage.css";

const features = [
  {
    src: "../../assets/ad-free.svg",
    name: "Ad-free music listening",
    para: "Enjoy uninterupted music.",
  },
  {
    src: "../../assets/offline.svg",
    name: "Offline playback",
    para: "Save your data by listening offline.",
  },
  {
    src: "../../assets/play.svg",
    name: "Play everywhere",
    para: "Listen on your speakers, TV and other favorite devices.",
  },
  {
    src: "../../assets/pay.svg",
    name: "Pay your way",
    para: "Prepare with Paytm, UPI and more.",
  },
];

export function SpotifyPremium() {
  return (
    <div className="spotify-premium">
      <h1>The power of Premium</h1>
      <div className="options">
        {features.map((feature) => (
          <Options type={feature} />
        ))}
      </div>
    </div>
  );
}

function Options({ type }) {
  return (
    <div className="option">
      <img src={type.src} alt="img" />
      <div className="premium-para">
        <h3>{type.name}</h3>
        <p>{type.para}</p>
      </div>
    </div>
  );
}
