import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import ContextualNameSetter from '../components/ContextualNameSetter';
import { useHistory } from 'react-router';

const InsertPage: React.FC = () => {
    const history = useHistory()

    const handleBack = () => {
        history.goBack()
    }

    return (
        <IonPage id="list">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Necropedofilia</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <ContextualNameSetter
                    initialValue=""
                    placeholder="Input the name"
                    buttonTitle="Insert"
                    onNameSet={handleBack}
                />
            </IonContent>
        </IonPage>
    )
}

export default InsertPage
