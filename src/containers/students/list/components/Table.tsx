import { useContext, useEffect, useState } from "react";
import router from "next/router";

import { useQuery } from "react-query";

import { AppContext } from "@/providers/ContextApiProvider";
import serviceApi from "@/services/students";


// Utils
import { formatDate } from "@/utils/formatDate";
import { userAuthenticated } from "@/utils/auth";

// Mui Components
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";

// Mui Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// Custom Components
import CustomTable from "@/components/Table";
import { Students } from "@/services/students/types";

interface Props {
  setOpenDialog(e: { open: boolean; type: string }): void;
  setDataForm(e: Students): void;
  // searchField: string;
}

export default function Table(props: Props) {
  const { setSnackbar, setLoading } = useContext(AppContext);

  const [page, setPage] = useState(1);
  const [order, setOrder] = useState({ by: "", value: "" });

  let dataTableHead = [
    { name: "No", position: "center" },
    { name: "Nomor Induk", sort: true, sortField: "nomor_induk" },
    { name: "Name", sort: true, sortField: "nama" },
    { name: "Alamat", sort: true, sortField: "alamat" },
    { name: "Tanggal Lahir", sort: true, sortField: "tanggal_lahir" },
    { name: "Created At", sort: true, sortField: "created_at" },
  ];

  // if (userAuthenticated.role_name !== "USER") {
  //   dataTableHead.push({ name: "Action", position: "center" });
  // }

  const data = useQuery(
    ["students", page],
    async () =>
      serviceApi.get(),
    {
      onError: (error: any) =>
        setSnackbar({
          open: true,
          text: error.data.msg,
          variant: "error",
        }),
    }
  );

  // search data
  useEffect(() => {
    data.refetch();
    setPage(1);
  }, [order]);

  // useEffect(() => {
  //   setLoading(data.isLoading);
  // }, [data.isLoading, setLoading]);

  return (
    <Paper elevation={3}>
      <CustomTable
        dataHead={dataTableHead}
        pagination={true}
        currentPage={page}
        // lastPage={data.data?.meta.last_page}
        handlePage={(e: any, value: number) => setPage(value)}
        order={order}
        setOrder={(e: any) => {
          setOrder({
            by: e.by + "%2B",
            value: e.value,
          });
          console.log(e);
        }}
      >
        <TableBody>
          {data.data?.data.map((item: Students, index: number) => (
            <TableRow
              key={index}
              hover
              sx={{ cursor: "pointer" }}
              onClick={() => router.push("/spk-list/" + item.id)}
            >
              <TableCell align="center">
                {index + 1 + (page - 1) * 10}
              </TableCell>
              <TableCell>{item.nomor_induk}</TableCell>
              <TableCell>{item.nama}</TableCell>
              <TableCell>{item.alamat}</TableCell>
              <TableCell>{item.created_at}</TableCell>
              {/* {userAuthenticated.role_name !== "USER" && (
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      props.setDataForm(item);
                      props.setOpenDialog({ open: true, type: "Update" });
                    }}
                    sx={{ mr: 2 }}
                  >
                    <EditIcon />
                  </IconButton>
                  {userAuthenticated.role_name !== "ADMIN" && (
                    <IconButton
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        props.setDataForm(item);
                        props.setOpenDialog({ open: true, type: "Delete" });
                      }}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  )} */}
                {/* </TableCell> */}
              {/* )} */}
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </Paper>
  );
}
