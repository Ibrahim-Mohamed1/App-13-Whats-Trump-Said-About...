import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            tweets: []
        }
    }

    getTweets = (search) => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://api.tronalddump.io/search/quote?query=${search}`).then(res => {
            console.log(res.data)
            this.setState({
                tweets: res.data._embedded.quotes
            })
        }).catch(function (error) {
            window.location.reload()
        });
    }

    render() {
        console.log(this.state.tweets)
        return (
            <Provider value={{
                getTweets: this.getTweets,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}