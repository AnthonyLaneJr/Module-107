import './admin.css';
import { useState} from 'react'

const Admin = () => {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [coupon, setCoupon] = useState({});
    const[allCoupons, setAllCoupons] = useState([]);

    const saveProduct = () => {
        console.log('Saving Product', product);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    };

    const textChanged = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        let copy = { ...product };
        copy[name] = val;
        setProduct(copy)
     };
//should alwasy modify a copy of state values-best practice is to make a copy and return the copy of the content.

//next: send product to backend server


    const saveCoupon = () => {
        console.log('Coupon Saved', coupon)
        
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    };

    const couponChanged = (e) => {
        let couponName = e.target.name;
        let couponVal = e.target.value;

        let couponCopy = { ...coupon };
        couponCopy[couponName] = couponVal;
        setCoupon(couponCopy);
    }



    return(
        <div className="admin">
        <h3>This is my Admin Page</h3>
            <div className="container">
                    <div className="create-item">
                        <h2 className='title'>Register New Item</h2>
                    <div className="name">
                        <h2>Item Name:</h2>
                        <input name='title' className='form-control' onChange={textChanged} type="text" />
                    </div>
                    <div className="price">
                        <h2>Price:</h2>
                        <input name='price' className='form-control' onChange={textChanged} type="number" />
                    </div>
                    <div className="image">
                        <h2>Image:</h2>
                        <input name='image' className='form-control' placeholder='Image name' onChange={textChanged} type="text" />
                    </div>
                    <div className="stock">
                        <h2>Stock:</h2>
                        <input name='stock' className='form-control' onChange={textChanged} type="text" />
                    </div>
                    <div className="discount">
                        <h2>Discount:</h2>
                        <input name='discount' className='form-control' onChange={textChanged} type="text" />
                    </div>
                    <div className="category">
                        <h2>Category:</h2>
                        <input name='category' className='form-control' onChange={textChanged} type="text" />
                    </div>
                    <div className="submit">
                        <button onClick={saveProduct} className='btn btn-secondary'>Submit</button>
                    </div>


                <hr />
                <div className="new-products">
                    <ul>
                        {allProducts.map((c) => <li>Name: {c.title} - Price: {c.price}</li>)}
                    </ul>
                </div>
            </div>

            <section  className='coupons'>
                <h3>Register Coupon</h3>
                <div className="coupon-code">
                    <h3>Coupon Code:</h3>
                    <input name='code' className='form-control' onChange={couponChanged}  type="text" />
                </div>
                <div className="coupon val">
                    <h3>Discount Value:</h3>
                    <input name='discount' className='form-control' onChange={couponChanged} type="number" />
                </div>
                <div className="dave-coupon">
                    <button className='btn btn-secondary' onClick={saveCoupon}>Submit</button>
                </div>

                <hr/>
                <ul>
                    {allCoupons.map((c) => <li>Discount Code: {c.code}  -  Discount Value: {c.discount}</li>)}
                </ul>
            </section>
            </div>
        </div>
        )
}

export default Admin;