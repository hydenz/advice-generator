import { useState } from "react";

function useAdvice() {
  const [advice, setAdvice] = useState({
    id: 117,
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchNewAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-store",
      });
      const responseBody = await response.json();

      const newAdvice = {
        id: responseBody?.slip?.id,
        text: responseBody?.slip?.advice,
      };
      setAdvice(newAdvice);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { advice, isLoading, error, fetchNewAdvice };
}

export default useAdvice;
