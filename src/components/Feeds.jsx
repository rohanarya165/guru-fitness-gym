import * as React from "react";
import styled from "styled-components";
import UserFeed from "./UserFeed/UserFeed";
import {getAllUsersActivity} from "../Services/GymApi.services"
import { useEffect , useState } from "react";

const newFeedData = [
  {
    date: "10-1-2022",
    message: "Happy bday xyz",
  },
  {
    date: "9-1-2022",
    message: "abc package will expire this week",
  },
  {
    date: "8-1-2022",
    message: "happy bday 123",
  },
  {
    date: "7-1-2022",
    message: "Happy bday xyz",
  },
  {
    date: "10-1-2022",
    message: "Happy bday xyz",
  },
  {
    date: "9-1-2022",
    message: "abc package will expire this week",
  },
  {
    date: "8-1-2022",
    message: "happy bday 123",
  },
  {
    date: "7-1-2022",
    message: "Happy bday xyz",
  },
];

export default function Feeds() {

const [FeedsData, setFeedsData] = useState([])


React.useEffect(() => {
  getAllUsersActivity().then((res) => {
    const data = new Set(res.data);
    console.log("getAllUsersActivity",data)
  });
}, []);


  return (
    <Container>
      <div className="grid grid-cols-3 gap-20 w-full h-full p-20">
        <div className=" drop-shadow-2xl bg-white  p-8 rounded-lg overflow-scroll">
          <p className="text-[#ff0000] text-[30px]">News Feeds</p>
          {newFeedData.map((item) => {
            return (
              <div className="border border-[#ff0000] rounded p-4 mb-4">
                <div>Date : {item.date}</div>
                <div>{item.message}</div>
              </div>
            );
          })}
        </div>
        <div className=" drop-shadow-2xl bg-white  p-8 rounded-lg col-span-2">
          <div className="flex justify-between">
            <p className="text-[#ff0000] text-[30px]">Customer Action</p>
          </div>
          <div>
            <UserFeed/>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  width: 45%;
`;
const Image = styled.img`
  width: 70%;
  height: 80%;
`;
