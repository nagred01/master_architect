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
  title: "Say Hi",
  userInfo: {
    foo: 1,
    bar: "baz",
    baz: 34.5
  },
  keywords: ["kek", "foo", "bar"],
  persistentIdentifier: "com.github.gustash.SiriShortcutsExample.sayHello",
  isEligibleForSearch: true,
  isEligibleForPrediction: true,
  suggestedInvocationPhrase: "Say something",
  needsSave: true
};

const opts2: ShortcutOptions = {
  activityType: "com.github.gustash.SiriShortcutsExample.somethingElse",
  title: "Something Else",
  persistentIdentifier: "some.persistent.identifier",
  isEligibleForSearch: true,
  isEligibleForPrediction: true,
  suggestedInvocationPhrase: "What's up?"
};

type Props = {};
type State = {
  shortcutInfo: ?any,
  shortcutActivityType: ?string,
  addToSiriStyle: 0 | 1 | 2 | 3
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
    suggestShortcuts([opts1, opts2]);
  }

  handleSiriShortcut({ userInfo, activityType }: any) {
    console.log("Handle Siri ShortCut =>");
    this.setState({
      shortcutInfo: userInfo,
      shortcutActivityType: activityType
    });
  }

  setupShortcut1() {
    donateShortcut(opts1);
  }

  setupShortcut2() {
    donateShortcut(opts2);
  }

  async clearShortcut1() {
    try {
      await clearShortcutsWithIdentifiers([
        "com.github.gustash.SiriShortcutsExample.sayHello",
        console.log("Clear ShortCut =>"),
      ]);
      alert("Cleared Shortcut 1 ");
    } catch (e) {
      alert("You're not running iOS 12!");
    }
  }

  async clearShortcut2() {
    try {
      await clearShortcutsWithIdentifiers(["some.persistent.identifier"]);
      alert("Cleared Shortcut 2");
    } catch (e) {
      alert("You're not running iOS 12!");
    }
  }

  async clearBothShortcuts() {
    try {
      await clearShortcutsWithIdentifiers([
        "com.github.gustash.SiriShortcutsExample.sayHello",
        "some.persistent.identifier"
      ]);
      alert("Cleared Both Shortcuts");
    } catch (e) {
      alert("You're not running iOS 12!");
    }
  }

  async clearShortcuts() {
    try {
      await clearAllShortcuts();
      alert("Deleted all the shortcuts");
    } catch (e) {
      alert("You're not running iOS 12!");
    }
  }

  swapSiriButtonTheme() {
    const { addToSiriStyle } = this.state;

    const styles = Object.keys(SiriButtonStyles).map(
      key => SiriButtonStyles[key]
    );
    const index = styles.findIndex(style => style === addToSiriStyle);
    if (index === styles.length - 1)
      this.setState({ addToSiriStyle: styles[0] });
    else this.setState({ addToSiriStyle: styles[index + 1] });
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
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("CameraScreen")}}>
          <Text style={{fontSize:15,padding:5}}>Click For Camera</Text>
          </TouchableOpacity>
        <Footer>

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
