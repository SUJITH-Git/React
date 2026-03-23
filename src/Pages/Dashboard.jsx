import { Grid, Card, CardContent, Typography } from "@mui/material";


const Dashboard = () => {
    return (
      <Grid container spacing={3} mt={4} ml={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Users</Typography>
              <Typography variant="h4">1,245</Typography>
            </CardContent>
          </Card>
        </Grid>
  
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Revenue</Typography>
              <Typography variant="h4">$12,430</Typography>
            </CardContent>
          </Card>
        </Grid>
  
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Orders</Typography>
              <Typography variant="h4">320</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };
  
  export default Dashboard;