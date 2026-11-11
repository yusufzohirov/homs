import { useState } from "react";

function Crud(){
  const [dialog,setDialog]=useState(false)
  const [data,setData]=useState([
    {id:1,name:"ali",age:10},
    {id:2,name:"VALI",age:10},
    {id:3,name:"GAni",age:10},
  ])
  
  const [elem,setElem]=useState({id:null,name:"",age:""})
  const handlDelte=(id:number)=>{
     setData((prev)=> prev.filter((e)=> e.id!==id))
  }


  
  const handlsubmit=(event:any)=>{
    event.preventDefault();
    const newObj={
      id:elem.id?elem.id:Date.now(),
      name:event.target.name.value,
      age:event.target.age.value
    }

    elem.id?setData((prev)=> prev.map((e)=> (e.id===newObj.id?newObj:e)))
    :setData([...data,newObj])
    event.target.reset();
    setElem({id:null,name:"",age:""})
    setDialog(false)

  }

  

return(
  <>

  {dialog?(
    <div>
    <form action="" onSubmit={handlsubmit}>
      <input defaultValue={elem.name} type="text" name="name"  placeholder="enrerNmae,,,,"/>
      <input defaultValue={elem.age} type="text" name="age"  placeholder="enrerAge,,,,"/>
      <div>
        <button type="submit">{elem.id?"EditSAve":"Add Save"}</button>
        <button onClick={()=>{setDialog(false);}}>Cancel</button>   
      </div>
    </form>
  </div>
  ):null
}
      <div>
         <button onClick={()=>setDialog(true)}>new Add</button>
      </div>
          {data.map((e)=>{
            return(
              <div>
              <h1>{e.name}</h1>
              <p>{e.age}</p>
              <div>
                <button onClick={()=>handlDelte(e.id)}>Delete</button>
                <button onClick={()=>{setElem(e);setDialog(true)}}>Edit</button>
              </div>
            </div>
           )
          })}
  </>

)}


export default Crud