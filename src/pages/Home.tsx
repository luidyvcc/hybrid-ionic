import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import NameSetter from './NameSetter';
import NameList from './NameList';


const Home: React.FC = () => {
  const [names, setNames] = useState<string[]>([])
  const addName = (name: string) => setNames([name, ...names])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <NameSetter
          initialValue="Meu nome é"
          placeholder="Seu nome"
          buttonTitle="Definir Nome"
          onNameSet={addName}
        />
        <NameSetter
          initialValue="Sua mãe é"
          placeholder="Nome da sua mãe"
          buttonTitle="Definir sua mãe"
          onNameSet={addName}
        />
        <NameSetter
          initialValue="Seu pai é"
          placeholder="Nome do seu pai"
          buttonTitle="Definir seu pai"
          onNameSet={addName}
        />

        <NameList names={names}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
