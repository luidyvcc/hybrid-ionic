import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonIcon, IonItem, IonAvatar, IonRippleEffect } from '@ionic/react';
import { person, home } from 'ionicons/icons';
import { Plugins, CameraPhoto, CameraResultType } from '@capacitor/core'

const { Camera } = Plugins

const MenuPage: React.FC = () => {
    const [avatar, setAvatar] = useState('')

    const handleChangeAvatar = async () => {
        const photo: CameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            allowEditing: true
        })
        setAvatar(photo.webPath!)
    }

    return (
        <IonMenu type="overlay" contentId="main">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu Lateral</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <IonAvatar
                        className="ion-activatable"
                        style={{ overflow: 'hidden', cursor: 'pointer' }}
                        onClick={handleChangeAvatar}
                    >
                        <img src={avatar}
                        alt="User's avatar" />
                        <IonRippleEffect />
                    </IonAvatar>
                </div>
                <IonList>
                    <IonItem button routerLink="/get">
                        <IonIcon icon={person}/>
                        <IonLabel>Nomes</IonLabel>
                    </IonItem>
                    <IonItem button routerLink="/home">
                        <IonIcon icon={home}/>
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default MenuPage;
