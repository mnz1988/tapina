import { IonContent, IonPage, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonTitle, IonList, IonItem, IonLabel, } from '@ionic/react'

import MyHeader from './MyHeader'
import './Home.css'
import { colorPaletteOutline, cubeOutline, logoAndroid, logoBitcoin, logoCodepen, logoCss3, logoDribbble, logoFigma, logoFirebase, logoGithub, logoHtml5, logoInstagram, logoIonic, logoJavascript, logoNpm, logoPlaystation, logoPwa, logoPython, logoReact, logoSass, logoSlack, logoSteam, logoVercel, logoWebComponent, logoWhatsapp, logoWordpress, logoXbox, paperPlaneOutline, pencilOutline, prismOutline, videocamOutline, walkOutline } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>

      <IonContent className="ion-padding">

      <IonGrid >

        <IonRow>
          <IonCol size-xs="0" size-sm="0" size-md="3" size-lg="4" size-xl="4"/>
          <IonCol size-xs="12" size-sm="12" size-md="6" size-lg="4" size-xl="4">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle><h1><strong>連絡</strong></h1></IonCardTitle>
                <IonCardSubtitle><strong>Contant US</strong></IonCardSubtitle>
                </IonCardHeader>
               
              <IonCardContent><IonTitle><a href='https://instagram.com/tapinadesign'><IonIcon icon={logoInstagram}/> Follow us on Instagram</a></IonTitle></IonCardContent>
               
              <IonCardContent><IonTitle><a href='#'><IonIcon icon={logoWhatsapp}/> Contact us using WhatsApp</a></IonTitle></IonCardContent>
               
              <IonCardContent><IonTitle><a href='#'><IonIcon icon={paperPlaneOutline}/> Contact us using Telegram</a></IonTitle></IonCardContent>

              </IonCard></IonCol>
          <IonCol size-xs="0" size-sm="0" size-md="3" size-lg="4" size-xl="4"/>
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
                  <IonItem><IonLabel  color="light">2D Software & Art:<p />

                      <IonIcon icon={colorPaletteOutline}/> Inkscape, Adobe Illustrator, Photoshop, InDesign, Acrobat <br />
                      <IonIcon icon={pencilOutline}/> Indestrial Design, Prorotping, Concept Designing, Skeching and Drawing <br/>
                      <IonIcon icon={logoFigma}/> Figma , Adobe XD, InVision, ...

                    </IonLabel>
                  </IonItem>
                  
                  <IonItem ><IonLabel  color="light">3D, Motion, & Game:<p />

                      <IonIcon icon={cubeOutline}/> <IonIcon icon={prismOutline}/> AutoCAD, 3DS Max, Blender, Rhinoceros, SketchUp, Chief Architec, JewelCAD <br/>
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