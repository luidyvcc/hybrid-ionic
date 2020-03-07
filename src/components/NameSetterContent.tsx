import React, { useState } from 'react'

import NameList from './NameList';
import NameSetter from './NameSetter';

type NameSetterProps = {
    initialValue: string
    placeholder: string
    buttonTitle: string 
    withBorder?: boolean
}

const NameSetterContent: React.FC<NameSetterProps> = ({
    initialValue, placeholder, buttonTitle, withBorder
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
                initialValue={initialValue}
                placeholder={placeholder}
                buttonTitle={buttonTitle}
                onNameSet={addName}
                withBorder={withBorder && withBorder}
            />
            <NameList names={names} onDelete={onDelete} onUpdate={() => {}} />
        </div>
    );
};

export default NameSetterContent;
