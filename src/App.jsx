import { useEffect, useState } from "react";
import { DataSheetGrid, textColumn } from "react-datasheet-grid";
import "react-datasheet-grid/dist/style.css";

// Define your row type anywher

function App() {
	// Type your data (not DSG specific)
	const [data, setData] = useState(["foo", "bar", "baz"]);
  const [columns, setColumns] = useState([textColumn]);

  const addColumns = () => {
    setColumns(prevColumns => [...prevColumns, textColumn]);
  };

	return (
		<div style={{width: "100vw"}}>
			<DataSheetGrid key={columns.length} value={data} onChange={setData} columns={columns} />
      <button onClick={addColumns}>algum butao</button>
    </div>
	);
}

export default App;
