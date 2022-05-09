import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Classes from './views/Classes';
import Main from './views/Main';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/classes" component={Classes} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}
