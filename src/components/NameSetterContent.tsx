import React, { useState, useRef } from 'react'
import { IonInput, IonButton, IonText } from '@ionic/react'

import NameList from './NameList';
import NameSetter from './NameSetter';

type NameSetterProps = {
    initialValue: string
    placeholder: string
    buttonTitle: string
}

const NameSetterContent: React.FC<NameSetterProps> = ({
    initialValue, placeholder, buttonTitle
}: NameSetterProps) => {

    const [names, setNames] = useState<string[]>([])
    const addName = (name: string) => setNames([name, ...names])

    const onDelete = (at: number) => {
        const newNames = [...names];
        if(at >= 0) {
        newNames.splice(at, 1);
        setNames(newNames);
        }
    }

    return (
        <>
            <NameSetter
                initialValue="Sua mãe é"
                placeholder="Nome da sua mãe"
                buttonTitle="Definir sua mãe"
                onNameSet={addName}
            />
            <NameList names={names} onDelete={onDelete} />
        </>
    );
};

export default NameSetterContent;
