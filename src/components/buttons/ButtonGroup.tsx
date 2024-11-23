import { IonAlert, IonApp, IonButton, IonPage } from "@ionic/react";

const ButtonGroup: React.FC = () => {
  return (
    <IonPage>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        backdropDismiss={true}
        header="Alert!"
        trigger="present-alert"
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              console.log('Alert confirmed');
            },
          },
        ]}
        onDidDismiss={({detail}) => console.log(`Dismissed with role: ${detail.role}`)}
      >
      </IonAlert>
    </IonPage>
  )

}

export default ButtonGroup;