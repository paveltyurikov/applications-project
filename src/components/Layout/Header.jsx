import { Box } from "@mui/material";
import { HEADER_STYLES_SX } from "./Header.styles";


const Header = ({ children }) => {
  return (
    <Box component="header" sx={HEADER_STYLES_SX}>
      {children}
    </Box>
  );
};

export default Header;
