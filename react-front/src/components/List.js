import React, { useEffect, useState } from 'react'
import { listItems } from '../utils/item';

export default function List() {
    
const [items,setItems]=useState([]);

useEffect(() => {

    const fetchData = async () => {
      const result = await listItems();
      setItems(result);
    };
    fetchData();
  }, []);
  return (
    <div>
        <p>Hiii {items.length}</p>
        {items?.map((item)=>(
            <p key={item._id}>{item.nom}</p>
        ))}
    </div>
  )
}
