import React, { useEffect, createContext, useState, useCallback } from "react";

const ResumeContext = createContext({});

const ResumeProvider = ({ children }) => {

  const [template1, setTemplate1] = useState(null);
  const [template2, setTemplate2] = useState(null);

  const resumeContext = {
    template1,
    template2,
    setTemplate1,
    setTemplate2,
  };

  return (
    <ResumeContext.Provider value={resumeContext}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
export { ResumeContext };
