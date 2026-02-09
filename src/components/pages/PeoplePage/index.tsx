import { Box, Typography } from '@mui/material'

import EmplyeeCard from 'components/molecules/EmplyeeCard/index.js'
import { Page } from 'components/templates/index.js'
import EmplyeeStack from '../../molecules/EmplyeeStack/index.js'

const ProjectsPage = () => {
  return (
    <Page title="Personaggi">
      <Typography pb={2}>
        Tutti i Personaggi storici della Compagnia sono realmente vissuti ed esistono attendibili fonti bibliografiche. Il gruppo è suddiviso per
        classi sociali: Uomini d'arme, Artigiani, Nobili Cavalieri, Nobildonne, uomini e donne del popolo; Ogni Personaggio, il suo ruolo e il suo
        comportamento sono fondamentali alla ricostruzione di uno spaccato della vita di un campo d'arme del tardo XIV Secolo.
      </Typography>
      <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
        <EmplyeeStack
          items={[
            // { name: "Alberto V d'Este", image: 'images/people/albertoV.jpg', position: 'Marchese' },
            { name: 'Bartolomeo Contrari', image: 'images/people/bartolomeo_contrari.jpg', position: 'Nobile' },
            { name: 'Zan Biancolin', image: 'images/people/zanbiancolin.jpg', position: 'Cuoco' },
          ]}
        />
        <EmplyeeStack
          items={[
            { name: 'Niccolò degli Obizzi', image: 'images/people/niccolo_degli_obizzi.jpg', position: 'Nobile' },
            { name: 'Ferantino di Zampalocha', image: 'images/people/ferantino_di_zampalocha.jpg', position: 'Serragente' },
          ]}
        />

        <EmplyeeCard name="Galacino Galaci" image="images/people/galacino_galaci.jpg" position="Fante" />
        <EmplyeeCard name="Zanino il Beccaio" image="images/people/zannino_il_beccaio.jpg" position="Fante" />
        <EmplyeeCard name="Gamberino di Bergantino" image="images/people/gamberino_di_bergantino.jpg" position="Fante" />
        <EmplyeeCard name="Albertino della Muzzina" image="images/people/albertino_della_muzzina.jpg" position="Fante" />
        <EmplyeeCard name="Benato Guerzi da Baura" image="images/people/benato_guerzi_da_baura.jpg" position="Fante" />
        <EmplyeeCard name="Ghisola Casale da Castrocaro" image="images/people/ghisola_da_castrocaro.jpg" position="Cuoca" />
        <EmplyeeCard name="Perina" image="images/people/perina.jpg" position="Moglie di Ferantino" />
      </Box>
    </Page>
  )
}

export default ProjectsPage
