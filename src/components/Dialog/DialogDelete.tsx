// MUI Component
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// MUI Icon
import WarningIcon from "@mui/icons-material/Warning";

interface Props {
  name: string | undefined;
  typeName: string;
}

export default function DialogDelete(props: Props) {
  return (
    <>
      <Grid item style={{ paddingTop: 0 }}>
        <WarningIcon color="error" sx={{ fontSize: 80 }} />
      </Grid>
      <Grid item>
        <Typography>
          Are you sure you want to delete
          <Typography
            component="span"
            display="inline"
            color="red"
            paddingX={0.5}
          >
            {props.name}
          </Typography>
          {props.typeName} ?
        </Typography>
      </Grid>
    </>
  );
}
