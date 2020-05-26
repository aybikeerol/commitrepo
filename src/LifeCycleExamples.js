import React from "react";

import { Text } from "./Text";
import Box from "./Box";

class LifeCycleExamples extends React.Component {
  render() {
    return (
      <>
        <Box className="box1">
          <Text label="deneme1" />
        </Box>
        <Box className="box2">
          <Text label="deneme2" />
        </Box>
      </>
    );
  }
}

export default LifeCycleExamples;
