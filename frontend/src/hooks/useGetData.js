import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuthContext();

      const getRecorders = async (source) => {
        
        // let token = localStorage.getItem("user");
        let token = user.token
        setLoading(true);
        if (token) {
          // token = JSON.parse(token).token;
          const response = await fetch(`http://localhost:3000/${source}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const json = await response.json();
          setData(json);
          setLoading(false);
        }
      };



      return { data, loading, getRecorders };
}