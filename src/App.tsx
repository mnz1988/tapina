import { Suspense } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import GalSub1 from './pages/GalSub1'
import GalSub2 from './pages/GalSub2'
import GalSub3 from './pages/GalSub3'
import Contact from './pages/Contact'

/* Core CSS required for Ionic components to work properly */ import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */ import '@ionic/react/css/normalize.css'; import '@ionic/react/css/structure.css'; import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */ import '@ionic/react/css/padding.css'; import '@ionic/react/css/float-elements.css'; import '@ionic/react/css/text-alignment.css'; import '@ionic/react/css/text-transformation.css'; import '@ionic/react/css/flex-utils.css'; import '@ionic/react/css/display.css';

/* Theme variables */
import { homeOutline, } from 'ionicons/icons'; import './theme/variables.css'; import './main.css'; 

/* 3d */ 
import { Canvas } from '@react-three/fiber'
import { OrbitControls, } from '@react-three/drei'
import { ModelLogo } from './components/MyModelLogo'

setupIonicReact(); 

const App: React.FC = () => (
  <IonApp><>

      <Canvas shadows>
        {/* lights */}
        <ambientLight intensity={4} />
        <pointLight intensity={5} position={[-0.5, 0.8, 0.8]} color={0xffffff}/>
        <pointLight intensity={15} position={[ 2.5, -0.8, -1.2]} color={0xffffff}/>
        {/* models */}
        <Suspense fallback={null}><ModelLogo /></Suspense>
        {/* controlers  */}
        <OrbitControls autoRotate={true} autoRotateSpeed={4} enablePan={true} enableZoom={true} maxPolarAngle={Math.PI / 2 } minPolarAngle={Math.PI / 2 }/>
      </Canvas>

    <IonReactRouter><IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/Gallery"><Gallery /></Route>
          <Route exact path="/Contact"><Contact /></Route>
          <Route exact path="/GalSub1"><GalSub1 /></Route>
          <Route exact path="/GalSub2"><GalSub2 /></Route>
          <Route exact path="/GalSub3"><GalSub3 /></Route>
          <Route exact path="/"><Redirect to="/home" /></Route>
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom" >
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            {/* <IonLabel >home</IonLabel> */}
          </IonTabButton>

          <IonTabButton tab="Gallery" href="/Gallery">
            <IonLabel>Gallery /<h1 ><strong>画廊</strong></h1 ></IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="contact" href="/contact">
            {/* <IonIcon aria-hidden="true" icon={idCardOutline} /> */}
            <IonLabel>Contact /<h1 ><strong>連絡</strong></h1 ></IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>

</></IonApp>)

export default App;