import React from 'react'
import { IonList, IonItem, IonLabel } from '@ionic/react'

type NameListProps = {
    names: string[]
}

const NameList: React.FC<NameListProps> = ({
    names,
}: NameListProps) => 
    <IonList>
        {names.map((value, index, array) => 
            <IonItem key={`NameList_${value}_${index}`}>
                <IonLabel>{value} - {index} - <pre>{array}</pre>{alert(value)}</IonLabel>
            </IonItem>
        )}
    </IonList>


export default NameList
