"use client";

import { InputLabel, Select } from "@mui/material";
import { useState } from "react";
import { StyledFormControl, StyledMenuItem } from "./MuiSelect.styles";

export const MuiSelect = () => {
  const [age, setAge] = useState<string>('');

  const menuItems = ['10', '20', '30', '40'];

  return (
    <StyledFormControl>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        value={age}
        onChange={(event) => setAge(event.target.value)}
        label="Age"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        {menuItems.map((item) => (
          <StyledMenuItem key={item} value={item}>
            {item}
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};
