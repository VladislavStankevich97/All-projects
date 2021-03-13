import React from "react";
import ShowWeather from "./ButtonShowWeather";
import UserGeolocation from "./UserGeolocation";
import InputField from "./InputFields";
import Checkboxs from "./Checkboxes";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyСontent: "center",
        alignItems: "center",
      }}
    >
      <Checkboxs />
      <InputField />
      <ShowWeather />
      <UserGeolocation />
    </div>
  );
}

export default Header;
