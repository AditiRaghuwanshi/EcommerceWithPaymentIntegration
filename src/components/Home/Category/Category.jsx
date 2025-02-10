// import "./Category.scss";
// import cat1 from "../../../assets/category/cat-1.jpg";
// const Category = () => {
//     return <div className="shop-by-category">
//         <div className="categories">
//             <div className="category">
//                 <img src={cat1} alt="" />
//                  </div>

//                  <div className="category">
//                 <img src={cat1} alt="" />
//                  </div>

//                  <div className="category">
//                 <img src={cat1} alt="" />
//                  </div>

//                  <div className="category">
//                 <img src={cat1} alt="" />
//                  </div>
//         </div>
//     </div>;
// };

// export default Category;













import "./Category.scss";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../../assets/category/cat-1.jpg";

const Category = ({ categories, apiBaseUrl, headingText }) => {
    const navigate = useNavigate();
    console.log(headingText);
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories && categories.length > 0 ? (
          categories.map((cat) => {
            // Check if an image exists and construct the URL.
            const relativeUrl = cat.Img?.url; // e.g., "/uploads/cat_1_8b91f21895.jpg"
            const imageUrl = relativeUrl
              ? // If the URL does not start with "http", prepend the API base URL.
                relativeUrl.startsWith("http")
                  ? relativeUrl
                   : `${apiBaseUrl}${relativeUrl}`
                  : defaultImage; // Fallback to a local default image if none is provided.

            return (
              <div className="category" key={cat.id}>
                <h1>{headingText}</h1>
                <img src={imageUrl} alt={cat.title}
                onClick={() => navigate(`/category/${cat.id}`)} />
                <p>{cat.title}</p>
              </div>
            );
          })
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default Category;
