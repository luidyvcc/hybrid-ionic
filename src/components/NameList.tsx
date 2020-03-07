import React, {useState} from 'react'
import { trash } from 'ionicons/icons'
import { IonList, IonItem, IonLabel, IonAlert, IonIcon, IonText } from '@ionic/react'

type NameListProps = {
    names: string[]
    onDelete: (at: number) => void
    onUpdate: (at: number) => void
}

const NameList: React.FC<NameListProps> = ({
    names, onDelete, onUpdate
}: NameListProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [alertVisible, setAlertVisible] = useState(false);

    const handleItemDelete = (index: number) => {
        setSelectedIndex(index)
        setAlertVisible(true)
    }

    const handleItemUpdate = (index: number) => {
        onUpdate(index)
        setAlertVisible(false)
    }

    return (
        <>
            <IonList>
                {names.map((value, index, array) => 
                    <IonItem key={`NameList_${value}_${index}`} button>
                        <IonLabel>
                            <IonIcon icon={trash} onClick={() => handleItemDelete(index)} />
                            <IonText onClick={() => handleItemUpdate(index)}> - {value}</IonText>
                        </IonLabel>
                    </IonItem>
                )}
            </IonList>
            <IonAlert
                isOpen={alertVisible}
                onDidDismiss={() => setAlertVisible(false)}
                header='Confirmar'
                message='Deseja mesmo remover esse nome?'
                buttons={[
                    'Não',
                    {
                        text: 'Sim',
                        handler: () => {
                            onDelete(selectedIndex)
                        }
                    }
                ]}
            />
        </>
    )
}

export default NameList
