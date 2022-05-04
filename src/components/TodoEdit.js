import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput, SelectInput} from 'react-admin'

const TodoEdit = (props) => {
  return (
    <Edit title='Edit Todo' {...props}>
        <SimpleForm>
        <SimpleForm>
          <TextInput source='title' />
          <DateInput label='Created' source='createdAt' />
          <SelectInput source='category' choices={[
              {id: 'work', name: 'Work'},
              {id: 'school', name: 'School'},
              {id: 'home', name: 'Home'},
          ]} />
        </SimpleForm>
        </SimpleForm>
    </Edit>
  )
}

export default TodoEdit