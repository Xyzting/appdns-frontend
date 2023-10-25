import Image from "next/image"

// Mui Components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";

// Mui Icons
import Typography from "@mui/material/Typography";

export default function DrawerFooter(){
  return (
    <List 
      sx={{ 
        marginTop: "auto",

        "& .MuiListItemButton-root:hover": {
          borderTopLeftRadius: "35px",
          borderBottomLeftRadius: "35px",
        }
      }}
    >
      <Box
        sx={{
          mb: 1
        }}
      >
        <Grid container spacing={1.5} sx={{ mb: 2 }}>
          <Grid item>
            <Avatar
              sx={{ ml: 2, mt: 1,width: 44, height: 44, cursor: "pointer" }}
              // onClick={() => {
              //   setOpenDialog({ open: true, type: "Update" });
              // }}
            >
            </Avatar>
          </Grid>
          <Grid item>
            <div
              style={{
                marginTop: 8
              }}
            >
              <Typography 
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "white"
                }}
              >
                Admin
              </Typography>
              <Typography 
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color: "#aaaaaa"
                }}
              >
                User
              </Typography>
            </div>
          </Grid>
          <Grid item sx={{ mt: 1, ml: 5.3 }}>
            <Tooltip title="Logout" placement="right">
              <ListItemButton
                // onClick={() => {
                //   setOpenDialog(true);
                // }}
              >
                <Image
                  src="/icons/Logoutred.png"
                  alt="Logout"
                  width={30}
                  height={30}
                  priority
                />
              </ListItemButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </List>
  )
}