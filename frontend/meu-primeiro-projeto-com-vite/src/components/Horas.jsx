

import React, {useEffect, useState} from 'react';

//    const Relogio = () => {
//    const [date, setDate] = useState(new Date());
//    useEffect(() => {
//    const contar = () => {
//    setDate(new Date());
//    }
//    setInterval(contar, 1000);
//    }, []);
//     // continua


const Relogio = () => {
       const [date, setDate] = useState(new Date());
       
       useEffect(() => {
       const contar = () => {setDate(new Date());}
       setInterval(contar, 1000);
    }, []);

       return (
        <div>
        <h1>Olá React!</h1>
        <h2>
        Hora certa: {date.toString()}.
        </h2>
        </div>
        );        
}


// const Horas = (props) => {
//     const { dataHora } = props;

//     return (
//         <div>
//             <h2>Relógio</h2>
//             <h3>Hora Certa: {dataHora}</h3>
//         </div>
//     );
// };

export default Relogio;