import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  console.log(installedApps, "installedApps");

  return (
    <div className="container mx-auto my-15">
      <h2 className="text-center mb-9 text-5xl font-bold">Installed Apps</h2>
      {installedApps.map((app, index) => {
        return (
          <div
            key={index}
            className="flex gap-4 items-center shadow p-4 rounded-md m-5 bg-slate-200"
          >
            <img src={app.image} className="h-[100px] w-auto" alt="" />
            <h2 className="text-xl font-bold">{app.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default InstallApps;
