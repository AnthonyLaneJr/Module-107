import axios from "axios";

var catalog = [
  {
    _id: "5f40a6baac77a903d8f682c6",
    price: 10.05,
    stock: 13,
    title: "Yoga Mat",
    image: "yoga-mat.jpg",
    discount: 5,
    category: "Gear",
  },
  {
    _id: "5f40a6ba41d9e5044ced586c",
    price: 95.40,
    stock: 21,
    title: "Kettlebell, 40 KG",
    image: "kb-40kg.jpg",
    discount: 10,
    category: "Weights",
  },
  {
    _id: "5f40a6baa9e6e22fa1d5fac4",
    price: 20.10,
    stock: 20,
    title: "Dumbbell 10lb",
    image: "db10.png",
    discount: 0,
    category: "Weights",
  },
  {
    _id: "5f40a6baa91d5fac64",
    price: 50.15,
    stock: 20,
    title: "Dumbbell, 25lb.",
    image: "db-25.jpeg",
    discount: 0,
    category: "Weights",
  },
  {
    _id: "5f4aa9e6e22fa1d5fac987",
    price: 90.0,
    stock: 20,
    title: "Dumbbell, 45lb.",
    image: "db-45.jpeg",
    discount: 0,
    category: "Weights",
  },
  {
    _id: "5f40a6baa9e6e22fa1d5fac721",
    price: 25.25,
    stock: 20,
    title: "Resistance Bands",
    image: "resistance-bands.jpg",
    discount: 0,
    category: "Weights",
  },
  {
    _id: "5f40a6baa9e6e22fa1d5fac654",
    price: 40.50,
    stock: 20,
    title: "Weightlifting Belt",
    image: "weightlifting-belt.jpg",
    discount: 0,
    category: "Gear",
  },
  {
    _id: "5f40a6baa9e6e22fa1d5fac7451",
    price: 15.75,
    stock: 20,
    title: "Weightlifting Gloves",
    image: "weightlifting-gloves.jpg",
    discount: 0,
    category: "Gear",
  },
  {
    _id: "5f40a6baa9e6a1d5fac9876",
    price: 20.47,
    stock: 20,
    title: "Knee Sleeves",
    image: "knee-sleeves.jpg",
    discount: 0,
    category: "Gear",
  },
  {
    _id: "a6baa9e6e22fa1d5fac6543",
    price: 15.0,
    stock: 20,
    title: "Wrist Wraps",
    image: "wrist-wraps.jpg",
    discount: 0,
    category: "Gear",
  },
];

class DataService {
  async getCatalog() {
    //get data from server
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    let data = response.data;
    return data;

    //some intstructions to
    //retrieve data from the actual server
    //return catalog
  }
  //get coupons
  async getCoupons() {
    let response = await axios.get("http://127.0.0.1:5000/api/coupons/all");
    let data = response.data
    return data;
  }

  async saveCoupon(coupon) {
    let response = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
    let data = response.data;
    return data;
  }

  async saveProduct(product) {
    let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
    let data = response.data;
    return data;
  }
}



export default DataService;
