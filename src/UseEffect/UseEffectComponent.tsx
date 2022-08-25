import { useContext, createContext, useState, useEffect } from "react";

function Comp1() {
  const name = useContext(NameContext);

  return (
    <div>
      my name is {name}
    </div>
  )
}

function Comp2() {
  return <Comp1 />
}

function Comp3() {
  return <Comp2 />
}

interface Data {
    name: string,
    latest_data: {
        confirmed: string
    }
}

const NameContext = createContext("Joe");

function UssEffectComponent() {
  const [rowParams, setRowParams] = useState("");
  const [data, setData] = useState<Data>();


    useEffect(() => {
      if (rowParams.length === 2) {
        fetch(`https://corona-api.com/countries/${rowParams}`)
         .then((res) => res.json())
         .then((data) => setData(data.data))
      }
    }, [rowParams])

    let name = "";
    let confirmed = ""
    if (data !== undefined) {
      name = data.name;
      confirmed = data.latest_data.confirmed
    }
  
  return (
    <div className="App">
      <NameContext.Provider value="Joe">
        <Comp3 />
      </NameContext.Provider>
      <br/>
      <h4>Corona API</h4>
      <input 
        type="text"
        value={rowParams}
        onChange={(e) => setRowParams(e.target.value)}
      />
      <h1>{name} {confirmed}</h1>
    </div>
  );
}

export default UssEffectComponent;




