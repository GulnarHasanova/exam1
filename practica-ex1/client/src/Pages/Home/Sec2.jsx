import React, { useState } from 'react'
import './Sec1.css'

import { useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from '../../components/Card'




function Sec2() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/users")
        .then(res => {
            setDatas(res.data)
        })

    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/users/${id}`)
        const deleteItem = datas.filter(x => x._id !== id)
        setDatas(deleteItem)

    }


    return (

        <>
            <div className='center-card'>
                <h1>Practice Areas</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='container'>
                <div className='row'>
                    {datas.map((data, index) => (


                        <CardItem data={data} index={index} handleDelete={handleDelete} />



                    )
                    )
                    }</div>
            </div>

        </>
    )
}

export default Sec2