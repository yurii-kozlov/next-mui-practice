import { MuiSelect } from "@/components/MuiSelect";
import { Box } from "@mui/material";
import { MuiAccordion } from "@/components/MuiAccordion";
import { MuiImagesList } from "@/components/MuiImagesList";

const MuiComponents = () => {
  return (
    <Box flexGrow={1}>
      <Box mb={10}><MuiSelect /></Box>
      <Box mb={10}><MuiAccordion /></Box>
      <Box mb={10}><MuiImagesList /></Box>
    </Box>
  );
};

export default MuiComponents;
