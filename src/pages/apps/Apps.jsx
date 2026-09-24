import { HashLoader } from "react-spinners";
import AppCard from "../../components/ui/AppCard";
import useApps from "../../hooks/useApps";

const Apps = () => {
  // create a hook and push all fetching codes & get (apps, loading)
  const { apps, loading } = useApps();

  return (
    <div className="container mx-auto my-20">
      {/* ---section header--- */}
      <div className="mb-5">
        <h2 className="text-center text-5xl font-bold pb-4">All Apps</h2>
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
          {apps.map((app, index) => (
            <AppCard key={index} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
