import { IonContent, IonPage, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, } from '@ionic/react'

import MyHeader from './MyHeader'
import MyLottieBG from './MyLottieBg'
import './Home.css'

const About: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>
      <IonContent fullscreen className="ion-padding">

      <IonGrid >

        <IonRow>
          <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3" size-xl="3">
            <IonCard><img src='/1.jpg' /><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard></IonCol>

              
          <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3" size-xl="3">
            <IonCard><img src='/1.jpg' /><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard></IonCol>

          <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3" size-xl="3">
            <IonCard><img src='/1.jpg' /><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard></IonCol>

          <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3" size-xl="3">
            <IonCard><img src='/1.jpg' /><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard></IonCol>

        </IonRow>
        
        <IonRow>
          <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3" size-xl="3">
            <IonCard><img src='/1.jpg' /><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard></IonCol>

              
          <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3" size-xl="3">
            <IonCard><img src='/1.jpg' /><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard></IonCol>

          <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3" size-xl="3">
            <IonCard><img src='/1.jpg' /><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard></IonCol>

          <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3" size-xl="3">
            <IonCard><img src='/1.jpg' /><IonCardHeader>
                <IonCardTitle>Design title or category</IonCardTitle>
                <IonCardSubtitle>description or subtitle</IonCardSubtitle></IonCardHeader>
              </IonCard></IonCol>

        </IonRow>

      </IonGrid>

      </IonContent>
      
    </IonPage>
  );
};

export default About