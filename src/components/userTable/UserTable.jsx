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
} from "../../Services/GymApi.services";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import UpdateMember from "../popUps/UpdateMember";

const UserTable = () => {
  const [tableData, setTableData] = React.useState([]);
  const [formData, setformData] = React.useState();
  const [modalOpen, setmodalOpen] = React.useState(false);
  const modalClose = () => {
    setmodalOpen(false);
  };

  React.useEffect(() => {
    getAllUsers().then((res) => {
      setTableData(res.data);
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
        userId : id
      };
      setformData(data);
      setmodalOpen(true);
    });
  };

  return (
    <div className="overflow-auto h-[380px]">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Package</TableCell>
              <TableCell align="center">EndDate</TableCell>
              <TableCell align="center">Mob</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.map((item) => (
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
                <TableCell align="center">{item?.package_end_date}</TableCell>
                <TableCell align="center">{item?.phone_number}</TableCell>
                <TableCell align="center">
                  <div className="flex gap-4">
                    <div
                      className="cursor-pointer"
                      onClick={() => rowClickedFn(item?.id)}
                    >
                      <EditIcon />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => deleteFn(item?.id)}
                    >
                      <DeleteOutlineIcon />
                    </div>
                  </div>
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
export default UserTable;
