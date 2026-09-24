import { FaDownload, FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm pt-10">
      <figure>
        <img src={app.image} alt={app.title} />
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
    </div>
  );
};

export default AppCard;
