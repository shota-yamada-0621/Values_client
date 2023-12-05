import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={300}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        skipAnimation={skipAnimation}
      />
      <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
        }
        label="skipAnimation"
        labelPlacement="end"
      />
      <Typography id="input-item-number" gutterBottom>
        当月基準予測売上
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={12}
        aria-labelledby="input-item-number"
      />
      <Typography id="input-series-number" gutterBottom>
        Number of series
      </Typography>
      <Slider
        value={seriesNb}
        onChange={handleSeriesNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        aria-labelledby="input-series-number"
      />
    </Box>
  );
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
};

const series = [
  {
    label: '日本フェンオール',
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: '日本コンラックス',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: '富士電機',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: 'EPSON',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: '長野日本無線',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: '飯田パルスモ',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: 'SB製作所',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: '東洋計器',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: '大和電機工業',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
  {
    label: '信菱電機',
    data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269
    ],
  },
].map((s) => ({ ...s, highlightScope }));