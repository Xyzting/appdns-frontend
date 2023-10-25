import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { useMutation, useQueryClient } from "react-query";

// import userApi, { UserPassword } from "@/services/user";
// import authApi from "@/services/auth";

import { AppContext } from "@/providers/ContextApiProvider";

// Mui Components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// MUI Icon
import WarningIcon from "@mui/icons-material/Warning";

// Custom Components
import FormDialog from "@/components/Dialog";

interface Props {
  data: { username: string };
  openDialog: {
    open: boolean;
    type: string;
  };
  onCloseDialog(e: { open: boolean; type: string }): void;
}

export default function Form(props: Props) {
  const { setSnackbar, setLoading } = useContext(AppContext);

  const router = useRouter();
  const queryClient = useQueryClient();

  let initForm = {
    password: "",
    password_confirmation: "",
  };

  // const [form, setForm] = useState<UserPassword>(initForm);
  const [error, setError] = useState<any>("");

  // const changePassword = useMutation(
  //   async (data: UserPassword) => userApi.changePassword(data),
  //   {
  //     onSuccess: () => onApiSuccess("Data updated successfully"),
  //     onError: (error: any) => validate(error),
  //   }
  // );

  // const logout = useMutation(async () => authApi.logout(), {
  //   onSuccess: () => {
  //     handleCloseDialog();

  //     localStorage.removeItem("sass-token");
  //     localStorage.removeItem("sass-user");

  //     router.push("/login");
  //   },
  //   onError: (error: any) => validate(error),
  // });

  // function handleChange(e: any) {
  //   const { name, value } = e.target;

  //   setForm((f) => ({
  //     ...f,
  //     [name]: value,
  //   }));

  //   setError((f: any) => ({
  //     ...f,
  //     [name]: "",
  //   }));
  // }

  // function handleCloseDialog() {
  //   props.onCloseDialog({ open: false, type: "" });
  //   setForm(initForm);
  //   setError("");
  // }

  // function onApiSuccess(message: string) {
  //   queryClient.invalidateQueries("users");
  //   handleCloseDialog();
  //   setSnackbar({
  //     open: true,
  //     text: message,
  //   });
  //   logout.mutate();
  // }

  function validate(res: any) {
    if (res.status === 422) {
      const newError = { ...error };

      res.data.errors.map((item: any) => {
        newError[item.field] = item.message;
      });

      setError(newError);
      setSnackbar({
        open: true,
        text: "Unprocessable Content",
        variant: "error",
      });
    } else {
      setSnackbar({
        open: true,
        text: res.data.message,
        variant: "error",
      });
    }
  }

  // function onSubmitDialog(e: any) {
  //   e.preventDefault();

  //   switch (props.openDialog.type) {
  //     case "Update":
  //       changePassword.mutate(form);
  //       break;
  //     case "Logout":
  //       logout.mutate();
  //       break;
  //   }
  // }

  // let loading = changePassword.isLoading || logout.isLoading;

  // useEffect(() => {
  //   setLoading(loading);
  // }, [loading, setLoading]);

  return (
    <FormDialog
      open={props.openDialog.open}
      title={props.openDialog.type === "Update" ? "Change Password" : "Logout"}
      subTitle=""
      textOnDisagree="Cancel"
      textOnAgree="Confirm"
      minWidth={450}
      // handleClose={handleCloseDialog}
      // functionOnAgree={onSubmitDialog}
      // disable={loading}
    >
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", mt: 2 }}
        justifyContent="center"
      >
        {props.openDialog.type === "Update" ? (
          <Grid container item lg={12} md={12} xs={12} spacing={1}>
            <Grid container item alignItems="center">
              <Grid item lg={4} md={4} xs={4}>
                <Typography>Username</Typography>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                xs={8}
                sx={{ display: "flex", alignItems: "center" }}
              >
                :
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="username"
                  value={props.data.username}
                  onChange={handleChange}
                  sx={{ ml: 1, mr: 1 }}
                  disabled={true}
                />
              </Grid>
            </Grid>
            <Grid container item alignItems="center">
              <Grid item lg={4} md={4} xs={4}>
                <Typography>New Password</Typography>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                xs={8}
                sx={{ display: "flex", alignItems: "center" }}
              >
                :
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  error={error.password ? true : false}
                  helperText={error.password}
                  sx={{ ml: 1, mr: 1 }}
                  type="password"
                />
              </Grid>
            </Grid>
            <Grid container item alignItems="center">
              <Grid item lg={4} md={4} xs={4}>
                <Typography>Password Confirmation</Typography>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                xs={8}
                sx={{ display: "flex", alignItems: "center" }}
              >
                :
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="password_confirmation"
                  value={form.password_confirmation}
                  onChange={handleChange}
                  sx={{ ml: 1, mr: 1 }}
                  error={error.password_confirmation ? true : false}
                  helperText={error.password_confirmation}
                  type="password"
                />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} style={{ paddingTop: 0, textAlign: "center" }}>
              <WarningIcon color="error" sx={{ fontSize: 80 }} />
            </Grid>
            <Grid item>
              <Typography>Are you sure you want to logout ?</Typography>
            </Grid>
          </>
        )}
      </Grid>
    </FormDialog>
  );
}
