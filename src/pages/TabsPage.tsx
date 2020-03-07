import React from 'react'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonIcon } from '@ionic/react'
import { Redirect, Route } from 'react-router'
import ListPage from './ListPage'
import Home from './Home'
import { home, list } from 'ionicons/icons'

const TabsPage: React.FC= () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/tabs/list" component={ListPage} exact />
                <Route path="/tabs/home" component={Home} exact />
                <Route path="/tabs" render={() => <Redirect to="/tabs/home" exact />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="primary">
                <IonTabButton tab="home" href="/tabs/home">
                    <IonTitle>Home</IonTitle>
                    <IonIcon icon={home} />
                </IonTabButton>
                <IonTabButton tab="list" href="/tabs/list">
                    <IonTitle>List</IonTitle>
                    <IonIcon icon={list} />
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default TabsPage
