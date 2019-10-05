import { Component } from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

declare module "react-native-alert-pro" {
  export type AlertProProps = {
    title?: string;
    message?: string;
    showCancel?: boolean;
    showConfirm?: boolean;
    textCancel?: string;
    textConfirm?: string;
    closeOnPressMask?: boolean;
    closeOnPressBack?: boolean;
    useNativeDriver?: boolean;
    customStyles?: {
      title?: StyleProp<TextStyle>;
      message?: StyleProp<TextStyle>;
      mask?: StyleProp<ViewStyle>;
      container?: StyleProp<ViewStyle>;
      buttonCancel?: StyleProp<ViewStyle>;
      buttonConfirm?: StyleProp<ViewStyle>;
      textCancel?: StyleProp<TextStyle>;
      textConfirm?: StyleProp<TextStyle>;
    };
    onCancel?: () => void;
    onConfirm?: () => void;
    onClose?: () => void;
  };

  class AlertPro extends Component<AlertProProps> {
    open(): void;
    close(): void;
  }

  export default AlertPro;
}
