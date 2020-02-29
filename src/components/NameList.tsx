import React, {useState} from 'react'
import { IonList, IonItem, IonLabel, IonAlert } from '@ionic/react'

type NameListProps = {
    names: string[]
    onDelete: (at: number) => void
}

const NameList: React.FC<NameListProps> = ({
    names, onDelete
}: NameListProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [alertVisible, setAlertVisible] = useState(false);

    const handleItemClick = (index: number) => {
        setSelectedIndex(index)
        setAlertVisible(true)
    }

    return (
        <>
            <IonList>
                {names.map((value, index, array) => 
                    <IonItem
                        key={`NameList_${value}_${index}`}
                        onClick={() => handleItemClick(index)}
                        button
                    >
                        <IonLabel>[{index}] {value}</IonLabel>
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
