import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";


const chartSetting = {
  xAxis: [
    {
      label: '発生件数'
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
    
  {
    seoul: 1,
    client: 'EPSON',
  },
  {
    seoul: 28,
    client: '日本フェンオール',
  },
  {
    seoul: 41,
    client: '日本コンラックス',
  },
  {
    seoul: 73,
    client: '長野日本無線',
  },
  {
    seoul: 99,
    client: 'VAIO',
  },
  {
    seoul: 319,
    client: '象印マホービン',
  },
  {
    seoul: 249,
    client: 'SB製作所',
  },
  {
    seoul: 131,
    client: '東邦電機',
  },

];

const valueFormatter = (value) => `${value}mm`;

export default function HorizontalBars() {
  return (
    <Box
    component="form"
    style={{
      background:
        "linear-gradient(106.73deg, #B3E0FF 0.46%, #00DDDD 100.87%)",
      padding: "0 0 50px",
      alignItems: "center",
      margin: "0px 0px 0px 15px",
    }}
    sx={{
      display: "flex",
      justifyContent: "center",
      boxShadow: 3,
      flexDirection: "column",
      borderRadius: "30px",
      width: "500px",
      padding: "40px",
    }}
    bgcolor={grey}
    borderColor="primary"
    autoComplete="off"
  >
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'client' }]}
      series={[{ dataKey: 'seoul', label: '客先別当月流出不良件数', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
    </Box>
  );
}