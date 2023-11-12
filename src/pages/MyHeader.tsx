import { IonHeader, IonRow, IonToolbar } from '@ionic/react'
import './MyHeader.css'

const MyHeader: React.FC = () => {
    return (
        <IonHeader className="ion-no-border">{/*remove shadow box and border of Header with ion-no-border class  */}
         
        <IonToolbar>
            <IonRow>

            <img 
                className="logo-header" 
                src="logo-blue.svg" 
                alt="タピナ / TaPina" 
            />
            <h1 className='headerTitle'><strong>タピナ</strong>
              {/* <br /> */}
              <span> / TaPina</span> 
              {/* <span style={{ fontSize: '0.45em', letterSpacing: '2px' }}>STUDIO</span> */}
            </h1>
          </IonRow>
        </IonToolbar>
      </IonHeader>
    )
}

export default MyHeader