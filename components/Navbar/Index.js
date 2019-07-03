import React from "react";
import { Box, Flex } from "rebass";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box>
            <div>I'm a navbar!</div>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default Nav;
