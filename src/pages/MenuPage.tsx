import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonIcon, IonItem, IonAvatar, IonRippleEffect } from '@ionic/react';
import { person, home } from 'ionicons/icons';

const MenuPage: React.FC = () => {
    return (
        <IonMenu type="overlay" contentId="main">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu Lateral</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <IonAvatar className="ion-activatable"
                    style={{ overflow: 'hidden', cursor: 'ponter' }}>
                        <img src="https://pbs.twimg.com/profile_images/3729096119/c0edee92b6a8ea4f37e02b4b0159c6e6_400x400.jpeg"
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
