import { useEffect, useState } from 'react';
import { Container, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { Comparison } from './models/Comparison';
import { getBitcoinResourceUsage, getComparisons } from './services/ApiService';
import { ResourceUsageIcons } from './components/ResourceUsageIcons';
import { ResourceType } from './models/ResourceType';
import { ResourceTypeUnitText } from './components/ResourceTypeUnitText';
import { BitcoinResourceUsage } from './models/BitcoinResourceUsage';
import { theme } from './styles/Theme';
import StandardAppBar from './components/StandardAppBar';


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
    <ThemeProvider theme={theme}>
      <StandardAppBar />
      <Container maxWidth="md">

        <header>
          <Typography variant="body1">Did you know that Bitcoin's transaction system is spectacularly wasteful? Before you buy some bitcoin to try and make some money, consider that that single transaction will use: </Typography>
        </header>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography style={{ textAlign: 'center' }} variant="subtitle1">{bitcoinResourceUsage?.carbonDioxideInKg} {ResourceTypeUnitText(ResourceType.CarbonDioxide)}</Typography>
            <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.CarbonDioxide)} />
          </Grid>
          <Grid item>
            <Typography style={{ textAlign: 'center' }} variant="subtitle1">{bitcoinResourceUsage?.electricityUsageInkWh} {ResourceTypeUnitText(ResourceType.Electricity)}</Typography>
            <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.Electricity)} />
          </Grid>
          <Grid item>
            <Typography style={{ textAlign: 'center' }} variant="subtitle1">{bitcoinResourceUsage?.eWasteInGrams} {ResourceTypeUnitText(ResourceType.EWaste)}</Typography>
            <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.EWaste)} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
