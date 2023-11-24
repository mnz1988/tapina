import { IonContent, IonPage, } from '@ionic/react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
// import MyHeader from './MyHeader'
import './GalSub.css'
// import { useRef } from 'react'

const images = [
  {
    original: "/galsubimages/galsub1/1w.jpg",
    originalAlt: "Dインテリア・デザイン / Interior design",
    originalTitle: "Dインテリア・デザイン / Interior design",
    description: "",
    thumbnail: "/galsubimages/galsub1/1t.jpg",
    thumbnailAlt: "Dインテリア・デザイン / Interior design / #1",
    thumbnailTitle: "#1",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub1/2w.jpg",
    originalAlt: "Dインテリア・デザイン / Interior design",
    originalTitle: "Dインテリア・デザイン / Interior design",
    description: "",
    thumbnail: "/galsubimages/galsub1/2t.jpg",
    thumbnailAlt: "Dインテリア・デザイン / Interior design / #2",
    thumbnailTitle: "#2",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub1/3w.jpg",
    originalAlt: "Dインテリア・デザイン / Interior design",
    originalTitle: "Dインテリア・デザイン / Interior design",
    description: "",
    thumbnail: "/galsubimages/galsub1/3t.jpg",
    thumbnailAlt: "Dインテリア・デザイン / Interior design / #3",
    thumbnailTitle: "#3",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub1/4w.jpg",
    originalAlt: "Dインテリア・デザイン / Interior design",
    originalTitle: "Dインテリア・デザイン / Interior design",
    description: "",
    thumbnail: "/galsubimages/galsub1/4t.jpg",
    thumbnailAlt: "Dインテリア・デザイン / Interior design / #4",
    thumbnailTitle: "#4",
    thumbnailLabel: "",
  },
  
]

const GalSub1: React.FC = () => {

//   const imageGalleryRef = useRef<ImageGallery>(null)

//   const handleThumbnailClick = () => {
//     if (imageGalleryRef.current) {
//       imageGalleryRef.current.pause()
//   }
// }

  // const handleBulletClick = (_event, _index) => {
  //   imageGalleryRef.current.pause()
  // }

  return (
    <IonPage>
       {/* <MyHeader/> */}
       <IonContent className="ion-padding">
        
          <ImageGallery
            items={images}
            showBullets={true}
            showIndex={true} indexSeparator={' / '}
            showNav={false}
            useTranslate3D={false}
            autoPlay={true}
            slideDuration={450}
            slideInterval={3000}
            // onThumbnailClick={handleThumbnailClick}
            // onBulletClick={handleBulletClick}
          />

    </IonContent>
      
    </IonPage>
  )
}

export default GalSub1