import * as React from 'react';
import Count from '../../components/Count/Count';
import axios from 'axios';

interface Props {

}

interface State {
    count: number;
}

export default class Counter extends React.Component<Props, State>{
    state: State = {
        count: 0
    };

    componentDidMount(): void {
        this.getUser();
    }

    async getUser() {
        const user = {
            "email": "khale@success-ss.com.vn",
            "password": "12345678",
            "remember_me": true
        };
        const result = await axios.post(
            'http://localhost:8041/api/v1/signin',
            {user}
        );
        console.log('result: ', result);
    }

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    };

    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        });
    };

    render() {
        return (
          <div>
              <Count count={this.state.count} />
              <button onClick={this.increment}>Increment</button>
              <button onClick={this.decrement}>Decrement</button>
          </div>
        );
    }

}
