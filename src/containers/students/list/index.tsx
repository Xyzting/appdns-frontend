import { useState } from "react";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined"
import MultipleFilter from "@/components/Filter";
import Layout from "@/layouts";
import { PayloadStudents } from "@/services/students/types";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "./components/Table";

export default function StudentPage(){
  const PAGE_TITLE = "Student"

  const [openDialog, setOpenDialog] = useState({
    open: false,
    type: "",
  });

  let initData = {
    id: 0,
    nomor_induk: "",
    nama: "",
    alamat: "",
    tanggal_lahir: ""
  };

  const [form, setForm] = useState<PayloadStudents>(initData);

  let loading = false

  return (
    <Layout loading={loading} breadCrumbText={[PAGE_TITLE + "s"]}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={4} lg={3}>
          <Typography variant="h4">{PAGE_TITLE}s</Typography>
        </Grid>
        <Grid item xs={8} md={4} lg={3}>
          {/* <Button
            variant="contained"
            color="info"
            className="btn-main"
            startIcon={<AddCircleOutlineOutlinedIcon color="primary" />}
            // onClick={() => setOpenDialog({ open: true, type: "Create" })}
          >
            {"Create " + PAGE_TITLE}
          </Button> */}
        </Grid>
        <Grid item flex={1} sx={{ display: "flex", justifyContent: "end" }}>
          {/* <MultipleFilter
            option={[
              { label: "Device ID", value: "identifier" },
              { label: "Device Name", value: "name" },
            ]}
            handleSubmit={""}
          /> */}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          {/* <Table
            setOpenDialog={(e) => setOpenDialog(e)}
            setDataForm={(data) =>
              setForm(
                Object.assign(form, {
                  id: data.id,
                  nomor_induk: data.nomor_induk,
                  nama: data.nama,
                  alamat: data.alamat,
                  tanggal_lahir: data.tanggal_lahir
                })
              )
            }
            // searchField={searchField}
            // onCloseDialog={(e) => {
            //   setOpenDialog(e);
            //   setForm(initForm);
            // }}
          /> */}
        </Grid>
      </Grid>
    </Layout>
  )
}