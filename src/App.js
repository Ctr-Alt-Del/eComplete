import './App.css';
import Home from './components/home/home'
import CategoryFemale from './components/categoryFemale/categoryFemale'
import CategoryMale from './components/categoryMale/categoryMale'
import Products from './components/product/products'
import Checkout from './components/checkout/checkout'
import ErrorPage from './components/errorPage/errorPage'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />        
        <Route exact path='/category/women' component={CategoryFemale} />
        <Route exact path='/category/men' component={CategoryMale} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/new/404-not-found' component={ErrorPage} />
        <Route exact path='/404-not-found' component={ErrorPage} />
        <Route exact path='/gear/404-not-found' component={ErrorPage} />
        <Route exact path='/training/404-not-found' component={ErrorPage} />
        <Route exact path='/sales/404-not-found' component={ErrorPage} />
        <Route exact path='/sale/404-not-found' component={ErrorPage} />
      </div>
    </Router>
  );
}     

export default App;
