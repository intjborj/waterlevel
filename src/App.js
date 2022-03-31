import React, { useState, useEffect } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./Water.css";
import { Typography } from "antd";
import Waterlevel from "./Waterlevel";
import Waterlevel2 from "./Waterlevel2";
const { Title } = Typography;

function App() {
  const url = "http://172.16.15.152:8080/waterlevel";
  const url2 = "http://172.16.15.152:7000/waterlevel2";
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  function getData() {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  function getData2() {
    fetch(url2)
      .then((response) => response.json())
      .then((json) => setData2(json));
  }

  useEffect(() => {
    getData();
    getData2();
  }, [url],[url2]);
  console.log(data);
  console.log(data2);

  return (
    <div className="container">
      <div>
        <header className="header">
          <Title style={{ color: "white", textAlign: "center" }}>
            WATER LEVEL
          </Title>
        </header>
      </div>
      <div className="Tank1">
        <Waterlevel val={data.waterlevel} getDatas={getData} />
      </div>
      <div className="Tank2">
        <Waterlevel2 val2={data2.waterlevel2} getDatas2={getData2} />
      </div>
    </div>
  );
}

export default App;
