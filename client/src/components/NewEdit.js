import { Edit, SimpleForm, TextInput} from 'react-admin'

export default function NewEdit(props) {
  return (
    <Edit title='Editor' {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='name'/>
            <TextInput source='category'/>
            <TextInput source='Beschreibung'/>
            <TextInput source='Vorteil'/>
        </SimpleForm>
    </Edit>
  )
}