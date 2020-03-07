import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';
import NameSetterContent from '../components/NameSetterContent';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
              <IonMenuButton />
          </IonButtons>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <NameSetterContent
          initialValue="Meu nome é"
          placeholder="Seu nome"
          buttonTitle="Definir Nome"
        />
        <NameSetterContent
          initialValue="Sua mãe é"
          placeholder="Nome da sua mãe"
          buttonTitle="Definir sua mãe"
        />
        <NameSetterContent
          initialValue="Seu pai é"
          placeholder="Nome do seu pai"
          buttonTitle="Definir seu pai"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
