import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Table,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Header from "../../components/Header/Header";
import "./itemsPage.css";
import { useSelector, useDispatch } from "react-redux";
import { setItem } from "../../redux/items-slice";

const ItemsPage = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");

  const [nameEdit, setNameEdit] = React.useState("");
  const [priceEdit, setPriceEdit] = React.useState("");
  const [stockEdit, setStockEdit] = React.useState("");

  const [items, setItems] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [isPending, setPending] = React.useState(true);

  const [selected, setSelected] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleEditName = (e) => {
    setNameEdit(e.target.value);
  };
  const handleEditPrice = (e) => {
    setPriceEdit(e.target.value);
  };
  const handleEditStock = (e) => {
    setStockEdit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setFormErrors(validate(formData));
    //if (Object.keys(formErrors).length === 0) {
    const item = { name, price, stock };
    console.log(item);
    fetch(`http://localhost:5000/items/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(item),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setName("");
        setPrice("");
        setStock("");
      }
    });
  };

  React.useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setPending(false);
        setError(false);
      })
      .catch((err) => console.log(err));
  }, [items]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/items/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("Deleted");
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const changedItem = { name: nameEdit, price: priceEdit, stock: stockEdit };

    fetch(`http://localhost:5000/items/update${selected}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changedItem),
    }).then(() => {
      console.log("Updated");
    });
  };

  const dispatch = useDispatch();

  const handleDetails = (id) => {
    fetch(`http://localhost:5000/items/details/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(setItem(data));
        console.log(data);
        window.location.href = `http://localhost:3000/details/${id}`;
      })
      .catch((err) => console.log(err));
  };

  // const item = useSelector((state) => state.item.value);
  // console.log(item);
  // dispatch(setItem({}));

  return (
    <div>
      <Header />

      <div className="items container">
        <div className="d-flex justify-content-center flex-column">
          <h1 className="d-flex justify-content-center">Add Item</h1>
          <Form
            name="myForm"
            className="form mb-2 mt-1"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <FormGroup className="w-100">
              <Label for="exampleName" className="label">
                Name
              </Label>
              <Input
                id="exampleName"
                name="name"
                placeholder="Enter the name..."
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </FormGroup>

            <FormGroup className="mt-2 w-100">
              <Label for="price" className="label">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                placeholder="Enter the price..."
                type="number"
                value={price}
                onChange={handlePriceChange}
              />
            </FormGroup>

            <FormGroup className="mt-2 w-100">
              <Label for="stock" className="label">
                Stock
              </Label>
              <Input
                id="stock"
                name="stock"
                placeholder="Enter the stock..."
                type="number"
                value={stock}
                onChange={handleStockChange}
              />
            </FormGroup>

            {/* {!isSubmit && ( */}
            <div className="d-flex justify-content-center">
              <Button
                //disabled={Object.keys(formErrors).length !== 0}
                type="submit"
              >
                Add Item
              </Button>
            </div>
            {/* )} */}
          </Form>
        </div>

        {error && <h5>Not Found</h5>}
        {isPending && (
          <>
            <Spinner color="dark"></Spinner> Loading...
          </>
        )}

        <div className="mt-3">
          <Table hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>
                      <Button
                        onClick={() => {
                          handleDetails(item._id);
                          setSelected(item._id);
                        }}
                      >
                        <i className="fa fa-info"></i>
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          toggle();
                          setSelected(item._id);
                        }}
                      >
                        <i className="fa fa-edit"></i>
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => handleDelete(item._id)}
                        style={{ backgroundColor: "red" }}
                      >
                        <i className="fa fa-trash-o"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>

        <Modal
          isOpen={modal}
          toggle={toggle}
          style={{ marginTop: "10rem" }}
          // unmountOnClose={unmountOnClose}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(e);
            }}
          >
            <ModalHeader toggle={toggle}>Update Item</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label className="labell">Name</Label>
                <Input
                  onChange={handleEditName}
                  value={nameEdit}
                  type="text"
                  name="date"
                  rows={5}
                  className="input__modal"
                />
              </FormGroup>
              <FormGroup>
                <Label className="labell">Price</Label>
                <Input
                  onChange={handleEditPrice}
                  value={priceEdit}
                  type="number"
                  name="name"
                  rows={5}
                  className="input__modal"
                />
              </FormGroup>
              <FormGroup>
                <Label className="labell">Stock</Label>
                <Input
                  onChange={handleEditStock}
                  value={stockEdit}
                  type="number"
                  name="name"
                  rows={5}
                  className="input__modal"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="success"
                type="submit"
                onClick={() => {
                  toggle();
                }}
              >
                Update
              </Button>{" "}
              <Button className="button3" color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default ItemsPage;
