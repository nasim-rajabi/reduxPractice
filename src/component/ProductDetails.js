import React from 'react'
import { connect } from 'react-redux';
import {add} from '../actions/productActions'

const ProductDetails = ({addProduct}) => {
  const save = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = form.get('productId');
    const productName = form.get('productName');
    const price = form.get('price');

    addProduct ({id , productName,price });
    alert ('add item success .......');
    event.target.reset();
    }

  return (
    // میشه یا دیو گذاشت یا تگ خالی و یا ریکت فرگمنت نوشت
    <React.Fragment>
        <h1 className="mt-2 mb-2">Add New Product</h1>
        <form className="mt-1" onSubmit={(event)=>save(event)}> 
        <div className="form-group">
          <label className="mb-2">product id: </label>
          <input  type="number" className="mb-3 form-control" name="productId"/>
        </div>
        <div className="form-group">
          <label  className="mb-2">product Name: </label>
          <input type="text" className="form-control" name="productName"/>
        </div>
        <div className="form-group">
          <label  className="mb-2">Price: </label>
          <input type="number" className="form-control" name="price"/>
        </div>
       
        <button type="submit" className="mt-2 btn btn-primary">Save</button>
      </form>
     </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    //  ریمو پروداکت نام پراپس هست. ریمو نام اکشن هستش که تو فایل اکشن هس و بالا ایمپورتش کردیم. دیس پچ هم همون دیس پچی هس که بالا به شکل فانکشن گرفتیم
    // حالا اینجا میگه دیسپچ کن ریمو رو با مقدار آیدی
    addProduct : (item) => dispatch(add(item)),
  }
}

export default connect (null , mapDispatchToProps)(ProductDetails);



