import { Grid, IconButton, Paper, Typography } from "@material-ui/core"
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
        <Grid direction="row" container>
            <Grid item xs={2}>
                {
                    activeComparisonIndex === 0
                        ?
                        (
                            <>
                            </>
                        )
                        :
                        (
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <KeyboardArrowLeftIcon />
                            </IconButton>
                        )
                }
            </Grid>
            <Grid item xs={8}>
                <Paper variant="outlined">
                    <Typography variant="subtitle1">{activeComparison.name}</Typography>
                    <CustomLogo logo={activeComparison.logo} />
                    <Typography variant="body1">{activeComparison.resourceUsage} {ResourceTypeUnitText(activeComparison.resourceType)}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={2}>
                {
                    activeComparisonIndex === comparisons.length - 1
                        ?
                        (
                            <>
                            </>
                        )
                        :
                        (
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        )
                }
            </Grid>
        </Grid>
    )
}

export { ResourceUsageIcons }