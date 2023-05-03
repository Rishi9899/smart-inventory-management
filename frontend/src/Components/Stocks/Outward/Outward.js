// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { Table } from "react-bootstrap";

// import SelectGodown from "../Inward/selectGodown";

// import GodownContext from "../../../contexts/GodownContext";

// function Outward() {
//   const { product } = useContext(GodownContext);
//   const [godownData, setGodownData] = useState(null);
//   const [Godown, selectedGodown] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [productList, setProductlist] = useState([]);

//   const selectGodown = (selGod) => {
//     selectedGodown(selGod);
//   };

//   console.log(selectedProducts);
//   console.log(productList);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3030/godown/${Godown}`)
//       .then((response) => setGodownData(response.data))
//       .catch((error) => console.log(error));
//   }, [Godown]);
//   console.log(godownData);

//   const handleProductSelection = (event) => {
//     const productId = event.target.name;
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setSelectedProducts((prevState) => [
//         ...prevState,
//         { id: productId, quantity: 1 },
//       ]);
//     } else {
//       setSelectedProducts((prevState) =>
//         prevState.filter((product) => product.id !== productId)
//       );
//     }
//   };

//   const handleQuantityChange = (event) => {
//     const productId = event.target.name.split("-")[0];
//     const quantity = parseInt(event.target.value);
//     setSelectedProducts((prevState) => {
//       const productIndex = prevState.findIndex(
//         (product) => product.id === productId
//       );
//       const newSelectedProducts = [...prevState];
//       newSelectedProducts[productIndex] = { id: productId, quantity };
//       return newSelectedProducts;
//     });
//   };

//   const SearchProductHandler = async (e) => {
//     try {
//       e.preventDefault();
//       const products = godownData.products.map((item) => {
//         const { id, quantity } = item;
//         const productMatch = product.find((p) => p.id === id);
//         const { ItemName } = productMatch ? productMatch : { ItemName: "" };

//         return { id, ItemName, quantity };
//       });

//       setProductlist(products);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // console.log(productList);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(productList);
//     console.log(selectedProducts);

//     selectedProducts.forEach((order) => {
//       const item = productList.find((item) => item.id === order.id);
//       if (item && item.quantity >= order.quantity) {
//         item.quantity -= order.quantity;
//       }
//     });
//   };

//   return (
//     <div style={{ marginTop: "2rem" }} className="container">
//       <div className="container">
//         <div className="col-3"></div>
//         <div>
//           <SelectGodown selectGodown={selectGodown} />
//         </div>
//         <div>
//           <button onClick={SearchProductHandler}>Search Product</button>
//         </div>
//       </div>
//       <form>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th></th>
//               <th>Product Name </th>
//               <th>Avaible Quantity</th>
//               <th>Quantity</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productList.map((product) => (
//               <tr key={product.id}>
//                 <td>
//                   <input
//                     type="checkbox"
//                     name={product.id}
//                     onChange={handleProductSelection}
//                   />
//                 </td>
//                 <td>{product.ItemName}</td>
//                 <td>{product.quantity}</td>
//                 <td>
//                   <input
//                     type="number"
//                     min="1"
//                     name={`${product.id}-quantity`}
//                     defaultValue={1}
//                     onChange={handleQuantityChange}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Outward;

// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { Table } from "react-bootstrap";

// import SelectGodown from "../Inward/selectGodown";

// import GodownContext from "../../../contexts/GodownContext";

// function Outward() {
//   const { product } = useContext(GodownContext);
//   const [godownData, setGodownData] = useState(null);
//   const [Godown, selectedGodown] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [productList, setProductlist] = useState([]);
//   const [updatedProduct, setUpdatedProduct] = useState([]);

//   const selectGodown = (selGod) => {
//     selectedGodown(selGod);
//   };

//   console.log(selectedProducts);
//   console.log(productList);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3030/godown/${Godown}`)
//       .then((response) => setGodownData(response.data))
//       .catch((error) => console.log(error));
//   }, [Godown]);
//   console.log(godownData);

//   const handleProductSelection = (event) => {
//     const productId = event.target.name;
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setSelectedProducts((prevState) => [
//         ...prevState,
//         { id: productId, quantity: 1 },
//       ]);
//     } else {
//       setSelectedProducts((prevState) =>
//         prevState.filter((product) => product.id !== productId)
//       );
//     }
//   };

//   const handleQuantityChange = (event) => {
//     const productId = event.target.name.split("-")[0];
//     const quantity = parseInt(event.target.value);
//     setSelectedProducts((prevState) => {
//       const productIndex = prevState.findIndex(
//         (product) => product.id === productId
//       );
//       const newSelectedProducts = [...prevState];
//       newSelectedProducts[productIndex] = { id: productId, quantity };
//       return newSelectedProducts;
//     });
//   };

//   const SearchProductHandler = async (e) => {
//     try {
//       e.preventDefault();
//       const products = godownData.products.map((item) => {
//         const { id, quantity } = item;
//         const productMatch = product.find((p) => p.id === id);
//         const { ItemName } = productMatch ? productMatch : { ItemName: "" };

//         return { id, ItemName, quantity };
//       });
//       const updatedProduct = godownData.products.map((item) => {
//         const { id, quantity } = item;

//         return { id, quantity };
//       });

//       setProductlist(products);
//       setUpdatedProduct(updatedProduct);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // console.log(productList);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Product List", productList);
//     console.log("Selected", selectedProducts);
//     console.log("Updated", updatedProduct);
//     console.log("godown updated", godownData.products);

//     selectedProducts.forEach((order) => {
//       const item = productList.find((item) => item.id === order.id);
//       if (item && item.quantity >= order.quantity) {
//         item.quantity -= order.quantity;
//       }
//     });
//     selectedProducts.forEach((order) => {
//       const item = updatedProduct.find((item) => item.id === order.id);
//       if (item && item.quantity >= order.quantity) {
//         item.quantity -= order.quantity;
//       }
//     });
//     godownData.products = updatedProduct;
//     console.log(godownData.products);
//     console.log(godownData);

//     axios
//       .put(`http://localhost:3030/godown/${Godown}`, godownData)
//       .then((response) => {
//         console.log("Product array updated successfully");
//       })
//       .catch((error) => {
//         console.error("Error updating product array:", error);
//       });
//   };

//   return (
//     <div style={{ marginTop: "2rem" }} className="container">
//       <div className="container">
//         <div className="col-3"></div>
//         <div>
//           <SelectGodown selectGodown={selectGodown} />
//         </div>
//         <div>
//           <button className="btn btn-success" onClick={SearchProductHandler}>
//             Search Product
//           </button>
//         </div>
//       </div>
//       <form>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th></th>
//               <th>Product Name </th>
//               <th>Avaible Quantity</th>
//               <th>Quantity</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productList.map((product) => (
//               <tr key={product.id}>
//                 <td>
//                   <input
//                     type="checkbox"
//                     name={product.id}
//                     onChange={handleProductSelection}
//                   />
//                 </td>
//                 <td>{product.ItemName}</td>
//                 <td>{product.quantity}</td>
//                 <td>
//                   <input
//                     type="number"
//                     min="1"
//                     name={`${product.id}-quantity`}
//                     defaultValue={1}
//                     onChange={handleQuantityChange}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Outward;

import { useState, useEffect, useContext } from "react";
import axios from "axios";

import SelectGodown from "../Inward/selectGodown";

import GodownContext from "../../../contexts/GodownContext";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Table from "@mui/material/Table";

function Outward() {
  const navigate = useNavigate();
  const { product } = useContext(GodownContext);
  const [products, setProducts] = useState([]);
  const [godownData, setGodownData] = useState(null);
  const [Godown, selectedGodown] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productList, setProductlist] = useState([]);
  const [updatedProduct, setUpdatedProduct] = useState([]);
  const [amount, setAmount] = useState("");
  const [weight, setWeight] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectGodown = (selGod) => {
    selectedGodown(selGod);
  };

  console.log(selectedProducts);
  console.log(productList);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/product`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/godown/${Godown}`)
      .then((response) => setGodownData(response.data))
      .catch((error) => console.log(error));
  }, [Godown]);
  console.log(godownData);

  const handleProductSelection = (event) => {
    const productId = event.target.name;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedProducts((prevState) => [
        ...prevState,
        { id: productId, quantity: 1 },
      ]);
    } else {
      setSelectedProducts((prevState) =>
        prevState.filter((product) => product.id !== productId)
      );
    }
  };

  const handleQuantityChange = (event) => {
    const productId = event.target.name.split("-")[0];
    const quantity = parseInt(event.target.value);
    setSelectedProducts((prevState) => {
      const productIndex = prevState.findIndex(
        (product) => product.id === productId
      );
      const newSelectedProducts = [...prevState];
      newSelectedProducts[productIndex] = { id: productId, quantity };
      return newSelectedProducts;
    });
  };

  const SearchProductHandler = async (e) => {
    try {
      e.preventDefault();
      const products = godownData.products.map((item) => {
        const { id, quantity } = item;
        const productMatch = product.find((p) => p.id === id);
        const { ItemName } = productMatch ? productMatch : { ItemName: "" };

        return { id, ItemName, quantity };
      });
      const updatedProduct = godownData.products.map((item) => {
        const { id, quantity } = item;

        return { id, quantity };
      });

      setProductlist(products);
      setUpdatedProduct(updatedProduct);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCalculate = async (event) => {
    try {
      event.preventDefault();
      let totalAmount = 0;
      let totalWeight = 0;
      selectedProducts.forEach((product) => {
        const { id, quantity } = product;
        const { Amount, Weight } = products.find((price) => price.id === id);
        totalAmount += Amount * quantity;
        totalWeight += quantity * Weight;
        setWeight(totalWeight / 100);
        setAmount(totalAmount);
      });
      console.log("Total Amount:", totalAmount);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(productList);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product List", productList);
    console.log("Selected", selectedProducts);
    console.log("Updated", updatedProduct);
    console.log("godown updated", godownData.products);

    selectedProducts.forEach((order) => {
      const item = productList.find((item) => item.id === order.id);
      if (item && item.quantity >= order.quantity) {
        item.quantity -= order.quantity;
      }
    });
    selectedProducts.forEach((order) => {
      const item = updatedProduct.find((item) => item.id === order.id);
      if (item && item.quantity >= order.quantity) {
        item.quantity -= order.quantity;
      }
    });
    godownData.products = updatedProduct;
    console.log(godownData.products);
    console.log(godownData);

    axios
      .put(`http://localhost:3030/godown/${Godown}`, godownData)
      .then((response) => {
        console.log("Product array updated successfully");
      })
      .catch((error) => {
        console.error("Error updating product array:", error);
      });
    navigate("/outward?added=true");
  };

  return (
    <div style={{ marginTop: "2rem" }} className="container">
      <div className="container">
        <div className="col-3"></div>
        <div>
          <SelectGodown selectGodown={selectGodown} />
        </div>
        <div>
          <button className="btn btn-success" onClick={SearchProductHandler}>
            Search Product
          </button>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Product Name </th>
            <th>Avaible Quantity</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  name={product.id}
                  onChange={handleProductSelection}
                />
              </td>
              <td>{product.ItemName}</td>
              <td>{product.quantity}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  name={`${product.id}-quantity`}
                  defaultValue={1}
                  onChange={handleQuantityChange}
                  disabled={!selectedProducts.some((p) => p.id === product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="container">
        <div className="row justify-content-between ">
          <button
            onClick={handleCalculate}
            className="btn btn-primary mb-3 col-auto"
          >
            Calculate
          </button>
          <p className="Amount col-auto mt-4">Total Amount : ₹{amount}</p>
          <p className="Amount col-auto mt-4">Total Weight : {weight} q</p>
          <button
            onClick={handleOpen}
            className="btn btn-primary mb-3 col-auto"
          >
            Submit
          </button>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to add the following products?
          <div>
            {selectedProducts.map((selectedProduct) => {
              const { id, quantity } = selectedProduct;
              const { ItemName } = products.find((p) => p.id === id) || {};

              return (
                <div key={id}>
                  <p>Product Name: {ItemName}</p>
                  <p>Quantity: {quantity}</p>
                </div>
              );
            })}
            <p>totalAmount: {amount}</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "red" }}>
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Outward;
