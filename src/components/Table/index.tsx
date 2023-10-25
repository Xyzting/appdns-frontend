import React from "react";

// Mui Component
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";

import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// Mui Icon
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface Props {
  dataHead: {
    name: string;
    position?: string;
    sort?: boolean;
    sortField?: string;
  }[];
  children: any;

  pagination?: boolean;
  currentPage?: number;
  lastPage?: number;
  handlePage?: any;

  order?: { by: string; value: string };

  setOrder?(e: { by: string; value: string }): void;
}

export default function CustomTable(props: Props) {
  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ width: "100%", overflow: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#EFF0F6" }}>
            <TableRow>
              {props.dataHead.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: 600,
                    textAlign: item.position ?? "left",
                  }}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.name}

                  {item.sort && (
                    <IconButton
                      size="small"
                      color="secondary"
                      onClick={() =>
                        props.setOrder  ?.({
                          by: item.sortField ?? "",
                          value: props.order?.value === "asc" ? "desc" : "asc",
                        })
                      }
                    >
                      {props.order?.value === "asc" ? (
                        <ArrowUpwardIcon
                          sx={{ width: 16, height: 16 }}
                          color={
                            props.order?.by.slice(0, -3) === item.sortField
                              ? "action"
                              : "inherit"
                          }
                        />
                      ) : (
                        <ArrowDownwardIcon
                          sx={{ width: 16, height: 16 }}
                          color={
                            props.order?.by.slice(0, -3) === item.sortField
                              ? "action"
                              : "inherit"
                          }
                        />
                      )}
                    </IconButton>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {props.children}
        </Table>

        {props.pagination && (
          <Grid container item justifyContent="flex-end">
            <Stack spacing={2} sx={{ m: 2 }}>
              <Pagination
                count={props.lastPage}
                boundaryCount={1}
                page={props.currentPage}
                onChange={props.handlePage}
              />
            </Stack>
          </Grid>
        )}
      </TableContainer>
    </>
  );
}