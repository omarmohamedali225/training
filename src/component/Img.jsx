import img from "../assets/img/banner.jpg";
import { MdSecurity, MdVerified } from "react-icons/md";
import { BsFillHexagonFill } from "react-icons/bs";
import style from "../assets/sass/img.module.scss";
export default function Img() {
  return (
    <div className={style.img}>
      <img src={img} alt="" />
      <MdSecurity className={style.iconSecurity} />
      <MdVerified className={style.iconVerified} />
      <div className={style.hexa}>
        <BsFillHexagonFill className={style.iconHexa} />
        <span>12</span>
      </div>
    </div>
  );
}
