import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";


const ListFilter = ({
  ListFilterButton,
  onChange,
  value,
  placeholder = "Search",
}) => {
  const handleSearchChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <Stack
      data-testid="list-filter"
      sx={{
        width: (theme) => ({ xs: "100%", sm: "100%", md: theme.spacing(47) }),
      }}
    >
      <TextField
        id="apps-search"
        onChange={handleSearchChange}
        size="small"
        placeholder={placeholder}
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" component={ListFilterButton} />
          ),
        }}
        sx={{
          backgroundColor: "rgb(255,255,255)",
        }}
      />
    </Stack>
  );
};

export default ListFilter;
