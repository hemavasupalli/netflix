import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { netflixlogo } from "../utils/constant";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={netflixlogo} alt="logo" />
      {user && (
        <div className="flex p-2 text-white">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <p>{user.displayName}<button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button></p>
        </div>
      )}
    </div>
  );
};
export default Header;