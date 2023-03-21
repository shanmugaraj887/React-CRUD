import React from 'react'
import { useState } from 'react'
import "./crud.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Crud() {
    const list = [
        {
            id: 1,
            name: 'Shanmuga'
        }
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)

    return (
        <div>
            <Additem setList={setList} />

            {
                lists.map(l => {
                    return <div className='edit-field'>
                        {updateState === l.id ? <Edit list={l} lists={lists} setList={setList} setUpdateState={setUpdateState} /> :


                            <div style={{ margin: "25px", width: "100%", display: "flex", justifyContent: 'center' }}>

                                <div style={{ width: "500px" }} >
                                    <TableContainer component={Paper}>
                                        <Table sx={{ maxWidth: 500 }} aria-label="simple table">

                                            <TableBody>

                                                <TableRow

                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        <td style={{ fontFamily: "roboto" }}>{l.name}</td>

                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Button variant="contained" onClick={() => handleEdit(l.id)}> Edit</Button>

                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Button variant="contained" onClick={() => handleDelete(l.name)}> Delete</Button>

                                                    </TableCell>

                                                </TableRow>

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>


                        }

                    </div>
                })
            }
        </div>
    )
    function handleEdit(id) {

        setUpdateState(id)

    }
    function handleDelete(id) {
        const newList = lists.filter(l => l.name !== id)
        setList(newList)
    }
}


function Edit({ list, lists, setList, setUpdateState }) {
    function handleUpdate(e) {
        e.preventDefault()
        const name = e.target.elements.name.value;
        const newList = lists.map(l => (
            list.id === l.id ? { ...l, name } : l

        ))
        setList(newList)
        setUpdateState(-1)
    }
    function handleInput(event) {
        const value = event.target.value;
        const newList = lists.map(l => (
            list.id === l.id ? { ...l, name: value } : l

        ))
        setList(newList)
    }
    return (
        <div style={{ margin: "50px" }}>
            <form action="" onSubmit={handleUpdate} >
                {/* <TextField id="standard-basic" label="Standard" variant="standard" onChange={handleInput} type="text" name='name' value={list.name} /> */}

                <TextField id="standard-basic" label="Create Username" variant="standard" onChange={handleInput} type="text" name='name' value={list.name} />


                <button style={{ backgroundColor: "none", border: "none" }}><Button variant="contained" >update</Button></button></form>

        </div>
    )
}

function Additem({ setList }) {
    function handleAdd(e) {
        e.preventDefault()
        const name = e.target.elements.name.value;
        const newList = {
            id: 3,
            name
        }

        setList(prevList => {
            return prevList.concat(newList)
        })



    }
    return (
        <div className='input-field'>
            <form action="" onSubmit={handleAdd}>
                <TextField id="standard-basic" label="Create Username" variant="standard" type="text" name='name' />
                <button style={{ margin: "20px", marginTop: "10px", backgroundColor: "none", border: "none" }}><Button variant="contained">Add</Button></button>
            </form>

        </div>


    )
}




export default Crud