import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import useVisibility from "~/hooks/useVisibility";
import NotifyMeDialog from "./NotifyMeDialog.jsx";

/**
 * ApplicationsListItem component
 * @param {{
 * id: number,
 * title: string,
 * icon: string,
 * categories: string[],
 * description: string
 * }} application - application object.
 */
const ApplicationsListItem = ({ application }) => {
  const { visibility, show, hide } = useVisibility();

  return (
    <>
      <Card
        elevation={1}
        sx={{ display: "flex", flexDirection: "column", minHeight: "100%", flexGrow:1 }}
      >
        <CardHeader
          data-testid="app-header"
          avatar={
            <Avatar data-testid="app-icon" src={application.icon}>
              {application.title.charAt(0)}
            </Avatar>
          }
          title={application.title}
          subheader={application.categories.join(", ")}
        />
        <CardContent sx={{ display: "flex", flexGrow: 1 }}>
          <Typography data-testid="app-description">
            {application.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            data-testid="btn-notify-me"
            onClick={show}
            size="small"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Notify me when it's ready
          </Button>
        </CardActions>
      </Card>
      <NotifyMeDialog appId={application.id} open={visibility} hide={hide} />
    </>
  );
};

export default ApplicationsListItem;
