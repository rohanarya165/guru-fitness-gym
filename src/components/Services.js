import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "../assets/img_3.jpg";
// import { servicesData } from "../data/localData";
import H1 from "./reusable/H1";
import WithBarTitle from "./reusable/WithBarTitle";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import AddServices from "../components/popUps/AddServices";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deletePackage, getAllPackages } from "../Services/GymApi.services";
import { CgGym } from "react-icons/cg";
import EditIcon from "@mui/icons-material/Edit";
import UpdateServices from "./popUps/UpdateServices";

export default function Services() {
  const [addServiceModal, setAddServiceModal] = useState(false);
  const [updateServicesModal, setupdateServicesModal] = useState(false);
  const [servicesData, setServicesData] = useState([]);
  const [packageData, setpackageData] = useState()
  const modalClose = () => {
    setAddServiceModal(false);
  };

  const updateModalClose = () => {
    setupdateServicesModal(false);
  };

  const getAllPackagesFn = () => {
    return getAllPackages().then((res) => {
      let Data = [];
      res?.data?.map((item) => {
        let itemData = {
          id: item.id,
          title: item.package_name,
          icon: <CgGym />,
          description: item.package_tenure,
        };
        return Data.push(itemData);
      });
      setServicesData(Data);
    });
  };

  const deleteSelectedPackage = (id) => {
    deletePackage(id).then((res) => {
      getAllPackagesFn();
    });
  };

  useEffect(() => {
    getAllPackagesFn();
  }, []);

  const cardUpdate = (item) => {
    setupdateServicesModal(true);
    setpackageData( item );
  };

  function Card({ item }) {
    return (
      <MyCard className="relative ">
        <div
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => cardUpdate(item)}
        >
          <EditIcon />
        </div>
        <Icon>{item.icon}</Icon>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Button
          variant="outlined"
          startIcon={<DeleteOutlineIcon />}
          sx={{
            background: "#ff0000",
            border: "1px solid #ff0000",
            height: "30px",
            marginTop: "10px",
            color: "white",
            "&:hover": {
              color: "#ff0000",
              fontWeight: 600,
              border: "1px solid #ff0000",
              background: "none",
              backdropFilter: "blur(30px)",
            },
          }}
          onClick={() => deleteSelectedPackage(item.id)}
        >
          Delete
        </Button>
      </MyCard>
    );
  }

  return (
    <Container>
      <InnerContainer>
        <Box>
          <div className="mt-10">
            <WithBarTitle title="Our Services for you" />
          </div>
          <Header>
            <H1 style={{ width: "50%", fontSize: 40 }}>
              PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
            </H1>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                background: "#ff0000",
                border: "1px solid #ff0000",
                height: "50px",
                color: "white",
                "&:hover": {
                  color: "#ff0000",
                  fontWeight: 600,
                  border: "1px solid #ff0000",
                  background: "none",
                  backdropFilter: "blur(30px)",
                },
              }}
              onClick={() => setAddServiceModal(true)}
            >
              Add Services
            </Button>
          </Header>
          <Cards>
            {servicesData?.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <Card item={_} />
                </React.Fragment>
              );
            })}
          </Cards>
        </Box>
      </InnerContainer>
      <AddServices open={addServiceModal} onClose={modalClose} />
      <UpdateServices open={updateServicesModal} onClose={updateModalClose} packageData={packageData}/>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 75%;
  height: 75%;
`;

const Header = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const MyCard = styled.div`
  width: 23%;
  height: 252px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #212025;
`;

const Icon = styled.span`
  font-size: 40px;
`;
const Title = styled.h3`
  font-size: 30px;
  text-align: center;
  margin: 30px 0px;
  font-weight: 400;
`;
const Description = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 200;
`;
