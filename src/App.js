import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import { PostCreate, PostEdit, PostList, TodoCreate, TodoEdit, TodoList, UserCreate, UserEdit, UserList } from './components'

function App() {
  return (
  <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/>
    <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit}/>
    <Resource name='todos' list={TodoList} create={TodoCreate} edit={TodoEdit}/>
  </Admin>
  )
}

export default App;
