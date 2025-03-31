import "./ChampionshipStyle.css";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Intercontinental: React.FC = () => {
  const [titleHolders, setTitleHolders] = useState<{ id: string; name: string; days: number; date: string; event: string }[]>([]);
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const [date, setDate] = useState("");
  const [event, setEvent] = useState("");

  // Fetch data from Firestore and sort by date (descending order)
  const fetchData = async () => {
    const q = query(collection(db, "Wrestleverse", "ChampionshipData", "Intercontinental"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    
    const records = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as any;
    
    setTitleHolders(records);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addRecord = async () => {
    if (name && days && date && event) {
      const newRecord = { name, days: Number(days), date, event };

      // Add new record to Firestore
      const docRef = await addDoc(collection(db, "Wrestleverse", "ChampionshipData", "Intercontinental"), newRecord);

      // Update local state while maintaining sorted order
      setTitleHolders([{ id: docRef.id, ...newRecord }, ...titleHolders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));

      // Clear input fields
      setName("");
      setDays("");
      setDate("");
      setEvent("");
    }
  };

  const deleteRecord = async (id: string) => {
    await deleteDoc(doc(db, "Wrestleverse", "ChampionshipData", "Intercontinental", id));
    setTitleHolders(titleHolders.filter(record => record.id !== id));
  };

  return (
    <div>
      <div className="ChampionshipBackground">
        <div className="ChampionshipContainer">
          <img className="TitleHeaderImage" src="src/Images/CBanners/ICBanner.png" alt="Header Background" />

          <div className="InputContainer">
            <input type="text" placeholder="Name of Title Holder" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Length of Reign (Weeks)" value={days} onChange={(e) => setDays(e.target.value)} />
            <input type="date" placeholder="Date Won" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="text" placeholder="Event Won At" value={event} onChange={(e) => setEvent(e.target.value)} />
            <button onClick={addRecord}>Add Record</button>
          </div>

          <table className="TitleHolderTable">
            <thead>
              <tr>
                <th>Name of Title Holder</th>
                <th>Length of Reign (Weeks)</th>
                <th>Date Won</th>
                <th>Event Won at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {titleHolders.map((holder) => (
                <tr key={holder.id}>
                  <td>{holder.name}</td>
                  <td>{holder.days}</td>
                  <td>{holder.date}</td>
                  <td>{holder.event}</td>
                  <td>
                    <button className="deletebutton" onClick={() => deleteRecord(holder.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Intercontinental;
