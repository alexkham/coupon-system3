import React from "react";
import "./Table.css";

const data = require("./data.json");

const Table2 = () => {
  const dataImport = data[0];

  function renderHeaderCells() {
    let headerCells = [];

    Object.keys(dataImport).map((x, i) => {
      let items = Object.values(dataImport)[i];
      headerCells.push(
        <th colSpan={Object.keys(items).length} key={i.name}>
          {x}
        </th>
      );
      return headerCells;
    });
    return headerCells;
  }

  function renderSubHeaders() {
    let subHeaders = [];
    let subs = Object.values(dataImport);

    subs.map((x, i) => {
      if (subs[i] !== undefined) {
        Object.keys(subs[i]).map(y => {
          subHeaders.push(<td>{y}</td>);
          return subHeaders;
        });
      }
      return subHeaders;
    });
    return subHeaders;
  }

  function renderResults() {
    let results = [];
    let res = Object.values(dataImport);

    res.map((x, i) => {
      if (res[i] !== undefined) {
        Object.values(res[i]).map(y => {
          results.push(<td>{y}</td>);
          return results;
        });
      }
      return results;
    });

    return results;
  }

  return (
    <React.Fragment>
      <p>Fruit Basket</p>
      <table>
        <thead>
          <tr>{renderHeaderCells()}</tr>
        </thead>
        <tbody>
          <tr>{renderSubHeaders()}</tr>
          <tr>{renderResults()}</tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table2;
