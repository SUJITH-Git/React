import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";
const rows = [
    { id: 1, name: "John", role: "Admin" },
    { id: 2, name: "Jane", role: "User" },
    { id: 3, name: "Mike", role: "Manager" },
    { id: 4, name: "Sara", role: "User" },
    { id: 5, name: "Alex", role: "Admin" },
    { id: 6, name: "Emma", role: "User" },
  ];

  const UsersTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };      

      return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
    
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.role}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
    
          <TablePagination
            component="div"
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[3, 5, 10]}
          />
        </Paper>
      );
    };
    
    export default UsersTable;

    /*Summary*/
/*
page → current page number
rowsPerPage → rows shown per page
slice() → selects rows for the current page
TablePagination → built-in MUI pagination UI
 */

/*Summary*/