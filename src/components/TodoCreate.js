import React from 'react'
import {Create, SimpleForm, TextInput, DateInput, SelectInput } from 'react-admin'

const TodoCreate = (props) => {
  return (
    <Create title='Create Todo' {...props}>
        <SimpleForm>
            <TextInput source='title' />
            <DateInput label='Created' source='createdAt' />
            <SelectInput source='category' choices={[
                {id: 'work', name: 'Work'},
                {id: 'school', name: 'School'},
                {id: 'home', name: 'Home'},
            ]} />
        </SimpleForm>
    </Create>
  )
}

export default TodoCreate