import { useEffect, useState } from "react";
import { watchUsers } from "../firebase/firestoreService";

const Overview = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const unsubscribe = watchUsers((data) => {
      setUserCount(data.length);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Dashboard Overview</h2>
      <div className="mt-4 bg-white p-4 rounded shadow">
        <p>Total Users: {userCount}</p>
        {/* Add cards here for Requests, Returns, etc. */}
      </div>
    </div>
  );
};

export default Overview;
