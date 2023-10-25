import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface props {
  open: boolean;
  handleClose: any;
  functionOnAgree: any;
  title: string;
  subTitle: string;
  textOnDisagree: string;
  textOnAgree: string;
  children: React.ReactNode;
  minWidth?: number;
  disable: boolean;
}

export default function FormDialog(props: props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle
        sx={{
          minWidth: props.minWidth ?? 600,
          backgroundColor: "#f7f7f7",
          px: 3,
          pb: 1,
        }}
      >
        {props.title}
      </DialogTitle>
      <DialogContent sx={{ pb: props.children ? 3 : 0 }}>
        <DialogContentText mt={3} p={0}>
          {props.subTitle}
        </DialogContentText>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleClose}
          style={{ fontWeight: "bold", fontSize: 16 }}
          // disabled={props.disable}
        >
          {props.textOnDisagree}
        </Button>
        <Button
          onClick={props.functionOnAgree}
          style={{ fontWeight: "bold", fontSize: 16 }}
          disabled={props.disable}
        >
          {props.textOnAgree}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
