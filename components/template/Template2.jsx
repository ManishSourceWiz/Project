import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Template2() {
  const { template2, setTemplate2 } = useContext(ResumeContext);
  const onPressTemp2 = () => {
    setTemplate2("Gunpriya");
  };
  return (
    <div>
      <div>
        <button onClick={() => onPressTemp2()}>Hello 2</button>
      </div>
    </div>
  );
}

export default Template2;
