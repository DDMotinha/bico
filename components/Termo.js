import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Termo(){
    return(
        <div className="align-content-center container-fluid">
            <Link href="/registro">
                <img className="" src="https://raw.githubusercontent.com/DDMotinha/bicoimage/master/b-logo.png" alt="b-logo" width="200"/>
            </Link>
            <h2>1. Termos</h2>
            <p>Ao acessar ao site <a href="www.bico.app.br">Bico</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p> 
            <h2>2. Uso de Licença</h2>
            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Bico , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: </p> 
            <ol> 
                <li>modificar ou copiar os materiais;  </li> 
                <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);  </li> 
                <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Bico;  </li> 
                <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou  </li> 
                <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li> 
            </ol> 
            <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Bico a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p> 
            <h2>3. Isenção de responsabilidade</h2> 
            <ol> 
                <li>Os materiais no site da Bico são fornecidos 'como estão'. Bico não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. </li> 
                <li>Além disso, o Bico não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li> 
            </ol> 
            <h2>4. Limitações</h2> 
            <p>Em nenhum caso o Bico ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Bico, mesmo que Bico ou um representante autorizado da Bico tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p> 
            <h2>5. Precisão dos materiais</h2> 
            <p>Os materiais exibidos no site da Bico podem incluir erros técnicos, tipográficos ou fotográficos. Bico não garante que qualquer material em seu site seja preciso, completo ou atual. Bico pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Bico não se compromete a atualizar os materiais.</p> 
            <h2>6. Links</h2> 
            <p>O Bico não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Bico do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p> 
            <h3>Modificações</h3> 
            <p>O Bico pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p> 
            <h3>Lei aplicável</h3> 
            <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Bico e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
        </div>
    )
}
export default Termo;