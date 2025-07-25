import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  query,
  where
} from "firebase/firestore";
import { db } from "./firebaseConfig";

// Fetch total users count
export const fetchTotalUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.size;
};

// Real-time users count
export const watchTotalUsers = (cb: (count: number) => void) =>
  onSnapshot(collection(db, "users"), (snap) => cb(snap.size));

// Similarly, for other collections:
export const watchCollection = (name: string, cb: (docs: any[]) => void) =>
  onSnapshot(collection(db, name), (snap) =>
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );

// Example: fetch pending requests
export const fetchPendingRequests = async () => {
  const q = query(collection(db, "requests"), where("status", "==", "pending"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};
