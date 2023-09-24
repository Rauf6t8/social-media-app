import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Posts, User } from "../../dummyData.js";
import { useState } from "react";


function Post({ post }) {
  console.log(post);

  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
  setLike(isLike ? like-1 : like+1)
  setIsLike(!isLike)
};


  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img
              className="postprofileimg"
              src={
                User.filter((user) => user.id === post.userId)[0].profilePicture
              }
              alt=""
            />
            <sapn className="postusername">
              {User.filter((u) => u.id === post?.userId)[0]?.username}
            </sapn>
            <span className="postdate">{post.date}</span>
          </div>
          <div className="posttopright">
            <MoreVert />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post.desc}</span>
          <img src={post.photo} alt="" className="postimg" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img
              src="/assets/images/like.png"
              alt=""
              className="likepost"
              onClick={likeHandler}
            />
            <img src="/assets/images/heart.png" alt="" className="heartpost" onClick={likeHandler}/>
            <span className="postlikecounter">{like}people like it</span>
          </div>
          <div className="postbottomright">
            <span className="postcommenttext">{post.comment}comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
