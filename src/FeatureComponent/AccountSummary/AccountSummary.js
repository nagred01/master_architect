import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Platform,AppState,TouchableOpacity } from 'react-native';
import {
  responsiveFontSize, responsiveHeight,
} from 'react-native-cross-platform-responsive-dimensions';
import Footer from '../../Molecules/Footer';
import CustomDivider from '../../Atoms/CustomDivider';
import Header from '../../Molecules/Header';
import AppSettings from '../../Settings/AppSettings';
import LinkField from '../../Atoms/LinkField';
import ListItem from '../../Molecules/ListItem';
import {
  SiriShortcutsEvent,
  donateShortcut,
  suggestShortcuts,
  clearAllShortcuts,
  clearShortcutsWithIdentifiers,
  presentShortcut
} from "react-native-siri-shortcut";
import AddToSiriButton, {
  SiriButtonStyles
} from "react-native-siri-shortcut/AddToSiriButton";
import TouchID from 'react-native-touch-id';

const opts1: ShortcutOptions = {
  activityType: "Open Account Summary",
  title: "Say hi",
  userInfo: {
    foo: 1,
    bar: "baz",
    baz: 34.5
  },
  keywords: ["kek", "foo", "bar"],
  isEligibleForSearch: true,
  isEligibleForPrediction: true,
  suggestedInvocationPhrase: "Say something",
  needsSave: true
};


type Props = {};
type State = {
  shortcutInfo: ?any,
  shortcutActivityType: ?string,
   //addToSiriStyle: 0 | 1 | 2 | 3
};


export default class AccountSummary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shortcutInfo: null,
      shortcutActivityType: null,
      addToSiriStyle: SiriButtonStyles.blackOutline,
      appState: AppState.currentState,
      locked: true,
      accountSummary:
        [
          {
            acType: "Checking",
            items: [{
              name: "Free checking",
              type: "current ",
              balance: "$2,341.39",
              LBalance: "$2,341.39",
              availableType: "Available",
              xType: "x456-90",
              iconType: "star",
              outStanding: ""
            }
            ]
          },
          {
            acType: "Savings",
            items: [{
              name: "Super Saving",
              type: "current ",
              balance: "$3.27",
              LBalance: "$781.63",
              availableType: "Available",
              xType: "x456-00",
              outStanding: ""
            }
            ]
          },
          {
            acType: "Loans",
            items: [{
              name: "Home mortgage",
              type: "",
              LBalance: "",
              balance: "$183,399.01",
              availableType: "",
              outStanding: "Outstanding Balance",
              xType: "x456-02"
            },
            {
              name: "2015 Tesla Loan",
              type: "",
              LBalance: "",
              balance: "$2,466.34",
              availableType: "",
              outStanding: "Outstanding Balance",
              xType: "x456-48"
            }
            ]
          }
        ]
    }
  }

  componentWillMount() {
    TouchID.authenticate('Authenticate with fingerprint').then(success => {
      console.log("Touch ID Authenticate ID => " + success);
      this.setState({ locked: false });
    }).catch(error => {
      console.log("Touch ID Authenticate Error =>" + error);
    });
  }

  componentDidMount() {

    SiriShortcutsEvent.addListener(
      "SiriShortcutListener",
      this.handleSiriShortcut.bind(this)
    );
    suggestShortcuts([opts1]);
  }

  handleSiriShortcut({ userInfo, activityType }: any) {
    console.log("Handle Siri ShortCut =>");
    this.setState({
      shortcutInfo: userInfo,
      shortcutActivityType: activityType
    });
  }
  
  render() {
    const { shortcutInfo, shortcutActivityType, addToSiriStyle } = this.state;
    let isAndroid = Platform.OS == "android" ? true : false
    return (
      <View style={styles.container}>
        {/* <View style={styles.headerBorder}>
          <CustomDivider customStyle={styles.customStyle}></CustomDivider>
        </View> */}
        <View style={isAndroid ? {} : { paddingTop: 10 }}>
          <Header> </Header>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.accountSummaryContainer}>
            <Text style={styles.accountSummaryText}>
              Account Summary </Text>
          </View>

          <View style={styles.grayLine}>
            <CustomDivider> </CustomDivider>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <LinkField heading={"Search"} containerStyle={{ padding: responsiveHeight(2) }}></LinkField></View>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={{ height: 900 }}>
            <View style={{ flex: 1 }}>
              {this.state.accountSummary.map((account, index) => {
                return (<ListItem
                  key={index}
                  itemIndex={index}
                  accountItem={account}
                />
                )
              })}
            </View>
          </View>
        </ScrollView>
        <AddToSiriButton
            buttonStyle={addToSiriStyle}
            onPress={() => {
              presentShortcut(opts1, ({ status }) => {
                console.log(`I was ${status}`);
              });
            }}
            shortcut={opts1}
          />
        <Footer navObj={this.props.navigation}>

        </Footer>

      </View>
    );
  }
}

const titleSize = AppSettings.titleFontSize;
const grayColor = AppSettings.dividerColor;

const styles = StyleSheet.create({
  bottomLayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: responsiveHeight(2),
    marginRight: responsiveHeight(2),
  },
  container: {
    flex: 1,

  },
  padding: {
    padding: responsiveHeight(2),
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainter: {
    flexDirection: "row",
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    // alignContent:"center",
    backgroundColor: "blue",
    justifyContent: 'space-around',
    alignItems: "center"
  },
  accountSummaryContainer: {
    paddingBottom: responsiveHeight(2),
    paddingLeft: responsiveHeight(1.5)
  },
  accountSummaryText: {
    fontSize: responsiveFontSize(titleSize),
    textAlign: "justify"
  },
  customStyle: {
    backgroundColor: "green"
  },
  headerBorder: {
    alignItems: "center",
    flexDirection: "row",
    paddingTop: responsiveHeight(0.3)
  },
  mainContainer: {
    justifyContent: "flex-start", backgroundColor: "white", padding: responsiveHeight(1)
  },
  grayLine: {
    // paddingBottom: responsiveHeight(2),
    marginLeft: responsiveHeight(1), marginRight: responsiveHeight(1)
  }
});
