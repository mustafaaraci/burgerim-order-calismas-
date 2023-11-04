import React, { useState } from "react";
import menuler from "../yemekdata";
import MenuList from "../components/MenuList";

function HomePage() {
  //menülist çağırıp prop olarak kullandık.göndereceğiz.

  return (
    <div>
      <div className="row">
        {menuler.map((menu) => (
          <div className="col-md-4">
            <MenuList menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
