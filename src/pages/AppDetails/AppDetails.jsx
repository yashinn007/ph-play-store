import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { FaDownload, FaStar } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const AppDetails = () => {
  //get url AppDetals-id using useParams()
  const { id } = useParams();
  // console.log("id:", id);
  const { apps, loading } = useApps();

  // get installed app data from context
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const handelInstallApp = () => {
    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.title} is installed!`);
  };

  //  display loading
  if (loading) {
    return (
      <div className="h-[40vh] flex justify-center items-center">
        <HashLoader color="#ad46ff" />
      </div>
    );
  }

  // after loading find single app from the array
  const expectedApp = apps.find((app) => app.id === Number(id));

  return (
    <div>
      <div className="container mx-auto flex py-15 gap-6 justify-center">
        <img src={expectedApp.image} className="h-[200px] w-auto" />
        <div className="p-6 w-6/10">
          <h2 className="text-4xl font-bold">{expectedApp.title}</h2>
          <p className="text-gray-500 mt-3 font-semibold">
            Developed bt:{" "}
            <span className="text-purple-500">{expectedApp.companyName}</span>
          </p>
          <div className="flex border-t border-gray-300 pt-5 my-5 gap-9">
            <span className="flex flex-col justify-center items-center">
              <FaDownload className="text-3xl text-purple-400" />
              <p className="text-gray-500">Downloads</p>
              <h4 className="text-2xl font-bold">{expectedApp.downloads}</h4>
            </span>
            <span className="flex flex-col justify-center items-center">
              <FaStar className="text-3xl text-purple-400" />
              <p className="text-gray-500">Average Ratings</p>
              <h4 className="text-2xl font-bold">{expectedApp.ratingAvg}</h4>
            </span>
            <span className="flex flex-col justify-center items-center">
              <FaDownload className="text-3xl text-purple-400" />
              <p className="text-gray-500">Total Reviews</p>
              <h4 className="text-2xl font-bold">{expectedApp.reviews}</h4>
            </span>
          </div>
          <button
            onClick={handelInstallApp}
            className="btn btn-accent text-white"
          >
            Install Now ({expectedApp.size}MB)
          </button>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-45">
          <p className="text-gray-500">
            <span className="font-semibold text-black">Description:</span>{" "}
            {expectedApp.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
