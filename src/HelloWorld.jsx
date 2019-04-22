import React from 'react';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    componentDidMount() {
        console.log("你妹啊，你还好吧");
        setTimeout(() => {
            console.log("有反应···");
            this.setState({ addressee: 'Universes' });
        }, 3000);
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.addressee}!</h1>
            </div>
        );
    }
}


HelloWorld.defaultProps = {
    addressee: '',
};