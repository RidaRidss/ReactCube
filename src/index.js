// @flow
import React, { Component } from "react";
import { Provider } from "react-redux";
import {
  AppRegistry,
  NativeModules
  // TouchableOpacity,
  // View,
  // Image
} from "react-native";
// import { Images } from "./theme";
// import Swiper from "react-native-swiper";

import configureStore from "./store";
import AppNavigator from "./navigator";
import applyConfigSettings from "./config";

const reducers = require("./reducers").default;

applyConfigSettings();

class App extends Component {
  state = {
    isLoading: true,
    store: configureStore(reducers, () => {
      this.setState({ isLoading: false });
      NativeModules.SplashScreen.hide();
    })
  };

  /* default splash time is too small ? use below func : untill screens are in loading state , make custom screen views, run views in sequence as splash */

  // renderSwiperSplash() {
  //   const { height } = this.state;
  //   const marginBottom =
  //     !this.heightHasChange || Math.floor(height) === Math.floor(sr.th)
  //       ? 0
  //       : 30;
  //   return (
  //     <View style={{ flex: 1 }} onLayout={this.onLayout}>
  //       {height && (
  //         <Swiper
  //           paginationStyle={styles.paginationStyle}
  //           dot={
  //             <View
  //               style={{
  //                 backgroundColor: "#87E5D6",
  //                 width: 8,
  //                 height: 8,
  //                 borderRadius: 4,
  //                 marginLeft: 12,
  //                 marginRight: 12,
  //                 marginBottom
  //               }}
  //             />
  //           }
  //           activeDot={
  //             <View
  //               style={{
  //                 backgroundColor: "#1A7AE9",
  //                 width: 18,
  //                 height: 9,
  //                 borderRadius: 6,
  //                 marginLeft: 7,
  //                 marginRight: 7,
  //                 marginBottom
  //               }}
  //             />
  //           }
  //           height={height}
  //           loop={false}
  //         >
  //           {[1, 2, 3, 4].map(i => {
  //             return (
  //               <Image
  //                 key={i}
  //                 resizeMode="stretch"
  //                 source={app.img["splash_splash" + i]}
  //                 style={[styles.bannerImage, { height }]}
  //               >
  //                 {i === 4 && (
  //                   <TouchableOpacity
  //                     style={styles.enterButtonContainer}
  //                     onPress={this.enterNextPage}
  //                   >
  //                     <Image
  //                       resizeMode="stretch"
  //                       style={styles.enterButton}
  //                       source={Images.back}
  //                     />
  //                   </TouchableOpacity>
  //                 )}
  //               </Image>
  //             );
  //           })}
  //         </Swiper>
  //       )}
  //     </View>
  //   );
  // }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("ReactCube", () => App);
