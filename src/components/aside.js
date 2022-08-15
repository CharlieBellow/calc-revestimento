import { useState } from "react";


const Aside = () => {

  // utilizando o estado para guardar o value e manipular

  
  
  // no formulário
  // pegando o input e usando o estado pra manipular 
  const [largura, setLargura] = useState('')
  const [altura, setAltura] = useState("");
  const [ceramicaLargura, setCeramicaLargura] = useState("");
	
  const [ceramicaAltura, setCeramicaAltura] = useState("");
  const [posicaoCeramica, setPosicaoCeramica] = useState("");

	const [resultado, setResultado] = useState('');

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
				setResultado (`Para cobrir uma área de ${areaTotal
					.toFixed(2)
					.replace(".", ",")}m² você precisa de:\n\n${Math.round(
					pecasInteiras
				)} peças inteiras.\n\nEntão, indico que você compre ${Math.floor(
					totalPecas
				)} peças inteiras, ou com um percentual de garantia de 10% recomendo comprar ${Math.ceil(
					totalFinal
				)} peças.`);
			
				console.log("funcionou");
	
			
			} else if (quantosTrinchosMetadeTotais === 0) {
				setResultado (`Para cobrir uma área de ${areaTotal
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
				)} peças.`);
				console.log("funcionou");
			
	
			} else if (quantosTrinchosMetadeDaMetadeTotais === 0) {
				setResultado (`Para cobrir uma área de ${areaTotal
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
				)} peças.`);
		
				console.log("funcionou");
	
				
			} else {
				setResultado ( `Para cobrir uma área de ${areaTotal
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
				)} peças.`);
			
				console.log("funcionou");
	
				console.log('resultado função:' + resultado);
				
			}
		}
		



	//fazendo o formulario escutar o evento para quando submeter ele guardar os dados
	const aoSalvar = event => {
		event.preventDefault();


		if (posicaoCeramica === '1') {
			calcCeramicaPosicao(cmCeramicaLargura, cmCeramicaAltura);
		}

		if (posicaoCeramica === '2') {
			calcCeramicaPosicao(cmCeramicaAltura, cmCeramicaLargura);
		}
		
		console.log(resultado);
	};
	
	return (
		<>
			<h2>Faça o cálculo do piso para seu projeto</h2>
			<form name="form" className="form__submit">
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
					onChange={event => setLargura(event.target.value.replace(",", "."))}
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
					onChange={event => setAltura(event.target.value.replace(",", "."))}
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
					onChange={event =>
						setCeramicaLargura(event.target.value.replace(",", "."))
					}
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
					onChange={event =>
						setCeramicaAltura(event.target.value.replace(",", "."))
					}
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
					onChange={event => setPosicaoCeramica(event.target.value)}
				/>

				<button
					type="submit"
					className="submit__button"
					value="Calcular"
					onClick={aoSalvar}
				>
					Calcular
				</button>

				<div htmlFor="resultado" className="resultado">
					<p>Resultado: <br></br>{resultado} </p>
					<p>largura: {largura}</p>
					<p>Altura: {altura}</p>
					<p>ceramicaLargura: {ceramicaLargura}</p>
					<p>ceramicaAltura: {ceramicaAltura}</p>
					<p>posicaoCeramica: {posicaoCeramica}</p>
				</div>
			</form>
		</>
	);
}
  


export default Aside;