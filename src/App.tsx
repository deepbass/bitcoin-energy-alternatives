import React from 'react';
import { Card, CardContent, CardHeader, Container, Grid, Typography } from '@material-ui/core';

function App() {
  const elevation = 10;
  return (
    <div>
      <Container maxWidth="xl">

      <header>
        <Typography variant="h1">Today, Bitcoin will use 661.98 kWh for a *single* transaction</Typography>
        <Typography variant="subtitle1">Rather than expend this to 'prove work', we could use this to:</Typography>
      </header>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card elevation={elevation}>
            <CardHeader title="Drive a Tesla from London to Tripoli or 2714 miles"/>
            <CardContent>
              <Typography variant="body1">That's right. That's London to Tripoli, on the power wasted on a single transaction</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card elevation={elevation}>
            <CardHeader title="Boil approximately 6600 kettles"/>
            <CardContent>
              <Typography variant="body1">That's a lot of cuppas</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card elevation={elevation}>
            <CardHeader title="Heat 1.5 houses with a Heat Pump for a year"/>
            <CardContent>
              <Typography variant="body1">Keeping families warm seems like a better use of electricity</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card elevation={elevation}>
            <CardHeader title="Power 3 US Hospital Beds for a day"/>
            <CardContent>
              <Typography variant="body1">Keeping families warm seems like a better use of electricity</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
