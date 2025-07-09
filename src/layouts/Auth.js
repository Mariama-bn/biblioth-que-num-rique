import React from "react";
import bgImage from "../assets/img/theme/arriere-plan-log-reg.jpg";

const AuthLayout = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Couche noire transparente par-dessus l'image */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.55)",
        zIndex: 1,
      }}
    />
    <div style={{ position: "relative", zIndex: 2, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      {children}
    </div>
  </div>
);

export default AuthLayout;

