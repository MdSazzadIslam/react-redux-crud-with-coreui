import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://linereflection.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Line Reflection Digital
        </a>
        <span className="ml-1">&copy; {new Date().getFullYear()}</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://linereflection.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Line Reflection Digital
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
