import CustomButton from "@/components/Button";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";

export default function LoginPage(){
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Grid 
        container 
        spacing={4} 
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={5} sx={{ pr: 2 }}>
          <img
            alt=""
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            width={600}
            height={400}
          />
        </Grid>
        <Grid item xs={4} sx={{ mb: 4}}>
          <Typography
            sx={{
              margin: 0,
              padding: 0,
              textAlign: "center"
            }}
          >
            <Image
              alt="logoStu"
              src="/logo/stu.png"
              height="70"
              width="70"

            />
          </Typography>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#0A529E",
            }}
          >
            Sig in
          </Typography>
          <Typography
            color="InactiveCaptionText"
            fontSize="small"
            sx={{
              pb: 2
            }}
          >
           Welcome to the student grades data processing application, here you can view the latest student grade data and can also process student grade data easily
          </Typography>
          <form style={{ width: "100%" }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={10} md={10} lg={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="email"
                  placeholder="Email"
                  // value={form.email}
                  // onChange={handleChange}
                  // disabled={loading}
                  // error={error.email ? true : false}
                  // helperText={error.email}
                  style={{
                    borderRadius: 8,
                    border: 0,
                  }}
                />
              </Grid>
              <Grid item xs={10} md={10} lg={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="password"
                  placeholder="Password"
                  // value={form.password}
                  // onChange={handleChange}
                  // disabled={loading}
                  // error={error.password ? true : false}
                  // helperText={error.password}
                  style={{
                    borderRadius: 8,
                    border: 0,
                  }}
                  type="password"
                />
              </Grid>
              <Grid item xs={10} md={10} lg={12} mt={2}>
                <CustomButton
                  text="Login"
                  color="primary"
                  type="submit"
                  style={{ borderRadius: 4, padding: 8, fontSize: 16 }}
                  // disable={loading}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}