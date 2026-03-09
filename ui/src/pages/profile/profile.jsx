import "./profile.css"
import { useContext} from "react";
import { AuthContext } from "../../contexts/auth/authContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

    return (
        <>
        welcome {user}
        </>
    )
}