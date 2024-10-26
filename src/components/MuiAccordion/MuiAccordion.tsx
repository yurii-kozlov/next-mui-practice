'use client';

import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { StyledAccordion } from './MuiAccordion.styles';
import { useState } from 'react';
import { Panel } from '@/types/Panel';

export const MuiAccordion = () => {
  const [activePanel, setActivePanel] = useState<Panel | false>(Panel.Empty);

  const handlePanelChange = (isExpanded: boolean, panel: Panel): void => {
    setActivePanel(isExpanded ? panel : false)
  }

  return (
    <Box>
      <StyledAccordion expanded={activePanel === Panel.Panel1} onChange={(_event, isExpanded) => handlePanelChange(isExpanded, Panel.Panel1)}>
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h6">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident reprehenderit modi dolores ducimus nihil facere, commodi magni, similique illo expedita ex!
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={activePanel === Panel.Panel2} onChange={(_event, isExpanded) => handlePanelChange(isExpanded, Panel.Panel2)}>
        <AccordionSummary
          id='panel2-header'
          aria-controls='panel2-content'
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h6">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident reprehenderit modi dolores ducimus nihil facere, commodi magni, similique illo expedita ex!
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={activePanel === Panel.Panel3} onChange={(_event, isExpanded) => handlePanelChange(isExpanded, Panel.Panel3)}>
        <AccordionSummary
          id='panel3-header'
          aria-controls='panel3-content'
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h6">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident reprehenderit modi dolores ducimus nihil facere, commodi magni, similique illo expedita ex!
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  );
};