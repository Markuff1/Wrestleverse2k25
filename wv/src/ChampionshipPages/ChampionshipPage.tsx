import "./ChampionshipStyle.css";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

type ChampionshipPageProps = {
  collectionId: string;
  bannerSrc: string;
};

const ChampionshipPage: React.FC<ChampionshipPageProps> = ({ collectionId, bannerSrc }) => {
  const [titleHolders, setTitleHolders] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const [date, setDate] = useState("");
  const [event, setEvent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<{ name: string; days: number; date: string; event: string }>({ name: "", days: 0, date: "", event: "" });

  const [longestReign, setLongestReign] = useState<any | null>(null);
  const [mostReigns, setMostReigns] = useState<{ names: string[]; count: number } | null>(null);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Wrestleverse", "ChampionshipData", collectionId));
    const records = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as any;

    const sorted = records.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setTitleHolders(sorted);

    calculateStats(records);
  };

  const calculateStats = (records: any[]) => {
    if (records.length === 0) {
      setLongestReign(null);
      setMostReigns(null);
      return;
    }

    // Longest reign
    const longest = records.reduce((prev, curr) => (curr.days > prev.days ? curr : prev));
    setLongestReign(longest);

    // Most reigns (multiple)
    const countMap: Record<string, number> = {};
    records.forEach(record => {
      countMap[record.name] = (countMap[record.name] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(countMap));
    const topNames = Object.entries(countMap)
      .filter(([_, count]) => count === maxCount)
      .map(([name]) => name);

    setMostReigns({ names: topNames, count: maxCount });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addRecord = async () => {
    if (name && days && date && event) {
      const newRecord = { name, days: Number(days), date, event };
      const docRef = await addDoc(collection(db, "Wrestleverse", "ChampionshipData", collectionId), newRecord);
      const newData = [{ id: docRef.id, ...newRecord }, ...titleHolders];
      setTitleHolders(newData);
      calculateStats(newData);
      setName("");
      setDays("");
      setDate("");
      setEvent("");
    }
  };

  const deleteRecord = async (id: string) => {
    await deleteDoc(doc(db, "Wrestleverse", "ChampionshipData", collectionId, id));
    const updated = titleHolders.filter(record => record.id !== id);
    setTitleHolders(updated);
    calculateStats(updated);
  };

  const startEdit = (record: any) => {
    setEditingId(record.id);
    setEditData({ name: record.name, days: record.days, date: record.date, event: record.event });
  };

  const saveEdit = async (id: string) => {
    const ref = doc(db, "Wrestleverse", "ChampionshipData", collectionId, id);
    await updateDoc(ref, editData);
    const updated = titleHolders.map(record => (record.id === id ? { id, ...editData } : record));
    setTitleHolders(updated);
    calculateStats(updated);
    setEditingId(null);
  };

  return (
    <div>
      <div className="ChampionshipBackground">
        <div className="ChampionshipContainer">
          <img className="TitleHeaderImage" src={bannerSrc} alt="Header Background" />

          {/* 🏆 Stats Display */}
          {(longestReign?.days > 0 || mostReigns) && (
            <>
              <div className="statstitle">Championship Stats</div>
              <div className="StatsContainer">
                {longestReign?.days > 0 && (
                  <div className="statcard">
                    🏅 <strong>Longest Reign</strong><br />
                    {longestReign.name}<br />
                    {longestReign.days} weeks
                  </div>
                )}
                {mostReigns && (
                  <div className="statcard">
                    👑 <strong>Most Reigns</strong><br />
                    {mostReigns.names.map(name => (
                      <div key={name}>👤 {name}</div>
                    ))}
                    {mostReigns.count} time{mostReigns.count > 1 ? "s" : ""}
                  </div>
                )}
              </div>
            </>
          )}


        <div className="reignstitle">Championship Reigns</div>

          <div className="InputContainer">
            <input type="text" placeholder="Name of Title Holder" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Length of Reign (Weeks)" value={days} onChange={(e) => setDays(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
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
                  {editingId === holder.id ? (
                    <>
                      <td><input className='editname' value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /></td>
                      <td><input className='editreign' type="number" value={editData.days} onChange={(e) => setEditData({ ...editData, days: Number(e.target.value) })} /></td>
                      <td><input className='editdate' type="date" value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} /></td>
                      <td><input className='editeventwon' value={editData.event} onChange={(e) => setEditData({ ...editData, event: e.target.value })} /></td>
                      <td>
                        <button className="savebutton" onClick={() => saveEdit(holder.id)}>Save</button>
                        <button className="cancelbutton" onClick={() => setEditingId(null)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{holder.name}</td>
                      <td>{holder.days}</td>
                      <td>{holder.date}</td>
                      <td>{holder.event}</td>
                      <td>
                        <button className="editbutton" onClick={() => startEdit(holder)}>Edit</button>
                        <button className="deletebutton" onClick={() => deleteRecord(holder.id)}>Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="statstitle">----</div>
        </div>
      </div>
    </div>
  );
};

export default ChampionshipPage;
