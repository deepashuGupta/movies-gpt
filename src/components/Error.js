import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oooopppss...</h1>
      <p>Something Went Wrong</p>
      <p>
        {err.status} : {err.data}
      </p>
    </div>
  );
};

export default Error;
