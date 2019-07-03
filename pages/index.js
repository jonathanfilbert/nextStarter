import React from "react";
import Layout from "../components/Layout";
import { Flex, Box } from "rebass";
import styled from "styled-components";

const Body = styled.div`
  min-height: 100vh;
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Body>
            <Flex flexWrap="wrap" justifyContent="center">
              <Box>
                <h1>Start hacking!</h1>
              </Box>
            </Flex>
          </Body>
        </Layout>
      </div>
    );
  }
}

export default Home;
