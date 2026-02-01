import React from 'react'
import { Typography, Link, List as MuiList, styled, Box } from '@mui/material'

import { ListItemText, SectionHeader, SectionSubheader } from 'components/atoms/index.js'

const List = styled(MuiList)(({ theme }) => ({
  listStyleType: 'disc',
  paddingLeft: theme.spacing(4),
  '& .MuiListItem-root': {
    display: 'list-item',
    padding: 0,
  },
}))

const PrivacyPolicy: React.FC = () => {
  return (
    <Box aria-labelledby="privacy-policy">
      <SectionHeader id="privacy-policy" aria-label="privacy-policy" color="inherit">
        Privacy Policy
      </SectionHeader>
      <Typography variant="subtitle1" color="textSecondary" component="p" pb={4}>
        Data ultimo aggiornamento: Feb. 1, 2026
      </Typography>

      <SectionSubheader>Introduction</SectionSubheader>
      <Typography component="p" color="textSecondary">
        L'informativa è resa solo per il sito web ufficiale di la Compagnia d'Arme del Santo Luca all'indirizzo https://{window.location.host} e non
        per altri siti web esterni, eventualmente consultati dall'utente tramite link.
      </Typography>

      <SectionSubheader sx={{ mt: 4 }}>Titolare del trattamento</SectionSubheader>
      <Typography component="p" color="textSecondary">
        Il Titolare del trattamento è la Compagnia d'Arme del Santo Luca, con sede legale in via Leonello Poletti n. 16, 44122 Ferrara.
      </Typography>

      <SectionSubheader sx={{ mt: 4 }}> Responsabile Protezione Dati (DPO)</SectionSubheader>
      <Typography component="p" color="textSecondary">
        Il Titolare, la Compagnia d'Arme del Santo Luca, ai sensi dell'art. 37 GDPR, non è tenuto a nominare il Responsabile della protezione dei
        dati.
      </Typography>

      <SectionSubheader sx={{ mt: 4 }}>Tipi di dati trattati (Dati di navigazione)</SectionSubheader>
      <Typography component="p" color="textSecondary" gutterBottom>
        I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio,
        alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non
        sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed
        associazioni con dati detenuti da terzi, permettere di identificare gli utenti. In questa categoria di dati rientrano gli indirizzi IP o i
        nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier)
        delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto
        in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al
        sistema operativo e all'ambiente informatico dell'utente.
      </Typography>
      <Typography component="p" color="textSecondary">
        I suddetti dati sono necessari per la fruizione della navigazione del sito. Questi dati vengono conservati dal provider per il tempo
        strettamente necessario. I dati potrebbero essere utilizzati per l'accertamento di responsabilità in caso di ipotetici reati informatici ai
        danni del sito.
      </Typography>

      <SectionSubheader sx={{ mt: 4 }}>Modalità del trattamento</SectionSubheader>
      <Typography component="p" color="textSecondary">
        I dati personali di navigazione sono trattati con strumenti automatizzati per il tempo strettamente necessario a conseguire gli scopi per cui
        sono stati raccolti. I dati personali di contatto sono trattati con strumenti cartacei e informatici e vengono conservati fino a completa
        esecuzione del rapporto precontrattuale e di quello contrattuale o per quanto necessario secondo termini di legge. Specifiche misure di
        sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
      </Typography>

      <SectionSubheader sx={{ mt: 4 }}>Diritti di accesso e reclamo</SectionSubheader>
      <Typography component="p" color="textSecondary">
        Scrivendo attraverso il modulo di contatto le è garantito il diritto di:
      </Typography>
      <List dense>
        <ListItemText>chiedere l'esistenza e l'accesso ai dati che la riguardano;</ListItemText>
        <ListItemText>chiedere l'aggiornamento e l'integrazione dei dati forniti;</ListItemText>
        <ListItemText>
          chiedere la cancellazione dei dati personali, salva l'esistenza di un diritto del Titolare alla conservazione degli stessi
        </ListItemText>
        <ListItemText>
          chiedere la comunicazione dei dati personali conservati eventualmente dal Titolare o la consegna di una loro copia;
        </ListItemText>
        <ListItemText>opporsi ad operazioni di trattamento che ritenga non siano legittime o chiedere limitazioni di trattamento</ListItemText>
        <ListItemText>
          Per l'esercizio dei suddetti diritti la legittimità della sua richiesta potrà essere valutata previa verifica della sua identità.
        </ListItemText>
      </List>

      <Typography component="p" color="textSecondary">
        Qualora ritenga che il trattamento abbia violato un suo diritto potrà presentare obiezioni nei confronti del Titolare utilizzando l'indirizzo
        sopra indicato e anche presentando reclamo presso l'Autorità Garante{' '}
        <Link color="textPrimary" href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
          www.garanteprivacy.it
        </Link>
        .
      </Typography>
    </Box>
  )
}

export default PrivacyPolicy
