import React, { useContext } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { AppContext } from '../contexts/AppContext';
import NameSetter from '../components/NameSetter';

type UdpadteParams = {
    idx?: string
}

const UpdatePage: React.FC = () => {
    
    const params: UdpadteParams = useParams()
    if (params.idx === undefined) throw new Error('Whats the index?')
    const idx = parseInt(params.idx)
    const [appData, despatchAppData] = useContext(AppContext)
    const initialName = appData.names[idx]
    const history = useHistory()
    const handleBack = () => history.goBack()

    return (
        <IonPage id="list">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Necropedofilia</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <NameSetter
                    initialValue={initialName}
                    placeholder="Change the name"
                    buttonTitle="Update!"
                    onNameSet={name => {
                        despatchAppData({
                            action: {
                                type: 'update',
                                at: idx,
                                to: name,
                            }
                        })
                        handleBack()
                    }}
                />
            </IonContent>
        </IonPage>
    )
}

export default UpdatePage
