import React, { useReducer, useEffect } from 'react';
import { Plugins  } from '@capacitor/core'

const { Storage } = Plugins

export interface AppData {
    names: string[]
}

const DEFAUL_APPDATA: AppData = {
    names: []
}

export interface AppDataAction {
    action: (
        {type: 'add', nameToInsert: string}
    ) | (
        {type: 'delete', indexToDelete: number}
    ) | (
        {type: 'initialize', state: AppData}
    )
}

export const AppContext = React.createContext<[AppData, React.Dispatch<AppDataAction>]>([
    DEFAUL_APPDATA, () => {}
])

export const AppContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const reducer = useReducer(
        (state: AppData, { action }: AppDataAction): AppData => {
            switch (action.type) {
                case 'add': {
                    console.log(state, action)
                    const newState = { ...state, names: [ action.nameToInsert, ...state.names ]}
                    /*Storage.set({ key: 'appContext', value: JSON.stringify(newState)})
                        .catch(() => {})*/
                    return newState
                }
                case 'delete': {
                    const newNames = [...state.names]
                    newNames.splice(action.indexToDelete, 1)
                    const newState = { ...state, names: newNames}
                    Storage.set({ key: 'appContext', value: JSON.stringify(newState)})
                        .catch(() => {})
                    return newState
                }
                case 'initialize': {
                    return action.state
                }
            }
        },
        DEFAUL_APPDATA
    )

    useEffect(() => {
        Storage.get({ key: 'appContext' })
        .then(({value}) => {
            if (!value) return
            const state: AppData = JSON.parse(value)
            reducer[1]({ action: {type: 'initialize', state} })
        })
        .catch(() => {})
    }, [])

    return (
        <AppContext.Provider value={reducer}>
            {children}
        </AppContext.Provider>
    )
}