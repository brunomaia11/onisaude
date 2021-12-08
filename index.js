import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import OneSignal from 'react-native-onesignal';
import App from './App';

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("6697f3b7-e562-4540-b01e-1511b7d14e03");
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  //console.log("Prompt response:", response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  //console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  //console.log("notification: ", notification);
  const data = notification.additionalData
  //console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  //console.log("OneSignal: notification opened:", notification);
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
