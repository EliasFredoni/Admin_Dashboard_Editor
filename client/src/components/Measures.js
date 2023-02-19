import { Create, SimpleForm, TextInput} from 'react-admin'

export default function Measures(props) {
  return (
    <Create title='New Measures' {...props}>
        <SimpleForm>
            <TextInput source='name'/>
            <TextInput source='category'/>
            <TextInput source='Beschreibung'/>
            <TextInput source='Vorteil'/>
        </SimpleForm>
    </Create>
  )
}
