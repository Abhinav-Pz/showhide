import React, { useState } from 'react'

function Display() {

    const [show, setShow] = useState(false)
    
  return (
    <div className='container'>
        <img src="https://i.gifer.com/7N3z.gif" alt="" />
       {show && <p id='msg'><b>Hi How Are You ?</b></p>}
        <br />
        <button onClick={() => setShow(true)} className='btn btn-primary'>SHOW</button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={() => setShow(false)} className='btn btn-danger'>HIDE</button>
    </div>
  )
}

export default Display