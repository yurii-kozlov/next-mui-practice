"use client";

import { Table, TableBody, TableHead, TableCell, TableRow, TableContainer, Paper } from "@mui/material";
import { TABLE_DATA } from "@/constants";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '400px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TABLE_DATA.map(({ id, first_name, last_name, email }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{first_name}</TableCell>
              <TableCell>{last_name}</TableCell>
              <TableCell align="center">{email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};
