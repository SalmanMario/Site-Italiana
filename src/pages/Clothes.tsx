import { Box, Grid, Typography } from "@mui/material";
import { CardItems } from "../components/CardItems";
import { clothesData } from "../database/clothesDB";

export function Clothes() {
  return (
    <Box mt={2}>
      <Typography textAlign={"center"} mb={4} variant="h2">
        I vestiti
      </Typography>
      <Grid container gap={4}>
        {clothesData.map((item, index) => (
          <Grid item key={index}>
            <CardItems data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
