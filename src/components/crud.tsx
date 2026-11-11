import { useState } from "react"


function Crud(){

  const [data,setDate]=useState([
    {id:1,name:"Ali",age:"23",job:"student",city:"Dushanbe",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1u8BZxjdouoNGANSBDEZ9Zlc1fzDyigOIvBmO8L9JA&s"},
    {id:2,name:"Vali",age:"23",job:"student",city:"Dushanbe",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1u8BZxjdouoNGANSBDEZ9Zlc1fzDyigOIvBmO8L9JA&s"},
    {id:3,name:"Gali",age:"23",job:"student",city:"Dushanbe",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1u8BZxjdouoNGANSBDEZ9Zlc1fzDyigOIvBmO8L9JA&s"},
    {id:4,name:"sali",age:"23",job:"student",city:"Dushanbe",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1u8BZxjdouoNGANSBDEZ9Zlc1fzDyigOIvBmO8L9JA&s"},
  ])

  const handleDelete=(id:number)=>{
    setDate((prev)=> prev.filter((e)=> e.id!==id))
  }

  const [Dialog,setDialog]=useState()
  const [elem,setElem]=useState({id:null,name:"",age:"",city:"",img:"",job:"",})

  const [search, setSearch] = useState("")

 const filteredData = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()),
  )

  
  
  

  const handlSabmit=(event:any)=>{
       event.preventDefault()
        const newObj={
          id:elem.id?elem.id: Date.now(),
          name:event.target.name.value,
          age:event.target.age.value,
          job:event.target.job.value,
          city:event.target.city.value,
          img:event.target.img.value,
        }
   elem.id?
    setDate((prev)=> prev.map((e)=>( e.id===newObj.id?newObj:e)))
   :setDate([...data,newObj])
   setDialog(false)
   setElem({id:null,name:"",age:"",city:"",img:"",job:"",})
  }

  return(
    <>
     {Dialog?(     
        <form action="" onSubmit={handlSabmit}>
          <input defaultValue={elem.img} name="img" type="text" placeholder="img..." />
          <input  defaultValue={elem.name} name="name" type="text" placeholder="name..." />
          <input  defaultValue={elem.age} name="age" type="text" placeholder="age..." />
          <input  defaultValue={elem.city} name="city" type="text" placeholder="city..." />
          <input  defaultValue={elem.job} name="job" type="text" placeholder="job..." />
          <div>
            <button type="submit">{elem.id?"edit save":"add save"}</button>
            <button onClick={()=>{setDialog(false);setElem({id:null,name:"",age:"",city:"",img:"",job:"",})}}>Cancel</button>
          </div>
        </form>
    ):null}
       <div>
        <button onClick={()=>setDialog(true)}>new ADD</button>

    <input type="text" placeholder="Search name..." value={search} onChange={(e) => setSearch(e.target.value)} className="border border-gray-300 rounded-md px-4 py-4 mb-6 gap-4" />


       </div>
         <table className="border-collapse border m-b-100">
          <thead>
            <tr className=" border">
              <th className="border">Image</th>
              <th  className="border">name</th>
              <th  className="border">Age</th>
              <th  className="border">Job</th>
              <th  className="border">City</th>
              <th>Action</th>
            </tr>
          </thead>

       {data.map((e)=>{
         return(
          <tbody>
            <tr className="border">
            <td  className="border"><img className="w-30" src={e.img} alt="" /></td>
            <td  className="border">{e.name}</td>
            <td  className="border">{e.age}</td>
            <td  className="border">{e.job}</td>
            <td  className="border">{e.city}</td>
            <td className="flex gap-5">
              <button onClick={()=>handleDelete(e.id)}>delete</button>
              <button onClick={()=>{setElem(e);setDialog(true)}}>Edit</button>
              <input type="checkbox" />
            </td>
            </tr>
          </tbody>
        )
      })}

        </table>


   
      </>
)

}
export default Crud