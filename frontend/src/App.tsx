import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3 className="py-3 text-primary">Dashboard</h3>
        <div className="row px-3 py-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Receita(caixa)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Receita(trimestral)</h5>
            <DonutChart />
          </div>  
        </div>
        <div className="py-3">
          <h4 className="text-secondary">Geração de Caixa</h4>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
