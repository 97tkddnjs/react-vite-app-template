import React,  { useState }  from 'react';
import {  Table } from 'react-bootstrap';
const DataTable = (props)=>{
   

    const columns = props.columns;
    const datasource =props.datasource;
    const handleReadOnlyShow =  props.onClick;
    console.log('datasource 의 데이터 ', datasource)
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
            {datasource.map((post , idx) => {
                // console.log('post 의 데이터 ', typeof post, post );
                
               return( 
                <tr key={idx} onClick={() => handleReadOnlyShow(post)} style={{ cursor: 'pointer' }}>
                    <td>{post.id}</td>
                    <td>{post['title']}</td>
                    <td>{post['writer']}</td>
                    <td>{post['create_date']}</td>
                </tr>
               )
            })}
        </tbody>
        </Table>)

}
export default DataTable;
