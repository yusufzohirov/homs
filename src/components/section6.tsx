
import { useState } from "react";
import nite from "../assets/9.svg"
import ten from "../assets/10.svg"






function Section6() {
    const [data,setData]=useState([
      { id:1,title:"Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",name:"Hellen Jummy"},
      { id:2,title:"Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",name:"Hellen Jummy"},
      { id:3,title:"Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",name:"Hellen Jummy"},
      { id:4,title:"Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",name:"Hellen Jummy"},
      { id:5,title:"Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",name:"Hellen Jummy"},
    ])
  return (
    <section>
        <div className="flex items-center justify-between">
      <h1>Caption What everyone says What they say about us</h1>
     <img src={nite} alt="" />

     </div>
       {data.map((e) => (
    <div key={e.id}>
     <p>{e.title}</p> 
     <div>
        <img className="w-md" src={e.img} alt="" />
        <p>{e.name}</p>
     </div>
     <div>
        <button>Save</button>
        <button>Cancel</button>
     </div>
    </div>
))}
    </section>
  );
}

export default Section6
