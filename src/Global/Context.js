import { createContext, useState, useEffect } from "react";
import { auth, db, storage } from "../components/config";
import firebase from "firebase";
export const ContextProvider = createContext();

const Context = (props) => {
  const [model, setModel] = useState(false);
  const [usr, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [posts, setPosts] = useState([]);

  const openModal = () => {
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  const register = async (user) => {
    const { username, email, password } = user;
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      response.user.updateProfile({ displayName: username });
      setModel(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const login = async (user) => {
    const { email, password } = user;
    const response = await auth.signInWithEmailAndPassword(email, password);
    console.log("response", response);
    setModel(false);
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log("err :", err);
      });
  };

  const create = (data) => {
    console.log("post data", data);
    const { title, image } = data;
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log("err", err);
      },
      () => {
        //success function/completed function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              title: title,
              image: url,
              username: usr.displayName,
              currentTime: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
      }
    );
  };

  const publishComment = (data) => {
    const { comment, id } = data;
    db.collection("posts").doc(id).collection("comments").add({
      comment:comment,
      username: usr.displayName,
      currentTime:firebase.firestore.FieldValue.serverTimestamp(),

    })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoader(false);
    });

    // fetch posts from database;

    db.collection("posts")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        console.log("my data", snp.docs);
        setPosts(snp.docs.map((doc)=>(
          {
            id: doc.id,
            title: doc.data().title,
            image: doc.data().image,
            username: doc.data().username,
          }

        )))
      });
  }, []);
  console.log("login User :", usr);

  return (
    <ContextProvider.Provider
      value={{
        model,
        openModal,
        closeModel,
        register,
        login,
        usr,
        loader,
        logout,
        create,
        posts,
        publishComment,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
