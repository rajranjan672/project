import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MovieIcon from '@mui/icons-material/Movie';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Movies from './Movies';
import FoodRecipies from './FoodRecipies';
import Travel from './Travel';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth"  color="secondary" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<MovieIcon />} {...a11yProps(0)} />
          <Tab icon={<FastfoodIcon />} {...a11yProps(1)} />
          <Tab icon={<BeachAccessIcon />} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Movies />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FoodRecipies />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Travel />
      </CustomTabPanel>
    </Box>
  );
}