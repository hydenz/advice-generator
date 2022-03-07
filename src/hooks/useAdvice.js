import { useState } from "react";

function useAdvice() {
  const [advice, setAdvice] = useState({
    id: 117,
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewAdvice = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const responseBody = await response.json();

    const newAdvice = {
      id: responseBody?.slip?.id,
      text: responseBody?.slip?.advice,
    };

    setAdvice(newAdvice);
    setIsLoading(false);
  };

  return { advice, isLoading, fetchNewAdvice };
}

export default useAdvice;
