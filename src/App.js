import DeviceDetector from "device-detector-js";
function App() {
  const deviceDetector = new DeviceDetector();
  const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
  const device = deviceDetector.parse(userAgent);

  console.log(device);
  return (

    <div className="App">
      <ul>
        {Object.keys(device).map((key => (
          <li key={key}>
            {key} 
            {device[key] && <ul>
              {Object.keys(device[key]).map(value => (
                <li key={value}>{value} => {device[key][value]}</li>
              ))}
            </ul>}
          </li>)
        ))}
      </ul>
    </div>
  );
}

export default App;
