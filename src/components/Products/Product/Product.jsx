// import "./Product.scss";
// import prod from "../../../assets/products/earbuds-prod-5.webp";



// const Product = () => {
//   return (
//     <div className="product-card">
//         <div className="thumbnail">
//             <img src={prod} alt="" />
//         </div>
//             <div className="prod-details">
//                 <span className="name">Product name </span>
//                 <span className="price">   &#8377;499</span>
//             </div>
//         </div>
    
//   )
// }

// export default Product












// Product.jsx
import "./Product.scss";

// Optionally, you can import a fallback/default image if needed
import fallbackImg from "../../../assets/products/earbuds-prod-3.webp";

const Product = ({ product, apiBaseUrl }) => {
  // Get the first image from the product's image array
  // (Assuming the API returns the image array under the key "img")
  const relativeUrl =
    product.img && product.img.length > 0 && product.img[0].url;
  const imageUrl = relativeUrl
    ? relativeUrl.startsWith("http")
      ? relativeUrl
      : `${apiBaseUrl}${relativeUrl}`
    : fallbackImg; // Fallback image if none is provided

  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={imageUrl} alt={product.title} />
      </div>
      <div className="prod-details">
        <span className="name">{product.title}</span>
        <span className="price">&#8377; {product.price}</span>
      </div>
    </div>
  );
};

export default Product;


