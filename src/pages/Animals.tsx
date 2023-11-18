import { Box, Grid, Typography } from "@mui/material";
import { CardItems } from "../components/CardItems";
import { animalsData } from "../database/animalsDB";

export function Animals() {
  return (
    <Box mt={2}>
      <Typography textAlign={"center"} mb={4} variant="h2">
        Gli animali
      </Typography>
      <Grid container gap={4}>
        {animalsData.map((item, index) => (
          <Grid item key={index}>
            <CardItems data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
