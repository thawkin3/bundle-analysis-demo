import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: 32,
  },
}))

export default function NoMatch() {
  const classes = useStyles()

  return (
    <Container>
      <Paper className={classes.root}>
        <Typography component="h1" variant="h3" paragraph>
          Nothing to see here!
        </Typography>
        <Typography paragraph>This page does not exist.</Typography>
        <Button component={Link} to="/" variant="contained">
          Go Back Home
        </Button>
      </Paper>
    </Container>
  )
}
