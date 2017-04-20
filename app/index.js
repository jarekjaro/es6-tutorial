import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const api_key = '706e18a1ad2f07c816bae790d72a9c21';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            city: 'Cracow',
            description: ''
        }
    }

    componentDidMount(){
        this.grabWeather(this.state.city);
    }

    grabWeather(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
            .then(response => response.json())
            .then(json => this.setState({description: json.weather[0].description}));

    }
    render(){
        return(
            <div>React JS and JSX in action!</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));