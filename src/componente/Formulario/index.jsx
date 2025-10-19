import { useState } from 'react'
import styles from './form.module.css'

const Formulario = () => {

    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const [imc, setImc] = useState()
    const [carregamento, setCarregamento] = useState(false)
    
    const fPeso = (evento) => {
        const valorInput = evento.target.value
        const valorFormatado = valorInput.replace(',','.')
        setPeso(valorFormatado)
    }

    const fAltura = (evento) => {
        const valorInput = evento.target.value
        const digito = valorInput.replace(/\D/g, ' ')
        setAltura(digito)
        console.log(digito)
    }

    const calcularImc = () => {
        const pesoNum = parseFloat(peso)
        const alturaNum = parseFloat(altura) / 100;

        if (pesoNum <=0 || alturaNum <=0 || isNaN(pesoNum) || isNaN(alturaNum)) {
            alert("Por favor, preencha o peso e a altura corretamente.")
            return
        }

        setCarregamento(true)
        setImc(0)

        setTimeout(() =>{
            const imcCalculado = pesoNum / (alturaNum * alturaNum)
            setImc(imcCalculado)
            setCarregamento(false)
        }, 3000)
    }

    const limpaCampos = () => {
        setAltura('')
        setPeso('')
        setImc(0)
        setCarregamento(false)
    }

    return (
        <div className={styles.mForm}>
            <div className={styles.titulo}>
                <h1>Consulta IMC</h1>
            </div>
            <div className={styles.dados}>
            <label htmlFor="peso">Peso (kg): </label>
            <input onChange={fPeso} id="peso" type="text" placeholder="Digite seu peso" value={peso}/>

            <label htmlFor="altura">Altura (cm): </label>
            <input onChange={fAltura} id="altura" type="text" placeholder="Digite sua altura" value={altura}/>
            </div>

            <div className={styles.bT}>
                <button onClick={calcularImc} disabled={carregamento}>{carregamento ? 'Calculando...' : 'Calcular'}</button>
                <button onClick={limpaCampos} disabled={carregamento}>Limpar</button>
            </div>
            <div className={styles.telaResultado}>
                {carregamento ? (
                    <h2>Calculando...</h2>
                ) : imc > 0 ?(
                    <h2>Seu IMC é: {imc.toFixed(2)}</h2>
                ) : (
                    <h2>---</h2>
                )}
            </div>
        </div>
    )
}

export default Formulario