import { IonAlert, IonButton, IonPage } from "@ionic/react"


const InputGroup: React.FC = () => {

  return (
    <IonPage>
      <IonButton id="present-alert">Click Here</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Please enter your info"
        buttons={['OK']}
        inputs={[
          {
            placeholder:'Name',
          },
          {
            type: 'number',
            placeholder: 'Age',
            min: 1,
            max: 100
          }
        ]}
      >
      </IonAlert>
    </IonPage>
  )

}

export default InputGroup;