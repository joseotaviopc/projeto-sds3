import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3>SpringReact</h3>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
