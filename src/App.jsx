import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import SpecFocus from './components/SpecFocus';
import Classes from './views/Classes';
import Main from './views/Main';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/classes" component={Classes} />
        <Route path="/spec" component={SpecFocus} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}
