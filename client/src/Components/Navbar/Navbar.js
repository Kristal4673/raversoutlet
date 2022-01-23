import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      Navbar
    </div>
  );
}

export default Navbar;
