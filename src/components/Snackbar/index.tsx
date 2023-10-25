import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface SnackbarProps {
  open: boolean;
  variant: "error" | "success" | "info" | "warning" | undefined;
  text: string;
  handleClose: any;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbars(props: SnackbarProps) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={props.handleClose}
      >
        <Alert severity={props.variant} sx={{ minWidth: 300 }}>
          {props.text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
