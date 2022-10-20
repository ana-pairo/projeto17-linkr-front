import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineExpandMore } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import ClickAwayListener from "react-click-away-listener";

import { Menu, Imagem, Wrapper, SearchBox } from "./HeaderStyledComponents";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [userPicture, setUserPicture] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("Linkr"));
    setUserPicture(userData.picture);
  }, []);

  return (
    <Wrapper>
      <div>
        <h1>linkr</h1>
      </div>
      <SearchBox showMenu={showMenu}>
        <input type="text" name="search" placeholder="Search for people" />
        <div>
          <BsSearch color={"#C6C6C6"} />
        </div>
      </SearchBox>
      <ClickAwayListener onClickAway={() => setShowMenu(false)}>
        <Imagem
          showMenu={showMenu}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <div>
            <MdOutlineExpandMore color="white" size="40px" />
          </div>

          <img src={userPicture} />
        </Imagem>
      </ClickAwayListener>

      <Menu
        showMenu={showMenu}
        onClick={() => {
          localStorage.removeItem("Linkr");
          navigate("/");
        }}
      >
        <h1>Logout</h1>
      </Menu>
    </Wrapper>
  );
}