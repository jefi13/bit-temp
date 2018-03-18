const products = ['apples', 'oranges', 'bananas'];

const createProducts = () => {
    return products.map((product, index) => {
        const name = product.toUpperCase();

        return <Product name={name} key={index} />;
    });

}

const Product = (props) => {
    const { name, index } = props;

    return (<li key={index}>
        {name}
    </li>);
}

const ShoppingList = () => {
    return (<ul>
        {createProducts()}
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