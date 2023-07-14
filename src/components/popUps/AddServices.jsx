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
import axios from "axios";
import { useState, useEffect } from "react";
import { AddNewServices } from "../../Services/GymApi.services";

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

const AddServices = (props) => {
  const { open, onClose } = props;
  const [contactNumber, setContactNumber] = React.useState();

  const formatData = {
    package_name: "package 1",
    package_tenure: "MONTHLY",
    package_price: 1000.1,
  };

  useEffect(() => {
   
  }, []);

  const contactNumberHandler = (e) => {
    if (e.target.value.length < 10) {
      setContactNumber(e.target.value);
    } else {
      return false;
    }
  };

  const submitButtonClicked = () => {
console.log("api called")
AddNewServices(formatData)
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
                Add New Service
              </div>
              <div className="grid grid-cols-3 gap-8 ">
                <div className="text-[white] text-[20px] flex items-center">
                  Package Name
                </div>
                <div className="col-start-2 col-span-2 ">
                  <input
                    className="w-full p-2 rounded"
                    placeholder="Enter package name here"
                  ></input>
                </div>
                <div className="text-[white] text-[20px] flex items-center">
                  Duration
                </div>
                <div className="col-start-2 col-span-2 ">
                  <FormControl sx={{ width: "100%" }}>
                    <Select
                      // value={age}
                      defaultValue={1}
                      onChange={() => {}}
                      displayEmpty
                      // inputProps={{ "aria-label": "Without label" }}
                      sx={{ background: "white", height: "40px" }}
                    >
                      <MenuItem value={1}>3 months</MenuItem>
                      <MenuItem value={2}>6 months</MenuItem>
                      <MenuItem value={3}>12 months</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="text-[white] text-[20px] flex items-center">
                  Price
                </div>
                <div className="col-start-2 col-span-2 ">
                  <input
                    className="w-full p-2 rounded"
                    placeholder="Enter Price here"
                    type="number"
                    value={contactNumber}
                    onChange={contactNumberHandler}
                  ></input>
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
                      "&:hover": {
                        background: "#ff0000",
                        color: "white",
                        borderColor: "#ff0000",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    onClick={submitButtonClicked}
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

export default AddServices;
