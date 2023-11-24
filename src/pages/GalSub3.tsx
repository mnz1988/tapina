import { IonContent, IonPage, } from '@ionic/react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import MyHeader from './MyHeader'
import './GalSub.css'

const images = [
  {
    original: "/galsubimages/galsub3/1w.jpg",
    originalAlt: "完全な建物設計 / Complete building design",
    originalTitle: "完全な建物設計 / Complete building design",
    description: "",
    thumbnail: "/galsubimages/galsub3/1t.jpg",
    thumbnailAlt: "完全な建物設計 / Complete building design / #1",
    thumbnailTitle: "#1",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub3/2w.jpg",
    originalAlt: "完全な建物設計 / Complete building design",
    originalTitle: "完全な建物設計 / Complete building design",
    description: "",
    thumbnail: "/galsubimages/galsub3/2t.jpg",
    thumbnailAlt: "完全な建物設計 / Complete building design / #2",
    thumbnailTitle: "#2",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub3/3w.jpg",
    originalAlt: "完全な建物設計 / Complete building design",
    originalTitle: "完全な建物設計 / Complete building design",
    description: "",
    thumbnail: "/galsubimages/galsub3/3t.jpg",
    thumbnailAlt: "完全な建物設計 / Complete building design / #3",
    thumbnailTitle: "#3",
    thumbnailLabel: "",
  },
]

const GalSub3: React.FC = () => {
  return (
    <IonPage>
       <MyHeader/>
       <IonContent className="ion-padding">
        
          <ImageGallery
            items={images}
            showBullets={true}
            showIndex={true} indexSeparator={' / '}
            showNav={true}
            useTranslate3D={false}
            showPlayButton={true}
            autoPlay={true}
            slideDuration={450}
            slideInterval={3000}
          />

    </IonContent>
      
    </IonPage>
  );
};

export default GalSub3