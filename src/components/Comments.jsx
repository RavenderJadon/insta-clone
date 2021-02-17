import React from "react";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__container"></div>
      <div className="comments__section">
        <form>
          <input
            type="text"
            className="comment__input"
            placeholder="Add a comment.."
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Comments;
