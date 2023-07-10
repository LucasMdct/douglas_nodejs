import { Button, Calendar } from "antd"
import Contador from "../components/Contador"
import Relogio from "../components/Horas"
import dayjs from 'dayjs';

const Exemplos = () => {



    return (
        <div>
        <Relogiogio dataHora={new Date()} />
        <Contador />
        <Button onClick={() => {console.log('Clicou')}}>
          Clique aqui
        </Button>
        <Calendar />
        <alert message="Sucesso"></alert>
      </div>
    )
}

export default Exemplos