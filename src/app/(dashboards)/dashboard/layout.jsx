import React from "react";

const dashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-green-400 p-6">Dashboard Layout</div>
      {children}
      <footer>This is my footer</footer>
    </div>
  );
};

export default dashboardLayout;
