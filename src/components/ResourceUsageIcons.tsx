import { Card, CardContent, Grid, IconButton, Typography } from "@material-ui/core"
import React, { useState } from "react"
import { Comparison } from "../models/Comparison"
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { CustomLogo } from "./CustomLogo";
import { ResourceTypeUnitText } from "./ResourceTypeUnitText";
import { useAppInsightsContext, useTrackEvent } from "@microsoft/applicationinsights-react-js";

type ResourceUsageIconsProps = {
    comparisons: Comparison[]
}

function ResourceUsageIcons({ comparisons }: ResourceUsageIconsProps) {
    const [activeComparisonIndex, setActiveComparisonIndex] = useState<number>(0)
    let activeComparison = comparisons[activeComparisonIndex]


    const appInsights = useAppInsightsContext();

    const trackViewNext = useTrackEvent(appInsights, "ViewNext",{ currentName: activeComparison?.name});
    const trackViewLast = useTrackEvent(appInsights, "ViewLast",{ currentName: activeComparison?.name});

    return (
        activeComparison == null
            ?
            <>
            </>
            :
            <Grid direction="row" container justify="space-between">
                <Grid item xs={2} justify="center" alignItems="center" container>
                    {
                        activeComparisonIndex === 0
                            ?
                            (
                                <>
                                </>
                            )
                            :
                            (
                                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {trackViewLast({currentName:activeComparison?.name}); setActiveComparisonIndex(activeComparisonIndex - 1) }}>
                                    <KeyboardArrowLeftIcon />
                                </IconButton>
                            )
                    }
                </Grid>
                <Grid item xs={8}>
                    <Card variant="outlined" style={{ textAlign: "center", minHeight: "300px" }}>
                        <CardContent>
                            <Grid style={{ height: "300px" }} container direction="column" justify="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="subtitle1">{activeComparison.name}</Typography>
                                </Grid>
                                <Grid item>
                                    <CustomLogo logo={activeComparison.logo} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">{activeComparison.resourceUsage} {ResourceTypeUnitText(activeComparison.resourceType)}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2} justify="center" alignItems="center" container>
                    {
                        activeComparisonIndex === comparisons.length - 1
                            ?
                            (
                                <>
                                </>
                            )
                            :
                            (
                                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {trackViewNext({currentName: activeComparison?.name}); setActiveComparisonIndex(activeComparisonIndex + 1) }}>
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            )
                    }
                </Grid>
            </Grid>
    )
}

export default ResourceUsageIcons