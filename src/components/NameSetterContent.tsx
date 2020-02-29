import React, { useState } from 'react'

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
        <div style={{marginTop: '10px', border: 'solid 1px var(--ion-color-primary)'}}>
            <NameSetter
                initialValue="Sua mãe é"
                placeholder="Nome da sua mãe"
                buttonTitle="Definir sua mãe"
                onNameSet={addName}
                withBorder={false}
            />
            <NameList names={names} onDelete={onDelete} />
        </div>
    );
};

export default NameSetterContent;
