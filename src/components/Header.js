import React from "react";
import styled from "styled-components";
import Button from "./reusable/Button";
import Logo from "./reusable/Logo";

const menusData = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },

  {
    id: 3,
    name: "Services",
  },

  {
    id: 4,
    name: "Schedule",
  },
  {
    id: 5,
    name: "Contact",
  },
];

function handleScroll(id) {
  if (id === 2) {
    return window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  if (id === 4) {
    return window.scroll({
      top: document.body.offsetHeight - "100vh",
      left: 0,
      behavior: "smooth",
    });
  }
}

export default function Header() {
  return (
    <Box>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Menus>
          {menusData.map((_, index) => {
            return (
              <Menu
                onClick={() => {
                  handleScroll(_.id);
                }}
              >
                {_.name}
              </Menu>
            );
          })}
        </Menus>

        {/* <Button>Became a member</Button> */}
      </Right>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 50px;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Menus = styled.div``;
const Menu = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  text-transform: capitalize;
  margin-right: 30px;
  font-size: 16px;
  cursor: pointer;
`;
