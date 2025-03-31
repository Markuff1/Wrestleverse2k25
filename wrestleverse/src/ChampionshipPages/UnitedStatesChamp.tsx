import "./ChampionshipStyle.css";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const UnitedStates: React.FC = () => {
  const [titleHolders, setTitleHolders] = useState<{ id: string; name: string; days: number; date: string; event: string }[]>([]);
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const [date, setDate] = useState("");
  const [event, setEvent] = useState("");

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Wrestleverse", "ChampionshipData", "UnitedStates"));
    const records = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as any;
    setTitleHolders(records);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addRecord = async () => {
    if (name && days && date && event) {
      const newRecord = { name, days: Number(days), date, event };
      const docRef = await addDoc(collection(db, "Wrestleverse", "ChampionshipData", "UnitedStates"), newRecord);
      setTitleHolders([{ id: docRef.id, ...newRecord }, ...titleHolders]);
      setName("");
      setDays("");
      setDate("");
      setEvent("");
    }
  };

  const deleteRecord = async (id: string) => {
    await deleteDoc(doc(db, "Wrestleverse", "ChampionshipData", "UnitedStates", id));
    setTitleHolders(titleHolders.filter(record => record.id !== id));
  };

  return (
    <div>
      <div className="ChampionshipBackground">
        <div className="ChampionshipContainer">
          <img className="TitleHeaderImage" src="src/Images/CBanners/USBanner.png" alt="Header Background" />

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

export default UnitedStates;