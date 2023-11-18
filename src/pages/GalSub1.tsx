import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonThumbnail, } from '@ionic/react'

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
          <a href="/galsubimages/galsub1/1w.jpg" target='_blank' >
            <img src='/galsubimages/galsub1/1t.jpg' />
          </a>
          </IonThumbnail>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub1/2w.jpg" target='_blank' >
            <img src='/galsubimages/galsub1/2t.jpg' />
          </a>
          </IonThumbnail>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub1/3w.jpg" target='_blank' >
            <img src='/galsubimages/galsub1/3t.jpg' />
          </a>
          </IonThumbnail>

          <IonThumbnail className="ion-padding">
          <a href="/galsubimages/galsub1/4w.jpg" target='_blank' >
            <img src='/galsubimages/galsub1/4t.jpg' />
          </a>
          </IonThumbnail>
        

          {/* <IonCol size-xs="12" size-sm="12" size-md="6" size-lg="4" size-xl="3"> */}
          {/* </IonCol> */}

          {/* <IonCol size-xs="12" size-sm="12" size-md="6" size-lg="4" size-xl="3"> */}
            {/* <img src='/1.jpg' style={{border: '0.1px', borderRadius: '18px',}} /> */}
          {/* </IonCol> */}

          {/* <IonCol size-xs="12" size-sm="12" size-md="6" size-lg="4" size-xl="3"> */}
            {/* <img src='/1.jpg' style={{border: '0.1px', borderRadius: '18px',}} /> */}
          {/* </IonCol> */}

          {/* <IonCol size-xs="12" size-sm="12" size-md="6" size-lg="4" size-xl="3"> */}
            {/* <img src='/1.jpg' style={{border: '0.1px', borderRadius: '18px',}} /> */}
          {/* </IonCol> */}

          {/* // <IonCol size-xs="12" size-sm="12" size-md="6" size-lg="4" size-xl="3"> */}
            {/* <IonCard><a href='' ><img src='/1.jpg' /></a><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard> */}
              {/* </IonCol> */}

        </IonRow>
        

      </IonGrid>

      </IonContent>
      
    </IonPage>
  );
};

export default About