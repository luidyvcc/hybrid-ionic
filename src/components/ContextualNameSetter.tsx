import React, { useContext } from 'react';
import NameSetter, { NameSetterProps } from './NameSetter';
import { AppContext } from '../contexts/AppContext';

const ContextualNameSetter: React.FC<NameSetterProps> = (
    props: NameSetterProps
) => {
    const [, despatchAppData] = useContext(AppContext)
    return (
        <NameSetter
            {...props}
            onNameSet={name => despatchAppData({ action: {
                type: 'add', nameToInsert: name
            }})}
        />
    )
}

export default ContextualNameSetter;