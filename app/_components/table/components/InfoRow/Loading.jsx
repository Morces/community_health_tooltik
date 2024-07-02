import Lottie from "lottie-react";

import beatAnmimation from "../../utils/loading.json";

function Loading() {
  return (
    <div className="" style={{ width: "3em" }}>
      <Lottie animationData={beatAnmimation} />
    </div>
  );
}

export default Loading;
