const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>99 Bottles of beer on the wall.</h1>
                <nav>
                    {/* <a href={`/${bottles - 1}`}>take one down, pass it around</a> */}
                    <a href={`/98`}>take one down, pass it around</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index;