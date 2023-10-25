import { useRouter } from "next/router";

// Mui Component
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Mui Icon
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

interface Props {
  text: string[];
}

export default function BreadCrumb({ text }: Props) {
  const router = useRouter();

  let back1 = "/" + text[0].toLowerCase().split(" ").join("-");

  return (
    <Grid container item flexWrap="nowrap" alignItems="center">
      <IconButton
        sx={{ marginRight: 1, display: text.length < 2 ? "none" : "flex" }}
        onClick={() => router.back()}
      >
        <ArrowCircleLeftOutlinedIcon fontSize="large" color="primary" />
      </IconButton>
      <Typography variant="body1" fontSize={14} >Pages /</Typography>

      {text.map((item: any, index: number) => {
        return (
          <div
            key={index}
            style={{ display: "flex", marginLeft: 5, alignItems: "center" }}
          >
            <div
              style={{
                cursor: text.length === index + 2 ? "pointer" : "default",
              }}
              onClick={() => router.push(back1)}
            >
              <Typography variant="body1" fontSize={14} >{item}</Typography>
            </div>
          </div>
        );
      })}
    </Grid>
  );
}
