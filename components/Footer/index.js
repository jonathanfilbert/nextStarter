import React from "react";
import { Flex, Box } from "rebass";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box>
            <div>I'm a footer!</div>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default Footer;
