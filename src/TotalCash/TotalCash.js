import React, { useEffect, useRef, } from 'react';
import * as d3 from 'd3';
import TotalCashHeader from './TotalHead';
import './TotalCash.css';


const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const data = [
            { month: "August", inValue: 45, outValue: 15 },
            { month: "Septmper", inValue: 58, outValue: 25 },
            { month: "October", inValue: 75, outValue: 30 },
            { month: "November", inValue: 40, outValue: 18 },
            { month: "December", inValue: 28, outValue: 10 },
            { month: "January", inValue: 20, outValue: 8 },]
        const width = 550;
        const height = 250;
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const svg = d3.select(chartRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')


        const xScale = d3.scaleBand()
            .domain(data.map(d => d.month))
            .range([0, width])
            .padding(0.68);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => Math.max(d.inValue, d.outValue))])
            .range([height, 0]);

        const barWidth = xScale.bandwidth() / 2;

        const bars = svg.selectAll('.barGroup')
            .data(data)
            .enter().append('g')
            .attr('class', 'barGroup')
            .attr('transform', d => `translate(${xScale(d.month)},0)`);

        bars.append('rect')
            .attr('class', 'inBar')
            .attr('y', d => yScale(d.inValue))
            .attr('width', barWidth)
            .attr('height', d => height - yScale(d.inValue))
            .attr('fill', 'rgb(2, 187, 125)')

            .attr('rx', 7)
            .attr('ry', 7);

        bars.append('rect')
            .attr('class', 'outBar')
            .attr('y', d => yScale(d.outValue))
            .attr('width', barWidth)
            .attr('height', d => height - yScale(d.outValue))
            .attr('fill', 'rgb(71, 183, 71)')

            .attr('rx', 7)
            .attr('ry', 7);

        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        svg.append('g')
            .call(d3.axisLeft(yScale));

    }, []);

    return (
        <>
            <div className='row TotalCash-layout'>
                <div className='col'>
                    <TotalCashHeader />
                    <div ref={chartRef} className='col'>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BarChart;
