import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
  } from "@mui/material";

  const rows = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Manager" },
  ];

  const UsersTable = () => {
    return (
      <TableContainer component={Paper}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Users List
        </Typography>
  
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow hover>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Role</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default UsersTable;

/*
✔ TableHead → column headers
✔ TableBody → table rows
✔ map() → loop hard-coded data
✔ Paper → nice card look
*/