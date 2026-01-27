import React from 'react'
import { Box } from '@mui/material'

import { ViewportProvider } from 'components/utils/viewport'
import { Footer, Hero, Toolbar, ProjectSpotlight } from 'components/molecules/index.js'

const MainPage = () => {
  React.useEffect(() => {
    document.title = "Compagnia d'Arme del Santo Luca"
  }, [])

  const refAboutUs = React.useRef<HTMLSelectElement>(null)
  const refTeaching = React.useRef<HTMLSelectElement>(null)
  const refTraining = React.useRef<HTMLSelectElement>(null)

  return (
    <ViewportProvider>
      <Box aria-label="page" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Hero scrollTarget={refAboutUs} />
        {/*  1 Chi Siamo */}
        <ProjectSpotlight
          ref={refAboutUs}
          scrollTarget={refTeaching}
          anchor="right"
          // anchor="left"
          image="images/about-us.png"
          mobileImage="images/about-us.png"
          title="Chi Siamo">
          La Compagnia d'Arme del Santo Luca è un gruppo di rievocazione storica di Ferrara affiliato al C.E.R.S. (Consorzio Europeo Rievocazioni
          Storiche). Il periodo rievocato dalla Compagnia è il tardo XIV secolo (1380-1410).
        </ProjectSpotlight>
        {/*  2. Attività didattiche */}
        <ProjectSpotlight ref={refTeaching} scrollTarget={refTraining} anchor="left" image="images/didattica.png" title="Attività didattiche">
          La Compagnia d'Arme del Santo Luca propone percorsi didattici sulla vita nel Medioevo attraverso la spiegazione delle attività che venivano
          svolte all'interno del campo armato e che erano parte integrante della vita dell'uomo d'arme dell'epoca.
        </ProjectSpotlight>
        {/*  3. Scuola d'arme */}
        <ProjectSpotlight ref={refTraining} anchor="bottom" image="images/battle.png" mobileImage="images/battle.png" title="Scuola d'arme">
          Altra attività di rilevante importanza è la scherma medievale. Il gruppo in arme si allena settimanalmente per studiare e riproporre i
          trattati di scherma più importanti, dedicandosi allo studio e la messa in pratica delle tecniche di combattimento con differenti tipologie
          di armi.
        </ProjectSpotlight>
        <Footer />
      </Box>
    </ViewportProvider>
  )
}

export default MainPage
