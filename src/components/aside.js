//import { useState } from "react";

import { useState } from "react";

//const initialValues = {
//  larguraArea: 0,
//  alturaArea: 0,
//  larguraRevestimento: 0,
//  alturaRevestimento: 0,
//  posição: 0,
//  resultado: '',
//  }


const Aside = (props) => {
	//const largura = document.getElementsByName('larguraArea');
	//const altura = document.getElementsByName('alturaArea');
	//const ceramicaLargura = document.getElementsByName('larguraRevestimento')
	//
	//const ceramicaAltura = document.getElementsByName('alturaRevestimento')

  // utilizando o estado para guardar o value e manipular

  // no formulário
  const [altura, setAltura] = useState("");
  const [ceramicaLargura, setCeramicaLargura] = useState("");
  const [ceramicaAltura, setCeramicaAltura] = useState("");
  const [posicaoCeramica, setPosicaoCeramica] = useState("");
  
  
  // pegando o input e usando o estado pra manipular 
  const [largura, setLargura] = useState('')
const pegaLargura = evento => {
  //setLargura(evento.target.value);
  props.aoAlterado(evento.target.value)
  console.log(largura);
};
  
  // ouvindo a submissão do formulário e guardando o valor pra usar na função

const [resultados, setResultados] = useState([]);
const aoNovoResultado = resultado => {
  console.log(resultado);
  setResultados([...resultados, resultado])
};



	// pegando o valor do input
	//let largura;
	//let altura;
	//let ceramicaLargura;

	//let ceramicaAltura;

	//let posicaoCeramica;


	const pegaAltura = evento => {
		altura = evento.target.value;
		console.log(altura);
	};

	const pegaCeramicaLargura = evento => {
		ceramicaLargura = evento.target.value;
		console.log(ceramicaLargura);
	};

	const pegaCeramicaAltura = evento => {
		ceramicaAltura = evento.target.value;
		console.log(ceramicaAltura);
	};

	const pegaPosicaoCeramica = evento => {
    posicaoCeramica = evento.target.value;
    

    console.log(posicaoCeramica);
    calcTipo(posicaoCeramica);
	};

	//const posicaoRevestimento = document.getElementsByName('posição')
	//
	//  const [valor, setValor] = useState(initialValues)
	//
	//  function onChange(ev) {
	//    const value = ev.target.value;
	//    console.log(value);
	//  }

	//const larguraAreaReact = e => {
	//  console.log(e);
	//
	//}
	//const [final, setFinal] = useState(0)
	//useEffect(() => {document.title = `mudou ${final} vezes`})
	//useState(
	//  setResultado =  calc(posicaoRevestimento.value)
	//)

	//const botao = document.querySelector('.submit__button')

	//var resultado = "";

	var cmCeramicaLargura = ceramicaLargura / 100;
	var cmCeramicaAltura = ceramicaAltura / 100;

	var areaTotal = altura * largura;

	function calcCeramicaPosicao(larguraCeramica, alturaCeramica) {
		var quantasPecasInteirasNaLargura = largura / larguraCeramica;

		var quantasPecasInteirasNaAltura = altura / alturaCeramica;

		var pecasInteiras =
			quantasPecasInteirasNaLargura * quantasPecasInteirasNaAltura;

		var adicionalPecasInteirasLargura = 0;
		var adicionalPecasInteirasAltura = 0;

		var sobraTrinchoLargura = largura % larguraCeramica;

		if (sobraTrinchoLargura > 1) {
			var trinchoMetadeLargura = larguraCeramica / 2;

			var quantosTrinchoMetadeLargura =
				sobraTrinchoLargura / trinchoMetadeLargura;
			var sobraTrinchoMetadeLargura =
				sobraTrinchoLargura % trinchoMetadeLargura;

			if (sobraTrinchoMetadeLargura > 1) {
				var trinchoMetadeDaMetadeLargura = trinchoMetadeLargura / 2;

				var quantosTrinchoMetadeDaMetadeLargura =
					sobraTrinchoMetadeLargura / trinchoMetadeDaMetadeLargura;

				var sobraTrinchoMetadeDaMetadeLargura =
					sobraTrinchoMetadeLargura % trinchoMetadeDaMetadeLargura;

				if (sobraTrinchoMetadeDaMetadeLargura > 1) {
					adicionalPecasInteirasLargura += 1;
				}
			} else {
				quantosTrinchoMetadeDaMetadeLargura = 0;
			}
		} else {
			quantosTrinchoMetadeLargura = 0;
			quantosTrinchoMetadeDaMetadeLargura = 0;
		}

		var sobraTrinchoAltura = altura % alturaCeramica;

		if (sobraTrinchoAltura > 1) {
			var trinchoMetadeAltura = alturaCeramica / 2;

			var quantosTrinchoMetadeAltura = sobraTrinchoAltura / trinchoMetadeAltura;

			var sobraTrinchoMetadeAltura = sobraTrinchoAltura % trinchoMetadeAltura;

			if (sobraTrinchoMetadeAltura > 1) {
				var trinchoMetadeDaMetadeAltura = trinchoMetadeAltura / 2;

				var quantosTrinchoMetadeDaMetadeAltura =
					sobraTrinchoMetadeAltura / trinchoMetadeDaMetadeAltura;

				var sobraTrinchoMetadeDaMetadeAltura =
					sobraTrinchoMetadeAltura % trinchoMetadeDaMetadeAltura;

				if (sobraTrinchoMetadeDaMetadeAltura > 1) {
					adicionalPecasInteirasAltura += 1;
				}
			} else {
				quantosTrinchoMetadeDaMetadeAltura = 0;
			}
		} else {
			quantosTrinchoMetadeAltura = 0;
			quantosTrinchoMetadeDaMetadeAltura = 0;
		}

		var quantosTrinchosMetadeTotais =
			quantosTrinchoMetadeLargura + quantosTrinchoMetadeAltura;

		var pecaTrinchoMetade = quantosTrinchosMetadeTotais / 2;

		var quantosTrinchosMetadeDaMetadeTotais =
			quantosTrinchoMetadeDaMetadeLargura + quantosTrinchoMetadeDaMetadeAltura;

		var pecaTrinchoMetadeDaMetade = quantosTrinchosMetadeDaMetadeTotais / 4;

		var totalPecas =
			pecasInteiras +
			adicionalPecasInteirasAltura +
			adicionalPecasInteirasLargura +
			pecaTrinchoMetade +
			pecaTrinchoMetadeDaMetade;

		var mais10PorCento = (totalPecas * 10) / 100;

		var totalFinal = totalPecas + mais10PorCento;

		if (
			quantosTrinchosMetadeTotais === 0 &&
			quantosTrinchosMetadeDaMetadeTotais === 0
		) {
			resultado = `Para cobrir uma área de ${areaTotal
				.toFixed(2)
				.replace(".", ",")}m² você precisa de:\n\n${Math.round(
				pecasInteiras
			)} peças inteiras.\n\nEntão, indico que você compre ${Math.floor(
				totalPecas
			)} peças inteiras, ou com um percentual de garantia de 10% recomendo comprar ${Math.ceil(
				totalFinal
			)} peças.`;
			//setFinal(final => final + resultado)
			console.log("funcionou");

			return resultado;
		} else if (quantosTrinchosMetadeTotais === 0) {
			resultado = `Para cobrir uma área de ${areaTotal
				.toFixed(2)
				.replace(".", ",")}m² você precisa de:\n\n${Math.round(
				pecasInteiras
			)} peças inteiras,\n${Math.round(
				quantosTrinchosMetadeDaMetadeTotais
			)} trinchos cortados na metade da metade (que podem ser feitos utilizando ${Math.round(
				pecaTrinchoMetadeDaMetade
			)} peças inteiras).\n\nEntão, indico que você compre ${Math.floor(
				totalPecas
			)} peças inteiras, ou com um percentual de garantia de 10% recomendo comprar ${Math.ceil(
				totalFinal
			)} peças.`;
			console.log("funcionou");
			//setFinal(final => final + resultado)

			return resultado;
		} else if (quantosTrinchosMetadeDaMetadeTotais === 0) {
			resultado = `Para cobrir uma área de ${areaTotal
				.toFixed(2)
				.replace(".", ",")}m² você precisa de:\n\n${Math.round(
				pecasInteiras
			)} peças inteiras,\n${Math.round(
				quantosTrinchosMetadeTotais
			)} trinchos cortados ao meio (que podem ser feitos utilizando ${Math.round(
				pecaTrinchoMetade
			)} peças inteiras).\n\nEntão, indico que você compre ${Math.floor(
				totalPecas
			)} peças inteiras, ou com um percentual de garantia de 10% recomendo comprar ${Math.ceil(
				totalFinal
			)} peças.`;
			//setFinal(final => final + resultado)
			console.log("funcionou");

			return resultado;
		} else {
			resultado = `Para cobrir uma área de ${areaTotal
				.toFixed(2)
				.replace(".", ",")}m² você precisa de:\n\n${Math.round(
				pecasInteiras
			)} peças inteiras,\n${Math.round(
				quantosTrinchosMetadeTotais
			)} trinchos cortados ao meio (que podem ser feitos utilizando ${Math.round(
				pecaTrinchoMetade
			)} peças inteiras) e \n${Math.round(
				quantosTrinchosMetadeDaMetadeTotais
			)} trinchos cortados na metade da metade (que podem ser feitos utilizando ${Math.round(
				pecaTrinchoMetadeDaMetade
			)} peças inteiras).\n\nEntão, indico que você compre ${Math.floor(
				totalPecas
			)} peças inteiras, ou com um percentual de garantia de 10% recomendo comprar ${Math.ceil(
				totalFinal
			)} peças.`;
			//setFinal(final => final + resultado)
			console.log("funcionou");

			return resultado;
		}
	}
	console.log(resultado);

	function calcTipo(posicaoCeramica) {
		if (posicaoCeramica === 1) {
			calcCeramicaPosicao(cmCeramicaLargura, cmCeramicaAltura);
		}

		if (posicaoCeramica === 2) {
			calcCeramicaPosicao(cmCeramicaAltura, cmCeramicaLargura);
		}
	}

	//calcTipo();

	//fazendo o formulario escutar o evento para quando submeter ele guardar os dados
	const aoSalvar = evento => {
    evento.preventDefault();
    props.aoNovoResultado(resultado)

		calcTipo(posicaoCeramica);
		console.log("Form Submetido" + largura);
	};

	return (
		<>
			<h2>Faça o cálculo do piso para seu projeto</h2>
			<form
				name="form"
				action=""
				className="form__submit"
				method="post"
				onSubmit={aoSalvar}
			>
				<label htmlFor="larguraArea">
					Qual é a largura (em metros) da área que você quer cobrir? <br></br>
					(considere a área na vertical com a largura sendo o menor lado)
				</label>
				<input
					type="text"
					name="larguraArea"
					placeholder="ex.: 1,20"
					aria-label="digite a largura da área (em metros)"
					className="from__input"
					value={largura}
					aoAlterado={largura => setLargura(largura)}
				/>
				<label htmlFor="alturaArea">
					Qual é a altura (em metros) da área que você quer cobrir? <br></br>
					(considere a área na vertical com a altura sendo o maior lado)
				</label>
				<input
					type="text"
					name="alturaArea"
					placeholder="ex.: 2,55"
					aria-label="digite a altura da área (em metros)"
					className="form__input"
					value={altura}
					onChange={pegaAltura}
				/>
				<label htmlFor="larguraCeramica">
					De quantos centímetros é a largura do revestimento que você quer usar?
					<br></br>(considere o revestimento posicionado na vertical com a
					largura sendo o menor lado do revestimento.)
				</label>
				<input
					type="text"
					name="larguraRevestimento"
					placeholder="ex.: 60"
					aria-label="digite a largura do Revestimento (em centímetros)"
					className="form__input"
					value={ceramicaLargura}
					onChange={pegaCeramicaLargura}
				/>
				<label htmlFor="alturaRevestimento">
					De quantos centímetros é a altura do revestimento que você quer usar?
					<br></br>(considere o revestimento posicionado na vertical com a
					altura sendo o maior lado do revestimento.)
				</label>
				<input
					type="text"
					name="alturaRevestimento"
					placeholder="ex.: 120"
					aria-label="digite a altura do Revestimento (em centímetros)"
					className="form__input"
					value={ceramicaAltura}
					onChange={pegaCeramicaAltura}
				/>
				<label htmlFor="posição">
					O revestimento será posicionado na vertical ou na horizontal?{" "}
					<br></br>(considere vertical com a altura sendo o maior lado do
					revestimento.)
					<br></br>[1] Vertical<br></br>
					[2] Horizontal
				</label>
				<input
					type="text"
					name="posição"
					placeholder="ex.: 1"
					aria-label="digite apenas o número correspondente"
					className="form__input"
					value={posicaoCeramica}
					onChange={pegaPosicaoCeramica}
				/>

				<button
					type="submit"
					className="submit__button"
					value="Calcular"
					onClick={aoSalvar}
				>
					Calcular
				</button>

				<div
					htmlFor="resultado"
					aoResultado={resultado => aoNovoResultado(resultado)}
				>
					{" "}
					Resultado:{" "}
				</div>
			</form>
		</>
	);
}
  


export default Aside;