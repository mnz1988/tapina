import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonContent, IonHeader, IonIcon, IonLabel, IonMenu, IonMenuButton, 
  IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, 
  setupIonicReact} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'
import Gallery from './pages/Gallery'

/* Core CSS required for Ionic components to work properly */ import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */ import '@ionic/react/css/normalize.css'; import '@ionic/react/css/structure.css'; import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */ import '@ionic/react/css/padding.css'; import '@ionic/react/css/float-elements.css'; import '@ionic/react/css/text-alignment.css'; import '@ionic/react/css/text-transformation.css'; import '@ionic/react/css/flex-utils.css'; import '@ionic/react/css/display.css';

/* Theme variables */
import { homeOutline, logoDiscord, logoTwitter, triangle } from 'ionicons/icons'; import './theme/variables.css'; import './main.css'; 

/* 3d */ 
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Instances, OrbitControls, Instance, } from '@react-three/drei'
import { ModelLogo } from './components/MyModelLogo'

setupIonicReact(); 
const number=23; const lineWidth=0.036; const height=0.5;

const App: React.FC = () => (
  <IonApp><>

      <Canvas shadows camera={{ position: [0, 50, 0], zoom: 17 }} >
        <color attach="background" args={['#d5d5d5']} />

        {/* Renders a grid and crosses as instances */}
        <Instances position={[-0.2, -2.38, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <planeGeometry args={[lineWidth, height]} />
          <meshBasicMaterial color="#7f7f7f" />
          {Array.from({ length: number }, (_, y) =>
            Array.from({ length: number }, (_, x) => (
              <group key={x + ':' + y} position={[x * 2 - Math.floor(number / 2) * 2, -0.01, y * 2 - Math.floor(number / 2) * 2]}>
                <Instance rotation={[-Math.PI / 2, 0, 0]} />
                <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
              </group>
            ))
            )}
          <gridHelper args={[100, 100, '#9a9a9a', '#9a9a9a']} position={[0, -0.01, 0]} />
        </Instances>
        <ambientLight intensity={2} />
        {/* <pointLight intensity={5} position={[0, 5, 2]} color={0xffffff}/> */}
        {/* <spotLight castShadow intensity={2.25} angle={0.5} penumbra={1} position={[-10, 20, -15]} shadow-bias={-0.0001} /> */}

        <Suspense fallback={null}>
          <ModelLogo />
        </Suspense>

        <OrbitControls 
          autoRotate={true} autoRotateSpeed={0.85} 
          enablePan={true} enableZoom={true} 
          maxPolarAngle={Math.PI / 2 } minPolarAngle={Math.PI / 2 } 
        />
      </Canvas>


    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/Gallery"><Gallery /></Route>
          <Route exact path="/"><Redirect to="/home" /></Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" >

          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            {/* <IonLabel >home</IonLabel> */}
          </IonTabButton>

          <IonTabButton tab="Gallery" href="/Gallery">
            <IonLabel><h2 >Gallery / <strong>画廊</strong></h2 ></IonLabel>
          </IonTabButton>

          <IonTabButton >
          <IonPage id="main-content"><IonMenuButton>Contact / 連絡</IonMenuButton></IonPage>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>

        <IonMenu contentId="main-content" color="#ffffff">
          <IonHeader><IonToolbar color="tertiary"><IonTitle>Q&A / Connect</IonTitle></IonToolbar>
          </IonHeader>
          
          <IonContent className="ion-padding" color="light">
            <a href='#' ><IonIcon icon={logoDiscord}/><IonLabel> Link to Discord</IonLabel></a>
          </IonContent>
          
          <IonToolbar color="dark">
            <IonTitle>Social Pages</IonTitle>
          </IonToolbar>
          
          <IonContent className="ion-padding" color="light">
          <IonIcon icon={logoTwitter}/>X link, or Telegram Chl</IonContent>
          
          <IonToolbar color="light"><IonTitle>Log In / Sign Up</IonTitle></IonToolbar>
          <IonContent className="ion-padding" color="light">
            <a href='#' ><IonIcon icon={logoDiscord}/><IonLabel> Link to Discord</IonLabel></a>
          </IonContent>
          
        </IonMenu>

</></IonApp>)

export default App;