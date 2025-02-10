// import "./Home.scss";
// import { useEffect } from "react";
// import Banner from "./Banner/Banner"
// import Category from "./Category/Category";
// import Products from "../Products/Products";
// import { fetchDataFromApi } from "../../utils/api";


// const Home = () => {

//   useEffect(() => {
//    getcategory();

//   },[]);

  
//   const getcategory = () => {
//     fetchDataFromApi("/api/category-types?populate=*")
//         .then((res) => {
//             console.log("Fetched Data:", res.data);
//         })
//         .catch((error) => {
//             console.error("Error fetching categories:", error);
//         });
// };

  



//     return (
//     <div>
//       <Banner />
//       <div className="main-content">
//         <div className="layout">
//         <Category />
//         <Products headingText="Popular Products" />
//         </div>
//       </div>
      
//     </div>
//     );
// };

// export default Home;



// import { useEffect, useState, useContext } from "react";
// import Banner from "./Banner/Banner";
// import Category from "./Category/Category";
// import Products from "../Products/Products";
// import { Context } from "../../utils/context";
// import { fetchDataFromApi } from "../../utils/api";

// const Home = () => {
//     const { categories, setCategories } = useContext(Context);
//     const { products, setProducts } = useContext(Context);

//     useEffect(() => {
//         getCategories();
//         getProducts();
//     }, []);

//     const getCategories = async () => {
//         const res = await fetchDataFromApi("/api/category-types?populate=*");
//         if (res) {
//             console.log("Fetched Categories:", res);
//             setCategories(res.data || []);
//         } else {
//             console.error("Failed to fetch categories");
//         }
//     };

//     const getProducts = () => {
//         fetchDataFromApi("/api/products?populate=*").then((res) => {
//             console.log("Fetched Data:", res);
//             if (res && res.data) {
//                 setProducts(res.data); // Make sure 'res.data' contains the list of products
//             } else {
//                 console.error("No products found in the response");
//             }
//         }).catch((error) => {
//             console.error("Failed to fetch products", error);
//         });
//     };
    
    

//     return (
//         <div>
//             <Banner />
//             <div className="main-content">
//                 <div className="layout">
//                     <Category categories={categories} />
//                     <Products headingText="Popular Products" products={products} /> 
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;









// import axios from "axios";
// import Banner from "./Banner/Banner";
// import Category from "./Category/Category";
// import Products from "../Products/Products";
// import { useEffect, useState } from "react";

// const Home = () => {

//   const baseUrl=process.env.REACT_APP_API_URL;
//   console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);


//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getCategories();
//     getProducts();
//   }, []);

//   const getCategories = async () => {
//     try {
//       const response = await axios.get(`${baseUrl}/api/category-types?populate=*`);
//       console.log("Full categories response:", response.data);
//       const categoryData = response.data.data;  // Adjust based on actual response structure
//       console.log("Extracted category data:", categoryData);
//       setCategories(categoryData);
//     } catch (error) {
//       console.error("Failed to fetch categories:", error);
//     }
//   };

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(`${baseUrl}/api/products?populate=*`);
//       console.log("Full products response:", response.data);
//       // Update state if needed, e.g.:
//       // setProducts(response.data.data);
//     } catch (error) {
//       if (error.response) {
//         console.error("Error data:", error.response.data);
//         console.error("Error status:", error.response.status);
//         console.error("Error headers:", error.response.headers);
//       } else {
//         console.error("Error message:", error.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <Banner />
//       <div className="main-content">
//         <div className="layout">
//           <Category categories={categories} />
//           <Products headingText="Popular Products" products={products} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



















import axios from "axios";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useState } from "react";

const Home = () => {
  const baseUrl = process.env.REACT_APP_API_URL; // e.g., "http://localhost:1337"
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/category-types?populate=*`);
      console.log("Full categories response:", response.data);
      const categoryData = response.data.data; // adjust based on your API's structure
      console.log("Extracted category data:", categoryData);
      setCategories(categoryData);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  // const getProducts = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/api/products?populate=*`);
  //     console.log("Full products response:", response.data);
  //     // Update state if needed:
  //     // setProducts(response.data.data);
  //   } catch (error) {
  //     console.error("Products fetch error:", error);
  //   }
  // };


  const getProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/products?populate=*`);
      console.log("Full products response:", response.data);

      if (response.data && response.data.data) {
        setProductData(response.data.data); // ✅ Update state with fetched products
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Products fetch error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          {/* Pass categories and baseUrl as props */}
          <Category headingText="Out Categories" categories={categories} apiBaseUrl={baseUrl} />
          <Products headingText="Our Products" products={productData} apiBaseUrl={baseUrl}  />

        </div>
      </div>
    </div>
  );
};

export default Home;




