import React from "react";

async function useFetch(url) {
  let data;
  try {
    const res = await fetch(url);
    data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  return data;
}

export default useFetch;
