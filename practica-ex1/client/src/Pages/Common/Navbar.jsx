

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Navbar() {
  
    const [searched,setSearched]=useState([])
    const [test,setTest] = useState(true)

    const handleSearch = ()=>{
    setTest(false)
    let arr = datas.filter(x=>x.name.toLowerCase().includes(value.toLowerCase()))
    setSearched(arr)

    }
    console.log(arr)

  return (
    <nav>
    <div><strong>Notary</strong></div>

    <div>
    <div className='container'>
    <Link to = "/">Home</Link>
    <Link to = "add">Add</Link>
    </div>
    <div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" className="form-control" onChange={(e)=>{handleSearch(e.target.value)

    }} />
    <label className="form-label" forhtml="form1"></label>
  </div>
  
</div>
    
</div>


  </nav>
  )
}

export default Navbar