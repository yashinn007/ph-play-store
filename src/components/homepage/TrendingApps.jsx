import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";
import useApps from "../../hooks/useApps";

const TrendingApps = () => {
  // create a hook and push all fetching codes & get (apps, loading)
  const { apps, loading } = useApps();

  return (
    <div className="pt-20 pb-10 container mx-auto">
      {/* ------------section header-------- */}
      <div className="mb-5">
        <h2 className="text-center text-5xl font-bold pb-4">Trending Apps</h2>
        <p className="text-center text-gray-600 ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
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
