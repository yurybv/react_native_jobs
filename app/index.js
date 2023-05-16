import {useRouter} from "expo-router";
import {SafeAreaView, ScrollView, View} from "react-native";
import {COLORS, icons, SIZES} from "../constants";
import Stack from "expo-router/src/layouts/Stack";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import {Nearbyjobs} from "../components";

const Home = () => {
    const router = useRouter();


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
                ),
                headerTitle: '',
            }}/>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}>
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Home
