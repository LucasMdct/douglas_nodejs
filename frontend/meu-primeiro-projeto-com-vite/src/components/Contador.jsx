import React from "react";

function Contador() {
    const [contador, setContador] = React.useState(0);
    React.useEffect(() => {
    // mountagem
    const interval = setInterval(() => {
    setContador(cont => cont + 1);
    }, 1000);
    return () => {
    // desmontagem
    clearInterval(interval);
    }
    }, []);

    return (
    <div>
    Contador: {contador}
    </div>
    );
    }

    export default Contador;