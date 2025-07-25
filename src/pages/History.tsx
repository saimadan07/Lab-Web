import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const History = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const snapshot = await getDocs(collection(db, "history"));
      setHistory(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    load();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Activity History</h2>
      <ul className="space-y-2">
        {history.map(event => (
          <li key={event.id} className="bg-white p-4 rounded shadow">
            <p><strong>User:</strong> {event.userId}</p>
            <p><strong>Action:</strong> {event.action}</p>
            <p><strong>Date:</strong> {new Date(event.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
