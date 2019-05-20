import React, { Component } from 'react';
import { withData } from './DataProvider';

class App extends Component {
  constructor(){
    super()
    this.state={
      search: ""
    }
  }

  componentDidMount(){
    this.props.getTweets()
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getTweets(this.state.search)
    this.setState({
      search: ""
    })
  }

  render() {
    const styles={
      form:{
        textAlign:"center",
        zoom: 2.3,
        paddingTop: 15,
      },
      button:{
        display: "block",
        margin: "auto",
        marginTop:"1em",
        zoom: 1.2,
        border:"white solid",
        borderRadius: 5,
        outline: "none"
      },
      title:{
        textAlign:"center", 
        width: "8 0%", 
        display:"block",
        margin:"auto",
        backgroundColor: '#000000a6',
        color: "white"
      }
    }
    const mappedTweets = this.props.tweets && this.props.tweets.map(tweet => {
        return (
          <div>
            <h1 style={{color:'white', margin:"1%", padding: "3.5% 0%", textAlign:"center", border: "solid white"}}>{tweet.value}</h1>
          </div>
        )
    })
    return (
      <div>
        <h1 className="title" style={styles.title}>What's Trump said about...</h1>
        <form style={styles.form} onSubmit={this.handleSubmit} action="">
          <input 
            style={{outline:"none", borderRadius: 2, border: "white solid", textAlign:"center"}}
            type="text" 
            name="search" 
            value={this.state.search}
            onChange={this.handleChange}
            autoFocus
            autoComplete='off'
            placeholder="Topic of interest"
            required
          />
          <button className='button' style={styles.button}>Search</button>
        </form>
        {/* <div style={styles.box}> */}
          {mappedTweets}
        {/* </div> */}
      </div>
    );
  }
}

export default withData(App);