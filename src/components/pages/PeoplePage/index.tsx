import { Box, Typography } from '@mui/material'

import { Page } from 'components/templates/index.js'
import { EmployeeCardProps } from 'components/molecules/EmplyeeCard/index.js'
import EmplyeeStack from 'components/molecules/EmplyeeStack/index.js'
import EmployeeDescriptionDialog, { EmployeeDescription } from 'components/molecules/EmployeeDescription/index.js'
import { useState } from 'react'

const people: EmployeeCardProps[][] = [
  // Bartolomeo Contrari e Zan Biancolin
  [
    // { name: "Alberto V d'Este", image: 'images/people/albertoV/avatar.jpg', position: 'Marchese' },
    {
      name: 'Bartolomeo Contrari',
      image: 'images/people/bartolomeo_contrari/avatar.jpg',
      position: 'Nobile',
      description: {
        body: [
          'Detto Boitus compare in un documento dotale per la figlia Agnese con il quale consegna a Turcolino Tramaione 10 lire di veneti grossi ed una casa in contrada San Paolo il cui valore è stato stimato 100 lire bolognesi.',
          'Un documento dimostra che si trova fuori città: si era recato a Bologna pro negociis domini marchionis.Era evidentemente molto vicino alla famiglia Estensi.',
        ],
        captions: ['SUPERBI, Silvia. In dotem pro dote et dotis nomine. Il sistema dotale tra norma e prassi nella Ferrara del XIV secolo. 2012.'],
      },
    },
    {
      name: 'Zan Biancolin',
      image: 'images/people/zan_biancolin/avatar.jpg',
      position: 'Cuoco',
      description: {
        body: ['Caxarolus, lardarolo. Era un venditore di formaggio e lardo.'],
        captions: [
          "SANFILIPPO, Carla M. L'onomastica ferrarese del primo Trecento e gli Instrumenta fidelitatis.Libreriauniversitaria.it edizioni, 2016.",
        ],
      },
    },
  ],
  // Niccolò degli Obizzi e Ferantino di Zampalocha
  [
    {
      name: 'Niccolò degli Obizzi',
      image: 'images/people/niccolo_degli_obizzi/avatar.jpg',
      position: 'Nobile',
    },
    {
      name: 'Ferantino di Zampalocha',
      image: 'images/people/ferantino_di_zampalocha/avatar.jpg',
      position: 'Serragente',
      description: {
        body: [
          'Figlio di Giovanni degli Obizzi.',
          "Comandante delle truppe del marchese Niccolò d'Este. Si distinse con il marchese nell'assedio di Reggio Emilia dove stava rinchiuso Ottobone Terzi, signore di Parma, principale istigatore della rivolta contro gli Estensi.In quella occasione diede a conoscere il suo coraggio e il valore del suo casato.",
          "Accompagna Niccolò d'Este nei vari pellegrinaggi come Roma, Terra Santa e Santiago di Compostela. Nel faticoso pellegrinaggio in Terra Santa viene armato Cavaliere del Santo Sepolcro dallo stesso Marchese d'Este. In una tappa del pellegrinaggio a Santiago di Compostela viene armato Cavaliere anche dal Re di Francia.",
        ],
      },
    },
  ],
  // Galacino Galaci
  [
    {
      name: 'Galacino Galaci',
      image: 'images/people/galacino_galaci/avatar.jpg',
      position: 'Fante',
      description: {
        body: [
          "Le tracce documentarie relative a Galacino Galaci emergono all'inizio di gennaio 1394, in occasione dell'esecuzione del testamento di Lasia, figlia del fu Giovanni Beccaria, redatto dal notaio Agostino Caffarelli. I commissari testamentari ricordano che tra i legati figuravano cento lire da destinare secondo il loro giudizio. Avendo riconosciuto Isabetta, figlia di Galacino de Galaciis, iuvenis aetatis legitimae, e constatando che il padre, divitiis pauper, non disponeva dei mezzi necessari per maritarla, i commissari ritennero tale intervento iustam et bonam elemosinam e consegnarono a Galacino quarantatré lire marchesane pro dote et aliis necessitatibus pro maritando.",
          "La somma, insolitamente elevata per un'elemosina dotale, potrebbe spiegarsi con un possibile legame di parentela tra i Galaci e la testatrice: lo stesso giorno, infatti, una Lasia del fu ser Francesco ricevette dodici lire da Antonio de Galaciis, qualificato come erede della defunta. La documentazione suggerisce inoltre che Galacino fosse Latius civis e privo di ricchezze in città; né lui né la figlia sono tuttavia esplicitamente definiti pauperes, elemento che contribuisce a spiegare l'entità del legato loro assegnato.",
        ],
        captions: [
          'SUPERBI, Silvia. In dotem pro dote et dotis nomine. Il sistema dotale tra norma e prassi nella Ferrara del XIV secolo. 2012.',
          'ASFe, ANA, matr. 17, not. Agostino Caffarelli, atto del 13 gennaio 1394 e successivo.',
        ],
      },
    },
  ],
  // Zanino il Beccaio
  [
    {
      name: 'Zanino il Beccaio',
      image: 'images/people/zannino_il_beccaio/avatar.jpg',
      position: 'Fante',
      description: {
        image: 'images/people/zannino_il_beccaio/2025_04_12.jpg',
        body: [
          "Zanino compare come uno dei rappresentanti di Semiramide, vedova del notaio Giovanni de Richo ed erede del suo patrimonio. Il 5 novembre 1365, Zanino consegna 10 lire al frate domenicano Gregorio. L'atto specifica che si tratta de propriis denariis ipsius domine Simiramixie, pervenutile per eredità.",
          'Zanino è uno dei vari intermediari di cui la donna si serve per adempiere, gradualmente e in modo formale, agli obblighi lasciati dal defunto.',
        ],
        captions: [
          'SUPERBI, Silvia. In dotem pro dote et dotis nomine. Il sistema dotale tra norma e prassi nella Ferrara del XIV secolo. 2012.',
          'BCAFe, Coll. Antonelli 868, not. Pietro Pialbene, b. 2, atto del 5 novembre 1365.',
        ],
      },
    },
  ],
  // Gamberino di Bergantino
  [
    {
      name: 'Gamberino di Bergantino',
      image: 'images/people/gamberino_di_bergantino/avatar.jpg',
      position: 'Fante',
      description: {
        body: [
          'Le tracce relative a Gamberino di Bergantino emergono indirettamente dal testamento di Benvenuto Azzi, castaldo del marchese a Bergantino.Tra i legati figura la donazione a Martina di sex bonas pecudes, lascito di entità modesta che acquista tuttavia rilievo alla luce di alcuni elementi contestuali.Martina è infatti indicata come olim sua serva, e si può supporre che avesse già ricevuto quanto dovuto per i servizi prestati.',
          "Circa due mesi prima della redazione del testamento, Benvenuto aveva consegnato a Zilio, padre del futuro marito di Martina, Gamberino anch'egli di Bergantino, beni mobili per un valore complessivo di novantotto lire.Le sei pecore menzionate nel testamento appaiono dunque come un'aggiunta rispetto a quanto già corrisposto, interpretabile come un dono ulteriore.È inoltre significativo che, nel dettare le proprie volontà corpore languens, Benvenuto si riferisca inizialmente a Martina come “figlia”, correggendo poi il termine in famula: una correzione formale che non annulla il valore simbolico dell'espressione originaria.",
        ],
        captions: [
          'SUPERBI, Silvia. In dotem pro dote et dotis nomine. Il sistema dotale tra norma e prassi nella Ferrara del XIV secolo. 2012.',
          "ASFe, ANA, Ivi, matr. 19, not. Giovanni Lucchi, atto dell'11 giugno 1383.",
          'ASFe, ANA, Ivi, matr. 19, not. Giovanni Lucchi, atto del 19 agosto 1383.',
        ],
      },
    },
  ],
  // Albertino della Muzzina
  [
    {
      name: 'Albertino della Muzzina',
      image: 'images/people/albertino_della_muzzina/avatar.jpg',
      position: 'Fante',
      description: {
        position: 'Falegname',
        image: 'images/people/albertino_della_muzzina/2021_10_28.jpg',

        body: [
          "Le tracce del falegname Albertino, della contrada Muzzina, arrivano dal testamento che ha redatto il 21 febbraio 1379 davanti al notaio Pietro Pincerna, all'inteno del quale laconicamente instituit ellegit et esse voluit la moglie Isabetta quale erede di tutte le sue sostanze.",
        ],

        captions: [
          'SUPERBI, Silvia. In dotem pro dote et dotis nomine. Il sistema dotale tra norma e prassi nella Ferrara del XIV secolo. 2012.',
          'ASFe, ANA, matr. 7, not. Pietro Pincerna, atto del 21 febbraio 1379.',
        ],
      },
    },
  ],
  // Benato Guerzi da Baura
  [
    {
      name: 'Benato Guerzi da Baura',
      image: 'images/people/benato_guerzi_da_baura/avatar.jpg',
      position: 'Fante',
      description: {
        image: 'images/people/benato_guerzi_da_baura/2025_04_12.jpg',
        body: [
          "Le tracce documentarie relative a Benato Guerzi emergono in relazione al testamento di Lanzone, figlio del fu Giovanni de Gloriis, redatto l'8 agosto 1378 davanti al notaio Natale Sovertari. Tra le disposizioni testamentarie figura un legato di venti lire bolognesi destinato a pauperibus domicelabus maritandis. La consegna del legato, annotata dallo stesso notaio tre anni più tardi pro anima, consente di identificare le beneficiarie.",
          "L'esecuzione del testamento fu affidata al commissario Pietro Volpone, che, congiuntamente alla vedova Mina, provvide alla distribuzione delle somme, selezionando le nubili ritenute povere. Il 23 dicembre 1381, Agnese, figlia di Scrilinino Paganelli, proveniente da Baura e futura moglie di Benato Guerzi della stessa villa, ricevette quaranta soldi di aquilini.",
        ],
        captions: [
          'SUPERBI, Silvia. In dotem pro dote et dotis nomine. Il sistema dotale tra norma e prassi nella Ferrara del XIV secolo. 2012.',
          "ASFe, ANA, matr. 11, not. Natale Sovertari, atto dell'8 agosto 1378.",
          'ASFe, ANA, matr. 11, not. Natale Sovertari, atto del 23 dicembre 1381.',
        ],
      },
    },
  ],
  // Ghisola Casale da Castrocaro
  [
    {
      name: 'Ghisola Casale da Castrocaro',
      image: 'images/people/ghisola_da_castrocaro/avatar.jpg',
      position: 'Cuoca',
      description: {
        body: [
          'Figlia di un frate di un villaggio vicino a Castrocaro, vedova di Menguccio di Casale. Ha due figli, Betta ormai in età da marito e Biagio.',
          "Ereditano una casa, un pezzo di terra coltivata a vigna di quindici pertiche, un pezzo di terra di quattro tornature, una di tre tornature e altri tre appezzamenti di terra rispettivamente di tre, di una e di mezza tornatura, più due pecore, due agnelli e un'asina.",
          'Ghisola, vedova, doveva tutelare gli interessi del figlio minore e si doveva occupare del destino di Betta alla quale volle assegnare una dote. Fu destinata una piccola cassa con piccoli oggetti di un corredo del valore di 12 lire e un pezzo di terra.',
        ],
        captions: ['MUZZARELLI, Maria Giuseppina. Guardaroba medievale : vesti e società dal XIII al XVI secolo. 1999.'],
      },
    },
  ],
  // Perina
  [
    {
      name: 'Perina',
      image: 'images/people/perina/avatar.jpg',
      position: 'Moglie di Ferantino',
      description: {
        body: [
          'Perina compare in un documento notarile che mette in risalto la presenza di capitali femminili del tutto esterni al controllo dei mariti.',
          "Nell'agosto del 1371 la vedova di Francolino speziale, Beatrice, si trova in evidente difficoltà a soddisfare i creditori del defunto marito; a nome di due dei tre figli, nominati eredi universali, decide di alienare parte delle proprietà per ottenere la liquidità necessaria. Ne consegna una prima tranche a Ferantino di Ostellato, che le corrisponde il prezzo di 603 lire e 8 soldi di bolognini, e con un atto distinto, rogato dal notaio quello stesso giorno, vende un secondo gruppo di terre a Perina, moglie di Ferantino, la quale paga 75 lire bolognesi de propriis denariis dicte domine Perine.",
          "In un regime di separazione dei beni, è importante che il notaio distingua le sostanze di Ferantino da quelle della moglie Perina e in questo caso si tratta evidentemente di denaro che la donna non ha portato all'interno del matrimonio con la propria dote (per la quale il marito avrebbe potuto agire in autonomia), ma che ha mantenuto un regime giuridico diverso, riservandosene tutti i diritti.",
        ],
        captions: [
          'SUPERBI, Silvia. In dotem pro dote et dotis nomine. Il sistema dotale tra norma e prassi nella Ferrara del XIV secolo. 2012.',
          'ASFe, A.N.A., matr. 13, not. Nicolò Sansilvestri, atti del 9 agosto 1371.',
        ],
      },
    },
  ],
]

const emptyDialog: EmployeeDescription = { title: '' }

const ProjectsPage = () => {
  const [description, setDescription] = useState<EmployeeDescription | null>(null)

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, description: EmployeeDescription) => {
    e.stopPropagation()
    setDescription(description)
  }
  const handleClose = () => {
    setDescription(null)
  }
  return (
    <Page title="Personaggi">
      <Typography pb={2}>
        Tutti i Personaggi storici della Compagnia sono realmente vissuti ed esistono attendibili fonti bibliografiche. Il gruppo è suddiviso per
        classi sociali: Uomini d'arme, Artigiani, Nobili Cavalieri, Nobildonne, uomini e donne del popolo; Ogni Personaggio, il suo ruolo e il suo
        comportamento sono fondamentali alla ricostruzione di uno spaccato della vita di un campo d'arme del tardo XIV Secolo.
      </Typography>
      <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
        {people.map((props, idx) => (
          <EmplyeeStack key={idx} items={props} onClick={handleCardClick} />
        ))}
      </Box>
      <EmployeeDescriptionDialog open={!!description} description={description ?? emptyDialog} onClose={handleClose} />
    </Page>
  )
}

export default ProjectsPage
