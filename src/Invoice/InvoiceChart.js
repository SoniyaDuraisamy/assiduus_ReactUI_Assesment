import './Invoice.css';

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setInvoice } from "../redux/action/MonthlyReportAction";
import * as d3 from 'd3';
import ErrorModal from '../ErrorModal';

const Invoice = (props) => {
  const InvoiceRef = useRef(null);
  let dispatch = useDispatch();

  const invoiceData = [
    { id: 1, value: 45, name: "August" },
    { id: 2, value: 90, name: "Septmper" },
    { id: 3, value: 50, name: "October" },
    { id: 4, value: 30, name: "November" },
    { id: 5, value: 70, name: "December" },
    { id: 6, value: 20, name: "January" },
   
  ]
  dispatch(setInvoice(invoiceData));

  let Invoice = useSelector((state) => state.allReport.Invoice);
  useEffect(() => {
    const width = 550;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    document.querySelector('.invoice-chart').innerHTML = "";
    const svg = d3.select(InvoiceRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
    
    const xScale = d3.scaleBand()
      .domain(Invoice.map(element => element.name))
      .range([0, width])
      .padding(0.85);


    const yScale = d3.scaleLinear()
      .domain([0, d3.max(Invoice.map(element => element.value))])
      .range([height, 0]);

    svg.selectAll('rect')
      .data(Invoice.map(element => element.value))
      .enter().append('rect')
      .attr('x', (d, i) => xScale(Invoice[i].name))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      .attr('fill', 'rgb(63, 189, 59)')
      .attr('rx', 8) 
      .attr('ry', 8);
    svg.selectAll('rect')
      .data(Invoice.map(element => element.value))
      .enter().append('rect')
      .attr('x', (d, i) => xScale(Invoice[i].name))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      .attr('fill', 'rgb(63, 189, 59)')
      .attr('rx', 8) 
      .attr('ry', 8);
  
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, []);

  let [error, setError] = useState(false)
  let buttonHandler = () => {
    setError(!error);
  }

  return (
    <>
      <div className="row Invoice-Latout">
        <div className="row align-items-start Invoice-start ">
          <div className="col Header-space" >
            <h6>Invoices owed to you</h6>
          </div>
          <div className="col Header-space input-in">
            <button className="Invoice-input" onClick={buttonHandler}> New Sales Invoice</button>
          </div>
        </div>
        <hr />
        <div className=" align-items-end invoice-end"></div>
        <div className='invoice-chart' ref={InvoiceRef}></div>
      </div>
      {error && <ErrorModal modalShow={error} />}
    </>
  );
};
export default Invoice;