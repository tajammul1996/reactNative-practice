import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => (
    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share-alt', 30),
        Icon.getImageSource('ios-bulb-outline', 30)
    ])
    .then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Login',
                    screen: 'navApp.login',
                    title: 'Login',
                    icon: sources[0]
                    
                },
                {
                    label: 'Forum',
                    screen: 'navApp.signup',
                    title: 'Forum',
                    icon: sources[1]
                    
                },
                {
                    label: 'Idea',
                    screen: 'navApp.idea',
                    title: 'Ida',
                    icon: sources[2]
                    
                }

            ]
        })
    })
);

export default startTabs;