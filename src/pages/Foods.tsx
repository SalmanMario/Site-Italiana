import { Box, Grid, Typography } from "@mui/material";
import { CardItems } from "../components/CardItems";
import { foodsData } from "../database/foodsDB";

export function Foods() {
  return (
    <Box mt={2}>
      <Typography textAlign={"center"} mb={4} variant="h2">
        Il cibo
      </Typography>
      <Grid container gap={4}>
        {foodsData.map((item, index) => (
          <Grid item key={index}>
            <CardItems data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
