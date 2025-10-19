import './componente/Formulario'
import './global.css'
import './componente/app.css'
import Formulario from './componente/Formulario'
import Menu from './componente/Menu'


function App() {
  return (
    <>
      <div className='formularioImc'>
        <Menu/>
        <Formulario/>
      </div>
      <table>
        <caption>Classificação do IMC para Adultos (OMS)</caption>
        <thead>
            <tr>
                <th>IMC (kg/m²)</th>
                <th>Classificação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Abaixo de 18,5</td>
                <td>Abaixo do peso</td>
            </tr>
            <tr>
                <td>Entre 18,5 e 24,9</td>
                <td>Peso ideal (Normal)</td>
            </tr>
            <tr>
                <td>Entre 25,0 e 29,9</td>
                <td>Acima do peso (Sobrepeso)</td>
            </tr>
            <tr>
                <td>Entre 30,0 e 34,9</td>
                <td>Obesidade Grau I</td>
            </tr>
            <tr>
                <td>Entre 35,0 e 39,9</td>
                <td>Obesidade Grau II</td>
            </tr>
            <tr>
                <td>Acima de 40,0</td>
                <td>Obesidade Grau III (Mórbida)</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default App
