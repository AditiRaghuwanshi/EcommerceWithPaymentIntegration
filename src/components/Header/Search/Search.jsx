import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/headphone-prod-2.webp";
const Search = ({setShowSearch}) => {
    return(
        <>
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    // value={query}
                    // onChange={onChange}
                />
               <MdClose onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
               
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
               
                <div className="search-results">
                 
                        <div
                            className="search-result-item"
                            // key={item.id}
                            onClick={() => {
                                // navigate("/product/" + item.id);
                                // setSearchModal(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={prod} alt=""
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    product name
                                   
                                </span>
                                <span className="desc">
                                    description
                                </span>
                            </div>
                        </div>
                
                </div>
            </div>
        </div>
    

        </>
    );
};

export default Search;
