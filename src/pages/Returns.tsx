import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Returns = () => {
  const [returns, setReturns] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const snapshot = await getDocs(collection(db, "returns"));
      setReturns(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    load();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Returns Section</h2>
      <ul className="space-y-2">
        {returns.map(ret => (
          <li key={ret.id} className="bg-white p-4 rounded shadow">
            <p><strong>User:</strong> {ret.userId}</p>
            <p><strong>Component:</strong> {ret.component}</p>
            <p><strong>Return Date:</strong> {new Date(ret.returnDate).toLocaleString()}</p>
            <p><strong>Overdue:</strong> {ret.wasOverdue ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Returns;
