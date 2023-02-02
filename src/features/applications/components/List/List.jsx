import { useMemo, useState } from "react";
import { Grid } from "@mui/material";
import AppliedFilters from "~/components/AppliedFilters";
import ListEmptyWarning from "~/components/ListEmptyWarning/index.js";
import ListFilter from "~/components/ListFilter/ListFilter";
import ListPagination from "~/components/ListPagination";
import PaginationInfo from "~/components/PaginationInfo";
import {
  useFilterContext,
  useGetList as useApplicationsList,
  usePaginationContext,
} from "~/features/applications/hooks";
import FilterContextProvider from "./FilterContextProvider";
import ListFilterButton from "./ListFilterButton";
import ListRender from "./ListRender";


const ApplicationsList = () => {
  const { appliedFilters, removeAppliedFilter } = useFilterContext();
  const [search, setSearch] = useState("");
  const { page, setPage } = usePaginationContext();
  const filters = useMemo(
    () => ({
      ...(search && { search }),
      page,
      categories: appliedFilters.map((filter) => filter.id),
    }),
    [appliedFilters, page, search]
  );
  const { data, isFetched } = useApplicationsList(filters);

  return (
    <Grid container rowSpacing={3}>
      <Grid item container>
        <PaginationInfo page={page} count={data?.count || 0} />
      </Grid>
      <Grid item container direction="column">
        <ListFilter
          ListFilterButton={ListFilterButton}
          setSearch={setSearch}
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
            <ListRender applications={data?.data || []} />
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

const ApplicationsListContainer = () => {
  return (
    <FilterContextProvider>
      <ApplicationsList />
    </FilterContextProvider>
  );
};

export default ApplicationsListContainer;
