import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import useApps from "../../hooks/useApps";

const Dashboard = () => {
  const { installedApps } = useContext(InstalledAppsContext);

  const { apps } = useApps();

  const uninstalledAppsLength = apps.length - installedApps.length;

  const data = [
    { name: "Installed", value: installedApps.length, fill: "#8884d8" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#00C49F" },
  ];

  return (
    <div className="container mx-auto py-15">
      <h2 className="text-center font-bold text-5xl mb-9"> Dashboard</h2>
      <div className="flex flex-col justify-center items-center">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "200px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
