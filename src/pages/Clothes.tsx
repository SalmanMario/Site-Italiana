import { Box, Grid } from "@mui/material";
import { CardItems } from "../components/CardItems";
import { clothesData } from "../database/clothesDB";

export function Clothes() {
  return (
    <Box mt={2}>
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
