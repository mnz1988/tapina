import { IonContent, IonPage, } from '@ionic/react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import MyHeader from './MyHeader'
import './GalSub.css'

const images = [
  {
    original: "/galsubimages/galsub2/1w.jpg",
    originalAlt: "ヴィラファサードデザイン / Villa façade design",
    originalTitle: "ヴィラファサードデザイン / Villa façade design",
    description: "",
    thumbnail: "/galsubimages/galsub2/1t.jpg",
    thumbnailAlt: "ヴィラファサードデザイン / Villa façade design / #1",
    thumbnailTitle: "#1",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub2/2w.jpg",
    originalAlt: "ヴィラファサードデザイン / Villa façade design",
    originalTitle: "ヴィラファサードデザイン / Villa façade design",
    description: "",
    thumbnail: "/galsubimages/galsub2/2t.jpg",
    thumbnailAlt: "ヴィラファサードデザイン / Villa façade design / #2",
    thumbnailTitle: "#2",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub2/3w.jpg",
    originalAlt: "ヴィラファサードデザイン / Villa façade design",
    originalTitle: "ヴィラファサードデザイン / Villa façade design",
    description: "",
    thumbnail: "/galsubimages/galsub2/3t.jpg",
    thumbnailAlt: "ヴィラファサードデザイン / Villa façade design / #3",
    thumbnailTitle: "#3",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub2/4w.jpg",
    originalAlt: "ヴィラファサードデザイン / Villa façade design",
    originalTitle: "ヴィラファサードデザイン / Villa façade design",
    description: "",
    thumbnail: "/galsubimages/galsub2/4t.jpg",
    thumbnailAlt: "ヴィラファサードデザイン / Villa façade design / #4",
    thumbnailTitle: "#4",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub2/5vw.jpg",
    originalAlt: "ヴィラファサードデザイン / Villa façade design",
    originalTitle: "ヴィラファサードデザイン / Villa façade design",
    description: "",
    thumbnail: "/galsubimages/galsub2/5tv.jpg",
    thumbnailAlt: "ヴィラファサードデザイン / Villa façade design / #5",
    thumbnailTitle: "#5",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub2/6vw.jpg",
    originalAlt: "ヴィラファサードデザイン / Villa façade design",
    originalTitle: "ヴィラファサードデザイン / Villa façade design",
    description: "",
    thumbnail: "/galsubimages/galsub2/6tv.jpg",
    thumbnailAlt: "ヴィラファサードデザイン / Villa façade design / #6",
    thumbnailTitle: "#6",
    thumbnailLabel: "",
  },
  {
    original: "/galsubimages/galsub2/7vw.jpg",
    originalAlt: "ヴィラファサードデザイン / Villa façade design",
    originalTitle: "ヴィラファサードデザイン / Villa façade design",
    description: "هر توضیحی که لازم بدونی برای هر عکسی بصورت مجزا قایل نوشتن تو این بخش هست",
    thumbnail: "/galsubimages/galsub2/7tv.jpg",
    thumbnailAlt: "ヴィラファサードデザイン / Villa façade design / #7",
    thumbnailTitle: "#7",
    thumbnailLabel: "",
  },
]


const GalSub2: React.FC = () => {
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
            showPlayButton={false}
            // autoPlay={true}
            slideDuration={450}
            slideInterval={3000}
          />

    </IonContent>
      
    </IonPage>
  )
}

export default GalSub2

{/* <IonThumbnail className="ion-padding">
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
</IonThumbnail> */}