import React from "react";
import "./details.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const item = useSelector((state) => state.item.value);
  console.log(item);

  const [itemDetail, setItem] = React.useState();

  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    fetch(`http://localhost:5000/items/details/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
        console.log(data);
        console.log(itemDetail);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="flex-column">
        <h1>Item Details</h1>
        {itemDetail && (
          <div>
            <h2>{itemDetail.name}</h2>
            <h4>{itemDetail.price}</h4>
            <h4>{itemDetail.stock}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
