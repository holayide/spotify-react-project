import Discount from "./Discount";
import { Buttons } from "./Hero";

const devices = [
  "../../assets/upi.svg",
  "../../assets/paytm.svg",
  "../../assets/visa.svg",
  "../../assets/master.svg",
  "../../assets/amex.svg",
  "../../assets/diners.svg",
];

export default function PremiumOptions() {
  return (
    <section className="premium-options">
      <h2>Pick your Premium</h2>
      <p>Listen without limits on your phone, speaker, and other devices.</p>

      <div className="devices">
        {devices.map((device) => (
          <DevicesImg device={device} />
        ))}
      </div>

      <div className="cards">
        <Cards
          free="null"
          title="Mini"
          price="From ₹7/day"
          acct="1 account on mobile only"
          lists={[
            "Ad-free music listening on mobile",
            "Group Session",
            "Download 30 songs on 1 mobile device",
          ]}
        />

        <Cards
          title="Individual"
          price="₹119/month after offer period"
          acct="1 account"
          lists={[
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device on 5 devices",
          ]}
        />

        <Cards
          title="Duo"
          price="₹149/month after offer period"
          acct="2 accounts"
          lists={[
            "For couples who live together",
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device, on 5 devices per account",
          ]}
        />

        <Cards
          title="2 accounts"
          price="₹179/month after offer period"
          acct="Up to 6 accounts"
          lists={[
            "For family who live together",
            "Block explicit music",
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device on 5 devices",
          ]}
        />
      </div>

      <Discount />
    </section>
  );
}

function DevicesImg({ device }) {
  return (
    <>
      <img src={device} alt="Devices Images" />
    </>
  );
}

function Cards({ free, title, price, acct, lists }) {
  return (
    <div className="card">
      <div className="inner-card">
        <div className="header-card">
          <div className={free ? null : "free"}>
            {free ? null : "1 month free"}
          </div>
          <div className="plans">
            <p>One-time plans available</p>
          </div>
          <h4>{title}</h4>
          <p className="days">{price}</p>
          <p className="days">{acct}</p>
        </div>

        <div className="list">
          <ul>
            {lists.map((list) => (
              <>
                <li>
                  <img src="../../assets/frame.svg" alt="" />
                  {list}
                </li>
              </>
            ))}
          </ul>
          <div className="btn-view">
            <Buttons type="btn-secondary">View Plans</Buttons>
          </div>
        </div>
      </div>

      <div className="foot">
        <div>
          <hr className="hr-line" />
          <div className="content">
            <a href="#/">Terms and conditions apply</a>
            {free
              ? null
              : "1 month free not avaliable for users who already tried Premium"}
          </div>
        </div>
      </div>
    </div>
  );
}
