import { Box, Stack, Typography } from "@mui/material";
import icon from "@/assets/empty-list.png";


const IMAGE_BOX_SX = {
  width: (theme) => theme.spacing(40),
  height: (theme) => theme.spacing(30),
  backgroundImage: `url(${icon})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
};

const ListEmptyWarning = () => {
  return (
    <Stack justifyContent="center" alignItems="center" flex={1}>
      <Box sx={IMAGE_BOX_SX}></Box>
      <Typography variant="h6">
        We can't seem to find what you're looking for.
      </Typography>
      <Typography variant="caption">
        Try changing the filters or search terms.
      </Typography>
    </Stack>
  );
};

export default ListEmptyWarning;
