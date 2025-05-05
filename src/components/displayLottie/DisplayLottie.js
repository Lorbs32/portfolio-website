import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  lottieRef = React.createRef();

  handleComplete = () => {
    // Pause on the final frame instead of unmounting
    const lottie = this.lottieRef.current;
    if (lottie) {
      lottie.pause();
    }

    // Restart after delay
    setTimeout(() => {
      if (lottie) {
        lottie.stop();   // rewind to frame 0
        lottie.play();   // play again
      }
    }, 3000); // delay in ms
  };

  render() {
    const { animationData } = this.props;

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          lottieRef={this.lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={true}
          onComplete={this.handleComplete}
        />
      </Suspense>
      // const animationData = this.props.animationData;
      // const defaultOptions = {
      //   loop: true,
      //   autoplay: true,
      //   animationData: animationData
      // };

      // return (
      //   <Suspense fallback={<Loading />}>
      //     <Lottie
      //       animationData={defaultOptions.animationData}
      //       loop={defaultOptions.loop}
      //     />
      //   </Suspense>
    );
  }
}
