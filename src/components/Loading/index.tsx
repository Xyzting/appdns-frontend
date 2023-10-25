// Material UI
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// Component
export default function Loading() {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CircularProgress size={24} />
        <Typography sx={{ ml: 2 }}>Loading...</Typography>
      </div>
    </Container>
  );
}

// Styled Component
const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(240, 242, 250, 0.5)",
  zIndex: 100,
  top: 0,
  left: 0,
  right: 0,
}));
