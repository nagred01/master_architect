import { StackNavigator, SwitchNavigator} from 'react-navigation';
import { NavigatorType }  from '../Constants/EnumTypes';
import AccountSummary from '../FeatureComponent/AccountSummary/AccountSummary';
import Login from '../FeatureComponent/Login/login';
import ChangeUserId from '../FeatureComponent/ChangeUserId/ChangeUserId';
import TempChangeUserId from '../FeatureComponent/ChangeUserId/TempChangeUserId';
import TempChangeUser1 from '../FeatureComponent/ChangeUserId/TempChangeUser1';
import CameraScreen from '../Molecules/CameraScreen';
import CameraRollImage from '../Molecules/CameraRollImage';

const NavigationRouter = SwitchNavigator({
    AccountSummary: { screen: AccountSummary },
    Login: { screen: Login },
    ChangeUserId : { screen: ChangeUserId },
    TempChangeUserId : { screen: TempChangeUserId },
    TempChangeUser1 : { screen: TempChangeUser1 },
    CameraScreen : {screen:CameraScreen},
    CameraRollImage:{screen:CameraRollImage}
},
    {
        initialRouteName: NavigatorType.LOGIN,
        navigationOptions: {
            header: null,
            headerStyle: {
                backgroundColor: 'green',
            },
        },
        headerMode : 'float',
    },
);
export default NavigationRouter;
