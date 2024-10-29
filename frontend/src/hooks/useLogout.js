import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";


// alerts
import Swal from "sweetalert2";



export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const Navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("user");
      dispatch({ type: 'LOGOUT' });
      Swal.fire({
        title: 'Success!',
        text: 'You are now logged out!',
        icon: 'success',
        confirmButtonText: 'Cool',
        theme: 'Bulma'
      })
      Navigate('/login');
    }


    return { logout };
}