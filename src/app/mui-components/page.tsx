import { MuiSelect } from "@/components/MuiSelect";
import { Box } from "@mui/material";
import { MuiAccordion } from "@/components/MuiAccordion";
import { MuiImagesList } from "@/components/MuiImagesList";
import { MuiMenu } from "@/components/MuiMenu";
import { MuiBreadcrumbs } from "@/components/MuiBreadcrumbs";
import { MuiBadge } from "@/components/MuiBadge";
import { MuiTooltip } from "@/components/MuiTooltip";
import { MuiTable } from "@/components/MuiTable";

const MuiComponents = () => {
  return (
    <Box flexGrow={1}>
      <Box mb={10}><MuiSelect /></Box>
      <Box mb={10}><MuiAccordion /></Box>
      <Box mb={10}><MuiImagesList /></Box>
      <Box mb={100}><MuiMenu /></Box>
      <Box mb={10}><MuiBreadcrumbs /></Box>
      <Box mb={10}><MuiBadge /></Box>
      <Box mb={10}><MuiTooltip /></Box>
      <Box mb={10}><MuiTable /></Box>
    </Box>
  );
};

export default MuiComponents;
