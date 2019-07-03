import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "./Head";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head title="Your amazing app" />
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
