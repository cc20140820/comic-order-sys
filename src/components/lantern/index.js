import React, { PureComponent } from 'react';
import './index.css';

class Lantern extends PureComponent {

  componentDidMount() {
    
  }

  render() {
    const { type } = this.props;

    let className = 'lantern'
    if(type === 'mid'){
      className = 'lantern_mid'
    }else if(type === 'right'){
      className = 'lantern_right'
    }
    return (
      <div className={className}></div>
    );
  }

}

export default Lantern;
