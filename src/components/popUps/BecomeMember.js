import {
  Box,
  Fade,
  Modal,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import { MobileDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React from "react";
import {getAllPackages , addNewUser} from "../../Services/GymApi.services"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 525,
  // bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  backdropFilter: "blur(30px)",
};

// type Props = { open: boolean; onClose: any };

const BecomeMember = (props) => {
  const { open, onClose } = props;
  const [contactNumber, setContactNumber] = React.useState();
  const [packageData, setPackageData] = React.useState();
  const [selectedPackageID, setSelectedPackageID] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();

  React.useEffect(()=>{
    getAllPackagesFn()
  },[])

  const getAllPackagesFn = () => {
    return  getAllPackages().then((res) => {
        let Data = []
        res?.data?.map((item) => {
          let itemData = {
            id: item.id,
            title: item.package_name,
            description: item.package_tenure,
          }
         return Data.push(itemData)
        })
        setPackageData(Data)
      })
    }

  const contactNumberHandler = (e) => {
    if (e.target.value.length < 10) {
      setContactNumber(e.target.value);
    } else {
      return false;
    }
  };

  const submitData = () => {
    const reqData = {
      "first_name" : firstName,
      "last_name" : lastName,
      "phone_number" :contactNumber.toString(),
      "package_id" : selectedPackageID.toString()
  }
  addNewUser(reqData).then((res)=> {onClose()})
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="p-12">
              <div className="text-center text-[#ff0000] text-[40px] mb-4">
                Welcome to GFC
              </div>
              <div className="grid grid-cols-3 gap-8 ">
                <div className="text-[white] text-[20px] flex items-center">
                  First Name
                </div>
                <div className="col-start-2 col-span-2 ">
                  <input
                    className="w-full p-2 rounded"
                    placeholder="Enter name here"
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                <div className="text-[white] text-[20px] flex items-center">
                  Last Name
                </div>
                <div className="col-start-2 col-span-2 ">
                  <input
                    className="w-full p-2 rounded"
                    placeholder="Enter name here"
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
                <div className="text-[white] text-[20px] flex items-center">
                  Contact Number
                </div>
                <div className="col-start-2 col-span-2 ">
                  <input
                    className="w-full p-2 rounded"
                    placeholder="Enter name here"
                    type="number"
                    value={contactNumber}
                    onChange={contactNumberHandler}
                  ></input>
                </div>
                <div className="text-[white] text-[20px] flex items-center">
                  Date of Birth
                </div>
                <div className="col-start-2 col-span-2 calenderInput">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        "DatePicker",
                        "MobileDatePicker",
                        "DesktopDatePicker",
                        "StaticDatePicker",
                      ]}
                    >
                      <DemoItem>
                        <MobileDatePicker
                          defaultValue={dayjs("2022-04-17")}
                          sx={{
                            background: "white",
                            height: "40px",
                            borderRadius: "4px",
                          }}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="text-[white] text-[20px] flex items-center">
                  Package
                </div>
                <div className="col-start-2 col-span-2 ">
                  <FormControl sx={{ width: "100%" }}>
                    <Select
                      onChange={(e) => {setSelectedPackageID(e.target.value)}}
                      displayEmpty
                      sx={{ background: "white", height: "40px" }}
                    >
                      {packageData?.map((item)=> {
                        return <MenuItem value={item.id}>{item.title}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12 mt-8">
                <div>
                  <Button
                    variant="outlined"
                    onClick={onClose}
                    sx={{
                      width: "100%",
                      color: "#ff0000",
                      border: "1px solid #ff0000",
                      "&:hover": {    background: "#ff0000",
                      color: "white",  borderColor: "#ff0000", },
                    }}
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    onClick={submitData}
                    sx={{
                      width: "100%",
                      background: "#ff0000",
                      border: "1px solid #ff0000",
                      color: "white",
                      "&:hover": {
                        color: "#ff0000",
                        border: "1px solid #ff0000",
                        background: "none",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BecomeMember;
