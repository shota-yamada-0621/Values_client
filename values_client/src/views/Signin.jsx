import * as React from 'react'
import Box from '@mui/material/Box'
import { TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Values from '../assets/images/Values.png'

function SignIn() {
    
    return(
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Box
        component="form"
        style={{
            background: 'linear-gradient(106.73deg, #B3E0FF 0.46%, #00DDDD 100.87%)',
            padding: '0 0 50px',
            alignItems: 'center'}}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            boxShadow: 3,
            flexDirection: 'column',
            borderRadius: '30px',
            fontWeight: '700',
            gap: 3,
            width: '800px'
        }}
        bgcolor={grey}
        borderColor="primary"
        autoComplete='off'>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                 <img src={Values} alt='Logo' style={{maxWidth: '50%'}}/>
                </div>
                <TextField
                style={{
                width: '500px',
                }}
                InputLabelProps={{style: {fontFamily: 'Arial, sans-serif', fontSize: '18px'}}}
                required
                id="outlined-userid-input"
                label="社員ID"
                type="text"
                autoComplete="current-password"
                />
                <TextField
                required
                style={{
                    width: '500px',
                    }}
                    InputLabelProps={{style: {fontFamily: 'Arial, sans-serif', fontSize: '18px'}}}
                id="outlined-password-input"
                label="Password"
                type="Password"
                autoComplete="current-password"
                />
                
        </Box>
    </div>
    );
};

export default SignIn;