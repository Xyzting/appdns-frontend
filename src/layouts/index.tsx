import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// import authApi from "@services/auth";
import { AppContext } from "@/providers/ContextApiProvider";

// import { isUserAuthenticated, userAuthenticated } from "@utils/auth";

// Mui Components
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
// import TextField from "@mui/material/TextField";

// Custom Components
import Loading from "../components/Loading";
import Snackbar from "../components/Snackbar";
import BreadCrumb from "@/components/Breadcrumb";

// Mui Icon
import LogoutIcon from '@mui/icons-material/Logout';

// Private Components
import Form from "./Form";
import DrawerFooter from "./DrawerFooter";

// styles
import { Drawer, DrawerHeader } from "./styles";

// List Menu
import { listMenu } from "./listMenu";
import { ListItemText } from "@mui/material";

export default function Layout(props: {
  children: React.ReactNode;
  loading?: boolean;
  breadCrumbText?: string[];
}) {
  const { snackbar, setSnackbar, loading } = useContext(AppContext);

  const router = useRouter();

  const [openDialog, setOpenDialog] = useState({
    open: false,
    type: "",
  });

  // if (listMenu[6].path !== "/users") {
  //   if (userAuthenticated.role_name !== "USER") {
  //     listMenu.splice(6, 0, {
  //       path: "/users",
  //       title: "Users",
  //       icon: <PeopleIcon />,
  //     });
  //   }
  // }

  // useEffect(() => {
  //   if (!isUserAuthenticated()) {
  //     router.push("/login");
  //   }
  // });

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ ...snackbar, open: false });
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={true} PaperProps={{
        sx: {
          backgroundColor: "#0000FF",
          border: 0
        }
      }}>
        <DrawerHeader>
            <>
              <Image
                src="/logo/stu.png"
                alt="Logo DNS"
                width={45}
                height={45}
                priority
              />
              <Image
                src="/logo/stugradclear.png"
                alt="Logo DNS"
                width={160}
                height={40}
                priority 
              />
              {/* <Typography variant="h6" sx={{ marginLeft: 1, fontSize: 15, fontWeight: "bold" }} color="white">
                Students Grade Data
              </Typography> */}
            </>
        </DrawerHeader>
        <Typography
          sx={{
            pt: 2,
            ml: 2,
            color: "white",
            fontWeight: "bold",
            fontSize: 18
          }}
        >
          Main Menu
        </Typography>
        <List
          sx={{
            // selected states
            "&& .Mui-selected, && .Mui-selected:hover": {
              backgroundColor: "#FFF5EE",
              borderLeft: "5px solid #FFF5EE",
              borderTopLeftRadius: "35px",
              borderBottomLeftRadius: "35px",
              paddingLeft: 1.3,
            },

            // hover states
            "& .MuiListItemButton-root:hover": {
              color: "white",
              borderTopLeftRadius: "35px",
              borderBottomLeftRadius: "35px",
            },

            paddingTop: 1.5,
            paddingLeft: 2,
          }}
        >
          {listMenu.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Tooltip title={item.title} placement="right">
                <ListItemButton
                  selected={router.pathname === item.path}
                  onClick={() => router.push(item.path)}
                >
                  <ListItemIcon
                    sx={{
                      padding: "8px 0 8px 24px"
                    }}
                  >
                    <Image
                      src={
                        router.pathname === item.path
                          ? item.iconActive
                          : item.icon
                      }
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color:
                            router.pathname === item.path
                              ? "#1d68b8"
                              : "#aaaaaa",
                          fontWeight:
                            router.pathname === item.path ? "bold" : 550,
                        }}
                      >
                        {item.title}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </Tooltip>
            </Link>
          ))}
        </List>
        <DrawerFooter />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          pt: 2,
          overflowX: "hidden",
          backgroundColor: "#FFF5EE",
          minHeight: "100vh"
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Grid item flex={1}>
            {props.breadCrumbText && <BreadCrumb text={props.breadCrumbText} />}
          </Grid> 
        </Grid>
        {/* <Loading isOpen={props.loading} /> */}
        <Snackbar
          open={snackbar.open}
          text={snackbar.text}
          variant={snackbar.variant}
          handleClose={handleCloseSnackbar}
        />

        {props.children}
      </Box>
    </Box>
  );
}
