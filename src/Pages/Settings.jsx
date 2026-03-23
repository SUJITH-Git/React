import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import Counter from "./childs/Counter";
import TodoApp from "./childs/TodoApp";

const Settings = () => {
  return (
    <Grid container spacing={3} mt={4} ml={4}>
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
          <div><Counter></Counter></div>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
              <TodoApp></TodoApp>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">$12,500</Typography>
            <Typography color="text.secondary">
              Monthly revenue
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

  
  export default Settings;

  /*
  Screen size	     Meaning	        Width
    xs	      Extra small (mobile)	12/12 → 100% width
    sm	      Small (tablet)	      6/12 → 50% width
    md	      Medium (desktop)	    4/12 → 33% width


    mt={4} ------->magine top (From top width) 
    ml={4} ------->Margine left (From left width)
  */