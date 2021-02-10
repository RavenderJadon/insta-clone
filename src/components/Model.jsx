import { useContext, useState } from "react";
import { ContextProvider } from "../Global/Context";

const Model = () => {
  const { model, closeModel, register, login } = useContext(ContextProvider);
  const [phoneModelState, setPhoneModelState] = useState(false);
  const [hide, setHide] = useState("");

  const [state, setState] = useState({
    register: true,
    login: false,
  });
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const formsToggle = () => {
    setState({
      ...state,
      register: !state.register,
      login: !state.login,
    });
  };

  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // console.log("inputs", inputs);

  const closeForm = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "model") {
      closeModel();
    }
  };

  const formsToggleWithPhoneNo = () => {
    setPhoneModelState(true);
    setHide("none");
    setInputs({
      username: "",
      email: "",
      password: "",
    });
  };

  const registerUser = (e) => {
    e.preventDefault();
    console.log("inputs", inputs);
    register(inputs);
  };

  return (
    <div>
      {model && (
        <div className="model" onClick={closeForm}>
          <div className="model__container">
            {state.register && (
              <div className="model__form">
                <form onSubmit={registerUser}>
                  <div className="model__group">
                    <img src="/images/instagramLogo.png" alt="insta logo" />
                  </div>
                  <div className="model__group">
                    <input
                      type="text"
                      name="username"
                      className="model__input"
                      placeholder="Username..."
                      onChange={handleInput}
                      value={inputs.username}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="email"
                      name="email"
                      className="model__input"
                      placeholder="Email..."
                      onChange={handleInput}
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="password"
                      name="password"
                      className="model__input"
                      placeholder="Create password..."
                      onChange={handleInput}
                      value={inputs.password}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model__group">
                    <span onClick={formsToggle}>
                      Already have an account ?{" "}
                    </span>
                  </div>
                </form>
              </div>
            )}
            {!state.register && (
              <div style={{ display: hide }}>
                <div className="model__form">
                  <form>
                    <div className="model__group">
                      <img src="/images/instagramLogo.png" alt="insta logo" />
                    </div>
                    <div className="model__group">
                      <input
                        type="email"
                        name="email"
                        className="model__input"
                        placeholder="Email..."
                        onChange={handleInput}
                        value={inputs.email}
                        required
                      />
                    </div>
                    <div className="model__group">
                      <input
                        type="password"
                        name="password"
                        className="model__input"
                        placeholder="Create password..."
                        onChange={handleInput}
                        value={inputs.password}
                        required
                      />
                    </div>
                    <div className="model__group">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-smart"
                      />
                    </div>
                    <div className="model__group">
                      <span onClick={formsToggle}>Create a new account ? </span>
                    </div>
                    <div className="model__group">
                      <span onClick={formsToggleWithPhoneNo}>
                        Create account with Phone no.?{" "}
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {phoneModelState && (
              <div className="model__form">
                <form>
                  <div className="model__group">
                    <img src="/images/instagramLogo.png" alt="insta logo" />
                  </div>
                  <div className="model__group">
                    <input
                      type="email"
                      name="email"
                      className="model__input"
                      placeholder="Phone Number..."
                      onChange={handleInput}
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="password"
                      name="password"
                      className="model__input"
                      placeholder="Create password..."
                      onChange={handleInput}
                      value={inputs.password}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model__group">
                    <span onClick={formsToggle}>Create a new account ? </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
