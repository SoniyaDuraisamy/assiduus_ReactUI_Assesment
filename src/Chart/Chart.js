import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReport, findIndexCount } from "../redux/action/MonthlyReportAction"
import * as d3 from 'd3';
import "./Chart.css";
const SmoothLineGraph = (props) => {
  const chartRef = useRef(null);
  const dispatch = useDispatch();
  let [findIndex, setFindIndex] = useState(0);
  const originalData = [
    { x: 0, y: 7 },
    { x: 1, y: 5 },
    { x: 2, y: 8 },
    { x: 3, y: 3 },
    { x: 4, y: 7 },
    { x: 5, y: 1 },
    { x: 6, y: 2 },
    { x: 7, y: 8 },
  ];

  const randomizedData = originalData.map((point) => ({
    x: point.x,
    y: Math.floor(Math.random() * 10), 
  }));

  console.log(randomizedData, "++++++++++++++++++++++++++++++++++");

  props.callBack(findIndex);
  dispatch(setReport(randomizedData))
  let datas = useSelector((state) => state.allReport.Report)
  const selectHandler = (e) => {
    document.querySelector('.draw-chart').innerHTML = "";
    setFindIndex(e.target.querySelector('select option:checked').getAttribute('value'));
  }

  const manageHandler = (e) => {
    document.querySelector('.draw-chart').innerHTML = "";
    setFindIndex(findIndex + 1);
  }
  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const width = 585;
    const height = 300;

    const xScale = d3.scaleLinear().range([0, width]).domain([0, d3.max(datas, d => d.x)]);
    const yScale = d3.scaleLinear().range([height, 0]).domain([0, d3.max(datas, d => d.y)]);
    const line = d3.line()
      .curve(d3.curveBasis) 
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));


    svg.append('path')
      .data([datas])
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#3fbd3b');
    svg.append('g')
      .attr('transform', `translate(10, 280)`)
      .call(d3.axisBottom(xScale).tickValues([0, 1, 2, 3, 4, 5, 6]));

    svg.append('g')
      .call(d3.axisLeft(yScale));


  }, [findIndex]);

  const mystyle = {
    color: "black",
    backgroundColor: "white",
    border: "1px solid gray",
  };

  return (
    <>
      <div className='row chart-Layout' >
        <div className="col Heading-Row">
          <div className="col Header">
            <h6>Checking account </h6>
          </div>
          <div className='btn-layout'>
            <select class="form-select" onClick={manageHandler}>
              <option value="0" selected>Manage</option>
            </select>
          </div>
          <div>
            <select class="form-select" onChange={selectHandler}>
              <option value="0" selected>January</option>
              <option value="1">Feb</option>
            </select>
          </div>
        </div>
        <hr />
        <svg className="draw-chart" ref={chartRef} width="600" height="500"></svg>
      </div>
    </>
  );
};

export default SmoothLineGraph;
