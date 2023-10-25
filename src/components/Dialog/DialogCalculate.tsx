// MUI Component
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// MUI Icon
import AddchartIcon from "@mui/icons-material/Addchart";

interface Props {
  name: string | undefined;
  typeName: String;
}

export default function DialogCalculate(props: Props) {
  return (
    <>
      <AddchartIcon color="primary" sx={{ fontSize: 60 }} />
        <Grid item>
            <Typography>
            Are you sure you want to calculate
            <Typography
                component="span"
                display="inline"
                color="primary"
                paddingX={0.5}
            >
                {props.name}
            </Typography>
            {props.typeName}
            </Typography>
        </Grid>
    </>
  );
}
