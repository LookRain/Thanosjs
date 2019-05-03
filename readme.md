Wipe out half of your content nodes in your DOM (div, span, h1, h2, h3, p, li, etc)
## Installation
```
npm install --save @lookrain/thanos
```


## Usage
```
import snap from '@lookrain/thanos';

snap();
```

### in React
```
import snap from '@lookrain/thanos';
...

class App extends React.Component {
  componentDidMount() {
    snap();
  }

  render() {
    return ...
  }
}

export default App;

```