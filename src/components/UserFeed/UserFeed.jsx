import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  getAllUsers,
  deleteUser,
  getUserById,
  getAllUsersActivity
} from "../../Services/GymApi.services";
import UpdateMember from "../popUps/UpdateMember";

const UserFeed = () => {
  const [tableData, setTableData] = React.useState([]);
  const [searchedData, setSearchedData] = React.useState([]);
  const [activityData, setactivityData] =  React.useState([]);
  const [formData, setformData] = React.useState();
  const [modalOpen, setmodalOpen] = React.useState(false);
  const modalClose = () => {
    setmodalOpen(false);
  };

  React.useEffect(() => {
    getAllUsers().then((res) => {
      setTableData(res.data);
      setSearchedData(res.data);
    });
  }, []);
  React.useEffect(() => {
    getAllUsersActivity().then((res) => {
        setactivityData(res.data)
    });
  }, []);

  const deleteFn = (id) => {
    deleteUser(id);
  };
  const rowClickedFn = (id) => {
    getUserById(id).then((res) => {
      let data = {
        first_name: res?.data?.first_name,
        last_name: res?.data?.last_name,
        phone_number: res?.data?.phone_number,
        package_id: res?.data?.package_detail?.id,
        userId: id,
      };
      setformData(data);
      setmodalOpen(true);
    });
  };

  let searchedFnHandler = (e) => {
   
    if(e.target.value === ""){
      setSearchedData(tableData)
    }else{
      tableData?.map(data => {
        
        if(data.id.toString() === e.target.value){
          console.log("searchedFnHandler",data.id)
          return  setSearchedData([data])
        }
      })
    }
  };

  return (
    <div className="overflow-auto h-[380px]">
      {/* <div className="w-full flex justify-end">
        <div className="pb-4">
          <input
            className="w-full p-2 rounded"
            placeholder="Search By ID"
            onChange={searchedFnHandler}
          ></input>
        </div>
      </div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchedData?.map((item) => (
              <TableRow
                key={item?.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                // onClick={()=>rowClickedFn(item?.id)}
              >
                <TableCell component="th" scope="row" align="center">
                  {item?.id}
                </TableCell>
                <TableCell align="center">
                  {item?.first_name + " " + item?.last_name}
                </TableCell>
                <TableCell align="center">
                  {item?.package_detail?.package_tenure}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UpdateMember open={modalOpen} onClose={modalClose} formData={formData} />
    </div>
  );
};
export default UserFeed;
