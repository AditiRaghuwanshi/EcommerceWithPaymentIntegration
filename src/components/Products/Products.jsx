// import "./Products.scss";
// import Product from "./Product/Product"
// const Products = ({ innerPage, headingText }) => {
//     return <div className="products-container">
//         {!innerPage && <div className="sec-heading">{headingText}</div>}
//         <div className="products">
//             <Product />
//             <Product />
//             <Product />
//             <Product />
//             <Product />
//             <Product />
//             <Product />
//             <Product />
//         </div>

//     </div>;
// };

// export default Products;



// Products.jsx
import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ headingText, products =[], apiBaseUrl }) => {
    console.log("Products data:", products);



  return (
    <div className="products-section">
      <h2>{headingText}</h2>
      <div className="products-container">
        {products && products.length > 0 ? (
          products.map((prod) => (
            <Product key={prod.id} product={prod} apiBaseUrl={apiBaseUrl} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
