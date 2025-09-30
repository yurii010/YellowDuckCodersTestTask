import France from "../../assets/countries/France.png";
import Italy from "../../assets/countries/Italy.png";
import Germany from "../../assets/countries/Germany.png";
import Netherlands from "../../assets/countries/Netherlands.png";
import Spain from "../../assets/countries/Spain.png";
import Bird from "../../assets/icons/Bird.png";
import BasicDateCalendar from "./BasicDateCalendar";

const RightSide = () => {
  return (
    <div className="w-full md:w-auto flex flex-col gap-6">
      <div className="gray-border-bottom flex flex-col gap-4">
        <div className="py-2">
          <b className="text-[32px]">Обслуговуємо країни</b>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-4 items-center">
            <img src={France} alt="France" className="w-6 h-6 md:w-auto md:h-auto" />
            <span>Франція</span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Italy} alt="Italy" className="w-6 h-6 md:w-auto md:h-auto" />
            <span>Італія</span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Germany} alt="Germany" className="w-6 h-6 md:w-auto md:h-auto" />
            <span>Німеччина</span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Netherlands} alt="Netherlands" className="w-6 h-6 md:w-auto md:h-auto" />
            <span>Нідерланди</span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Spain} alt="Spain" className="w-6 h-6 md:w-auto md:h-auto" />
            <span>Іспанія</span>
          </div>
        </div>
        <div className="flex flex-row py-4 gap-3">
          <span className="primary-text-color">Усі країни</span>
          <img src={Bird} alt="Bird icon" className="w-5 h-5 md:w-auto md:h-auto" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="py-4">
          <b className="text-[32px]">Календар поїздок</b>
        </div>
        <div className="self-start w-full md:min-w-[350px] min-h-[400px] flex flex-col pt-5 pb-3 shadow-[0px_4px_4px_0px_#00000040] border border-[#D6DDEB]">
          <div className="w-full px-5">
            <button className="border border-[#CCCCF5] py-2 px-3 primary-text-color w-full">
              <b>+ Купити квиток</b>
            </button>
          </div>
          <BasicDateCalendar />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
