import React from "react";

function useFetch(url) {
  const [state, setState] = React.useState();

  React.useEffect(() => {
    console.log("stuff");
    async function fetchRandomData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setState(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRandomData();
  }, [url]);

  return state;
}

export default useFetch;
