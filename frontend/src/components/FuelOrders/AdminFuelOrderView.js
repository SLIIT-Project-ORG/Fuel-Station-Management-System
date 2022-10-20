import { AppBar, Stack, Box, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';
import RemoveDoneSharpIcon from '@mui/icons-material/RemoveDoneSharp';
import { minWidth, padding } from "@mui/system";

export const AdminFuelOrderView = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/fuel-order/")
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
            })

    }, [])


    const deleteOrder = (id) =>{
        axios.delete(`http://localhost:8000/fuel-order/${id}`)
        .then((res)=>{
            alert(res.data);
            window.location.href = "/admin/fuelOrderView/";
        })
        .catch((res)=>{
            alert("Error");
        })
    }

    const approveOrder = (id,status) =>{
        axios.put(`http://localhost:8000/fuel-order/${id}/${status}`)
        .then((res)=>{
            if(res.isApprove = true){
                alert("Approved");
            }
            else{
                alert("Rejected");
            }
            window.location.href = "/admin/fuelOrderView/";
        })
        .catch((res)=>{
            alert("Error");
        })
    }


    return (
        <div>
            <div>
                <Stack spacing={2}>
                    <AppBar elevation={2} color={'error'}>
                        <h2>FUEL ORDER REQUESTS</h2>
                    </AppBar>
                </Stack>


                <div>
                    <Box alignItems={'center'} margin={'100px'} marginTop={'120px'} marginBottom={'0px'}>
                        <Paper variant={'outlined'} sx={{ padding: '50px' }}>
                            <h2>FUEL ORDERS</h2>
                            <TableContainer sx={{maxHeight:"300px"}}>
                                <Table sx={{ minWidth: '1200px'}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Institute</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>City</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Mobile No</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Registration No</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Province</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>District</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Description</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((row) => (
                                            <TableRow>
                                                <TableCell align="left">{row.institute}</TableCell>
                                                <TableCell align="left">{row.city}</TableCell>
                                                <TableCell align="left">{row.email}</TableCell>
                                                <TableCell align="left">{row.mobile_no}</TableCell>
                                                <TableCell align="left">{row.regstration_no}</TableCell>
                                                <TableCell align="left">{row.province}</TableCell>
                                                <TableCell align="left">{row.district}</TableCell>
                                                <TableCell align="left">{row.description}</TableCell>
                                                <TableCell align="left">
                                                    <Stack direction="row" alignItems="center" >
                                                        <IconButton aria-label="visible" size="medium">
                                                            <VisibilitySharpIcon fontSize="inherit" color={"primary"} onClick={()=>{
                                                                window.location.href = `/admin/fuelOrderView/${row._id}`;
                                                            }}/>
                                                        </IconButton>
                                                        <IconButton aria-label="delete" size="medium">
                                                            <DeleteSharpIcon fontSize="inherit" color={"error"} onClick={()=>{
                                                                deleteOrder(row._id);
                                                            }}/>
                                                        </IconButton>
                                                        <IconButton aria-label="approve" size="medium">
                                                            <DoneAllSharpIcon fontSize="inherit" color={"primary"} onClick={()=>{
                                                                approveOrder(row._id,true);
                                                            }}/>
                                                        </IconButton>
                                                        <IconButton aria-label="reject" size="medium">
                                                            <RemoveDoneSharpIcon fontSize="inherit" color={"error"} onClick={()=>{
                                                                approveOrder(row._id,false);
                                                            }}/>
                                                        </IconButton>
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Paper>
                    </Box>
                </div>

            </div>
        </div>
    )
}