import { Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import BuildingList from './components/BuildingList'
import Measures from './components/Measures'
import MeasureList from './components/MeasureList'
import NewEdit from './components/NewEdit'


function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='building' list={BuildingList} />
    <Resource name='action' list={MeasureList} create={Measures} edit={NewEdit}/>
    </Admin>
  );
}

export default App;
