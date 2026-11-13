function handleSelect(data:any,id:number){
  return data.map((el:any)=>{
    return  el.id===id?{...el,select:!el.select}:el
  })
    

  
}

export  default handleSelect