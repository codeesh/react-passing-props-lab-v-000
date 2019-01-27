import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      fruit: [],
      filters:[],
      currentFilter: null
    }
  }

  render(){
    return(
      <FruitBasket/>
    )
  }


}
