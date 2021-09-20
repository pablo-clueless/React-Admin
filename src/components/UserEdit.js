import React from 'react'
import { Edit, SimpleForm, TextInput, EmailField} from 'react-admin'

const UserEdit = (props) => {
    return (
        <Edit title="Edit User" {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <EmailField source='email' />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit
