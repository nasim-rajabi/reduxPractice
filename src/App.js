import  ProductDetails  from './component/ProductDetails';
import ProductList from './component/ProductList';

function App() {
  return (
    <div className="container-fluid">
       <h1 className="text-center">First Redux sample App</h1>
       <hr/>
          <div className="row">
            <div className="col">
              <ProductList/>
            </div>
             <div className="col">
              <ProductDetails/>
            </div>
          </div>
    </div>
  );
}

export default App;

