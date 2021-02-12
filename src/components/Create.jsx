import { useState, useContext } from "react";
import { FaCamera } from "react-icons/fa";
import { ContextProvider } from "../Global/Context";

const Create = () => {
  const { create } = useContext(ContextProvider);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  console.log(title);

  const handelImage = (e) => {
    setImage(e.target.files[0]);
  };

  const createPost = (e) => {
    e.preventDefault();
    create({ title, image });
    setTitle("");
    setImage("");
  };

  return (
    <div className="create">
      <form onSubmit={createPost}>
        <div className="create__input">
          <input
            type="text"
            className="create__inputt"
            placeholder="Whats on your Mind..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="create__second">
          <div className="create__second-a">
            <label htmlFor="file">
              <FaCamera className="camera" />
            </label>
            <input
              type="file"
              className="file"
              id="file"
              required
              onChange={handelImage}
              name="filename"
            />
          </div>
          <div className="create__second-b">
            <input type="submit" className="btn-sweet" value="Create" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
