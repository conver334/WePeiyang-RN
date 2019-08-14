import { TextStyle, View, ViewStyle } from "react-native"
import { color } from "../../theme"
import { Text } from "../../components/text"
import * as React from "react"
import Touchable from "react-native-platform-touchable"

export interface UnitSnackProps {
  unit?
  phone?
  style?
  onPress?
}

export function UnitSnack(props: UnitSnackProps) {
  const { unit, phone, style, onPress } = props
  const ss = {
    snackContainer: {
      paddingVertical: 14,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    } as ViewStyle,
    left: {
      flex: 1,
    } as ViewStyle,
    touchable: {} as ViewStyle,
    title: {
      color: color.module.yellowPages[1],
      fontSize: 12,
      marginBottom: -5,
    } as TextStyle,
    subtitle: {
      color: color.module.yellowPages[1],
      fontSize: 30,
      letterSpacing: -1,
      fontWeight: "bold",
      marginBottom: 2,
    } as TextStyle,
    call: {
      color: color.module.yellowPages[1],
      fontSize: 26,
      textAlign: "right",
    } as ViewStyle,
  }
  return (
    <View style={[ss.snackContainer, style]}>
      <View style={ss.left}>
        <Text text={unit} style={ss.title} />
        <Text style={ss.subtitle} text={phone} />
      </View>
      <Touchable
        style={ss.touchable}
        onPress={onPress}
        delayPressIn={0}
        background={Touchable.Ripple(color.module.yellowPages[1], true)}
      >
        <Text text="phone_forwarded" style={ss.call} preset="i" />
      </Touchable>
    </View>
  )
}
