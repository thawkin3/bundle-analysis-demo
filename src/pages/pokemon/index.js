import React from 'react'
import { useParams } from 'react-router-dom'
import { jsPDF } from 'jspdf'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

import { pokemonData } from '../../constants/pokemonData'

const useStyles = makeStyles(() => ({
  root: {
    padding: 32,
    position: 'relative',
  },
  avatar: {
    height: 128,
    borderRadius: 0,
    marginBottom: 8,
  },
}))

export default function Pokemon() {
  const classes = useStyles()
  const { id } = useParams()

  const pokemon = pokemonData[id - 1]

  const saveAsPdf = () => {
    const doc = new jsPDF('p', 'pt', 'a4')

    // Ideally we'd convert the HTML content to a PDF here.
    // jsPDF doesn't seem to play nice with Material UI out of the box,
    // and for the purposes of this demo, I don't want to spend time on this.
    // So, we'll fake the PDF output with some simple text here.
    doc
      .setFont('Helvetica')
      .text(`${pokemon.name}`, 60, 60)
      .text(`Number: ${pokemon.id}`, 60, 90)
      .text(`Type: ${pokemon.pokemonTypes.join(', ')}`, 60, 120)
      .text('Fun Facts: Lorem ipsum', 60, 150)

    doc.save(`${pokemon.name}.pdf`)
  }

  return (
    <Container id="pokemonContainer">
      <Paper className={classes.root}>
        <img alt="" src={pokemon.imgUrl} className={classes.avatar} />
        <Typography component="h1" variant="h3" paragraph>
          {pokemon.name}
        </Typography>
        <Button
          onClick={saveAsPdf}
          variant="contained"
          sx={{ position: 'absolute', top: 16, right: 16 }}
        >
          Save as PDF
        </Button>
        <Typography paragraph>
          <b>Number:</b> {id}
        </Typography>
        <Typography paragraph>
          <b>Type:</b> {pokemon.pokemonTypes.join(', ')}
        </Typography>
        <Typography paragraph>
          <b>Fun Facts:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Sit amet nisl suscipit adipiscing bibendum. Tristique risus
          nec feugiat in fermentum posuere. Ut tristique et egestas quis ipsum
          suspendisse ultrices. Adipiscing enim eu turpis egestas pretium aenean
          pharetra magna ac. Enim sed faucibus turpis in eu mi bibendum neque.
          Arcu bibendum at varius vel. Placerat vestibulum lectus mauris
          ultrices eros in cursus turpis massa. Tortor aliquam nulla facilisi
          cras fermentum odio. Volutpat sed cras ornare arcu dui vivamus arcu
          felis. Neque gravida in fermentum et sollicitudin. Sed vulputate mi
          sit amet mauris commodo quis. Aliquet nec ullamcorper sit amet risus
          nullam eget felis eget. Gravida dictum fusce ut placerat orci nulla
          pellentesque.
        </Typography>
        <Typography paragraph>
          Orci sagittis eu volutpat odio facilisis mauris sit. Integer enim
          neque volutpat ac tincidunt. Dui ut ornare lectus sit. Aenean sed
          adipiscing diam donec adipiscing tristique risus. Pulvinar neque
          laoreet suspendisse interdum consectetur libero id. Commodo
          ullamcorper a lacus vestibulum sed arcu. Est placerat in egestas erat.
          Viverra nam libero justo laoreet sit. Varius duis at consectetur lorem
          donec massa sapien faucibus et. Eleifend mi in nulla posuere
          sollicitudin.
        </Typography>
        <Typography paragraph>
          Congue eu consequat ac felis donec et odio pellentesque. Morbi leo
          urna molestie at elementum eu facilisis sed odio. Sit amet consectetur
          adipiscing elit duis tristique sollicitudin. Sit amet consectetur
          adipiscing elit duis tristique sollicitudin nibh. Proin sagittis nisl
          rhoncus mattis rhoncus urna neque viverra justo. Nunc pulvinar sapien
          et ligula. Nibh praesent tristique magna sit. Pellentesque massa
          placerat duis ultricies lacus sed turpis tincidunt id. Eu volutpat
          odio facilisis mauris sit amet massa vitae tortor. Convallis a cras
          semper auctor neque vitae. Nullam vehicula ipsum a arcu cursus vitae
          congue mauris. Curabitur vitae nunc sed velit dignissim sodales ut eu
          sem. Quisque sagittis purus sit amet. Mauris augue neque gravida in
          fermentum et. Congue mauris rhoncus aenean vel. Cursus risus at
          ultrices mi tempus.
        </Typography>
        <Typography paragraph>
          Venenatis tellus in metus vulputate eu. Duis convallis convallis
          tellus id interdum velit. Cursus in hac habitasse platea dictumst
          quisque sagittis. Massa tincidunt nunc pulvinar sapien et ligula
          ullamcorper. Tellus pellentesque eu tincidunt tortor aliquam nulla
          facilisi cras. Pharetra et ultrices neque ornare. Id venenatis a
          condimentum vitae sapien pellentesque. Nunc faucibus a pellentesque
          sit amet. Donec ac odio tempor orci dapibus ultrices. Vestibulum
          mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mattis enim
          ut tellus elementum sagittis vitae et. Varius sit amet mattis
          vulputate. Dignissim enim sit amet venenatis urna cursus eget nunc
          scelerisque. Lectus magna fringilla urna porttitor rhoncus dolor. Ac
          auctor augue mauris augue neque gravida in fermentum. Nulla facilisi
          morbi tempus iaculis urna id volutpat. Congue mauris rhoncus aenean
          vel elit scelerisque mauris. Nulla posuere sollicitudin aliquam
          ultrices sagittis orci a scelerisque. Tempus imperdiet nulla malesuada
          pellentesque elit eget gravida cum.
        </Typography>
        <Typography>
          Volutpat lacus laoreet non curabitur. Eu tincidunt tortor aliquam
          nulla facilisi. Sit amet dictum sit amet justo. Cursus eget nunc
          scelerisque viverra mauris in aliquam sem fringilla. Bibendum enim
          facilisis gravida neque. Erat velit scelerisque in dictum non
          consectetur a erat nam. Consectetur purus ut faucibus pulvinar
          elementum integer enim neque. Orci nulla pellentesque dignissim enim
          sit. Urna et pharetra pharetra massa massa. Netus et malesuada fames
          ac turpis egestas sed tempus. Purus non enim praesent elementum
          facilisis leo vel fringilla. Velit scelerisque in dictum non
          consectetur a erat nam. Pretium viverra suspendisse potenti nullam ac
          tortor vitae purus. Duis at tellus at urna condimentum. Consectetur
          libero id faucibus nisl tincidunt eget. Erat imperdiet sed euismod
          nisi porta lorem mollis aliquam. Eleifend mi in nulla posuere
          sollicitudin aliquam ultrices. Dolor sit amet consectetur adipiscing
          elit. Arcu dui vivamus arcu felis bibendum. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a scelerisque purus.
        </Typography>
      </Paper>
    </Container>
  )
}
