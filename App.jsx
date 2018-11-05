import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';

class App extends Kinkajou.Component {

  get message() {
    // Returns the JSX tag attribute content.
    return this.getAsString('message');
  }

  render() {
    return <div>{this.message}</div>;
  }

}

Kinkajou.render(<App message="Hello World!" />, document.querySelector('body'));