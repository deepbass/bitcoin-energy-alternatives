import { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { Comparison } from './models/Comparison';
import { getBitcoinResourceUsage, getComparisons } from './services/ApiService';
import { ResourceUsageIcons } from './components/ResourceUsageIcons';
import { ResourceType } from './models/ResourceType';
import { ResourceTypeUnitText } from './components/ResourceTypeUnitText';
import { BitcoinResourceUsage } from './models/BitcoinResourceUsage';

function App() {
  // const elevation = 10;
  const [comparisons, setComparisons] = useState<Comparison[]>([])
  const [bitcoinResourceUsage, setBitcoinResourceUsage] = useState<BitcoinResourceUsage>(new BitcoinResourceUsage())
  useEffect(() => {
    getBitcoinResourceUsage().then(x => setBitcoinResourceUsage(x))
    getComparisons().then((x) => {
      setComparisons(x)
    })
  }, [])
  return (
    <div>
      <Container maxWidth="md">

      <header>
        <Typography variant="subtitle1">A single transaction will use: </Typography>
      </header>
      <Grid container direction="column" spacing={3}>
        <Grid item>
        <Typography style={{textAlign: 'center'}} variant="subtitle1">{bitcoinResourceUsage?.carbonDioxideInKg} {ResourceTypeUnitText(ResourceType.CarbonDioxide)}</Typography>
          <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.CarbonDioxide)} />
          {/* <Card elevation={elevation}>
            <CardHeader title="Drive a Tesla from London to Tripoli or 2714 miles"/>
            <CardContent>
              <Typography variant="body1">That's right. That's London to Tripoli, on the power wasted on a single transaction</Typography>
            </CardContent>
          </Card> */}
        </Grid>
        <Grid item>
        <Typography style={{textAlign: 'center'}} variant="subtitle1">{bitcoinResourceUsage?.electricityUsageInkWh} {ResourceTypeUnitText(ResourceType.Electricity)}</Typography>
          <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.Electricity)} />
        {/* <Card elevation={elevation}>
            <CardHeader title="Boil approximately 6600 kettles"/>
            <CardContent>
              <Typography variant="body1">That's a lot of cuppas</Typography>
            </CardContent>
          </Card> */}
        </Grid>
        <Grid item>
        <Typography style={{textAlign: 'center'}} variant="subtitle1">{bitcoinResourceUsage?.eWasteInGrams} {ResourceTypeUnitText(ResourceType.EWaste)}</Typography>
          <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.EWaste)} />
        {/* <Card elevation={elevation}>
            <CardHeader title="Heat 1.5 houses with a Heat Pump for a year"/>
            <CardContent>
              <Typography variant="body1">Keeping families warm seems like a better use of electricity</Typography>
            </CardContent>
          </Card> */}
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
