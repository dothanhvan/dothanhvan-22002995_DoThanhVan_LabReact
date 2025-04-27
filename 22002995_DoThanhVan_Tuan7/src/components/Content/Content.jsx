import { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Overview from "../Overview/Overview";
import "./Content.css";

function Content() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch("https://67deba96471aaaa742856ccc.mockapi.io/data/v1/Customers")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content-container">
      <div>
        <Overview></Overview>
        <DataTable items={items} fetchData={fetchData}></DataTable>
        {loading && <p style={{ paddingLeft: "10px" }}>Loading table....</p>}
      </div>
    </div>
  );
}

export default Content;
