import "react-native-gesture-handler"
import { registerRootComponent } from "expo"
import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
} from "react-native-global-props"

setCustomText({
  style: { color: "white" },
})
setCustomTextInput({ style: { color: "white" } })
setCustomView({
  style: { backgroundColor: "black" },
})

import App from "./App"

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
