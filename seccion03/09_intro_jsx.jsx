const element = <h1>Hello, world</h1>;

const mostrarMultiplicar = true;

const element2 = <h1>{ mostrarMultiplicar ?
    multiplicar(2,2): 'Nada que mostrar'}</h1>

function multiplicar(x,y) {
    return x*y;
}

/*********************************/

const url = 'http://url-con-imagen';
const image =<img src={url} alt="imagen"/>;

/*********************************/
/*añadir varios elementos, children*/
const element3 = <div><h1>Hola</h1><h2>Subt</h2></div> 