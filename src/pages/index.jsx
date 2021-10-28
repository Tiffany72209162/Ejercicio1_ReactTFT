import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Hero from './Hero/index'
import HeroDetail from './HeroDetail'
import Home from './Home/index'
import Otros from './Otros/index'
import Page1 from './Page1/index'
import Page2 from './Page2/index'

import View from '../layout/View'

const RouterApp = () => {
  return (
    <View>
      {/* <BrowserRouter> */}
        <Switch>
          {/* <Route path="/hero"><Hero /></Route>
          <Route path="/"><Home /></Route>
          <Route path="/otros"><Otros /></Route>
          <Route path="/page1"><Page1 /></Route>
          <Route path="/page2"><Page2 /></Route> */}
        <Route path="/hero" component={Hero} />
        <Route exact path="/" component={Home} />
        <Route path="/otros" component={Otros} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        </Switch>
      {/* </BrowserRouter> */}
    </View>
  )
}

export default RouterApp
