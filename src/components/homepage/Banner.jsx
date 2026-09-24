import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import BannerImg from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="min-h-[80vh] container mx-auto">
      <h2 className=" text-6xl font-bold text-center pt-20">
        We Build <br />
        <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="text-center pt-4 text-lg text-gray-600">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br /> Our goal is to turn your ideas into digital experiences that
        truly make an impact.
      </p>
      <div className="flex justify-center gap-2 py-10">
        <button className="btn">
          <FaAppStoreIos /> App Store
        </button>
        <button className="btn">
          <FaGooglePlay /> Play Store
        </button>
      </div>
      <img src={BannerImg} alt="BannerImg" className="mx-auto" />
    </div>
  );
};

export default Banner;
