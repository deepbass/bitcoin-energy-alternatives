import { Card, CardContent, Grid, IconButton, Typography } from "@material-ui/core"
import React, { useState } from "react"
import { Comparison } from "../models/Comparison"
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { CustomLogo } from "./CustomLogo";
import { ResourceTypeUnitText } from "./ResourceTypeUnitText";

type ResourceUsageIconsProps = {
    comparisons: Comparison[]
}

function ResourceUsageIcons({ comparisons }: ResourceUsageIconsProps) {
    const [activeComparisonIndex, setActiveComparisonIndex] = useState<number>(0)
    let activeComparison = comparisons[activeComparisonIndex]

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
                                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => { setActiveComparisonIndex(activeComparisonIndex - 1) }}>
                                    <KeyboardArrowLeftIcon />
                                </IconButton>
                            )
                    }
                </Grid>
                <Grid item xs={8}>
                    <Card variant="outlined" style={{textAlign: "center"}}>
                        <CardContent>
                                <Typography variant="subtitle1">{activeComparison.name}</Typography>
                                <CustomLogo logo={activeComparison.logo} />
                                <Typography variant="body1">{activeComparison.resourceUsage} {ResourceTypeUnitText(activeComparison.resourceType)}</Typography>
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
                                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => { setActiveComparisonIndex(activeComparisonIndex + 1) }}>
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            )
                    }
                </Grid>
            </Grid>
    )
}

export { ResourceUsageIcons }