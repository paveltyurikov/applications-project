import QueryClientProvider from "~/providers/QueryClientProvider";
import ThemeProvider from "~/providers/ThemeProvider";


const AllProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default AllProviders;
