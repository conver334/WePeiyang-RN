import * as React from "react"
import { connect } from "react-redux"

import { StatusBar, View } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, ssGlobal } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { TextField } from "../../components/text-field"
import { Button } from "../../components/button"
import { fetchEcardProfile, setEcardAuth } from "../../actions/data-actions"
import Toast from "react-native-root-toast"
import toastOptions from "../../theme/toast"
import { TopBar } from "./top-bar"
import { ByTwt } from "../../components/by-twt/by-twt"

export interface BindScreenProps extends NavigationScreenProps<{}> {
  fetchEcardProfile?
  setEcardAuth?
}

export class BindScreen extends React.Component<BindScreenProps, {}> {
  state = {
    cardId: "",
    password: "",
  }

  attemptToBind = () => {
    this.props
      .fetchEcardProfile(this.state.cardId, this.state.password)
      .then(() => {
        Toast.show(
          (
            <Text
              tx="accountBinding.bindSuccess"
              style={{ color: toastOptions.primary.textColor }}
            />
          ) as any,
          toastOptions.primary,
        )
        this.props.setEcardAuth(this.state.cardId, this.state.password)
        this.props.navigation.goBack()
      })
      .catch(err => {
        Toast.show(
          (
            <Text
              text={`${err.error_code} / ${err.message}`}
              style={{ color: toastOptions.err.textColor }}
            />
          ) as any,
          toastOptions.err,
        )
      })
  }

  render() {
    return (
      <Screen style={ssGlobal.login.screen}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        <TopBar actions={[() => this.props.navigation.goBack()]} />

        <View style={ssGlobal.login.container}>
          <View>
            <View style={ssGlobal.login.headerBar}>
              <Text tx="accountBinding.greetings" preset="h2" style={ssGlobal.login.heading} />
            </View>
            <View>
              <TextField
                placeholderTx="accountBinding.ecardId"
                keyboardType="numeric"
                style={ssGlobal.login.input}
                onChangeText={text => this.setState({ cardId: text })}
                value={this.state.cardId}
                autoCorrect={false}
              />
              <TextField
                placeholderTx="accountBinding.ecardPassword"
                keyboardType="numeric"
                style={ssGlobal.login.input}
                onChangeText={text => this.setState({ password: text })}
                value={this.state.password}
                secureTextEntry={true}
                autoCorrect={false}
              />
              <View style={ssGlobal.login.buttonRow}>
                <Button
                  style={ssGlobal.login.button}
                  tx="accountBinding.bind"
                  onPress={this.attemptToBind}
                />
              </View>
            </View>
          </View>

          <ByTwt fill={color.black(0.07)} style={ssGlobal.login.by}>
            <Text text="SecureAuth™" style={ssGlobal.login.byText} />
          </ByTwt>
        </View>
      </Screen>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEcardProfile: async (cardId, password) => {
      await dispatch(fetchEcardProfile(cardId, password))
    },
    setEcardAuth: (cardId, password) => {
      dispatch(setEcardAuth(cardId, password))
    },
  }
}

export const connectedBindScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BindScreen)
