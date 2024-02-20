const mongoose = require('mongoose');

main().then(
    console.log("Database Connnected")
).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/trial');
}

const products_schema = new mongoose.Schema({
    product_id : Number,
    product_name : String,
    description : String,
    stocks: Number,
    price : Number,
    image_url: String
})

let Products = new mongoose.model('Products',products_schema);
console.log(Products)
// Products.insertMany([
    
//         {
//           "product_id": 181,
//           "product_name": "PlainSweater",
//           "description": "Basic and cozy sweater for warmth in chilly weather",
//           "stocks": 100,
//           "price": 29.99,
//           "image_url": "https://example.com/plain_sweater.jpg"
//         },
//         {
//           "product_id": 182,
//           "product_name": "CeramicPlateSet",
//           "description": "Simple and durable ceramic plate set for everyday dining",
//           "stocks": 120,
//           "price": 19.99,
//           "image_url": "https://example.com/ceramic_plate_set.jpg"
//         },
//         {
//           "product_id": 183,
//           "product_name": "ClassicDeskLamp",
//           "description": "Traditional desk lamp for focused and ambient lighting",
//           "stocks": 80,
//           "price": 34.99,
//           "image_url": "https://example.com/classic_desk_lamp.jpg"
//         },
//         {
//           "product_id": 184,
//           "product_name": "PlainJeans",
//           "description": "Simple and versatile jeans for casual and comfortable wear",
//           "stocks": 110,
//           "price": 39.99,
//           "image_url": "https://example.com/plain_jeans.jpg"
//         },
//         {
//           "product_id": 185,
//           "product_name": "GlassTumblerSet",
//           "description": "Clear glass tumbler set for serving various beverages",
//           "stocks": 90,
//           "price": 24.99,
//           "image_url": "https://example.com/glass_tumbler_set.jpg"
//         },
//         {
//           "product_id": 186,
//           "product_name": "SimpleCandleHolder",
//           "description": "Minimalist candle holder for adding warmth to any space",
//           "stocks": 70,
//           "price": 12.99,
//           "image_url": "https://example.com/simple_candle_holder.jpg"
//         },
//         {
//           "product_id": 187,
//           "product_name": "PlainHoodie",
//           "description": "Casual and comfortable hoodie for a laid-back style",
//           "stocks": 95,
//           "price": 29.99,
//           "image_url": "https://example.com/plain_hoodie.jpg"
//         },
//         {
//           "product_id": 188,
//           "product_name": "MetallicForkSet",
//           "description": "Set of metallic forks for everyday dining and serving",
//           "stocks": 100,
//           "price": 14.99,
//           "image_url": "https://example.com/metallic_fork_set.jpg"
//         },
//         {
//           "product_id": 189,
//           "product_name": "SimpleDeskOrganizer",
//           "description": "Basic desk organizer for keeping workspace tidy and efficient",
//           "stocks": 85,
//           "price": 19.99,
//           "image_url": "https://example.com/simple_desk_organizer.jpg"
//         },
//         {
//           "product_id": 190,
//           "product_name": "PlainCanvasShoes",
//           "description": "Comfortable and versatile canvas shoes for everyday use",
//           "stocks": 75,
//           "price": 24.99,
//           "image_url": "https://example.com/plain_canvas_shoes.jpg"
//         },
//         {
//           "product_id": 191,
//           "product_name": "CottonTowelSet",
//           "description": "Soft and absorbent cotton towel set for bath and hand use",
//           "stocks": 110,
//           "price": 19.99,
//           "image_url": "https://example.com/cotton_towel_set.jpg"
//         },
//         {
//           "product_id": 192,
//           "product_name": "StainlessSteelFlatware",
//           "description": "Durable stainless steel flatware set for dining and serving",
//           "stocks": 95,
//           "price": 29.99,
//           "image_url": "https://example.com/stainless_steel_flatware.jpg"
//         },
//         {
//           "product_id": 193,
//           "product_name": "ClassicCeilingFan",
//           "description": "Traditional ceiling fan for cooling and air circulation",
//           "stocks": 80,
//           "price": 59.99,
//           "image_url": "https://example.com/classic_ceiling_fan.jpg"
//         },
//         {
//           "product_id": 194,
//           "product_name": "BasicWhiteTee",
//           "description": "Essential white T-shirt for a simple and casual look",
//           "stocks": 120,
//           "price": 14.99,
//           "image_url": "https://example.com/basic_white_tee.jpg"
//         },
//         {
//           "product_id": 195,
//           "product_name": "CrystalGlassVase",
//           "description": "Elegant crystal glass vase for displaying flowers and arrangements",
//           "stocks": 90,
//           "price": 24.99,
//           "image_url": "https://example.com/crystal_glass_vase.jpg"
//         },
//         {
//           "product_id": 196,
//           "product_name": "PlainPillowcases",
//           "description": "Set of plain pillowcases for comfortable and stylish bedding",
//           "stocks": 100,
//           "price": 15.99,
//           "image_url": "https://example.com/plain_pillowcases.jpg"
//         },
//         {
//           "product_id": 197,
//           "product_name": "MinimalistDeskClock",
//           "description": "Simple and modern desk clock for keeping time in style",
//           "stocks": 85,
//           "price": 19.99,
//           "image_url": "https://example.com/minimalist_desk_clock.jpg"
//         },
//         {
//           "product_id": 198,
//           "product_name": "CasualCanvasBag",
//           "description": "Relaxed and versatile canvas bag for everyday use",
//           "stocks": 110,
//           "price": 34.99,
//           "image_url": "https://example.com/casual_canvas_bag.jpg"
//         },
//         {
//           "product_id": 199,
//           "product_name": "BasicDinnerPlates",
//           "description": "Set of basic dinner plates for everyday dining",
//           "stocks": 75,
//           "price": 29.99,
//           "image_url": "https://example.com/basic_dinner_plates.jpg"
//         },
//         {
//           "product_id": 200,
//           "product_name": "ClassicReadingLamp",
//           "description": "Timeless reading lamp for focused illumination during reading sessions",
//           "stocks": 65,
//           "price": 44.99,
//           "image_url": "https://example.com/classic_reading_lamp.jpg"
//         },
//         {
//           "product_id": 201,
//           "product_name": "PlainCoffeeMug",
//           "description": "Simple and classic coffee mug for your favorite hot beverages",
//           "stocks": 95,
//           "price": 9.99,
//           "image_url": "https://example.com/plain_coffee_mug.jpg"
//         },
//         {
//           "product_id": 203,
//           "product_name": "PlainBedSheets",
//           "description": "Soft and comfortable bed sheets for a good night's sleep",
//           "stocks": 100,
//           "price": 29.99,
//           "image_url": "https://example.com/plain_bed_sheets.jpg"
//         },
//         {
//           "product_id": 204,
//           "product_name": "EverydayToaster",
//           "description": "Simple toaster for quick and easy toasting of your favorite bread",
//           "stocks": 70,
//           "price": 24.99,
//           "image_url": "https://example.com/everyday_toaster.jpg"
//         },
//         {
//           "product_id": 205,
//           "product_name": "PlainPencilSet",
//           "description": "Basic pencil set for writing and drawing needs",
//           "stocks": 110,
//           "price": 5.99,
//           "image_url": "https://example.com/plain_pencil_set.jpg"
//         },
//         {
//           "product_id": 206,
//           "product_name": "ClassicDiningTable",
//           "description": "Timeless dining table for gathering and enjoying meals",
//           "stocks": 80,
//           "price": 149.99,
//           "image_url": "https://example.com/classic_dining_table.jpg"
//         },
//         {
//           "product_id": 207,
//           "product_name": "SimpleDeskFan",
//           "description": "Compact desk fan for staying cool during work or study",
//           "stocks": 120,
//           "price": 19.99,
//           "image_url": "https://example.com/simple_desk_fan.jpg"
//         },
//         {
//           "product_id": 208,
//           "product_name": "PlainCuttingBoard",
//           "description": "Basic cutting board for food preparation in the kitchen",
//           "stocks": 95,
//           "price": 12.99,
//           "image_url": "https://example.com/plain_cutting_board.jpg"
//         },
//         {
//           "product_id": 209,
//           "product_name": "EverydayLaundryBasket",
//           "description": "Practical laundry basket for organizing and carrying laundry",
//           "stocks": 75,
//           "price": 14.99,
//           "image_url": "https://example.com/everyday_laundry_basket.jpg"
//         },
//         {
//           "product_id": 210,
//           "product_name": "SimpleSoapDispenser",
//           "description": "Basic soap dispenser for convenient handwashing",
//           "stocks": 65,
//           "price": 8.99,
//           "image_url": "https://example.com/simple_soap_dispenser.jpg"
//         }
// ])

const statuses = ["Out for delivery","Delivered","Dispatched","Ready"]
//Creating order schema and collection
const order_schema = new mongoose.Schema({
  order_id : Number,
  product_name : String,
  product_id : Number,
  quantity:Number,
  total_price:Number,
  status : String
})

const Orders = new mongoose.model("order", order_schema);
//Adding a new order
// Orders.insertMany([
//   {
//     order_id : 456,
//     product_name : "PlainBedSheets",
//     quantity : 4,
//     total_price : 120,
//     product_id : 203,
//     status : "Delivered"
//   },
//   {
//     order_id : 789,
//     product_name : "EverydayLaundryBasket",
//     product_id: 209,
//     qunatity: 5,
//     total_price :  79.95,
//     status : "Delivered"
//   },
//   {
//     order_id : 412,
//     product_name : "StainlessSteelFlatware",
//     product_id: 192,
//     quantity : 1,
//     total_price  :  199.99,
//     status : "Dispatched"
//   }
// ])

async function searchProduct(query) {
  try {
    const data = await Products.find({ product_name: query });
    return data;
  } catch (error) {
    console.error(error);
    throw error;searchOneProduct

  }
}


async function searchOneProduct(query) {
  try {
    const data = await Products.findOne({ product_id: query });
    return data;
  } catch (error) {
    // Handle any potential errors
    console.error(error);
    throw error; // You might want to handle or propagate the error appropriately
  }
}

// searchProduct("SimpleSoapDispenser")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// Products.deleteOne({product_id:203}).then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//   console.error(err);
// })

async function deleteOneProduct(product_id){
  const result = await Products.deleteOne({product_id:product_id})
  if (result.deleteCount) {
    throw new Error('No document found with that id');
  } else {
    return 'Deletion Successful';
  }
}

async function checkStatus(order_id) {
  try {
    const order = await Orders.findOne({ order_id: order_id });

    if (!order) {
      // Handle the case where no order is found with the specified order_id
      return 'Order not found';
    }
    return order.status;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

async function updateProduct(product_id,updatedElement){
  const query = { product_id : product_id };
  try{
    let updated=await Products.findOneAndUpdate(query,{
      product_name:updatedElement.product_name,
      price : updatedElement.price,
      description : updatedElement.description
    });
    console.log(`${updated.product_name} has been successfully updated`);
    return `${updated.product_name} has been successfully updated`;
  }catch(err){
    console.log("Error in updating the product"+err);
    throw err;
  }
}

async function checkout(order_id) {
  try {
    const order = await Orders.findOne({ order_id: order_id });
    console.log(order)
    if (!order) {
      throw new Error(`Order with ID ${order_id} not found.`);
    }

    return `The total price of ${order.quantity} ${order.product_name} is ${order.total_price}.`;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function placeOrder(product_id,quantity){
  let product = await Products.findOne({product_id:product_id});

  // if(quantity>)
  //Checking whether the product exists or not
  if(!product){
    throw new Error('This product does not exist');
  }else{
    let order_id = Math.floor(Math.random()*999) + 1
    const order = {
      order_id :order_id,
      product_id : product_id,
      product_name : product.product_name,
      quantity :quantity,
      total_price :  product.price * quantity,
      status : statuses[Math.floor(Math.random()*3)]
    }
    Orders.insertMany(order)
    console.log(order)
    return order
  }
}

async function addProduct(product) {
  await Products.insertMany(product)
  .then((result)=>{ 
    console.log("Added successfully");
    return result
  })
  .catch((err)=>{
    console.log(err);
    throw new Error(err)
  })
  
}

async function cancelOrder(order_id){
  let order = Orders.findOne({order_id:order_id})
  if (!order) {
    return 'Order not found';
  }
  else{
    if (order.status === "Delivered") {
      return 'Cannot be canceled as it is already delivered'
    }
    else{
      return "Order canceled successfully"
    }
  }
}

module.exports = {searchProduct,
  searchOneProduct,
  deleteOneProduct,
  checkStatus,
  updateProduct,
  placeOrder,
  cancelOrder,
  addProduct,
  checkout}