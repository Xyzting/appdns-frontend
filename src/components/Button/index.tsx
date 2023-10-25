import React from "react";

// Mui Component
import Button from "@mui/material/Button";

// Mui Icon
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";

interface Props {
  text: string;
  onClick?: any;
  color?: any;
  disable?: boolean;
  icon?: string;
  type?: "button" | "submit";
  style?: Object;
}

export default function CustomButton(props: Props) {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={props.onClick}
      disabled={props.disable ?? false}
      type={props.type ?? "button"}
      sx={{
        textTransform: "capitalize",
        padding: 0.5,
        borderRadius: 12,
        fontSize: 14,
      }}
      style={props.style}
      startIcon={
        props.icon === "add" ? (
          <AddCircleOutlineOutlinedIcon color="primary" fontSize="large" />
        ) : props.icon === "sync" ? (
          <SyncOutlinedIcon color="primary" fontSize="large" />
        ) : (
          false
        )
      }
    >
      {props.text}
    </Button>
  );
}
