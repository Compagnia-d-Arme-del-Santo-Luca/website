import { Box, Typography } from '@mui/material'

import { Page } from 'components/templates/index.js'
import { EmplyeeCardProps } from 'components/molecules/EmplyeeCard/index.js'
import EmplyeeStack from 'components/molecules/EmplyeeStack/index.js'

const people: EmplyeeCardProps[][] = [
  [
    // { name: "Alberto V d'Este", image: 'images/people/albertoV.jpg', position: 'Marchese' },
    { name: 'Bartolomeo Contrari', image: 'images/people/bartolomeo_contrari.jpg', position: 'Nobile' },
    { name: 'Zan Biancolin', image: 'images/people/zanbiancolin.jpg', position: 'Cuoco' },
  ],
  [
    { name: 'Niccolò degli Obizzi', image: 'images/people/niccolo_degli_obizzi.jpg', position: 'Nobile' },
    { name: 'Ferantino di Zampalocha', image: 'images/people/ferantino_di_zampalocha.jpg', position: 'Serragente' },
  ],
  [{ name: 'Galacino Galaci', image: 'images/people/galacino_galaci.jpg', position: 'Fante' }],
  [{ name: 'Zanino il Beccaio', image: 'images/people/zannino_il_beccaio.jpg', position: 'Fante' }],
  [{ name: 'Gamberino di Bergantino', image: 'images/people/gamberino_di_bergantino.jpg', position: 'Fante' }],
  [{ name: 'Albertino della Muzzina', image: 'images/people/albertino_della_muzzina.jpg', position: 'Fante' }],
  [{ name: 'Benato Guerzi da Baura', image: 'images/people/benato_guerzi_da_baura.jpg', position: 'Fante' }],
  [{ name: 'Ghisola Casale da Castrocaro', image: 'images/people/ghisola_da_castrocaro.jpg', position: 'Cuoca' }],
  [{ name: 'Perina', image: 'images/people/perina.jpg', position: 'Moglie di Ferantino' }],
]

const ProjectsPage = () => {
  return (
    <Page title="Personaggi">
      <Typography pb={2}>
        Tutti i Personaggi storici della Compagnia sono realmente vissuti ed esistono attendibili fonti bibliografiche. Il gruppo è suddiviso per
        classi sociali: Uomini d'arme, Artigiani, Nobili Cavalieri, Nobildonne, uomini e donne del popolo; Ogni Personaggio, il suo ruolo e il suo
        comportamento sono fondamentali alla ricostruzione di uno spaccato della vita di un campo d'arme del tardo XIV Secolo.
      </Typography>
      <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
        {people.map((props, idx) => (
          <EmplyeeStack key={idx} items={props} />
        ))}
      </Box>
    </Page>
  )
}

export default ProjectsPage
