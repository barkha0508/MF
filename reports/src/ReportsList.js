import React from 'react';
import styled from 'styled-components';

const ReportWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid black;
  margin: 0 auto;
  width: 300px;
`

const ReportTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`

const ReportDate = styled.p`
  font-size: 0.9em;
  color: #666;
  margin-bottom: 15px;
`

const ReportSummary = styled.p`
  color: #555;
`

export default function ReportsList() {
  return (
    <ReportWrapper>
      <ReportTitle>{"Health Report"}</ReportTitle>
      <ReportDate>{"Date: 15-04-2024"}</ReportDate>
      <ReportSummary>{"Wohaa Your blood reports look good"}</ReportSummary>
    </ReportWrapper>
  );
}





