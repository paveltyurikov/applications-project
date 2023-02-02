import AppStateProvider from "@/providers/AppStateProvider";
import ThemeProvider from "@/providers/ThemeProvider";


const AllProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <AppStateProvider>{children}</AppStateProvider>
    </ThemeProvider>
  );
};

export default AllProviders;
