import  { useEffect, useState } from 'react'
import axios from "axios"
import { Button } from './ui/button'
import { Card,CardContent } from './ui/card'

import { Dialog,DialogContent } from './ui/dialog'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'


function Crud() {


  const [data,setData]=useState([])
  const api="https://6ace4236f338359cf1c35796.mockapi.io/data"
   const [dialog,setDialog]=useState(false)
   const [elem,setElem]=useState(null)
   const  [idx,setIdx]=useState(null)
   const [serch,setSearch]=useState("")
   const [selectserch,setselectserch]=useState("")

  async function getData() {
    try {
      
      const {data}=await axios.get(api)
       setData(data)

    } catch (error) {
      console.error(error);
      
    }
  }
   
  useEffect(()=>{
    getData()
  },[])


  async function handlDelete(id:number) {
    try {
      await axios.delete(`${api}/${id}`)
     getData()
    } catch (error) {
      console.error(error);
      
    }
  }

  async function addData(newUser) {
    try {
      
      await axios.post(api,newUser)
      getData()
      setDialog(false)
    } catch (error) {
      console.error(error);
      
    }
  }

  async function editUser(newUser,idx) {
    try {
      await axios.put(`${api}/${idx}`,newUser)
      getData()
      setDialog(false)
    } catch (error) {
      console.error(error);
      
    }
  }



const handlAdd=(event)=>{
   event.preventDefault()
   const newUser={
    id: Date.now(),
    avatar:event.target.img.value,
    name:event.target.Name.value,
    age:event.target.age.value,
    status:event.target.selectStatus.value==="true"
   }
 
   if(elem){
    editUser(newUser,idx)
   }else{
     addData(newUser)
   }

}
 


  return (
   <>
  
  <div className='flex w-100 gap-10 p-10'>
    <Button onClick={()=>{setDialog(true);setIdx(null);setElem(null)}}>New Add</Button>
    <Input placeholder='serched...' value={serch} onChange={(e)=>setSearch(e.target.value)}/>

     <select value={selectserch} onChange={(e)=>setselectserch(e.target.value)} name='selectStatus'>
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

  </div>
  
  <Dialog open={dialog} onOpenChange={setDialog}>
    <DialogContent>
      <form onSubmit={handlAdd}>
        <Input defaultValue={elem?.avatar ||""}  name='img' placeholder='Image'/>
        <Input defaultValue={elem?.name ||""}   name='Name' placeholder='Name'/>
        <Input defaultValue={elem?.age || ""}  name='age' placeholder='Age'/>
        <select name='selectStatus' >
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <div>
          <Button type='submit'>Save</Button>
          <Button onClick={()=>setDialog(false)}>Cancel</Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>





   <div className='flex flex-wrap gap-10 p-10'>
   {data
   .filter((e)=> e.name.toLowerCase().includes(serch.toLowerCase()))
   .filter((e)=> selectserch===""||String(e.status)===selectserch)
   .map((e)=>{
    return(
      <Card key={e.id}>
        <CardContent>
    <img src={e.avatar}  alt="" className='w-40' />
    <h1>{e.name}</h1>
    <p>{e.age}</p>
    <Checkbox checked={e.status} disabled/>
    <div>
    <Button onClick={()=> handlDelete(e.id)}>Delete</Button>
    <Button onClick={()=>{setDialog(true);setElem(e);setIdx(e.id)}}>Edit</Button>
    </div>
        </CardContent>
    </Card>
  )
   })}
   </div>
   </>
  )
}

export default Crud
