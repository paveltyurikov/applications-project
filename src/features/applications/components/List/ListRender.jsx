import { Grid } from "@mui/material";
import ApplicationsListItem from "~/features/applications/components/List/ListItem.jsx";


const ListRender = ({ applications }) => {
  return (
    <>
      {applications.map((application) => (
        <Grid key={application.id} item container sm={6} md={4}>
          <ApplicationsListItem application={application} />
        </Grid>
      ))}
    </>
  );
};

export default ListRender;
