import { Typography } from '@mui/material'

import Section from 'components/molecules/Section/index.js'
import { Page } from 'components/templates/index.js'

const ActivitiesPage = () => {
  return (
    <Page title="Attività">
      <Section title="Percorsi didattici" sx={{ pb: 0 }}>
        <Typography variant="body1" color="text.secondary">
          La Compagnia propone percorsi didattici dedicati alla scoperta della vita nel Basso Medioevo, illustrando le attività svolte all'interno del
          campo armato e il loro ruolo nella quotidianità dei soldati. Attraverso dimostrazioni pratiche e spiegazioni storiche, vengono presentati
          armamenti, addestramento, medicina medievale e aspetti della vita civile, offrendo un'esperienza educativa coinvolgente.
        </Typography>
      </Section>
      <Section imageUrl="images/activities/2021_06_15-sartoria.webp" imageAlt="Sartoria">
        <Typography variant="h5">Sartoria</Typography>
        <Typography variant="body1" color="text.secondary">
          Nel Medioevo l'abbigliamento aveva un valore profondo: i vestiti non servivano solo a coprire il corpo, ma raccontavano chi eravamo, da dove
          venivamo e quale ruolo si aveva nella società. La Compagnia d'Arme del Santo Luca realizza abiti ispirati alle forme e alle tecniche
          dell'epoca, impiegando tagli, colori e materiali che riflettono le pratiche storiche. Dalle tuniche e vesti di uso quotidiano alle fogge più
          ricercate per dame e cavalieri, ogni capo è scelto per mostrare come tessuti come lana, lino e seta erano trasformati in elementi di
          abbigliamento che rispecchiavano funzioni, status e gusti del tempo. L'abbigliamento diventa così una finestra sul mondo medievale, fatta di
          forme, significati e dettagli che accompagnavano la vita di tutti i giorni e le occasioni speciali.
        </Typography>
      </Section>
      <Section variant="secondary" imageUrl="images/activities/cucina.webp" imageAlt="Cucina">
        <Typography variant="h5">Cucina</Typography>
        <Typography variant="body1" color="text.secondary">
          La cucina medievale è un mondo a parte, fatto di sapori, profumi e tecniche di cottura che oggi ci sembrano lontani ma che all'epoca erano
          all'ordine del giorno. La compagnia ha una cucina attrezzata e funzionale, con la quale è in grado di preparare e spiegare piatti tipici
          dell'epoca, utilizzando ingredienti e metodi di cottura autentici all'inteno di eventi, manifestazioni e rievocazioni storiche.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Su rirchiesta la compagnia può organizzare lezioni di cucina medievale, dove i partecipanti possono imparare a conoscere e preparare piatti
          tipici dell'epoca.
        </Typography>
      </Section>
      <Section imageUrl="images/activities/2021_05_30-cerusico.webp" imageAlt="Cucina">
        <Typography variant="h5">Cerusico</Typography>
        <Typography variant="body1" color="text.secondary">
          Nell'accampamento medievale la figura del cerusico rivestiva un ruolo fondamentale: era colui che interveniva sulle ferite, conosceva gli
          strumenti e sapeva riconoscere le erbe utili a curare i piccoli mali della vita quotidiana. La Compagnia d'Arme del Santo Luca porta in vita
          questa figura storica attraverso l'allestimento di postazioni didattiche in cui vengono illustrati strumenti, rimedi e pratiche mediche del
          periodo, offrendo uno sguardo autentico su come si affrontavano salute e guarigione nel Medioevo, con attenzione alle conoscenze e alle
          tecniche del tempo.
        </Typography>
      </Section>
      <Section variant="secondary" imageUrl="images/activities/2021_05_30-pilgrimage.webp" imageAlt="Cucina">
        <Typography variant="h5">Pellegrinaggio</Typography>
        <Typography variant="body1" color="text.secondary">
          Il pellegrinaggio nel Medioevo era molto più di un viaggio: era un'esperienza di spiritualità, cultura e incontro. All'interno delle nostre
          rievocazioni la Compagnia d'Arme del Santo Luca ricrea gli aspetti di questi cammini antichi, raccontando come si muovevano i pellegrini,
          quali mete raggiungevano e quali usanze accompagnavano il loro percorso. Tra storie di santi, architetture sacre e tappe di sosta, il
          pellegrinaggio diventa un modo coinvolgente per comprendere le motivazioni profonde che spingevano uomini e donne a intraprendere grandi
          traversate a piedi nel cuore dell'Europa medievale.
        </Typography>
      </Section>
      <Section imageUrl="images/activities/2019_02_24-Armi.webp" imageAlt="Cucina">
        <Typography variant="h5">Armi e armature</Typography>
        <Typography variant="body1" color="text.secondary">
          Alla base della vita militare medievale c'erano le armi e le armature: oggetti di straordinaria ingegneria e simboli di uno stile di
          combattimento e di vita che hanno dominato i campi di battaglia per secoli. La Compagnia d'Arme del Santo Luca possiede e utilizza repliche
          storicamente documentate di spade, lance, elmi e corazze, e propone dimostrazioni che illustrano l'evoluzione e l'uso di questi elementi,
          spiegando materiali, funzione e peculiarità. Lo studio delle armi e delle armature è affiancato da approfondimenti sul contesto bellico e
          sociale del tempo, per restituire un quadro completo delle tecniche e delle strategie che contraddistinsero l'arte della guerra medievale.
        </Typography>
      </Section>

      <Section
        variant="secondary"
        title="Organizzazione eventi"
        headline="La compagnia unisce professionalità e creatività per nell'ideare ed organizzare eventi di stampo medievale. Offre la possibilità di curare singoli spettacoli o intere manifestazioni in base alle esigenze dei singoli organizzatori."
        imageUrl="images/activities/2018_04_21_gorizia.webp"
        imageAlt="Gorizia 2018">
        <Typography variant="body1" color="text.secondary">
          La Compagnia d'Arme del Santo Luca partecipa a una varietà di manifestazioni e rievocazioni storiche, collaborando con enti pubblici,
          associazioni culturali e festival dedicati alla storia medievale e rinascimentale. Ogni evento è per noi l'occasione di portare il passato
          nel presente attraverso cortei, scene di vita, dimostrazioni e spettacoli che raccontano con rigore e passione usi, costumi e valori di
          secoli trascorsi. La nostra esperienza nella progettazione e gestione di eventi storici ci permette di trasformare ogni appuntamento in un
          momento coinvolgente, capace di affascinare il pubblico, valorizzare i contesti storici e offrire ai visitatori un'immersione autentica
          nella cultura medievale. Partecipiamo con entusiasmo a rievocazioni, mercati storici, celebrazioni di battaglie, e altre iniziative in cui
          storia e spettacolo si intrecciano, contribuendo a creare un'esperienza viva, educativa e memorabile per tutti i presenti.
        </Typography>
      </Section>
    </Page>
  )
}

export default ActivitiesPage
