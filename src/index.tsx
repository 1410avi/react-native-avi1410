import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-avi1410' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type Avi1410Props = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'Avi1410View';

export const Avi1410View =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<Avi1410Props>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
