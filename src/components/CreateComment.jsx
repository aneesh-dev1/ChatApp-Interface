import avatarIcon from "../assets/images/avatars/image-amyrobson.png";

const CreateComment = () => {
  return (
    <div className="comment createComment">
      <img src={avatarIcon} alt="User" className="avatar comment" />
      <form className="commentForm">
        <textarea
          className="inputComment"
          name="comment"
          placeholder="Add a comment..."
          style={{ height: "65px", width: "510px" }}
        />
        <button className="submit" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
