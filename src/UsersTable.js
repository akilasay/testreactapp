import { Button, Table, TableBody, Paper, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows }) => { // use object distruction

    return(
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length> 0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td , &:last-child th' : {border: 0}}}>
                        <TableCell component='th' scope="row"> {row.id} </TableCell>
                        <TableCell component='th' scope="row"> {row.prompt} </TableCell>
                        <TableCell component='th' scope="row"> {row.createdAt} </TableCell>
                        <TableCell> 
                            <Button sx={{margin : '0px 10px'}}
                            onClick={ () => {}}> 
                            Update
                            </Button>

                            <Button sx={{margin : '0px 10px'}}
                            onClick={ () => {}}> 
                            Delete
                            </Button>

                        </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow sx={{'&:last-child td , &:last-child th' : {border: 0}}}>
                         <TableCell component='th' scope="row"> No Data </TableCell>
                        </TableRow>
                        )
                }
            </TableBody>
        </Table>
    </TableContainer>
)}

export default UsersTable;