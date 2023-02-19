import { List, Datagrid, TextField, EditButton, SortButton } from 'react-admin'

export default function BuildingList(props) {
  return (
    <List {...props}>
    <SortButton fields={['emission']}/>
<Datagrid>
    <TextField source='street'/>
    <TextField source='postal_code'/>
    <TextField source='city'/>
    <TextField source='emission'/>
    <TextField source='owner'/>
    <TextField source='yearConstruction'/>
    <TextField source='netArea'/>
    <TextField source='buildingType'/>
    <EditButton basePath='/action'/>
    </Datagrid>
    </List>
  )
}
