(function (root, factory) {
  const data = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  root.DEVGUIA_DATA = root.DEVGUIA_DATA || {};
  root.DEVGUIA_DATA.faq = data;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
const FAQS = [
  {
    id: 'f-logica', cat: 'fundamentos',
    q: 'Precisa ser bom em matemática para programar?',
    answer: `<p>Sim — mas não do jeito que a escola ensinou. Programação não exige cálculo diferencial, mas exige raciocínio lógico, pensamento abstrato e a capacidade de modelar problemas em estruturas. Quem diz que "nunca precisou de matemática para programar" geralmente está usando matemática o tempo todo sem perceber — o que falta é consciência do que está fazendo, e isso limita o crescimento.</p>
    <p>No dia a dia isso aparece quando você precisa cobrir todos os casos de um formulário, entender por que um loop ficou lento ou depurar uma query SQL: são situações em que você manipula conjuntos, ordens e condições — habilidades que a escola chama de matemática, mas o mercado chama de “pensamento de engenheiro”.</p>
    <div class="dica"><strong>Dica:</strong> Foco real: álgebra booleana, lógica proposicional e entender como algoritmos crescem em complexidade. Khan Academy tem os fundamentos certos e de graça.</div>
    <div class="atencao"><strong>Atenção:</strong> Se você tem dificuldade séria com raciocínio lógico, isso vai aparecer cedo. Não adie — encare o problema agora antes de investir anos.</div>`,
  },
  {
    id: 'f-terminal', cat: 'ferramentas',
    q: 'Por que preciso aprender linha de comando se existe interface gráfica?',
    answer: `<p>Porque ambientes profissionais rodam em servidores Linux sem interface gráfica. Porque deploy, CI/CD, Docker e scripts de automação passam pelo terminal. Porque depender só de interfaces te faz dependente de ferramentas específicas. O terminal parece difícil por duas semanas e depois vira extensão natural do raciocínio.</p>
    <p>Interfaces gráficas ajudam no começo, mas quando algo quebra em produção às 2h da manhã, quem sabe linha de comando consegue ler logs, reiniciar serviços e aplicar correção sem depender de botão que não existe no servidor — é por isso que empresas tratam terminal como habilidade básica, não opcional.</p>
    <div class="dica"><strong>Dica:</strong> Comece com o essencial: navegar por diretórios, criar e mover arquivos, redirecionar saídas, pipes. Depois Git pelo terminal. Depois scripts shell simples.</div>`,
  },
  {
    id: 'f-git', cat: 'ferramentas',
    q: 'Git é realmente necessário ou é frescura?',
    answer: `<p>Necessário. Ponto. Git é o mínimo absoluto de qualquer trabalho profissional em software. Sem controle de versão você vai perder código, não vai conseguir colaborar e não vai entender como projetos reais são organizados. Não existe "aprender mais tarde" — aprenda Git junto com sua primeira linguagem.</p>
    <p>Em times reais, revisão de código, integração contínua e deploy partem de branches e histórico confiável; enviar ZIP por e-mail ou “código na pasta Documentos” simplesmente não entra em empresas sérias. Git também é a linguagem comum entre freelancers, open source e vagas remotas.</p>
    <div class="dica"><strong>Dica:</strong> Os 7 comandos que cobrem 90% do uso: init, add, commit, push, pull, branch, merge. O resto surge naturalmente com a prática.</div>`,
  },
  {
    id: 'f-mat', cat: 'fundamentos',
    q: 'Qual matemática devo estudar para programação?',
    answer: `<p>Para a maioria das trilhas: lógica proposicional e booleana (essencial para condicionais e queries), teoria de conjuntos básica (arrays, interseções, diferenças) e complexidade algorítmica básica — entender por que um loop dentro de outro é mais lento. Para dados: estatística descritiva e probabilidade básica. Para front avançado ou jogos: geometria e álgebra linear.</p>
    <p>Você não precisa virar expert em cálculo para o primeiro emprego, mas precisa perder o medo de símbolos e gráficos: relatórios de produto, métricas de performance e testes A/B são linguagem de negócio falada em números, e quem entende isso conversa melhor com produto e liderança.</p>
    <div class="dica"><strong>Dica:</strong> Não estude matemática abstrata sem contexto. Estude com um projeto em mente — a abstração faz sentido quando você precisar dela de verdade.</div>`,
  },
  {
    id: 'f-lang', cat: 'linguagens',
    q: 'Qual a primeira linguagem para iniciantes?',
    answer: `<p>Para a maioria: Python se você quer dados, automação, back-end ou ainda não sabe. JavaScript se quer ver resultados visuais rápido na web. C se quer entender computação de verdade e não tem pressa para o mercado. Nenhuma das três é errada — o erro é ficar trocando antes de dominar uma.</p>
    <p>O mercado brasileiro contrata forte quem domina ecossistema web (JavaScript/TypeScript) ou dados com Python; linguagens de nicho podem pagar bem, mas reduzem o número de vagas acessíveis no início. Escolha uma, construa 2–3 projetos que você consiga explicar em entrevista, e só então pense em segunda linguagem.</p>
    <div class="dica"><strong>Dica:</strong> O critério mais importante não é "qual tem mais vaga" — é qual vai te manter motivado por 12 meses. Vagas existem para Python e JavaScript com abundância.</div>
    <div class="atencao"><strong>Atenção:</strong> Evite PHP como primeira linguagem, Java sem base sólida, e Rust ou C++ como entrada — a curva vai te desanimar antes de você aprender o essencial.</div>`,
  },
  {
    id: 'f-proj', cat: 'carreira',
    q: 'Como sei se estou aprendendo ou só copiando código?',
    answer: `<p>Teste simples: feche tudo e tente construir o mesmo projeto do zero sem consultar nada. Se você travar em 10 minutos, você estava copiando, não aprendendo. Outro sinal: se não consegue explicar em voz alta por que cada linha faz o que faz, ainda não aprendeu. Copiar é uma fase válida, mas precisa virar compreensão antes de avançar.</p>
    <p>Outro teste honesto é tentar mudar uma regra de negócio pequena: se a alteração te obriga a reescrever tudo porque você não entende a estrutura, o tutorial te deu um “efeito teatro”, não conhecimento. Por isso portfólios com variações próprias pesam mais que lista infinita de cursos.</p>
    <div class="dica"><strong>Dica:</strong> Após qualquer tutorial, crie uma variação com uma diferença sua — uma funcionalidade diferente, dados diferentes, uma melhoria que você pensou. Esse é o momento real de aprendizado.</div>`,
  },
  {
    id: 'f-port', cat: 'carreira',
    q: 'Portfólio importa mais que certificado?',
    answer: `<p>Sim, especialmente para o primeiro emprego. Certificado prova que você fez um curso. Portfólio prova que você sabe construir algo. Para cargos técnicos, empresas sérias querem ver código funcionando. Um projeto bem documentado no GitHub — com README claro, problema definido e código organizado — vale mais que dez certificados.</p>
    <p>Em processos seletivos, o recrutador técnico costuma abrir o repositório antes de olhar o currículo: ele quer ver commits coerentes, testes ou ao menos organização de pastas, e uma explicação do que você faria diferente com mais tempo. Certificado sem artefato auditável raramente passa dessa etapa.</p>
    <div class="dica"><strong>Dica:</strong> Três projetos que você entende completamente e consegue explicar valem mais que dez projetos copiados de tutorial.</div>
    <div class="atencao"><strong>Atenção:</strong> Não coloque "TODO list" e "calculadora" como projetos principais. Crie algo que resolve um problema real — mesmo pequeno e simples.</div>`,
  },
  {
    id: 'f-oss', cat: 'carreira',
    q: 'Como contribuir em open source sem experiência?',
    answer: `<p>Comece pelo mínimo: corrija um erro de digitação na documentação. Melhore um README. Reporte um bug com detalhes precisos e passos para reproduzir. Isso é contribuição real e te expõe ao fluxo de trabalho de projetos sérios. A maioria fica esperando ter "nível suficiente" — não existe nível mínimo para documentação.</p>
    <p>Depois disso, você pode subir para pequenos patches: ajustar mensagem de erro, adicionar teste que faltava ou melhorar acessibilidade de um componente. Cada merge aceito vira prova pública de que você lê código de terceiros, responde feedback e entrega no padrão do projeto — exatamente o que times pedem em júnior.</p>
    <div class="dica"><strong>Dica:</strong> Procure issues marcadas com "good first issue" ou "beginner friendly" no GitHub. Projetos de ferramentas que você já usa são o melhor ponto de partida.</div>`,
  },
  {
    id: 'f-areas', cat: 'carreira',
    q: 'Como escolher entre front-end, back-end, dados ou infra?',
    answer: `<p>Não escolha pela demanda do mercado — escolha pelo que te faz querer continuar estudando às 23h. Front-end: você se importa com a experiência visual do usuário. Back-end: você pensa em sistemas, dados e eficiência. Dados: você quer extrair significado de números. Infra: você quer que tudo funcione de forma confiável e escalável.</p>
    <p>Um experimento de duas semanas por área costuma ser suficiente: front com uma tela responsiva simples, back com API + banco, dados com um dashboard a partir de CSV público, infra com deploy automatizado em um PaaS gratuito. O objetivo não é virar especialista em tudo — é sentir qual tipo de problema você tolera repetir por anos.</p>
    <div class="dica"><strong>Dica:</strong> Faça um projeto pequeno em cada área antes de decidir. As diferenças salariais entre especialidades são menores do que influencers sugerem e variam muito mais por empresa do que por área.</div>`,
  },
  {
    id: 'f-ia', cat: 'ferramentas',
    q: 'Devo usar IA (ChatGPT, Copilot) para aprender?',
    answer: `<p>Não para aprender — sim para produzir, depois que você já sabe. A diferença é crítica: se você usa IA para gerar código que não entende, está acumulando dívida técnica mental. Quando o código quebrar (e vai), você não vai saber depurar. IA mente de forma convincente e confiante. Sem base para avaliar o que ela gerou, você aprende errado e não percebe.</p>
    <p>Em equipes, o uso saudável costuma ser: gerar boilerplate, sugerir nomes, resumir documentação ou escrever testes depois que você já definiu o comportamento esperado. O uso perigoso é pedir “faz tudo” sem ler linha por linha — é aí que entram vulnerabilidades, bugs silenciosos e código que ninguém consegue manter.</p>
    <div class="dica"><strong>Dica:</strong> Regra prática: use IA para acelerar coisas que você já sabe fazer. Para aprender algo novo, faça sem IA até entender — depois use para otimizar e agilizar.</div>
    <div class="atencao"><strong>Atenção:</strong> IA gera código que funciona para casos simples e quebra nos casos extremos. Isso é invisível para quem está aprendendo e cria uma falsa sensação de domínio.</div>`,
  },
  {
    id: 'f-facul', cat: 'educação',
    q: 'Faculdade vale a pena ou é perda de tempo?',
    answer: `<p>Depende do curso e do seu perfil. Faculdade boa — difícil de entrar, professores ativos no mercado, colegas qualificados — oferece algo que nenhum curso online entrega: ambiente de pressão, colaboração e exposição a problemas complexos. Faculdade ruim entrega diploma e pouco mais. EAD de nome desconhecido, na maioria dos casos, não agrega.</p>
    <p>Sem faculdade, você precisa substituir o que ela dá de estrutura: prazos externos (bootcamps sérios, comunidades, mentoria), projetos públicos e leitura constante de código alheio. Os dois caminhos funcionam, mas o autodidata que não se organiza perde para quem tem rotina clara — independentemente do papel na parede.</p>
    <div class="dica"><strong>Dica:</strong> Se vai fazer: pesquise a grade curricular, visite o campus, converse com alunos do 3º e 4º ano. O que fazem depois de formados diz tudo sobre a qualidade do curso.</div>
    <div class="atencao"><strong>Atenção:</strong> Se não vai fazer faculdade, você precisa ser disciplinado o suficiente para estruturar seu próprio aprendizado. A maioria das pessoas superestima essa disciplina.</div>`,
  },
  {
    id: 'f-clt', cat: 'mercado',
    q: 'CLT ou PJ — qual escolher?',
    answer: `<p>Faça as contas do seu caso específico. Como referência: PJ geralmente precisa ganhar 40–60% a mais que CLT para equivaler, somando FGTS, 13º, férias, benefícios e os impostos que você paga como PJ. CLT tem mais proteção em demissão. PJ tem mais flexibilidade e pode ser interessante se você planeja ter múltiplos clientes. Não existe resposta universal.</p>
    <p>No Brasil, muita gente aceita PJ “para começar” sem plano de saúde, reserva ou contador — e descobre na primeira folha de pagamento que o líquido não fecha. Antes de assinar, peça simulação por escrito, confira se há cláusula de exclusividade disfarçada e entenda o que acontece se o contrato terminar em 30 dias.</p>
    <div class="dica"><strong>Dica:</strong> Use calculadoras online com seus números reais antes de aceitar qualquer proposta. Nunca compare bruto de PJ com bruto de CLT — é uma armadilha comum.</div>`,
  },
  {
    id: 'f-soft', cat: 'carreira',
    q: 'Soft skills importam realmente em TI?',
    answer: `<p>Sim — mais do que a maioria dos iniciantes imagina, especialmente a partir do nível pleno. A diferença entre um dev que avança e um que fica estagnado raramente é técnica. É capacidade de comunicar decisões técnicas para não-técnicos, dar e receber feedback, estimar prazos com honestidade e trabalhar em equipe sem criar atritos desnecessários.</p>
    <p>Promoção para senior costuma envolver liderar incidentes, negociar escopo com produto e mediar divergência entre pares — tudo isso é conversa bem feita, não só código bonito. Por isso empresas valorizam quem documenta, ensina e reduz ruído em reuniões, mesmo quando não tem o título de “líder”.</p>
    <div class="dica"><strong>Dica:</strong> Comece pela escrita: aprenda a escrever Pull Requests bem descritos, emails técnicos claros e documentação que outras pessoas entendem. É a soft skill mais diretamente treinável.</div>`,
  },
  {
    id: 'f-net', cat: 'mercado',
    q: 'Como conseguir o primeiro emprego sem experiência?',
    answer: `<p>Portfólio com projetos reais vale mais que certificados. Contribuição em open source vale mais que diploma. Networking ativo vale mais que envio de currículo em massa. A sequência que funciona: construa algo real e documentado, coloque no GitHub, escreva sobre o que aprendeu, participe de comunidades de devs, peça para alguém revisar seu portfólio. A maioria das primeiras vagas vem de conexão, não de processo frio.</p>
    <p>Combine volume com qualidade: mandar 200 currículos genéricos raramente supera 20 conversas com pessoas que já trabalham na área, pedindo feedback específico sobre seu GitHub ou sobre o tipo de vaga. Eventos locais, comunidades em Discord e mentoria informal continuam sendo atalhos reais — desde que você chegue preparado, não só pedindo “indicação fácil”.</p>
    <div class="dica"><strong>Dica:</strong> Aplique para vagas mesmo sem atender 100% dos requisitos. A lista de requisitos é um desejo, não um filtro absoluto.</div>
    <div class="atencao"><strong>Atenção:</strong> Cuidado com cursos que prometem "emprego garantido em 6 meses". O mercado está saturado na entrada — o diferencial é qualidade de portfólio, não certificado.</div>`,
  },
  {
    id: 'f-trans', cat: 'carreira',
    q: 'Transição de carreira para TI — por onde começar?',
    answer: `<p>Primeiro identifique a intersecção entre o que você já sabe e TI. Contador → BI e dados financeiros. Enfermeiro → health tech, UX em saúde. Professor → educação tech, design instrucional. Advogado → legal tech, gestão de produto. Entrar como dev júnior sendo pleno em outra área é um passo atrás desnecessário — use sua experiência como trunfo.</p>
    <p>Na prática, isso significa narrar no LinkedIn e na entrevista o problema de negócio que você já resolveu antes de TI, e mostrar um projeto que automatiza ou digitaliza algo do seu domínio anterior. Recrutadores entendem muito mais “reduzi tempo de fechamento mensal em X horas” do que “fiz curso de 200 horas”.</p>
    <div class="dica"><strong>Dica:</strong> Defina uma área-alvo dentro de TI que aproveite seu background. Construa projetos que conectem os dois mundos — isso te diferencia de qualquer iniciante puro.</div>
    <div class="atencao"><strong>Atenção:</strong> Transição séria leva 12 a 24 meses de dedicação real. Quem promete menos está vendendo ilusão.</div>`,
  },
  {
    id: 'f-ai-job', cat: 'mercado',
    q: 'A IA vai tirar meu emprego de desenvolvedor?',
    answer: `<p>Vai substituir quem usa ferramenta sem entender o que faz — e isso já está acontecendo. Não vai substituir quem entende o problema por baixo, sabe depurar, arquitetar sistemas e tomar decisões com contexto de negócio. IA é excelente para tarefas definidas e previsíveis. É péssima para diagnóstico de problemas ambíguos e decisões de arquitetura com contexto real.</p>
    <p>O mercado tende a premiar quem usa IA para ganhar tempo em tarefas repetitivas, mas continua pagando bem quem assume responsabilidade por sistema em produção: incidentes, segurança, custo de cloud e trade-offs de produto não podem ser “gerados” sem alguém que assine embaixo. Por isso estudo de fundamentos e leitura de código real continuam sendo seguro de carreira.</p>
    <div class="dica"><strong>Dica:</strong> A habilidade mais à prova de IA: saber fazer a pergunta certa. Isso exige contexto, julgamento e experiência — coisas que IA não tem.</div>
    <div class="atencao"><strong>Atenção:</strong> Irônico: quem usa IA para aprender a programar está se tornando exatamente o tipo de dev mais facilmente substituível por IA.</div>`,
  },
  {
    id: 'f-qa', cat: 'carreira',
    q: 'QA é carreira séria ou só porta de entrada?',
    answer: `<p>É carreira séria. QA bom não é “pessoa que clica botão”: é quem reduz risco de release, cria confiança no time e entende comportamento do sistema melhor do que muita gente que programa. Automação, estratégia de teste, risco, regressão, performance e qualidade de API entram aqui.</p>
    <p>A confusão vem de empresas que tratam QA como triagem manual barata. Quando isso acontece, a função empobrece e vira teto de crescimento. Em times melhores, QA participa cedo da definição, questiona cenário extremo e influencia arquitetura testável.</p>
    <div class="dica"><strong>Dica:</strong> Se essa área te atrai, comece por lógica, caso de teste, API, leitura de log e automação básica. Isso te coloca muito acima do nível “executor de checklist”.</div>`,
  },
  {
    id: 'f-seg-base', cat: 'fundamentos',
    q: 'Dá para entrar em segurança sem antes aprender sistemas e redes?',
    answer: `<p>Quase nunca. Segurança séria depende de entender o que você está protegendo: HTTP, autenticação, Linux, rede, cloud, banco, permissão e fluxo de aplicação. Sem base, o estudo vira coleção de ferramenta e buzzword sem profundidade real.</p>
    <p>Isso não significa esperar anos para começar. Significa estudar segurança junto com fundamentos, e não no lugar deles. Quem tenta virar “pentester” sem entender API, sessão, DNS ou logs costuma decorar exploração pronta e travar no primeiro contexto fora do tutorial.</p>
    <div class="dica"><strong>Dica:</strong> Comece por web, autenticação, terminal, logs e modelo cliente-servidor. Depois laboratório controlado. Glamour vem por último.</div>`,
  },
  {
    id: 'f-pentest', cat: 'carreira',
    q: 'Pentest é só “hackear coisas” o dia inteiro?',
    answer: `<p>Não. Pentest real mistura escopo, autorização formal, coleta de evidência, relatório e comunicação com cliente ou time interno. A parte “quebrar” existe, mas o valor profissional está em mostrar risco real, reproduzir com método e orientar correção.</p>
    <p>Muita gente entra na área pela fantasia ofensiva e descobre tarde que a rotina envolve documentação, limite legal e muito trabalho repetitivo. Quem gosta só da imagem de hacker costuma se frustrar; quem gosta de investigação disciplinada tende a durar mais.</p>
    <div class="dica"><strong>Dica:</strong> Se você se interessa por pentest, treine escrita de relatório e reprodução limpa do achado. Vulnerabilidade sem explicação útil vale pouco para empresa séria.</div>`,
  },
  {
    id: 'f-soc', cat: 'carreira',
    q: 'O que um analista SOC faz de verdade?',
    answer: `<p>SOC vive entre alerta, contexto, triagem e resposta inicial. O trabalho real é separar ruído de risco, correlacionar log, entender padrão de ataque e acionar resposta com calma. Parece menos glamouroso que red team, mas é onde muita segurança operacional de verdade acontece.</p>
    <p>É uma área boa para quem tolera processo, pressão e investigação. Também pode ser cansativa em empresas com ferramenta ruim e alerta mal calibrado. O diferencial está em reduzir falso positivo e transformar incidente em aprendizado de defesa.</p>
    <div class="dica"><strong>Dica:</strong> Se quiser testar SOC, comece por logs, SIEM, rede básica, autenticação e resposta a incidente. Sem isso, o alerta vira painel piscando sem significado.</div>`,
  },
  {
    id: 'f-produto', cat: 'carreira',
    q: 'Product Manager precisa saber programar?',
    answer: `<p>Não precisa programar profissionalmente, mas precisa entender tecnologia o suficiente para não prometer fantasia, não confundir esforço com desejo e não virar backlog ambulante. PM sem repertório técnico suficiente depende demais da interpretação dos outros e perde credibilidade rápido.</p>
    <p>O objetivo não é competir com engenharia. É fazer pergunta melhor, priorizar com noção de custo e conversar com time sem produzir ruído. Em produtos digitais, isso significa entender API, dado, evento, limitação de sistema e risco de dependência.</p>
    <div class="dica"><strong>Dica:</strong> PM forte sabe escrever problema, hipótese e métrica antes de sair pedindo feature. Técnica ajuda, mas clareza de pensamento ajuda ainda mais.</div>`,
  },
  {
    id: 'f-po-pm', cat: 'carreira',
    q: 'Qual a diferença entre PM e PO na prática?',
    answer: `<p>Depende da empresa, mas em geral PM olha mais para problema, direção, hipótese e resultado; PO costuma ficar mais perto da operação do backlog, refinamento e fluxo do time. Em muitos lugares os nomes se misturam, então o título sozinho diz pouco.</p>
    <p>O melhor critério é observar responsabilidade real: quem define prioridade? quem conversa com usuário? quem responde por métrica? quem organiza entrega? Essa leitura vale mais do que decorar uma distinção de livro que a empresa pode nem usar.</p>
    <div class="dica"><strong>Dica:</strong> Em vaga de produto, leia a descrição com lupa. “PM” pode ser quase discovery puro ou quase operação de backlog, e isso muda completamente a rotina.</div>`,
  },
  {
    id: 'f-suporte', cat: 'carreira',
    q: 'Suporte técnico é começo válido ou armadilha?',
    answer: `<p>É começo válido quando você usa o trabalho para entender sistema em produção, incidente, usuário, documentação e ambiente real. Vira armadilha quando o papel te prende só em script repetitivo sem aprendizado técnico, sem autonomia e sem evolução de escopo.</p>
    <p>Muita gente despreza suporte porque quer “começar por cima”, mas a área pode dar repertório de operação e produto que muito iniciante não tem. O ponto crítico é não estacionar: você precisa transformar incidente recorrente em documentação, automação e base para migrar depois.</p>
    <div class="dica"><strong>Dica:</strong> Se entrar por suporte, desenvolva leitura de log, rede básica, sistemas operacionais e escrita clara. Isso diferencia você de quem só repete procedimento.</div>`,
  },
  {
    id: 'f-helpdesk', cat: 'mercado',
    q: 'Help desk paga mal para sempre?',
    answer: `<p>Não necessariamente, mas o teto cresce pouco se você ficar só em atendimento reativo de baixa complexidade. O salto vem quando você acumula contexto técnico, pega ambiente mais complexo e começa a reduzir recorrência com processo melhor, documentação e automação.</p>
    <p>O erro comum é aceitar qualquer rotina operacional sem pensar em trajetória. Se o trabalho te ensina sistema, rede, cloud, diretório, incidente e comunicação, ele pode ser ótima base. Se só te ensina a copiar resposta pronta, aí sim vira estagnação.</p>
    <div class="dica"><strong>Dica:</strong> Pergunta importante em entrevista: “o que alguém que entra aqui costuma aprender nos primeiros 12 meses e para onde essa pessoa evolui?”</div>`,
  },
  {
    id: 'f-dados-inicio', cat: 'carreira',
    q: 'Para começar em dados, preciso ir direto para IA?',
    answer: `<p>Não. Na maioria dos casos, ir direto para IA é a forma mais rápida de parecer que está estudando muito e construindo pouco. O começo saudável em dados passa por SQL, limpeza, modelagem simples, leitura crítica de métrica, dashboard e estatística aplicada.</p>
    <p>Machine Learning e IA generativa fazem mais sentido quando você já sabe formular pergunta, tratar dado ruim e validar resultado. Sem isso, o modelo vira caixa preta que impressiona no LinkedIn e falha no primeiro problema de negócio menos óbvio.</p>
    <div class="dica"><strong>Dica:</strong> Se quiser uma ordem forte: SQL → análise exploratória → visualização → estatística → automação → só depois ML/IA.</div>`,
  },
  {
    id: 'f-bi-ds', cat: 'carreira',
    q: 'Qual a diferença entre BI, análise e ciência de dados?',
    answer: `<p>BI normalmente está mais perto de dashboard, camada semântica, indicador e decisão recorrente. Análise de dados tende a investigar pergunta específica com mais contexto e interpretação. Ciência de dados costuma entrar quando há modelagem preditiva, experimento mais complexo ou inferência estatística mais forte.</p>
    <p>Na prática, as fronteiras variam por empresa. O importante é entender o tipo de problema que você quer repetir: relatório confiável, hipótese de negócio, ou modelo para previsão/classificação. Título sozinho não resolve essa confusão.</p>
    <div class="dica"><strong>Dica:</strong> Peça exemplos concretos de rotina quando ouvir “vaga de dados”. Pergunte o que ocupa a maior parte da semana e quais ferramentas realmente são usadas.</div>`,
  },
  {
    id: 'f-cloud', cat: 'ferramentas',
    q: 'Preciso escolher AWS, Azure ou GCP logo no começo?',
    answer: `<p>Não. Primeiro escolha uma e entenda bem os conceitos que se repetem: rede, compute, storage, IAM, logs, banco gerenciado, balanceador. Trocar de provedor depois é muito mais fácil quando você domina a lógica por baixo do que quando decorou nome de serviço.</p>
    <p>Iniciante que tenta estudar as três ao mesmo tempo quase sempre termina confundindo produto, painel e nomenclatura. O mercado valoriza mais profundidade útil em uma nuvem do que comparação rasa das três em paralelo.</p>
    <div class="dica"><strong>Dica:</strong> Se não tiver contexto melhor, AWS tende a ser aposta segura no Brasil por volume de material e mercado. Mas o critério principal é consistência no estudo.</div>`,
  },
  {
    id: 'f-devops-jr', cat: 'mercado',
    q: 'Existe vaga júnior de DevOps de verdade?',
    answer: `<p>Existe, mas é bem menos comum do que júnior de desenvolvimento ou suporte. Muitas vagas chamadas de “DevOps júnior” esperam repertório que, na prática, vem de base anterior em infra, back-end, suporte ou QA. O nome engana bastante.</p>
    <p>Isso não significa desistir da área. Significa entender que a entrada muitas vezes é lateral: suporte técnico mais forte, sysadmin, cloud de entrada, automação de ambiente, CI/CD em time de dev. DevOps maduro cobra contexto de produção e responsabilidade operacional.</p>
    <div class="dica"><strong>Dica:</strong> Se essa trilha te atrai, invista em Linux, redes, containers, pipeline e uma linguagem de script. Isso te torna empregável em papéis que depois convergem para DevOps.</div>`,
  },
  {
    id: 'f-techlead', cat: 'carreira',
    q: 'Tech lead é gestor ou desenvolvedor sênior?',
    answer: `<p>É uma mistura que varia por empresa. Em geral, tech lead continua sendo uma referência técnica forte, mas assume também coordenação, direcionamento arquitetural, revisão de decisão e destrava de time. Não é só “dev mais antigo” nem “gerente com GitHub”.</p>
    <p>O risco é virar lead sem profundidade suficiente: aí a pessoa fica presa em reunião, perde a mão do código e ainda não tem repertório para orientar decisão difícil. Liderança técnica boa nasce de base real, clareza de comunicação e leitura de contexto.</p>
    <div class="dica"><strong>Dica:</strong> Antes de mirar o título, treine escrita técnica, review, mentoria e negociação de escopo. O cargo costuma ser consequência dessas habilidades.</div>`,
  },
  {
    id: 'f-devrel', cat: 'carreira',
    q: 'Developer Advocate é marketing disfarçado?',
    answer: `<p>Pode virar, se a empresa trata a função como propaganda de ferramenta sem substância. Mas DevRel sério fica entre produto, comunidade, documentação, exemplo executável e feedback técnico do ecossistema. A credibilidade depende de profundidade real.</p>
    <p>Quem faz bem essa função entende a dor do desenvolvedor, ensina sem enrolar e devolve para a empresa um retrato claro do que está difícil de usar. Quando isso não existe, sobra só evento, hype e post sem densidade — e o mercado percebe rápido.</p>
    <div class="dica"><strong>Dica:</strong> Se te atrai, treine três frentes ao mesmo tempo: base técnica, escrita clara e apresentação. Falhar em qualquer uma delas enfraquece muito a função.</div>`,
  },
  {
    id: 'f-entrevista-dados', cat: 'carreira',
    q: 'Como costuma ser entrevista para dados no início da carreira?',
    answer: `<p>Normalmente ela combina SQL, raciocínio sobre métrica, leitura de caso e alguma explicação de projeto ou análise feita por você. Em empresas mais exigentes, pode haver estatística básica, modelagem de dado e questionamento sobre como você validaria uma hipótese.</p>
    <p>O erro comum é estudar só ferramenta. Quem sabe usar notebook, mas não consegue explicar por que escolheu aquela métrica ou como limpou a base, parece raso rapidamente. Entrevista de dados costuma premiar clareza de pensamento mais do que volume de buzzword.</p>
    <div class="dica"><strong>Dica:</strong> Tenha uma análise própria pronta para explicar de ponta a ponta: pergunta, base, limpeza, escolha de métrica, limite da conclusão e próximos passos.</div>`,
  },
  {
    id: 'f-entrevista-seg', cat: 'carreira',
    q: 'Como costuma ser entrevista para segurança no começo?',
    answer: `<p>Muito mais fundamento do que “truque de exploração”. Web básica, HTTP, autenticação, rede, logs, sistema operacional, metodologia e ética aparecem cedo. Dependendo da vaga, pode haver laboratório simples, análise de cenário ou conversa sobre incidente.</p>
    <p>Empresas sérias querem ver se você pensa com método e respeita escopo, não só se consegue repetir técnica famosa. Quem só decorou ferramenta tende a travar quando o entrevistador muda o contexto ou pede justificativa mais profunda.</p>
    <div class="dica"><strong>Dica:</strong> Treine explicar vulnerabilidade como risco de negócio e caminho de correção. Falar só o nome da falha raramente impressiona quem contrata bem.</div>`,
  },
  {
    id: 'f-salario-dados', cat: 'mercado',
    q: 'Dados paga melhor do que desenvolvimento?',
    answer: `<p>Depende mais da empresa, senioridade e contexto do que do rótulo da trilha. Há times de dados pagando muito bem e times pagando mal; o mesmo vale para desenvolvimento. A ilusão de que uma área inteira “ganha mais” costuma vir de recorte enviesado de big tech, fintech ou vaga internacional.</p>
    <p>O que costuma aumentar remuneração de verdade é resolver problema caro, operar em ambiente mais complexo e conseguir comunicar impacto com clareza. Em dados isso aparece quando você influencia decisão; em desenvolvimento, quando você sustenta sistema importante. O padrão é impacto, não label.</p>
    <div class="dica"><strong>Dica:</strong> Em vez de perguntar “qual área paga mais?”, pergunte “qual tipo de problema caro eu consigo aprender a resolver com consistência?”</div>`,
  },
  {
    id: 'f-freela', cat: 'mercado',
    q: 'Freelance é boa porta de entrada para quem está começando?',
    answer: `<p>Na maioria dos casos, não como primeira aposta principal. Freelance exige vender, negociar escopo, proteger contrato, lidar com cliente confuso e entregar sem suporte de time. Para iniciante, isso soma dificuldade comercial em cima da dificuldade técnica — combinação pesada demais.</p>
    <p>Isso não impede freelance pequeno e controlado, especialmente se vier de rede de confiança. Mas tratar freelance como atalho mágico para experiência costuma gerar retrabalho, preço ruim e cliente insatisfeito. Primeiro emprego com revisão e contexto ainda é caminho mais seguro para a maioria.</p>
    <div class="dica"><strong>Dica:</strong> Se pegar freelance cedo, mantenha escopo muito pequeno, proposta por escrito e tecnologia que você realmente consegue sustentar depois.</div>`,
  },
];

  return { FAQS };
});
