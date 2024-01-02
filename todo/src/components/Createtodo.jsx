import React, { useState } from 'react'
import axios from 'axios';
function Createtodo(props) {
  const[formdata, setFormdata]= useState({
    title: '',
    description: ''
  })
  const handleonchange =(e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const handleonsubmit = async (e)=>{
    e.preventDefault()
    try{
      const response= await axios.post('http://localhost:3000/addtodos',formdata)
      // console.log(response)
      const response1 = await axios.get("http://localhost:3000/gettodos");
      props.setTodos(response1.data);
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleonsubmit} >
      <input className='todo-input' type="text" name='title' onChange={handleonchange} placeholder='Title' /> <br/>
      <input className='todo-input' type="text" name='description' onChange={handleonchange} placeholder='Description'/> <br />
      <button className='button' type='submit' >Add todo</button>
    </form>
  )
}

export default Createtodo
