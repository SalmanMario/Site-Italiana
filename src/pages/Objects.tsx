import { Box, Grid, Typography } from "@mui/material";
import { CardItems } from "../components/CardItems";
import { objectsData } from "../database/objectsDB";

export function Objects() {
  return (
    <Box mt={2}>
      <Typography textAlign={"center"} mb={4} variant="h2">
        Gli oggetti
      </Typography>
      <Grid container gap={4}>
        {objectsData.map((item, index) => (
          <Grid item key={index}>
            <CardItems data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
