import React,  { useState }  from 'react';
import {  Table } from 'react-bootstrap';
const DataTable = (props)=>{
   

    const columns = props.columns;
    const datasource =props.datasource;
    const handleReadOnlyShow =  props.onClick;

    return (
    <Table striped bordered hover style={{ marginTop: 20 }}>
        <thead>
            <tr>
                {columns.map((column)=>(
                    <th key={column.key}>{column.title}</th>
                ))}
            
            </tr>
        </thead>
        <tbody>
            {datasource.map((post) => (
                <tr key={post.id} onClick={() => handleReadOnlyShow(post)} style={{ cursor: 'pointer' }}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.date}</td>
                </tr>
            ))}
        </tbody>
        </Table>)

}
export default DataTable;
