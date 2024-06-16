import { IonContent, IonPage, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonTitle, IonItem, IonLabel, } from '@ionic/react'

import MyHeader from './MyHeader'
import './Home.css'
import { colorPaletteOutline, cubeOutline, logoBitcoin, logoCodepen, logoCss3, logoFigma, logoFirebase, logoGithub, logoHtml5, logoInstagram, logoIonic, logoJavascript, logoNpm, logoPlaystation, logoPwa, logoPython, logoReact, logoSass, logoSlack, logoSteam, logoVercel, logoWebComponent, logoWhatsapp, logoWordpress, logoXbox, mailOpenOutline, paperPlaneOutline, pencilOutline, prismOutline, videocamOutline, walkOutline } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>

      <IonContent className="ion-padding">

      <IonGrid >

        <IonRow>
          <IonCol size-xs="0" size-sm="0" size-md="2" size-lg="2" size-xl="3"/>
          <IonCol size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle><h1><strong>Zara M.Tamanani</strong></h1></IonCardTitle>
                {/* <IonCardSubtitle><strong>About</strong></IonCardSubtitle> */}
              </IonCardHeader>
                <IonCardContent color="light"><h2>In the scientific and artistic realm of Tehran, where dreams intertwine with reality, Zara M. Tamnani emerges as an architect, her soul intertwined with the essence of landscape design. She traversed the halls of Tehran University, delving into the fields of knowledge.</h2></IonCardContent>
                <IonCardContent color="light"><h2>Her pursuit of creativity led her into the realm of graphic design, where she embraced the dance of lines and colors with the grace of a seasoned artist. Within the Technical and Vocational College for Girls, she served as a teacher for two decades, enlightening the minds of young girls with the light of knowledge and inspiration.</h2></IonCardContent>
                <IonCardContent color="light"><h2>In her teachings, she cultivated not only the mind but also the soul.</h2></IonCardContent>
                <IonCardContent color="light">2003 - 2020</IonCardContent>
                <IonCardContent color="light"><h2>In the realm of architectural design, I have served as the Managing Director of Pina Design Studio for fifteen years. With a degree in architecture, specializing in landscape architecture from the University of Tehran, I have brought visions to tangible realities through my designs.</h2></IonCardContent>
                <IonCardContent color="light"><h2>Beyond the confines, I have curated around twenty oil and watercolor painting exhibitions, both individually and collectively, across Iran over twenty-four years. Sometimes my inclination veers towards storytelling beyond architecture. Over the past fifteen years, I have utilized my artistic talents to illustrate children's storybooks and embellish posters for Iranian festivals, including Nowruz.</h2></IonCardContent>
                <IonCardContent color="light"><h2>Proficient in a suite of software tools including AutoCAD MEP, Autodesk Revit Architecture, and Adobe Illustrator, I seamlessly integrate innovation and precision into every project. Feel free to contact me:</h2></IonCardContent>
                </IonCard></IonCol>
          <IonCol size-xs="0" size-sm="0" size-md="2" size-lg="2" size-xl="3"/>
        </IonRow>

        <IonRow>
          <IonCol size-xs="0" size-sm="0" size-md="3" size-lg="4" size-xl="4.5"/>
          <IonCol size-xs="12" size-sm="12" size-md="6" size-lg="4" size-xl="3">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle><h1><strong>連絡</strong></h1></IonCardTitle>
                {/* <IonCardSubtitle><strong>Contant US</strong></IonCardSubtitle> */}
                </IonCardHeader>
               
                  <IonCardContent>
                    <IonTitle><a href='https://www.instagram.com/_tapinapina_' target='blank'><IonIcon icon={logoInstagram}/> Follow & DM on Instagram</a></IonTitle>
                    <IonTitle><a href='mailto:zarnadesign@gmail.com'><IonIcon icon={mailOpenOutline}/> Send E-Mail</a></IonTitle>
                    <IonTitle><a href='https://t.me/Zarnadesign' target='blank'><IonIcon icon={paperPlaneOutline}/> DM on Telegram</a></IonTitle>
                    <IonTitle><IonIcon icon={mailOpenOutline}/> Call: 07089661269</IonTitle>
                    {/* <IonTitle><a href='#'><IonIcon icon={logoWhatsapp}/> Contact us using WhatsApp</a></IonTitle> */}
                  </IonCardContent>

              </IonCard></IonCol>
          <IonCol size-xs="0" size-sm="0" size-md="3" size-lg="4" size-xl="4.5"/>
        </IonRow>

        <IonRow>
          <IonCol size-xs="0" size-sm="0" size-md="2" size-lg="2" size-xl="3"/>
          <IonCol size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle><h1><strong>技能</strong></h1></IonCardTitle>
                <IonCardSubtitle><strong>Skills</strong></IonCardSubtitle>
              </IonCardHeader>

                {/* <IonList> */}
                  <IonItem><IonLabel color="light">2D Software & Art:<p />

                      <IonIcon icon={colorPaletteOutline}/> Inkscape, Adobe Illustrator, Photoshop, InDesign, Acrobat <br />
                      <IonIcon icon={pencilOutline}/> Industrial Design, Prototyping, Concept Designing, Sketching and Drawing <br/>
                      <IonIcon icon={logoFigma}/> Figma , Adobe XD, InVision, ...

                    </IonLabel>
                  </IonItem>
                  
                  <IonItem ><IonLabel  color="light">3D, Motion, & Game:<p />

                      <IonIcon icon={cubeOutline}/> <IonIcon icon={prismOutline}/> AutoCAD, 3DS Max, Blender, Rhinoceros, SketchUp, Chief Architect, JewelCAD <br/>
                      <IonIcon icon={videocamOutline}/> <IonIcon icon={walkOutline}/> Adobe Animate, After Effects, Premiere, Cinema 4D, Luxion KeyShot, Vray, ...<br/>
                      <IonIcon icon={logoPlaystation}/> <IonIcon icon={logoSteam}/>  <IonIcon icon={logoXbox}/> Unreal & Unity (Engines), ThreeJS 3D WebApps 

                    </IonLabel>
                  </IonItem>
                  
                  <IonItem>
                    <IonLabel  color="light">Web Design & Programming:<p />

                      <IonIcon icon={logoIonic}/> ionic, <IonIcon icon={logoReact}/> React, <IonIcon icon={logoPwa}/> PWA, <IonIcon icon={logoJavascript}/> Javascript, <IonIcon icon={logoPython}/> Python, ...<br/>
                      <IonIcon icon={logoWebComponent}/> Web Component, <IonIcon icon={logoHtml5}/> HTML5, <IonIcon icon={logoCss3}/> CSS 3, <IonIcon icon={logoSass}/> SASS, ...<br/>
                      <IonIcon icon={logoNpm}/> npm, <IonIcon icon={logoGithub}/> Github, <IonIcon icon={logoSlack}/> Slack, <IonIcon icon={logoVercel}/> Vercel, <IonIcon icon={logoCodepen}/> Codepen, <IonIcon icon={logoFirebase}/> Firebase, ...<br/>
                      <IonIcon icon={logoWordpress}/> Wordpress, Shopify, Dropal, & other CMS's... <br/>
                      <IonIcon icon={logoBitcoin}/> Cryptocurency, NFT, Blockchains, Tokenomics Simulation, ... <br/> 

                    </IonLabel>
                  </IonItem>

                {/* </IonList> */}

              </IonCard></IonCol>
          <IonCol size-xs="0" size-sm="0" size-md="2" size-lg="2" size-xl="3"/>
        </IonRow>

      </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default About
