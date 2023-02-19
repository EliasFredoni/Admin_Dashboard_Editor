import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

export default function MeasureList(props) {
  return (
    <List {...props}>
    <Datagrid>
    <TextField source='name'/>
    <TextField source='category'/>
    <TextField source='description'/>
    <TextField source='advantages'/>
    <EditButton basePath='/action'/>
    <DeleteButton basePath='/action'/> //basePath zur Sicherung. Ohne diese, schnelle Löschung der Daten aus db.json
    </Datagrid>
    </List>
  )
}
