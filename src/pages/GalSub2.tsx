import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonThumbnail, IonSegment, } from '@ionic/react'

import MyHeader from './MyHeader'
// import MyLottieBG from './MyLottieBg'
import './Home.css'
import './GalSub.css'

const About: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>
      <IonContent className="ion-padding">

      <IonGrid >
        <IonRow>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub2/1.jpg" target='_blank' >
            <img src='/galsubimages/galsub2/1t.jpg' />
          </a>
          </IonThumbnail>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub2/2.jpg" target='_blank' >
            <img src='/galsubimages/galsub2/2t.jpg' />
          </a>
          </IonThumbnail>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub2/3.jpg" target='_blank' >
            <img src='/galsubimages/galsub2/3t.jpg' />
          </a>
          </IonThumbnail>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub2/4.jpg" target='_blank' >
            <img src='/galsubimages/galsub2/4.jpg' />
          </a>
          </IonThumbnail>

          <IonCol/>

          </IonRow>

          {/* <IonRow>
          
          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub2/5.jpg" target='_blank' >
            <img className="verticalimage" src='/galsubimages/galsub2/5tv.jpg' />
          </a>
          </IonThumbnail>
          <IonCol/>

          <IonCol></IonCol>
          <IonCol><a href='#' >here you can find the images of creating door & window for this project</a></IonCol>
          <IonCol></IonCol>

          <IonSegment></IonSegment>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub2/7.jpg" target='_blank' >
            <img className="verticalimage" src='/galsubimages/galsub2/7tv.jpg' />
          </a>
          </IonThumbnail>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub2/6.jpg" target='_blank' >
            <img className="verticalimage" src='/galsubimages/galsub2/6tv.jpg' />
          </a>
          </IonThumbnail>
          <IonCol/>

        </IonRow> */}
        

      </IonGrid>

      </IonContent>
      
    </IonPage>
  );
};

export default About