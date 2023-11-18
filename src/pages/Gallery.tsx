import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonCol, } from '@ionic/react'

import MyHeader from './MyHeader'
// import MyLottieBG from './MyLottieBg'
import './Home.css'
// import { eyeOutline, } from 'ionicons/icons'

const About: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>
      <IonContent>

      <IonGrid >

        <IonRow>
          
          <IonCol size-xs="0.5" size-sm="0.5" size-md="0" size-lg="0" size-xl="0"/>
          <IonCol size-xs="11" size-sm="10" size-md="4" size-lg="4" size-xl="4">
            <IonCard routerLink="galsub1" href="/galsub1"><img src='/galsubimages/galsub1/1t.jpg' /><IonCardHeader>
                <IonCardTitle>Dインテリア・デザイン</IonCardTitle>
                <IonCardSubtitle><strong>Interior design</strong></IonCardSubtitle>
            </IonCardHeader></IonCard></IonCol>
          <IonCol size-xs="0.5" size-sm="0.5" size-md="0" size-lg="0" size-xl="0"/>

          <IonCol size-xs="0.5" size-sm="0.5" size-md="0" size-lg="0" size-xl="0"/>
          <IonCol size-xs="11" size-sm="11" size-md="4" size-lg="4" size-xl="4">
            <IonCard routerLink="galsub2" href="/galsub2"><img src='/galsubimages/galsub2/1t.jpg' /><IonCardHeader>
                <IonCardTitle>ヴィラファサードデザイン</IonCardTitle>
                <IonCardSubtitle>Villa façade design</IonCardSubtitle>
            </IonCardHeader></IonCard></IonCol>
          <IonCol size-xs="0.5" size-sm="0.5" size-md="0" size-lg="0" size-xl="0"/>

          <IonCol size-xs="0.5" size-sm="0.5" size-md="0" size-lg="0" size-xl="0"/>
          <IonCol size-xs="11" size-sm="11" size-md="4" size-lg="4" size-xl="4">
            <IonCard routerLink="galsub3" href="/galsub3"><img src='/galsubimages/galsub3/2t.jpg' /><IonCardHeader>
                <IonCardTitle>完全な建物設計</IonCardTitle>
                <IonCardSubtitle>Complete building design</IonCardSubtitle>
            </IonCardHeader></IonCard></IonCol>
          <IonCol size-xs="0.5" size-sm="0.5" size-md="0" size-lg="0" size-xl="0"/>

        </IonRow>
        

      </IonGrid>

      </IonContent>
      
    </IonPage>
  );
};

export default About