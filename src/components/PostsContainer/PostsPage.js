//Complete the necessary code in this file
// import useState
import React, {
  useState
} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data"
// Added props
const PostsPage = (props) => {
    // set up state for your data
    const [data] = useState(dummyData)
    return ( < // Map through dummy Data
        div className = "posts-container-wrapper" > {
          data.map(postData => {
              return ( < Post post = {
                  postData
                }
                />)})} </div > );
            };

            export default PostsPage;