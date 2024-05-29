import { Navigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const handelauthorization = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put('http://20.244.56.144/test/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            "companyName": "goMart",
            "clientID": "8956783f-b4fe-4c22-af12-5a64ecbaba5e",
            "clientSecret": "BvcfaFWQKWfMHHyr",
            "ownerName": "Preet Paul Sharma",
            "ownerEmail": "2021a1r133@mietjammu.in",
            "rollNo": "2021A1R133"
        }),
      });

      if (!response.ok) {
            throw new Error('Auth failed');
      }

      const data = await response.json();
      localStorage.setItem("auth", JSON.stringify(data));
      setIsLoggedIn(true);
      Navigate('/numbers');
    } catch (error) {
      console.error('Error logging in:', error);
      
    }
  };

  return (
    handelauthorization
  );
};

export default Auth;
