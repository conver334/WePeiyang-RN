/*
 * Alert
 * Created by Tzingtao Chow
 * ---
 *
 * Alert 用于创建弹出的固定格式对话框。
 * 可以传入标题、正文、配色调色板和一个包含了各自操作的按钮数组。
 *
 */

import * as React from "react"

import { TextStyle, View, ViewStyle } from "react-native"
import { color, layoutParam } from "../../theme"
import { Text } from "../text"
import { Button } from "../button"

export interface AlertProps {
  style?: ViewStyle
  palette?
  buttons?
  heading?
  headingTx?
  content?
  contentTx?
}

export class Alert extends React.PureComponent<AlertProps, {}> {
  render() {
    const { style, palette, buttons, heading, headingTx, content, contentTx } = this.props
    const colors = palette || [color.primary, color.background]
    const ss = {
      predefinedStyle: {
        overflow: "visible",
        borderRadius: layoutParam.borderRadius,
        padding: 25,
        backgroundColor: colors[0],
      } as ViewStyle,
      heading: {
        textAlign: "center",
        color: colors[1],
        fontSize: 20,
        marginBottom: 12,
        fontWeight: "bold",
      } as TextStyle,
      content: {
        textAlign: "center",
        color: colors[1],
        fontSize: 12,
        marginBottom: 15,
      } as TextStyle,
      buttons: {
        flexDirection: "row",
        justifyContent: "center",
      } as ViewStyle,
      button: {
        marginHorizontal: 5,
      } as ViewStyle,
    }
    return (
      <View style={[ss.predefinedStyle, style]}>
        <Text text={heading} tx={headingTx} style={ss.heading} />
        {(content || contentTx) && <Text text={content} tx={contentTx} style={ss.content} />}
        <View style={ss.buttons}>
          {buttons.map((button, i) => (
            <Button
              key={i}
              preset="small"
              palette={colors}
              text={button.text}
              tx={button.tx}
              onPress={button.onPress}
              style={ss.button}
            />
          ))}
        </View>
      </View>
    )
  }
}
