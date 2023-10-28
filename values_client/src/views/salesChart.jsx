import * as React from "react";
import Box from "@mui/material/Box";
import { Button, FormLabel, Link, TextField, Typography} from "@mui/material";
import { grey } from "@mui/material/colors";
import Values from "../assets/images/Values.png";
import LoginIcon from "@mui/icons-material/Login";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';

function SalesChart() {
    const data = [
        { label: '日本フェンオール', value: 10 },
        { label: '日本コンラックス', value: 20 },
        { label: '富士電機', value: 50 },
        { label: 'EPSON', value: 5 },
        { label: '長野日本無線', value: 10 },
        { label: '飯田パルスモ', value: 5 },
      ];

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        component="form"
        style={{
          background:
            "linear-gradient(106.73deg, #B3E0FF 0.46%, #00DDDD 100.87%)",
          padding: "0 0 50px",
          alignItems: "center",
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
        <Typography>客先別当月売上額</Typography>
        <PieChart
      series={[
        {
          startAngle: 0,
          endAngle: 360,
          innerRadius: 30,
          paddingAngle: 5,
          cornerRadius: 5,
          cx: 150,
          cy: 150,
          arcLabel: (item) => `${item.value}%`,
          data,
        },
      ]}
      height={300}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
    />
      </Box>
    </div>
  );
}

export default SalesChart;
