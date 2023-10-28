import * as React from "react";
import Box from "@mui/material/Box";
import { Button, FormLabel, Link, TextField, Typography} from "@mui/material";
import { grey } from "@mui/material/colors";
import Values from "../assets/images/Values.png";
import LoginIcon from "@mui/icons-material/Login";
import { PieChart } from '@mui/x-charts/PieChart';

function Bline() {
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
        <Typography>Bラインタスク達成状況</Typography>
        <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: '未達成' },
        { id: 1, value: 15, label: '達成済' },
      ],
    },
  ]}
  width={400}
  height={200}
/>
      </Box>
    </div>
  );
}

export default Bline;
