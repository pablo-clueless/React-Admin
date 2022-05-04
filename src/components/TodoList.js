import React from 'react'
import {List, Datagrid, TextField, DateField, SelectField, EditButton, DeleteButton} from 'react-admin'

const TodoList = (props) => {
  return (
      <List {...props}>
          <Datagrid>
              <TextField source='id'/>
              <TextField source='title' />
              <DateField source='createdAt'/>
              <SelectField source='category'/>
              <EditButton basePath='/todos'/>
              <DeleteButton basePath='/todos'/>
          </Datagrid>
      </List>
  )
}

export default TodoList