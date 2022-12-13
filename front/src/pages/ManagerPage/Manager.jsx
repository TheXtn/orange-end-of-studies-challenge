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
import { useDispatch } from "react-redux";
import { setItem } from "../../redux/items-slice";

const Manager = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");

  const [nameEdit, setNameEdit] = React.useState("");
  const [priceEdit, setPriceEdit] = React.useState("");
  const [stockEdit, setStockEdit] = React.useState("");

  const [users, setUsers] = React.useState(null);
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
    fetch("http://localhost:5000/user/all")
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setPending(false);
        setError(false);
      })
      .catch((err) => console.log(err));
  }, [users]);

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
        <h1>Users</h1>
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
                <th>LastName</th>
                <th>Email</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
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

export default Manager;
