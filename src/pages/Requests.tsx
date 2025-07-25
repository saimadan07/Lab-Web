import { useEffect, useState } from "react";
import { fetchPendingRequests } from "../firebase/firestoreService";

const Requests = () => {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchPendingRequests();
      setRequests(data);
    };
    load();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Component Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <ul className="space-y-2">
          {requests.map((req) => (
            <li key={req.id} className="bg-white p-4 shadow rounded">
              <p><strong>User:</strong> {req.userId}</p>
              <p><strong>Component:</strong> {req.component}</p>
              <p><strong>Status:</strong> {req.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Requests;
