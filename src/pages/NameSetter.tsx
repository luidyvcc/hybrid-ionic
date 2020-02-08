import React, { useState, useRef } from 'react'
import { IonInput, IonButton, IonText } from '@ionic/react'

type NameSetterProps = {
    initialValue: string
    placeholder: string
    buttonTitle: string
    onNameSet?: (name: string) => void
}

const NameSetter: React.FC<NameSetterProps> = ({
    initialValue, placeholder, buttonTitle, onNameSet
}: NameSetterProps) => {

    const inputRef = useRef<HTMLIonInputElement>(null)
    const [title, setTitle] = useState(initialValue)
    return (
        <div style={{ marginTop: '10px', border: 'solid 1px var(--ion-color-primary)' }}>
            <IonText color="secondary">{title}</IonText>
            <IonInput ref={inputRef} type="text" placeholder={placeholder} />
            <IonButton
            onClick={_e => {
                setTitle(inputRef.current!.value || '')
                onNameSet && onNameSet(inputRef.current!.value || '')
            }}
            >{buttonTitle}</IonButton>
        </div>
    );
};

export default NameSetter;