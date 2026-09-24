import { useEffect, useState } from "react";

const useApps = () => {
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
      }, 1500);
    };
    fetchData();
  }, []);

  return { apps, loading };
};

export default useApps;
