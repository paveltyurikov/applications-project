import { Grid } from "@mui/material";
import AppliedFilters from "~/components/AppliedFilters";
import ListEmptyWarning from "~/components/ListEmptyWarning/index.js";
import ListFilter from "~/components/ListFilter/ListFilter";
import ListPagination from "~/components/ListPagination";
import PaginationInfo from "~/components/PaginationInfo";
import ApplicationsListItem from "~/features/applications/components/List/ListItem.jsx";
import { useFilter, usePagination, useSearch } from "~/hooks";
import { useApplicationsList } from "../../hooks";
import ListFilterButton from "./ListFilterButton";


const ApplicationsList = () => {
  const { appliedFilters, removeAppliedFilter } = useFilter();
  const { search, setSearch } = useSearch();
  const { page, setPage } = usePagination();
  const { data, isFetched } = useApplicationsList({
    search,
    page,
    categories: appliedFilters.map((filter) => filter.id),
  });

  return (
    <Grid container rowSpacing={3}>
      <Grid item container>
        <PaginationInfo page={page} count={data?.count || 0} />
      </Grid>
      <Grid item container direction="column">
        <ListFilter
          ListFilterButton={ListFilterButton}
          onChange={setSearch}
          value={search}
          placeholder="Search apps"
        />
        <AppliedFilters
          appliedFilters={appliedFilters}
          removeAppliedFilter={removeAppliedFilter}
        />
      </Grid>
      {isFetched && data?.count === 0 ? (
        <ListEmptyWarning />
      ) : (
        <>
          <Grid
            item
            container
            columnSpacing={2.5}
            rowSpacing={5}
            alignItems="stretch"
          >
            {data?.data.map((application) => (
              <Grid key={application.id} item container sm={6} md={4}>
                <ApplicationsListItem application={application} />
              </Grid>
            ))}
          </Grid>

          <Grid item container>
            <ListPagination
              page={page}
              count={data?.count || 0}
              onPageChange={setPage}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ApplicationsList;
