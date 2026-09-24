import { useEffect, useState } from "react";
import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  // ----loading--ui--
  const [loading, setLoading] = useState(true);

  // ----fetch data----
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      //   console.log(data);
      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 3000);
    };
    fetchData();
  }, []);

  //   console.log("apps:", apps);
  // console.log("loading:", loading);

  return (
    <div className="pt-20 pb-10 container mx-auto">
      {/* ---section header--- */}
      <div>
        <h2 className="text-center text-5xl font-bold pb-4">Trending Apps</h2>
        <p className="text-center text-gray-600 ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      Total Apps: {apps.length}
      {/* ------------card container---------- */}
      {loading ? (
        <div className="h-[40vh] flex justify-center items-center">
          <HashLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {apps.slice(0, 9).map((app, index) => (
            <AppCard key={index} app={app}></AppCard>
          ))}
        </div>
      )}
      {/* ----------view all btn--------- */}
      {loading ? (
        ""
      ) : (
        <div className="text-center pt-10">
          <Link to={"/apps"}>
            <button className="btn btn-primary">View All</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TrendingApps;
