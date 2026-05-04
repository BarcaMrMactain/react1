import axios from "axios";

import React, { useState } from "react";

const useRequestData = () => {
  //afventer/loader error data

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState(null);

  const [error, setError] = useState(null); //Function som ringer op til API'et

  const makeRequest = async ( { url, method = "GET", body = null, headers = {}, params = {}, } ) => {
    let response; // resultatet af opkald til API - gemmes i useState data når vi er færdige

    setIsLoading(true); // vi venter på data - ellerr error

    setError(null); // nulstil error

    await new Promise ( resolve => setTimeout ( resolve, 3) )

    try {
      // Prøv at gøre dette

      // ... hvis det går godt, fortsætter vi her ... get GET geT -> (toUpperCase)

      if (method.toUpperCase() === "GET") {
        response = await axios.get(url, { headers, params }); // Husk håndtering af POST PUT PATCH DELETE
      } else {
        throw new Error("Forkert metode - vælg GET POST PUT PATCH DELETE");
      }

      console.log(response);

      setData(response.data); // return true
    } catch (error) {
      // Hvis det går galt - error - så gør det her

      const message = error.response?.data?.message || error.message;

      setError(message);

      setData(null); // nulstil data
    } finally {
      setIsLoading(false); // færdig med at loade
    }
  }; // send ud til komponenter som skal bruge hooket her = skal hente data fra et API

  return { makeRequest, isLoading, data, error };
};

export default useRequestData;
