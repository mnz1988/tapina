import { IonContent, IonPage, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, } from '@ionic/react'

import MyHeader from './MyHeader'
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>
      <IonContent className="ion-padding">

      <IonGrid >
        <IonRow>
          <IonCol  size-xs="11" size-sm="11" size-md="6" size-lg="6" size-xl="5">
            <IonCol/>
            
            <IonCard >
              <IonCardHeader color="gray">
                <IonCardTitle><h1><strong>タピナ 工房</strong></h1></IonCardTitle>
                {/* <IonCardSubtitle></IonCardSubtitle> */}
              </IonCardHeader>
              <IonCardContent><h1>
                {/* <strong> */}
              タピナは、日常生活をデザイン、計画、構築するための建築スタジオです。
              ドア、窓、ファサード、照明、特別な備品、アクセサリーを設計します。
              {/* </strong> */}
              </h1></IonCardContent>
            </IonCard>
        
          </IonCol>
          <IonCol size-xs="1" size-sm="1" size-md="6" size-lg="6" size-xl="7"></IonCol>

          <IonCol size-xs="11" size-sm="11" size-md="6" size-lg="6" size-xl="5">

            <IonCard className="entext">
            
              <IonCardHeader>
                {/* <IonCardTitle>Why Invest with GORZ?</IonCardTitle> */}
                <IonCardSubtitle><h1><strong>TaPina Studio</strong></h1></IonCardSubtitle>
              </IonCardHeader>
          
              <IonCardContent><h1>
                {/* <strong> */}
                Tapina is an architectural studio for designing, planning, and building your daily life.
                <br />
                We design doors, windows, facades, lighting, special supplies, and accessories.
                {/* </strong> */}
                </h1></IonCardContent>

              {/* <IonCardHeader>
            
                <IonCardSubtitle>High Impact:</IonCardSubtitle>
          
              </IonCardHeader>
              <IonCardContent>
              T1 model allows Gorz to haonment, while generating wealth
              </IonCardContent>
        
              <IonCardHeader>
            
                <IonCardSubtitle>Experience</IonCardSubtitle>
          
              </IonCardHeader>
              <IonCardContent>
                Combination of IRL and Web the curve and pioneer trends.
              </IonCardContent>
        
              <IonCardHeader>
            
                <IonCardSubtitle>Full Transparency: </IonCardSubtitle>
          
              </IonCardHeader>
              <IonCardContent>
              Integrating blockchai, while streamlining the investment process. 
              </IonCardContent> */}
        
            </IonCard>
          </IonCol>
          <IonCol size-xs="1" size-sm="1" size-md="6" size-lg="6" size-xl="7"></IonCol>
        
        </IonRow>

      </IonGrid>

      </IonContent>
      
    </IonPage>
  );
};

export default Home
