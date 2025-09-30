import Facebook from "../../assets/icons/Facebook.png";
import Twitter from "../../assets/icons/Twitter.png";
import sprinter1 from "../../assets/buses/sprinter1.png";
import sprinter2 from "../../assets/buses/sprinter2.png";
import sprinter3 from "../../assets/buses/sprinter3.png";

const LeftSide = () => {
  return (
    <div className="w-full md:w-auto max-w-[800px] flex flex-col gap-6">
      <div className="flex flex-col">
        <div className="py-2">
          <b className="text-[32px]">Опис перевізник</b>
        </div>
        <span className="gray-text text-sm md:text-base">
          Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept
          payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new
          business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is
          a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical
          problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms
          to prevent fraud.
        </span>
      </div>
      <div className="py-5 flex flex-col gap-3">
        <div className="py-2">
          <b className="text-[32px]">Ми у соц. мережах</b>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-row div-border-color p-2 items-center gap-2">
            <img src={Twitter} alt="Twitter" className="w-5 h-5 md:w-auto md:h-auto" />
            <span className="text-[16px] primary-text-color break-words">twitter.com/stripe</span>
          </div>
          <div className="flex flex-row div-border-color p-2 items-center gap-2">
            <img src={Facebook} alt="Facebook" className="w-5 h-5 md:w-auto md:h-auto" />
            <span className="text-[16px] primary-text-color break-words">facebook.com/StripeHQ</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src={sprinter1} alt="Sprinter 1" className="w-full md:w-auto" />
        <img src={sprinter2} alt="Sprinter 2" className="w-full md:w-auto" />
        <img src={sprinter3} alt="Sprinter 3" className="w-full md:w-auto" />
      </div>
    </div>
  );
};

export default LeftSide;
