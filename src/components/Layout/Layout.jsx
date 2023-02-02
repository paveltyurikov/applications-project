import { Container } from "@mui/material";
import Header from "./Header";


const CONTAINER_SX = {
  paddingTop: (theme) => theme.spacing(3),
  paddingBottom: (theme) => theme.spacing(3),
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth={"lg"} sx={CONTAINER_SX}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
