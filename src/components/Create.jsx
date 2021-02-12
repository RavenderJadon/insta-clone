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
            required
          />
        </div>
        <div className="create__second">
          <div className="create__second-a">
            <label htmlFor="file">
              <FaCamera className="camera" />
            </label>
            <input type="file" className="file" id="file" required />
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
