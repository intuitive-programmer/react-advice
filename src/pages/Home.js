import React from 'react'

import { Grid } from '../components/grid'
import { List, Item } from '../components/home'

const Home = () => (
  <Grid>
    <h3 className="home-page__heading">Versions of 'React Advice', take a look...</h3>
    <List>
      <Item path="/simple-react">Simple React</Item>
      <Item path="/react-with-context">React with Context</Item>
    </List>
  </Grid>
)

export default Home