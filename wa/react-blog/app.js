const PostItem = (props) => {
    const { data } = props;

    const createPostItem = (posts) => {
        return posts.map((post, index) => (
            <div className="col s12" key={index}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        )
        );
    }

    return (createPostItem(data));
}

const PostList = (props) => {
    const { posts } = props;

    return (
        <div className="row">
            <PostItem data={posts} />
        </div>
    )
}

const Main = (props) => {
    const { data } = props;

    return (
        <div className="container">
            <PostList posts={data} />
        </div>
    )
}

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Blog</a>
            </div>
        </nav>
    )
}

const App = (props) => {
    const { data } = props;

    return (
        <div>
            <Header />
            <Main data={posts} />
        </div>
    )
}

ReactDOM.render(
    <App data={posts} />,
    document.querySelector(".root")
)