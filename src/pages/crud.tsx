import { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
  const [data, setData] = useState<any[]>([]);
  const api ="https://to-dos-api.softclub.tj/api/to-dos"
  const getData = async () => {
    try {
      const {data}=await axios.get(api)
     console.log(JSON.stringify(data, null, 2));
      
        setData(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((el) => (
        <div key={el.id}>
          <h3>{el.name}</h3>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Crud;