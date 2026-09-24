import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="card bg-base-100 shadow-sm pt-10">
      <figure>
        <img src={app.image} alt={app.title} className="h-[200px] w-auto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>
        <div className="flex justify-between items-center gap-4">
          <span className="bg-green-100 text-green-500 py-1 px-2 rounded-md flex gap-1 items-center">
            <FaDownload></FaDownload> {app.downloads}
          </span>
          <span className="py-1 px-2 rounded-md bg-yellow-100 text-yellow-500 flex gap-1 items-center">
            <FaStar></FaStar> {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
