import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { ItemInfo } from "../database/ItemInterface";

export function CardItems({ data }: { data: ItemInfo }) {
  return (
    <Card sx={{ minWidth: 330, border: "4px solid #149ECA" }}>
      <CardContent>
        <Typography textAlign={"center"} variant="h5">
          {data.nameRO}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {data.img ? (
            <img
              src={data.img}
              style={{
                maxWidth: 150,
                maxHeight: 95,
                marginTop: "1rem",
              }}
            />
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h1">{data.emoji}</Typography>
            </Box>
          )}
        </Box>
        <Grid container sx={{ width: 299 }}>
          <Grid item lg={6}>
            <Typography gutterBottom variant="body1" component="div">
              {data.singular}
            </Typography>
          </Grid>
          <Grid item lg={6} textAlign={"end"}>
            <Typography gutterBottom variant="body1" component="div">
              {data.plural}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
