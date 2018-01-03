import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class RootContainer extends React.Component {

  static propTypes = {
    // Todo: Properties
  };

  static defaultProps = {
    // Todo: default Properties
  };
  render() {
    return (
      <main>
        <Header />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}
