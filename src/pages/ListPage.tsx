import React from 'react';
import { personAdd } from 'ionicons/icons'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon } from '@ionic/react';
import ContextualNameList from '../components/ContextualNameList';
import { useHistory } from 'react-router';

const ListPage: React.FC = () => {
    const history = useHistory()

    const handleInsert = () => {
        history.push('/set')
    }

    return (
        <IonPage id="list">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="end">
                        <IonButtons onClick={handleInsert}>
                            <IonIcon icon={personAdd} />
                        </IonButtons>
                    </IonButtons>
                    <IonTitle>Necrozoofilia</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <ContextualNameList />
            </IonContent>
        </IonPage>
    )
}

export default ListPage
