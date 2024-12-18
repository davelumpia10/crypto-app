import { Redirect, Route } from 'react-router-dom';
import {
  IonAlert,
  IonApp,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
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
      <IonButton onClick={() => setIsOpen(true)} id="present-alert">
        Click Me
      </IonButton>
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
};

type FormData = {
  totalAmount: string,
  fiatAmount: string
}

const HomePage: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [fiatAmount, setFiatAmount] = useState('');

  const [result, setResult] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);

  const handleTotalAmount = (event: Event) => {
    console.log((event.target as HTMLInputElement).value)
    setTotalAmount((event.target as HTMLInputElement).value);
  }

  const handleFiatAmount = (event: Event) => {
    console.log((event.target as HTMLInputElement).value)
    setFiatAmount((event.target as HTMLInputElement).value);
  }

  const calculateAverageCost = (fiatAmount: string, totalAmount: string) => {
    let parseFiat: number = Number.parseInt(fiatAmount);
    let parseTotalAmount: number = Number.parseInt(totalAmount);

    let averageCost : number = parseTotalAmount / parseFiat;

    setResult(Math.fround(averageCost));
  }

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonInput
            onIonInput={(event) => handleTotalAmount(event)}
            type="text"
            label="Total Amount"
            placeholder="Enter amount"
            value={totalAmount}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            type="text"
            label="Total fiat combined"
            placeholder="Enter total fiat amount"
            value={fiatAmount}
            onIonInput={(event) => handleFiatAmount(event) }
          ></IonInput>
        </IonItem>
      </IonList>
      <IonButton id='calculate' type='submit' onClick={() => calculateAverageCost(fiatAmount, totalAmount) }>Submit</IonButton>
      { result && 
      <IonAlert
        trigger='calculate'
        isOpen={isOpen}
        message={`Average Cost: ${result}`}
        buttons={['Okay']}
        onDidDismiss={() => setIsOpen(false)}
      >
      </IonAlert>  }
    </IonContent> 
  );
};

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Crypto Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
    <HomePage />
  </IonApp>
);

export default App;
