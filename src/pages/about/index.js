import React from 'react'
import Container from '@mui/material/Container'
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
          Peer Dependencies and Externals
        </Typography>
        <Typography>
          Don't bundle in multiple copies of dependencies, especially if you're
          authoring an npm package or a library.
        </Typography>
      </Paper>
    </Container>
  )
}
