import React , {Component}  from 'react';
import {getAll , remove} from '../actions/productActions'
import {connect} from 'react-redux'


 class ProductList extends Component {
   render(){
    return (
      <div>
          <h1 className="text-center mt-2 mb-2">Product List</h1>
          <table className="table table-striped table-bordered text-center-align text-center border">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Delete</th>
                  </tr>
              </thead>
                <tbody>
                    {
                      this.props.products.map((item) =>                        
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>   
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => this.props.removeProduct(item.id)}>Delete</button>
                            </td>   
                        </tr>
                        )                    
                    }
                </tbody>
          </table>
      </div>
    ) 
  }
}

//state = store .استیت همون استور هستش که در پایین اومده 
// products => this.props.products
// در اینجا پروداکت استیت تو فایل پروداکت ریدیوسر اومده 
// برای خواندن اطلاعات در ریداکس از مپ استیت تو پراپس استفاده می کنیم
function mapStateToProps (state) {
  return {
     products:state.productState.items,
  };
}

// برای نوشتن و تغییر در ریداکس از مپ دیس پچ تو پراپس استفاده می کنیم
const mapDispatchToProps = dispatch => {
  return {
    //  ریمو پروداکت نام پراپس هست. ریمو نام اکشن هستش که تو فایل اکشن هس و بالا ایمپورتش کردیم. دیس پچ هم همون دیس پچی هس که بالا به شکل فانکشن گرفتیم
    // حالا اینجا میگه دیسپچ کن ریمو رو با مقدار آیدی
    removeProduct : (id) => dispatch(remove(id)),
  }
}
// هر کامپوننتی که بخواد به ریداکس متصل بشه باید براش از کانکت استفاده کنیم
export default connect(mapStateToProps , mapDispatchToProps)(ProductList); 
 