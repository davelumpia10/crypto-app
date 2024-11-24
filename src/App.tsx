import { Redirect, Route } from 'react-router-dom';
import {
  IonAlert,
  IonApp,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, playCircle, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import React, { useState } from 'react';

setupIonicReact();

export const ButtonDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <IonPage>
      <IonButton onClick={() => setIsOpen(true)} id="present-alert">Click Me</IonButton>
        <IonAlert
          isOpen={isOpen}
          trigger="present-alert"
          header="A Short Title Is Best"
          subHeader="A Sub Header Is Optional"
          message="A message should be a short, complete sentence."
          buttons={['Action']}
          onDidDismiss={() => setIsOpen(false)}
        ></IonAlert>
    </IonPage>
  );

}

const HomePage: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <h1>Hello World</h1>
      </IonContent>
    </IonApp>

  )

}


const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className='ion-padding'>
      <h1>Content</h1>
    </IonContent>
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path='/' to="/home" />
        <Route path={"/home"} render={() => <HomePage/>} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='home' href='/home'>
          <IonIcon icon={playCircle} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
