const Product = () => {
    return <li>My first product</li>;
}

const ShoppingList = () => {
    return (<ul>
        <Product />
    </ul>);
}

const App = () => {
    return (<div>
        <h1>My Shopping List</h1>
        <ShoppingList />
    </div>);
}

const rootElement = document.querySelector(".root");
ReactDOM.render(<App />, rootElement);