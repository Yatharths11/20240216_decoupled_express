// const fs = require("fs")
// 
// Reading data from JSON files
// let products;
// try {
//     const products_data = fs.readFileSync(path.join("products.json"), 'utf8');
//     products = JSON.parse(products_data);
// } catch (err) {
//     console.error('Unable to fetch data.', err);
// }


// let orders;
// try {
//     const orders_data = fs.readFileSync(path.join("orders.json"), 'utf8');
//     orders = JSON.parse(orders_data);
// } catch (err) {
//     console.error('Unable to fetch data.', err);
// }

const fs = require('fs').promises; 
let products = []; 
let Orders = [];
// Load products from file
async function loadProducts() {
  try {
    const data = await fs.readFile('./products.json', 'utf-8');
    products = JSON.parse(data);
  } catch (error) {
    console.error('Error loading products:', error.message);
    throw error;
  }
}

// Load products from file
async function loadOrders() {
  try {
    const data = await fs.readFile('./orders.json', 'utf-8');
    Orders = JSON.parse(data);
  } catch (error) {
    console.error('Error loading orders:', error.message);
    throw error;
  }
}


async function searchProduct(q) {
  try {
    await loadProducts();
    const product = products.find(element => element.product_name === q);
    return product || null;
  } catch (error) {
    console.error('Error searching product:', error.message);
    throw error;
  }
}

async function deleteOneProduct(product_id) {
  try {
    await loadProducts();
    products.forEach((product)=>{
      if(product.product_id == product_id){
        products.splice(product.indexOf(product),1)
      }
    })
    fs.writeFile('./products.json', JSON.stringify(products))
  } catch (error) {
    console.error('Error deleting product:', error.message);
    throw error;
  }
}

async function checkStatus(order_id) {
  try {
    
    await loadOrders();
    let item
    Orders.forEach((order)=>{
      if(order.order_id == order_id){
        item=order
      }
    })
    if (item) {
      return `The status of your order is : ${item.status}`;
    } else {
      return 'Product not found';
    }
  } catch (error) {
    console.error('Error checking status:', error.message);
    throw error;
  }
}

async function addProduct() {
  try {
    const newProd = {}; // Replace this with your logic to get new product details
    products.push(newProd);
    await fs.writeFile('./products.json', JSON.stringify(products));
    return `New Product added with ID ${newProd.product_id}`;
  } catch (error) {
    console.error('Error adding product:', error.message);
    throw error;
  }
}

async function updateProduct(product_id, updatedproduct) {
  try {
    await loadProducts();
    let found = false;

    for (let i = 0; i < products.length; i++) {
      if (products[i].product_id === parseInt(product_id)) {
        found = true;
        // Update the data in that index
        products[i] = { ...products[i], ...updatedproduct };
        break;
      }
    }

    if (!found) {
      throw new Error('Product not found!');
    } else {
      await fs.writeFile('./products.json', JSON.stringify(products));
      return 'Product updated!';
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}


async function deleteOneProduct(product_id) {
    try {
      await loadProducts()
      
      // Use filter to remove the product with the specified ID
      products = products.filter((prod) => prod.product_id !== product_id);
  
      // Write the updated products array back to the file
      await fs.writeFile('./products.json', JSON.stringify(products));
      
      return "Product Deleted Successfully";
    } catch (error) {
      // Handle any potential errors
      console.error(error);
      throw error; // You might want to handle or propagate the error appropriately
    }
}

async function placeOrder(product_id, quantity){
  await loadOrders()
  await loadProducts()
  let product = products.filter(prod => prod.product_id == product_id)[0]
  if(quantity > product.stocks){
    // console.log("here")
    return "Quantity ordered is beyond the stocks. Please order less."
  }else if(!product){
    throw new Error('This product does not exist');
  }else{
    console.log("here")
    let order_id = Math.floor(Math.random()*999) + 1
    const order = {
      order_id :order_id,
      product_id : product_id,
      product_name : product.product_name,
      quantity :quantity,
      total_price :  product.price * quantity,
      status : statuses[Math.floor(Math.random()*3)]
    }
    Orders.push(order)
    fs.writeFile('./orders.json', JSON.stringify(products))
    return order
  }  
}


async function searchOneProduct(product_id){
  await loadProducts()
  return products.filter((item)=>item.product_id == product_id)
}

async function checkout(order__id){
  await loadOrders()
  let currentOrder
  Orders.forEach((order)=>{
    if (order.order_id === order__id){
       currentOrder = order
    }
  })
  console.log(currentOrder)
    if (!currentOrder) {
      throw new Error(`Order with ID ${order__id} not found.`);
    }

    return `The total price of ${currentOrder.quantity} ${currentOrder.product_name} is ${currentOrder.total_price}.`;
}

async function cancelOrder(order_id){
  await loadOrders()

    const item = Orders.filter((item) => item.order_id == order_id);
    if (item) {
      if (item.status != 'Delivered') {
        Orders = Orders.filter((x) => x.order_id !== order_id)
        return 'Your order is canceled successfully.';
      } else {
        return "Order already delivered, hence can't be canceled";
      }
    } else {
      return '404 Product not found';
    }
}

module.exports ={searchProduct,
  searchOneProduct,
  deleteOneProduct,
  checkStatus,
  updateProduct,
  placeOrder,
  cancelOrder,
  addProduct,
  checkout}