import React from 'react'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: 32,
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <Container>
      <Paper className={classes.root}>
        <Typography component="h1" variant="h3" paragraph>
          About
        </Typography>
        <Typography paragraph>
          This app is a Pokédex, but it's so much more! It's also a demo app for
          teaching developers{' '}
          <b>how to reduce the bundle size of their React apps</b>.
        </Typography>
        <Typography component="h2" variant="h6" paragraph>
          Bundle Analysis via webpack-bundle-analyzer
        </Typography>
        <Typography paragraph>
          Your JavaScript bundle is large, and page load times are slow. But
          what exactly is contributing to the bloat?
        </Typography>
        <Typography component="h2" variant="h6" paragraph>
          Code Splitting via Lazy Loading
        </Typography>
        <Typography paragraph>
          Lazy load React components, especially on pages or routes.
        </Typography>
        <Typography component="h2" variant="h6" paragraph>
          Code Splitting via Dynamic Imports
        </Typography>
        <Typography paragraph>
          Keep expensive code that is rarely used away from the majority of your
          visitors.
        </Typography>
        <Typography component="h2" variant="h6" paragraph>
          Learn About Third-Party Dependencies with BundlePhobia
        </Typography>
        <Typography paragraph>
          View info about package size, dependency makeup, and tree
          shakeability.
        </Typography>
        <Typography component="h2" variant="h6" paragraph>
          More Info
        </Typography>
        <Typography>
          <Link href="https://github.com/thawkin3/bundle-analysis-demo">
            View this app's code on GitHub
          </Link>
        </Typography>
      </Paper>
    </Container>
  )
}
