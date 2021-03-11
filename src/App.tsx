import React, { useEffect, useState } from 'react';
import { Container, Grid, Link, ThemeProvider, Typography } from '@material-ui/core';
import { Comparison } from './models/Comparison';
import { getBitcoinResourceUsage, getComparisons } from './services/ApiService';
import ResourceUsageIcons from './components/ResourceUsageIcons';
import { ResourceType } from './models/ResourceType';
import { ResourceTypeUnitText } from './components/ResourceTypeUnitText';
import { BitcoinResourceUsage } from './models/BitcoinResourceUsage';
import { theme } from './styles/Theme';
import StandardAppBar from './components/StandardAppBar';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from './components/AppInsights';

function formatDate(dateString: any){
  let date = new Date(dateString)
  if(date == null){
    return ""
  }
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

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
    <AppInsightsContext.Provider value={reactPlugin}>
    <ThemeProvider theme={theme}>
      <StandardAppBar />
      <Container maxWidth="md">
        <header>
          <Typography variant="h1" gutterBottom>Before you buy some bitcoin...</Typography>
          <Typography variant="body1" gutterBottom>Did you know that Bitcoin's transaction system is spectacularly wasteful? Before you buy some bitcoin to try and make some money, consider that a single transaction will use: </Typography>
        </header>
        <Grid container direction="column" spacing={3} style={{ marginTop: "10px"}}>
          <Grid item>
            <Typography style={{ textAlign: 'center' }} variant="h3">{bitcoinResourceUsage?.carbonDioxideInKg} {ResourceTypeUnitText(ResourceType.CarbonDioxide)}</Typography><Typography style={{ textAlign: 'center' }} variant="subtitle1">The following things emit less CO2: </Typography>
            <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.CarbonDioxide)} />
          </Grid>
          <Grid item>
            <Typography style={{ textAlign: 'center' }} variant="h3">{bitcoinResourceUsage?.electricityUsageInkWh} {ResourceTypeUnitText(ResourceType.Electricity)}</Typography><Typography style={{ textAlign: 'center' }} variant="subtitle1">That could be used to: </Typography>
            <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.Electricity)} />
          </Grid>
          <Grid item>
            <Typography style={{ textAlign: 'center' }} variant="h3">{bitcoinResourceUsage?.eWasteInGrams} {ResourceTypeUnitText(ResourceType.EWaste)}</Typography><Typography style={{ textAlign: 'center' }} variant="subtitle1">Equivalent amounts of e-waste would be produced by: </Typography>
            <ResourceUsageIcons comparisons={comparisons.filter(x => x.resourceType === ResourceType.EWaste)} />
          </Grid>
          <Grid item>
            <Typography variant="body1">The per-transaction Bitcoin Resource Usage data was sourced from <Link href="https://digiconomist.net/bitcoin-energy-consumption">Digiconomist</Link> on {formatDate(bitcoinResourceUsage?.dateTime)}</Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    </AppInsightsContext.Provider>
  );
}

export default App;
