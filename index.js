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
setCustomTextInput({
  style: {
    ...buttonStyles.button,
    ...buttonStyles.text,
    backgroundColor: "white",
    color: "black",
  },
  placeholderTextColor: "grey",
})

setCustomView({
  style: { backgroundColor: "black" },
})

import App from "./App"
import { styles as buttonStyles } from "./src/components/RecipeButton"

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
