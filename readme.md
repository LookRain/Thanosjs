Wipe out half of your content nodes in your DOM (div, span, h1, h2, h3, p, li, etc)
## Installation
```
npm install --save @lookrain/thanos
```


## Usage
```
import snap from '@lookrain/thanos';

onButtonClickOrSomeOtherEventsYouHave() => {
  snap();
}
```

### in React
```
import snap from '@lookrain/thanos';
...

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={snap}>Snap</button>
        ...
      </div>
    );
  }
}

export default App;

```