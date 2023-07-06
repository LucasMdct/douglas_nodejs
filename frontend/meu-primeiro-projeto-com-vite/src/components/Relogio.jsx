//criando relogio


const Relogio = (props) => {
    const { dataHora } = props;

    return (
        <div>
            <h2>
                Relógio
            </h2>
            <h3>
                Hora Certa: {dataHora}
            </h3>
        </div>
    );
};

export default Relogio