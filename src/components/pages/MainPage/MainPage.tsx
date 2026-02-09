import React from 'react'
import { Box, Typography } from '@mui/material'

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
          <Typography pt={1}>
            La Compagnia d'Arme del Santo Luca è un gruppo di rievocazione storica di Ferrara affiliato al C.E.R.S. (Consorzio Europeo Rievocazioni
            Storiche). Il periodo rievocato dalla Compagnia è il tardo XIV secolo (1380-1410).
          </Typography>
          <Typography pt={1}>
            Ogni membro interpreta personaggi realmente esistiti, quali uomini d'arme, nobili, artigiani e civili, la cui vita è documentata da fonti
            bibliografiche attendibili. Un'attenzione particolare è dedicata al casato d'Este e alle figure a esso collegate, al fine di valorizzare
            il contesto storico ferrarese attraverso ricostruzioni credibili, didattiche e spettacolari.
          </Typography>
        </ProjectSpotlight>
        {/*  2. Attività didattiche */}
        <ProjectSpotlight ref={refTeaching} scrollTarget={refTraining} anchor="left" image="images/didattica.png" title="Vita Civile">
          <Typography>
            La ricostruzione della vita civile rappresenta un elemento fondamentale delle attività della Compagnia. Non rappresetiamo solo soldati, ma
            anche tutte le altre figure che vivevano e operavano al seguito di una compagnie d'arme: cuochi, artigiani, religiosi, pellegrini e
            personale di supporto, tutti riproposti attraverso abiti, strumenti e gesti quotidiani ricostruiti su base storica. Particolare attenzione
            è dedicata agli aspetti della vita materiale: la preparazione dei cibi, l'organizzazione del banchetto, la sartoria storica, le pratiche
            mediche e devozionali ed il viaggio.
          </Typography>

          <Typography variant="h4" pt={3}>
            Attività Didattiche
          </Typography>
          <Typography pt={2}>
            La Compagnia propone percorsi didattici dedicati alla scoperta della vita nel Basso Medioevo, illustrando le attività svolte all'interno
            del campo armato e il loro ruolo nella quotidianità dei soldati. Attraverso dimostrazioni pratiche e spiegazioni storiche, vengono
            presentati armamenti, addestramento, medicina medievale e aspetti della vita civile, offrendo un'esperienza educativa coinvolgente.
          </Typography>
        </ProjectSpotlight>
        {/*  3. Scuola d'arme */}
        <ProjectSpotlight ref={refTraining} anchor="bottom" image="images/battle.png" mobileImage="images/battle.png" title="Vita Militare">
          <Typography pt={1}>
            La dimensione militare è il cuore operativo della Compagnia, che è in grado di allestire un campo d'arme del Basso Medioevo con tende
            storiche finemente arredate, armamenti e dotazioni coerenti con il periodo rievocato. All'interno del campo vengono mostrate le gerarchie,
            le differenze di ceto e l'organizzazione logistica delle truppe.
          </Typography>
          <Typography pt={1}>
            La Compagnia realizza duelli scenici basati su trattati storici, utilizzando armi conformi come spada, scudo, lancia, daga e randello.
            Partecipa inoltre a tornei di fanteria e cavalleria ispirati alle giostre medievali e prende parte alla ricostruzione di battaglie
            storiche, applicando tattiche e strategie dei condottieri dell'epoca. Per poter affrontare tali sfide il gruppo in arme si allena
            settimanalmente per studiare e riproporre i trattati di scherma più importanti.
          </Typography>
        </ProjectSpotlight>
        <Footer />
      </Box>
    </ViewportProvider>
  )
}

export default MainPage
