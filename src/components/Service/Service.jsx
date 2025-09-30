import fan from "../../assets/service-icons/fan.png";
import wifi from "../../assets/service-icons/wifi.png";
import monitor from "../../assets/service-icons/monitor.png";
import wc from "../../assets/service-icons/wc.png";
import weekend from "../../assets/service-icons/weekend.png";
import hands from "../../assets/service-icons/hands.png";
import "./index.css";

const Service = () => {
  return (
    <div className="px-2 md:px-12 py-20 flex flex-col">
      <b className="text-[32px] pb-1">Сервіс</b>
      <span className="gray-text">Найкращі умови для вашого комфорту</span>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 pt-6 justify-between">
        <div className="service-div-text flex flex-col items-center gap-2">
          <img src={fan} alt="fan icon" />
          <b>Кондиціонер</b>
        </div>
        <div className="service-div-text flex flex-col items-center gap-2">
          <img src={wifi} alt="wifi icon" />
          <b>Wi-Fi</b>
        </div>
        <div className="service-div-text flex flex-col items-center gap-2">
          <img src={monitor} alt="tv icon" />
          <b>TV</b>
        </div>
        <div className="service-div-text flex flex-col items-center gap-2">
          <img src={wc} alt="wc icon" />
          <b>Туалет</b>
        </div>
        <div className="service-div-text flex flex-col items-center gap-2">
          <img src={weekend} alt="sofa icon" />
          <b>Зручні сидіння</b>
        </div>
        <div className="service-div-text flex flex-col items-center gap-2">
          <img src={hands} alt="hands icon" />
          <b>Перевозимо тварин</b>
        </div>
      </div>
    </div>
  );
};

export default Service;
