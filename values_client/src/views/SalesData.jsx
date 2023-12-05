import * as React from "react";
import Box from "@mui/material/Box";
import { Button, FormLabel, Link, TextField, Typography} from "@mui/material";
import { grey } from "@mui/material/colors";
import Values from "../assets/images/Values.png";
import LoginIcon from "@mui/icons-material/Login";
import { LineChart  } from '@mui/x-charts';

function SalesData() {
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
        <Typography>本日納品件数</Typography>
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
      </Box>
    </div>
  );
}

export default SalesData;
