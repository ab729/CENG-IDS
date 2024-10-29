import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";


export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const Navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("user");
      dispatch({ type: 'LOGOUT' });
      Navigate('/login');
    }


    return { logout };
}