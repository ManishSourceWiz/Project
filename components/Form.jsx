import React, { useContext, useEffect } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Form() {
  const { template1, template2, setTemplate1 } = useContext(ResumeContext);

  useEffect(() => {
    setTemplate1("Intelligent");
  }, []);

  return (
    <div>
      <div>{`${template1} Loves ${template2}`}</div>
    </div>
  );
}

export default Form;
