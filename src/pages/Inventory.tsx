import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Inventory = () => {
  const [components, setComponents] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const snapshot = await getDocs(collection(db, "inventory"));
      setComponents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    load();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Inventory</h2>
      <ul className="space-y-2">
        {components.map(item => (
          <li key={item.id} className="bg-white p-4 rounded shadow">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Available:</strong> {item.available} / {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
