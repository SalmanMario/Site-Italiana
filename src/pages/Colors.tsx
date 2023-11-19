import { Box, Grid, Typography } from "@mui/material";
import { CardItems } from "../components/CardItems";
import { colorsData } from "../database/colorsDB";

export function Colors() {
  return (
    <Box mt={2}>
      <Typography textAlign={"center"} mb={4} variant="h2">
        I Colori
      </Typography>
      <Grid container gap={4}>
        {colorsData.map((item, index) => (
          <Grid item key={index}>
            <CardItems data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
