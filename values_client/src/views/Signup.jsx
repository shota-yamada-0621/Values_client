import * as React from "react";
import Box from "@mui/material/Box";
import { Button, FormLabel, Link, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Values from "../assets/images/Values.png";
import LoginIcon from "@mui/icons-material/Login";

function SignUp() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        component="form"
        style={{
          background:
            "linear-gradient(106.73deg, #FFE5B4 0.46%, #FFA500 100.87%)",
          padding: "0 0 50px",
          alignItems: "center",
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          boxShadow: 3,
          flexDirection: "column",
          borderRadius: "30px",
          fontWeight: "700",
          gap: 3,
          width: "800px",
          padding: "40px",
        }}
        bgcolor={grey}
        borderColor="primary"
        autoComplete="off"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Values} alt="Logo" style={{ maxWidth: "50%" }} />
        </div>
        <FormLabel style={{ fontSize: "40px" }}>新規登録</FormLabel>
        <TextField
          style={{
            width: "500px",
          }}
          InputLabelProps={{
            style: { fontFamily: "Arial, sans-serif", fontSize: "18px" },
          }}
          required
          id="outlined-userid-input"
          label="社員IDを入力してください"
          type="text"
          autoComplete="current-password"
        ></TextField>
        <TextField
          style={{
            width: "500px",
          }}
          InputLabelProps={{
            style: { fontFamily: "Arial, sans-serif", fontSize: "18px" },
          }}
          required
          id="outlined-userid-input"
          label="氏名を入力してください"
          type="text"
          autoComplete="current-password"
        ></TextField>        
        <TextField
          style={{
            width: "500px",
          }}
          InputLabelProps={{
            style: { fontFamily: "Arial, sans-serif", fontSize: "18px" },
          }}
          required
          id="outlined-userid-input"
          label="emailアドレスを入力してください"
          type="email"
          autoComplete="current-password"
        ></TextField>        
        <TextField
          required
          style={{
            width: "500px",
          }}
          InputLabelProps={{
            style: { fontFamily: "Arial, sans-serif", fontSize: "18px" },
          }}
          id="outlined-password-input"
          label="Passwordを入力してください"
          type="Password"
          autoComplete="current-password"
        />
        <TextField
          required
          style={{
            width: "500px",
          }}
          InputLabelProps={{
            style: { fontFamily: "Arial, sans-serif", fontSize: "18px" },
          }}
          id="outlined-password-input"
          label="(確認用)Passwordを入力してください"
          type="Password"
          autoComplete="current-password"
        />        
        <Button
          variant="contained"
          size="medium"
          style={{
            width: "300px",
          }}
        >
          登録
        </Button>
      </Box>
    </div>
  );
}

export default SignUp;