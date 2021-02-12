import { FaCamera } from "react-icons/fa";

const Create = () => {
  return (
    <div className="create">
      <form>
        <div className="create__input">
          <input
            type="text"
            className="create__inputt"
            placeholder="Whats on your Mind..."
          />
        </div>
        <div className="create__second">
          <div className="create__second-a">
            <label htmlFor="file">
              <FaCamera />
            </label>
            <input type="file" className="file" id="file" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
