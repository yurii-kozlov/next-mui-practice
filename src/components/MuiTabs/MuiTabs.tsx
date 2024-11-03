'use client';

import { Favorite } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material';
import { useState } from 'react';

export const MuiTabs = () => {
  const [value, setValue] = useState<string>('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
          <TabList 
            aria-label='Tabs example'
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab label="TAB ONE" value="1" icon={<Favorite />} iconPosition="start"/>
            <Tab label="TAB TWO" value="2" disabled />
            <Tab label="TAB THREE" value="3" />
            <Tab label="TAB FOUR" value="4" />
            <Tab label="TAB FIVE" value="5" />
            <Tab label="TAB SIX" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Four</TabPanel>
        <TabPanel value="5">Panel Five</TabPanel>
        <TabPanel value="6">Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
};