import {
  Box,
  Fade,
  Modal,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import React from "react";
import { updatePackage } from "../../Services/GymApi.services";

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

const UpdateServices = (props) => {
  const { open, onClose, packageData } = props;
  const [packageName, setPackageName] = React.useState(packageData?.title);
  const [packageTenure, setPackageTenure] = React.useState(
    packageData?.description ? packageData?.description : "MONTHLY"
  );
  const [packagePrice, setPackagePrice] = React.useState();

  const formatData = {
    package_name: packageName,
    package_tenure: packageTenure,
    package_price: packagePrice,
  };

  const packagePriceHandler = (e) => {
    if (e.target.value.length < 10) {
      setPackagePrice(e.target.value);
    } else {
      return false;
    }
  };

  const nameHanldlerFn = (e) => {
    setPackageName(e.target.value);
  };

  const submitButtonClicked = () => {
    updatePackage(packageData.id, formatData);
    onClose();
    // window.location.reload();
  };
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
                Update Service
              </div>
              <div className="grid grid-cols-3 gap-8 ">
                <div className="text-[white] text-[20px] flex items-center">
                  Package Name
                </div>
                <div className="col-start-2 col-span-2 ">
                  <input
                    className="w-full p-2 rounded"
                    placeholder="Enter package name here"
                    onChange={nameHanldlerFn}
                  ></input>
                </div>
                <div className="text-[white] text-[20px] flex items-center">
                  Duration
                </div>
                <div className="col-start-2 col-span-2 ">
                  <FormControl sx={{ width: "100%" }}>
                    <Select
                      // value={age}
                      defaultValue={packageTenure}
                      onChange={(e) => {
                        setPackageTenure(e.target.value);
                      }}
                      displayEmpty
                      // inputProps={{ "aria-label": "Without label" }}
                      sx={{ background: "white", height: "40px" }}
                    >
                      <MenuItem value={"MONTHLY"}>Monthly</MenuItem>
                      <MenuItem value={"QUARTERLY"}>Quarterly</MenuItem>
                      <MenuItem value={"HALFYEARLY"}>Half Yearly</MenuItem>
                      <MenuItem value={"YEARLY"}>Yearly</MenuItem>
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
                    value={packagePrice}
                    onChange={packagePriceHandler}
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
                    Update
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

export default UpdateServices;
