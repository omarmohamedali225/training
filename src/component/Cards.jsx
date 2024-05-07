import { CiStar } from "react-icons/ci";
import img from "../assets/img/banner.jpg";
import style from "../assets/sass/card.module.scss";
export default function Card() {
  console.log(style);
  return (
    <div className={style.box}>
      <header>
        <img src={img} alt="" />
        <h1>Mailchimp</h1>
        <CiStar className={style.icon} />
      </header>
      <div className={style.content}>
        <h1>Website Designer Required For Directory Theme</h1>
        <p>$125k-$135k Hourly</p>
        <span>1-5 days</span> <span>expensive</span> <span>remote</span>
      </div>
    </div>
  );
}
