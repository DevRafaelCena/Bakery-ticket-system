# Sistema para Padaria e Restaurantes 

  Sistema em desenvolvimento\Prototipação .


## Paginas e funções em desenvolvimento

Integração com Hardware - Back-end

  
  * Através de comunicação Serial com o placa controladora , será realizado a logica de entrada e saida
  * A controladora será responsavel pelas leituras de sensores inclusive para emissão da comanda.
  * Após solicitação de entrada, o back end verificara o proximo numero da comanda/ticket e será impresso. 
  * A comunicação da impressora será realizada atraves de serial ou usb, será impresso, numero da comanda, codigo de barras, e outros paramentros configuraveis. Geração em xml
  * Apos impressão o back end passara um comando para a controladora para liberar a entrada. 
  * Na saida será atraves de leitura do codigo de barras em leitor serial ou usb.
  * O back end será responsavel por verificar se não tem valor em pendencia na comanda, e será liberada o comando a controladora ou solicidado retorno ao caixa.

Front-end

  *Será disponibilizado uma pagina inicial , com passagem de promoções e propagandas, 
  *Uma pagina para administrar as promocoes e porpagandas.
  *Uma pagina para configurações.
  *Uma pagina para liberação remota de entrada e saida. 


  ### Ainda nem todas as funções estão disponíveis!

  ### tecnologias e libs utilizadas até o momento!

    * SQLite
    * Boosttrap
    * Socket io
    * SerialPort
    * fs
    * xmlbuilder

