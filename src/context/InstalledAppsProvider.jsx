import { useState } from "react";
import { InstalledAppsContext } from "./InstalledAppsContext";

const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const data = {
    installedApps,
    setInstalledApps,
  };
  return (
    <InstalledAppsContext.Provider value={data}>
      {children}
    </InstalledAppsContext.Provider>
  );
};

export default InstalledAppsProvider;
