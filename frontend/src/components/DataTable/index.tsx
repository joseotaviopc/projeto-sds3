import * as React from "react";

function DataTable() {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Receita Oper.</th>
            <th>Despesa Oper.</th>
            <th>Resultado Fin.</th>
            <th>Geração de Caixa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Janeiro</td>
            <td>111.810</td>
            <td>-75.352</td>
            <td>-11.024</td>
            <td>25.433</td>
          </tr>
          <tr>
            <td>Fevereiro</td>
            <td>32.657</td>
            <td>-26.157</td>
            <td>-2.064</td>
            <td>4.436</td>
          </tr>
          <tr>
            <td>Março</td>
            <td>76.495</td>
            <td>-40.345</td>
            <td>-12.641</td>
            <td>23.510</td>
          </tr>
          <tr>
            <td>Abril</td>
            <td>46.212</td>
            <td>-33.711</td>
            <td>-5.504</td>
            <td>6.997</td>
          </tr>
          <tr>
            <td>Maio</td>
            <td>73.470</td>
            <td>-64.430</td>
            <td>-6.467</td>
            <td>2.573</td>
          </tr>
          <tr>
            <td>Junho</td>
            <td>66.304</td>
            <td>-57.276</td>
            <td>-2.165</td>
            <td>6.864</td>
          </tr>
          <tr>
            <td>Julho</td>
            <td>57.795</td>
            <td>-51.792</td>
            <td>-6.499</td>
            <td>-497</td>
          </tr>
          <tr>
            <td>Agosto</td>
            <td>52.157</td>
            <td>-47.086</td>
            <td>-3.227</td>
            <td>1.844</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
