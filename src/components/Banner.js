import React from "react";
import styled from "styled-components";
import bg from "../assets/img_1.jpg";
// import Button from "./reusable/Button";
import H1 from "./reusable/H1";
import WithBarTitle from "./reusable/WithBarTitle";
import { FaPlay } from "react-icons/fa";
import Header from "./Header";
import BecomeMember from "./popUps/BecomeMember";
import { Button } from "@mui/material";
import {userIn} from "../Services/GymApi.services"
// import myVd from "../assets/vd_1.mp4";

export default function Banner() {
  const [modalOpen, setmodalOpen] = React.useState(false);
  const [userId, setUserId] = React.useState("");


  const modalClose = () => {
    setmodalOpen(false);
  };

  const userInHandlerFn = (e) => {setUserId(e.target.value)}

  const checkedInFn = () => {userIn(userId)}

  return (
    <Main>
      {/* <Video poster={bg} autoplay playsinline muted loop>
        <source
          src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4"
          type="video/mp4"
        />
      </Video> */}
      <Header />

      <Container>
        <RightBox>
          <WithBarTitle title="WITH SHRAVAN MEENA" />
          <H1>Build Perfect body shape for good and healthy life.</H1>
          {/* <Button animation="fadeInLeft">Became a member</Button> */}
        </RightBox>
        <LeftBox>
          <div className="p-12 mr-8 backdrop-blur-xl rounded-[15px]">
            {/* <Button animation="fadeInLeft" onClick={()=>{setmodalOpen(true)}}>Became a member</Button> */}
            <div className="grid grid-cols-2 gap-6">
              <input
                className="w-full p-2 rounded"
                placeholder="Enter your id"
                onChange={userInHandlerFn}
                type="number"
              ></input>
                <Button
              onAnimationIteration={"fadeInLeft"}
              variant="contained"
              onClick={checkedInFn}
              sx={{
                width: "100%",
                background: "#12AD2B",
                border: "1px solid #12AD2B",
                height: "50px",
                color: "white",
                "&:hover": {
                  color: "#12AD2B",
                  fontWeight: 600,
                  border: "1px solid #12AD2B",
                  background: "none",
                },
              }}
            >
              Check In
            </Button>
           <div className="col-span-2">

            <Button
              onAnimationIteration={"fadeInLeft"}
              variant="contained"
              onClick={() => {
                setmodalOpen(true);
              }}
              sx={{
                width: "100%",
                background: "#ff0000",
                border: "1px solid #ff0000",
                height: "50px",
                color: "white",
                "&:hover": {
                  color: "#ff0000",
                  fontWeight: 600,
                  border: "1px solid #ff0000",
                  background: "none",
                  // backdropFilter: "blur(30px)"
                },
              }}
            >
              Become a Member
            </Button>
           </div>
            </div>
          </div>
          {/* <Circle>
            <CircleButton>
              <FaPlay />
            </CircleButton>
          </Circle> */}
        </LeftBox>
      </Container>
      <BecomeMember open={modalOpen} onClose={modalClose} />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const RightBox = styled.div`
  width: 50%;

  padding: 0px 100px;
`;

const Circle = styled.div`
  border: 2px solid red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 120px;
  padding: 2px;
  animation: zoomIn;
  animation-duration: 2s;
`;

const CircleButton = styled.button`
  outline: none;
  background-color: red;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;
