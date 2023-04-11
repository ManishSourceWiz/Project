import React, {useContext} from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Template1() {
  const { template1, setTemplate1 } = useContext(ResumeContext);
  const onPressTemp1 = () => {
    setTemplate1("Manish");
  };
  return (
    <div>
      <div>
        <button onClick={() => onPressTemp1()}>Try for free 1</button>
      </div>
    </div>
  );
}

export default Template1;
