import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { toast } from "react-toastify";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  // console.log(installedApps, "installedApps");

  const handleUninstall = (app) => {
    // console.log(app, "app");

    const restApps = installedApps.filter((iApp) => iApp.id != app.id);
    // console.log(restApps, "restApps");

    setInstalledApps(restApps);
    toast.error(`${app.title} is Uninstalled !`);
  };

  return (
    <div className="container mx-auto my-15">
      <h2 className="text-center mb-9 text-5xl font-bold">Installed Apps</h2>

      {installedApps.length === 0 ? (
        <div className="h-[50vh] flex justify-center items-center">
          <h2 className="text-2xl text-shadow-gray-300 font-semibold">
            No apps installed
          </h2>
        </div>
      ) : (
        installedApps.map((app, index) => {
          return (
            <div
              key={index}
              className="flex justify-between gap-4 items-center shadow py-4 px-6 rounded-md m-5 bg-slate-200"
            >
              <div className="flex items-center gap-6">
                <img src={app.image} className="h-[100px] w-auto" alt="" />
                <h2 className="text-xl font-bold">{app.title}</h2>
              </div>
              <div className="">
                <button
                  onClick={() => handleUninstall(app)}
                  className="btn btn-secondary"
                >
                  Uninstall
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstallApps;
