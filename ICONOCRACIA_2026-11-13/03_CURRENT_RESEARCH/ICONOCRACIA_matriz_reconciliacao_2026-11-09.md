# ICONOCRACIA — Matriz de reconciliação do dossiê de 7 de novembro de 2026

**Data da auditoria:** 9 de novembro de 2026, horário de Brasília.  
**Escopo:** cinco propostas documentais, seus seis registros canônicos correspondentes, os identificadores, as descrições, a codificação embutida e os comandos de sincronização.  
**Modalidade:** leitura e parecer. Nenhum patch importado; nenhum arquivo dos repositórios ou do Google Drive alterado; nenhum deploy realizado.

## 1. Parecer

**O pacote de 7 de novembro não deve ser importado tal como está.** Há informações institucionais aproveitáveis, algumas já incorporadas pela PR #243, mas a alegação de resolução definitiva não se sustenta. O pacote mistura correções documentais, novas identidades, recodificação dos dez indicadores e interpretações apresentadas com confiança alta.

Os problemas de maior impacto são:

1. O localizador BN 702390/240 continua abrindo a edição 44, posição 5, e não a edição 60.
2. O código BR-003 pertence ao Monumento à República de Belém, não à pintura de Villares.
3. A alegoria abolicionista recebe uma ligação de imagem para BR-005, outra obra, e uma descrição vertical incompatível com a reprodução institucional horizontal.
4. A República tem barrete verde na reprodução examinada; o patch o descreve vermelho.
5. O projeto filatélico A813 não foi executado como selo postal. Circulação postal efetiva não pode ser usada como dado deste objeto.
6. Os cinco objetos JSON propostos não têm nenhum dos nove campos obrigatórios de topo do esquema master-record. O crosswalk proposto também usa chaves diferentes das consumidas pelo código atual.
7. Os valores dos indicadores mudam sem uma nova observação documentada, instrumento, codificador ou adjudicação.

### Critérios de classificação

- **Confirmada:** fonte consultada sustenta precisamente o campo ou a operação descrita.
- **Provisória:** correspondência ou estimativa plausível e sustentada, com ressalvas materiais ou de identidade.
- **Contradita:** evidência positiva ou código atual incompatível com a proposta.
- **Dependente de verificação adicional:** evidência insuficiente para decidir; não equivale a falsidade.

A classificação é feita por afirmação. Um título confirmado não valida automaticamente data, proveniência, dimensões, interpretação ou patch inteiro.

## 2. Versões e identidades verificadas

| Fonte de trabalho | Estado observado |
|---|---|
| [Dossiê do Drive](https://docs.google.com/document/d/15MCeDBGQKF96rm5vF8kg9U1zoWxwBbJOQXAo9dhzU2Q/edit) | Criado em 07/11/2026 às 23:29:45 UTC; modificado às 23:29:48 UTC. Conteúdo atual integral examinado, incluindo os blocos operacionais. |
| [Corpus, main](https://github.com/anavvanzin/iconocracy-corpus/tree/8cdc287817d9da45a3f681232b8ce515c91e2926) | Commit 8cdc287817d9da45a3f681232b8ce515c91e2926; 337 linhas de registros, 337 item_id distintos. Cinco fontes em escopo correspondem a seis registros. Esta é uma contagem de registros, não de obras independentes nem de casos da tese. |
| [PR #243](https://github.com/anavvanzin/iconocracy-corpus/pull/243) | Incorporada em 05/11/2026. Auditoria de 31/10 e evidências de consulta preservadas. |
| [PR #244](https://github.com/anavvanzin/iconocracy-corpus/pull/244) | Aberta, não incorporada. Head e6d49c8fb6dd91373824c561e711598b53542592. Seu parecer é uma proposta sustentada; não representa a main atual. |
| [Repositório do site](https://github.com/anavvanzin/iconocracia/tree/26e878bbd740a5f8a1f0b5b303890326de8a897c) | Commit 26e878bbd740a5f8a1f0b5b303890326de8a897c. Acervo e enriquecimento examinados. As consultas diretas aos JSON publicados em iconocracia.com retornaram 403; não se afirma igualdade entre esses arquivos versionados e o deploy atual. |

### Mapeamento que deve ser preservado

| Fonte | Código usado no dossiê | Identidade canônica existente | Destino documental recomendado |
|---|---|---|---|
| As Estátuas Fallando | BR-1827-060 | BR-007 → 00a6bd05-0b74-54b4-9b93-604a012aaab6 | Manter identidade; registrar localizador rejeitado e pesquisa pendente. |
| Alegoria à Lei de 13 de Maio | BR-1888-123275 | BR-041 → 06ffa064-566d-5250-bb87-cb70c7ca6281; e dfe19295-505c-5df1-866e-e8bb695dbc5f | Preservar ambos. Tratar possível duplicação em adjudicação própria. |
| A República, Villares | BR-003 | e1d2e177-0905-a3bc-2e17-f6dd4f040db0 | Trabalhar sobre esse UUID e sobre a proposta #244. |
| A Lei Áurea, Visconti | BR-1903-A813 | BR-024 → 36e20300-49aa-5a7f-b626-70c8d058d5f8 | Aproveitar identificação A813 sem criar novo item. |
| O mundo às avessas | BR-1917-771 | BR-019 → 4c2e84a1-6683-5e56-82a1-dc94c8b96afe | Aproveitar localizador já reconciliado; não renumerar. |

**Colisões comprovadas:** BR-003 está ligado no crosswalk a ae8876ff-0ecb-5084-a871-3a205b8caba6, fotografia do Monumento à República, Belém, datada de 1940 na projeção. BR-005 está ligado a bfac2d3e-5230-5a27-970b-625e5eb7ed24, Alegoria da República de Villares. Não é a alegoria abolicionista.

Os cinco record_id novos do dossiê estão ausentes dos 337 item_id atuais. Serem strings com aparência de UUIDv5 não comprova geração determinística: faltam namespace, entrada normalizada e reprodução do cálculo. Mudança de URL não deve gerar nova identidade para um objeto já registrado.

## 3. Matriz documental por proposta

### 3.1. As Estátuas Fallando — proposta central contradita

| Campo/afirmação do dossiê | Classe | Confronto e correção recomendada |
|---|---|---|
| PagFis=240 identifica edição 60 | **Contradita** | Nova consulta ao DocReader retornou HTTP 200, PastaTxt=Ano 1827\\Edição 00044 e PagAtualTxt=5. A conclusão da auditoria anterior foi reproduzida. |
| Periódico chamado simplesmente Brasil | **Dependente de verificação adicional** | O acervo bib=702390 identifica Gazeta do Brasil: Quem quer ser livre, deve ser escravo da lei. O título da fonte pretendida ainda precisa do cabeçalho do fascículo correto. |
| Texto na edição 60, pp. 237–240, quatro páginas in-4º | **Dependente de verificação adicional** | A referência permanece legada. Não foi localizada e lida a página que a comprovaria. Paginação impressa, posição no fascículo e PagFis não são equivalentes por fórmula aritmética. |
| PDF HTTPS integral disponível | **Contradita** | O endereço proposto per702390_1827_00060.pdf retornou 404 nesta auditoria. Isso não demonstra desaparecimento da edição. |
| Domínio legado e diretórios desativados por migração geral | **Dependente de verificação adicional** | Falhas de URLs específicos não demonstram causa, abrangência ou cronologia de uma migração institucional. Retirar a explicação causal não documentada. |
| Custódia/digitalização pela Biblioteca Nacional; ano 1827 | **Confirmada, no nível do acervo** | Não basta para confirmar autoria anônima, texto, edição ou páginas da peça pretendida. |
| Suporte impresso textual | **Provisória para a peça pretendida** | Coerente com a referência legada; não equivale a uma escultura física. O suporte normalizado monumento/escultura na main é uma inconsistência anterior, também a revisar. |
| Justiça e Verdade, pedestal cívico, estátuas de pedra em espaço público | **Dependente de verificação adicional** | A descrição do corpus é uma pista, não a inspeção atual do original. Não afirmar materialidade, cenário e fala sem leitura do texto. |
| A voz feminina era juridicamente admitida somente quando petrificada | **Provisória como hipótese iconológica** | Não há dispositivo jurídico ou evidência de recepção apresentado que estabeleça essa condição. Exige fonte normativa e contexto discursivo próprios. |
| Confiança alta e nova ficha definitiva | **Contradita como conclusão operacional** | Preservar BR-007 e o histórico; não trocar a URL principal por 240. Marcar identidade bibliográfica e localização como pendentes. |

**Redação documental recomendada:** “Referência histórica a As Estátuas Fallando, atribuída a periódico de 1827; identificação do fascículo e paginação não confirmadas nesta revisão. O localizador 702390/240 foi excluído como correspondência à edição 60.”

Fontes: [DocReader 702390/240](https://memoria.bn.gov.br/DocReader/DocReader.aspx?bib=702390&PagFis=240); [auditoria canônica](https://github.com/anavvanzin/iconocracy-corpus/blob/8cdc287817d9da45a3f681232b8ce515c91e2926/docs/audits/2026-10-31-reconciliacao-fontes-brasileiras.md).

### 3.2. Alegoria à Lei de 13 de Maio — identidade confirmada; pacote provisório

| Campo/afirmação do dossiê | Classe | Confronto e correção recomendada |
|---|---|---|
| Villares, título da alegoria, MHN, registro 123275 | **Confirmada** | A ficha /pintura-alegorica-11/ registra esses elementos. Preservar a grafia de catálogo Décio Rodrigues Vilares como variante de autoridade. |
| Óleo sobre tela | **Confirmada** | Informação da ficha institucional. |
| Data exata 1888 / c. 1888 | **Provisória** | O catálogo registra 18--. Distinguir data do acontecimento representado, estimativa histórica e produção. Não gravar 1888 como data exata confirmada. |
| Dimensões 97 × 77 cm | **Dependente de verificação adicional** | A ficha 123275 não apresenta medidas. Esse par aparece no registro BR-005, outra pintura: há risco concreto de transferência indevida de dados. |
| Composição vertical | **Contradita** | A reprodução institucional examinada é horizontal, com várias figuras. A descrição visual deve ser refeita a partir desse objeto. |
| Figura alada, Isabel e correntes como descrição plenamente validada | **Dependente de verificação adicional** | O tema abolicionista está identificado; cada personagem e atributo requer cotejo visual adequado e identificação fundamentada. A fotografia consultada não autoriza a descrição simplificada do patch. |
| image_url = acervo.html?item=BR-005 | **Contradita** | É uma página de outro registro do próprio projeto, não a reprodução institucional da obra 123275. Remover essa associação. |
| Q62092154 como chave institucional resolvida | **Dependente de verificação adicional** | A consulta ao item e ao JSON foi bloqueada/indisponível. Não se confirmou aqui sua correspondência. A identidade já pode apoiar-se no inventário e URL do MHN. QID deve ser identificador externo separado. |
| Fonte de aquisição e proveniência | **Confirmada no alcance catalográfico** | A ficha informa compra em leilão, Processo 16/1941 e empréstimo ao Museu da Abolição entre 1983 e 2012. Não derivar disso uma encomenda de 1888. |
| /pintura-alegorica/ é a obra intitulada Três homens nus | **Contradita quanto ao título** | O catálogo do registro 6231 informa Minha Terra (tríptico), de Helios Seelinger. A frase descreve figuras, não o título. /pintura-alegorica-14/ é outra obra de Villares, de 1922, registro 310906. |
| Colisão técnica de slugs prova hierarquização institucional e negligência jurídica | **Dependente de verificação adicional / hipótese** | Constatou-se endereço inadequado. Não se comprovou sobrescrita de banco, causa do slug nem causalidade histórica do tratamento arquivístico. |

**Correção:** usar como referência principal a ficha 123275; conservar c. 1888 apenas como estimativa atribuída; não preencher medidas definitivas; registrar a possível duplicação entre os dois UUIDs sem fundi-los.

Fontes: [MHN 123275](https://mhn.acervos.museus.gov.br/acervo-museologico/pintura-alegorica-11/), [reprodução](https://mhn.acervos.museus.gov.br/wp-content/uploads/tainacan-items/175/45160/123275-scaled-1.jpg), [MHN 6231](https://mhn.acervos.museus.gov.br/acervo-museologico/pintura-alegorica/), [MHN 310906](https://mhn.acervos.museus.gov.br/acervo-museologico/pintura-alegorica-14/).

### 3.3. A República, Décio Villares — reconciliação visual corroborada; dados materiais provisórios

| Campo/afirmação do dossiê | Classe | Confronto e correção recomendada |
|---|---|---|
| A fotografia corresponde ao referente individual do registro e1d2e177… | **Provisória, com forte corroboração visual** | Fotografia institucional, descrição canônica de junho e imagem 47 da tese USP apresentam os mesmos traços distintivos. A PR #244 fundamenta essa reconciliação. O vínculo com o binário histórico adquirido continua sem prova. |
| Identificação definitiva via Q117764760 e SHA-1 | **Contradita** | QID identifica entidade Wikidata; hash identifica bytes de reprodução. Nenhum substitui tombo, cadeia de propriedade ou prova de aquisição. |
| Código BR-003 | **Contradita** | Já pertence à fotografia de Belém. Usá-lo para Villares introduz colisão ou substituição de entidade. |
| Título “estudo para escultura / bandeira” | **Dependente de verificação adicional** | A ficha parceira apresenta A República. A função preparatória específica não foi comprovada para esta pintura individual. |
| c. 1889; 1889–1931 | **Provisória / inadequada como data confirmada** | Datas herdadas do candidato coletivo não datam esta tela. A ficha parceira indica fim do século XIX/início do XX; Commons não informa data. |
| Óleo sobre tela | **Provisória, fonte atribuída** | Ficha do museu no Google Arts & Culture: tela. Tese USP, p. 185, imagem 47: papelão. Manter o conflito; fotografia não resolve substrato. Pintura é a normalização de suporte defendida pela PR #244, corrigindo moeda. |
| 40,5 × 33 × 4 cm | **Provisória** | Commons registra esse conjunto; ficha parceira informa 22 × 29 cm; tese USP, 29 × 22 cm. Não decidir que a diferença é moldura sem confirmação. |
| Museu da República / Palácio do Catete como história de propriedade completa | **Dependente de verificação adicional** | Custódia/localização, instituição publicadora, crédito fotográfico e coleção precisam de campos distintos. A ficha parceira indica coleção Presidência da República; falta inventário e processo de aquisição. |
| Barrete vermelho, perfil/três quartos, coroa de louros | **Contradita ou não sustentada para esta reprodução** | Observados: perfil à esquerda, barrete verde com faixa clara, túnica verde, cabelo longo, fundo azul/amarelo e assinatura inferior direita. Não se vê coroa de louros. |
| Instalada no Catete como emblema executivo desde a fundação de 1889 | **Dependente de verificação adicional** | Localização museológica posterior não demonstra instalação originária nem encomenda. O Catete tornou-se sede presidencial em 1897. |
| O regime constitucional de 1891 vedava alistamento e magistratura às mulheres | **Dependente de verificação adicional quanto à base jurídica e ao alcance** | Art. 70 não inclui mulheres na enumeração textual das exclusões. A frase não deve ser convertida em proibição constitucional expressa. Distinguir texto, interpretação e prática; a exclusão da magistratura exige documentação específica, não dedução da imagem. |
| Cânone positivista/Marianne prova intenção, recepção e exclusão | **Provisória como interpretação** | A ficha parceira admite a comparação com Marianne; isso não comprova programa individual de encomenda, efeito social ou causa da exclusão jurídica. |

**Correção:** reaproveitar a reconciliação visual da PR #244 como proposta sobre o UUID existente; manter data ampla atribuída e conflito tela/papelão; separar medidas por fonte; inventário desconhecido. A data não determina sozinha inclusão integral no recorte 1822–1922.

Fontes: [parecer #244](https://github.com/anavvanzin/iconocracy-corpus/blob/e6d49c8fb6dd91373824c561e711598b53542592/docs/audits/2026-11-06-villares-a-republica.md), [ficha parceira](https://artsandculture.google.com/asset/the-republic-d%C3%A9cio-vilares/wgGNhxbVbI31RQ?hl=pt-br), [Commons](https://commons.wikimedia.org/wiki/File:D%C3%A9cio_Villares_-_A_Rep%C3%BAblica_(MR).jpg), [fotografia institucional](https://museudarepublica.museus.gov.br/wp-content/uploads/2013/12/galeria-36.jpg), [tese USP, pp. 184–185](https://www.teses.usp.br/teses/disponiveis/93/93131/tde-16062021-151518/publico/2020_CarlosRogerioLimaJunior_VCorr.pdf), [Catete](https://museudarepublica.acervos.museus.gov.br/), [Constituição de 1891, arts. 70 e 73](https://legis.senado.leg.br/norma/579489/publicacao/15636401).

### 3.4. A Lei Áurea, Eliseu Visconti — núcleo catalográfico confirmado; narrativa corrigível

| Campo/afirmação do dossiê | Classe | Confronto e correção recomendada |
|---|---|---|
| A813; Visconti; c. 1903; projeto premiado em 1904 | **Confirmada** | Identificação catalográfica aproveitável e já referenciada na main. A813 é código de catálogo; não equivale automaticamente a tombo patrimonial. |
| Guache e nanquim sobre papel | **Confirmada** | Técnica e suporte do original conforme catálogo. |
| Dimensões não especificadas | **Confirmada** | Não substituir ausência de medida por estimativa. |
| Original de localização desconhecida | **Confirmada** | Separar original e reprodução. |
| Desaparecido desde 1926 / após Galeria Jorge | **Dependente de verificação adicional** | Exposição ou último marco conhecido não estabelece quando desapareceu. |
| Projeto Eliseu Visconti guarda o original | **Contradita** | O projeto conserva a miniatura da qual deriva a imagem; o original é de paradeiro desconhecido. O catálogo informa propriedade dos Correios ao menos até 1926. |
| Circulação postal e serialidade efetivamente realizadas | **Contradita** | O catálogo informa não execução. Distinguir finalidade projetada, divulgação em imprensa e emissão postal. |
| URL A813 e imagem A813.jpg | **Confirmada** | Catálogo acessado e JPEG proposto retornou 200; reprodução examinada. Não confundir acesso ao JPEG com aquisição do original. |
| Figura feminina, anjo, Libertas e aparato normativo | **Provisória como interpretação** | Separar observação, identificação catalográfica e atribuição analítica. O gênero da alegoria e a categoria Libertas precisam de justificativa; não decorrem de um campo preenchido. |
| Inscrição estatal/serialidade com pontuação máxima | **Dependente de verificação adicional** | Código de 0–3 exige âncoras do instrumento e observação justificada. Projeto não executado não demonstra repetição material nem circulação. |

**Redação documental recomendada:** “A Lei Áurea, c. 1903, projeto filatélico de Eliseu Visconti, A813, premiado em 1904 e não executado como selo. Original de localização desconhecida; reprodução derivada de miniatura conservada pelo Projeto Eliseu Visconti.”

Fonte: [Catálogo A813](https://eliseuvisconti.com.br/obra/a813/). A transcrição de época ali reproduzida contém “1988”; não adotar esse erro como data do acontecimento.

### 3.5. O mundo às avessas — identificação central confirmada; leitura e autoria pendentes

| Campo/afirmação do dossiê | Classe | Confronto e correção recomendada |
|---|---|---|
| O Malho, edição 771, 23/06/1917 | **Confirmada** | Data e edição corroboradas pelo Arquivo Central da UFJF; HTML da BN confirma ano e edição. |
| PagFis=34623 | **Confirmada** | Nova consulta retornou edição 0771, posição 25. A main já recebeu a correção pela #243. |
| p. 25 impressa, página inteira | **Dependente de verificação adicional** | Posição 25 no visualizador foi verificada; não houve leitura direta do fac-símile para confirmar número impresso ou extensão da imagem. |
| PDF HTTPS funcional | **Contradita** | per116300_1917_00771.pdf retornou 404. Manter como tentativa rejeitada, não URL de acesso validada. |
| Fotograma 4346 é charge de 1904; cadeia 34623 → 3462 → 4346 | **Dependente de verificação adicional** | A cadeia causal de erros não foi demonstrada. Retirar da ficha factual; manter apenas o histórico dos localizadores. |
| “Revista O Malho” como autor gráfico | **Dependente de verificação adicional** | É o periódico publicador. Autor da charge permanece não identificado nesta auditoria. |
| Zé Povo, Maurício de Lacerda e diálogo sobre sufrágio | **Confirmada no alcance da transcrição institucional** | A UFJF documenta personagens, texto e contexto parlamentar de 1917. Não apresentar como transcrição diretamente conferida na BN. |
| Projeto “1916–1917” | **Dependente de verificação adicional quanto à cronologia proposta** | A fonte institucional situa a proposta em 1917 e a lei que se pretendia modificar em 1916. Não fundir esses dois eventos. |
| Sátira antifeminista como leitura única | **Provisória** | A passagem alarmista convive com resposta constitucional favorável ao voto e desfecho irônico. Examinar o diálogo completo antes de concluir posição editorial unívoca. |
| Contra-alegoria como quarto regime | **Contradita metodologicamente** | Pode permanecer como valor técnico legado; analiticamente é teste crítico dos três regimes. Não criar um quarto regime com a importação. |

**Correção:** manter BR-019 e o URL 34623; conservar autoria gráfica e paginação impressa em aberto. Para o contexto, citar a transcrição da UFJF com sua procedência.

Fontes: [DocReader 116300/34623](https://memoria.bn.gov.br/DocReader/DocReader.aspx?bib=116300&PagFis=34623); [Arquivo Central da UFJF](https://www2.ufjf.br/arquivocentral/2023/02/26/24-de-fevereiro-dia-da-conquista-do-voto-feminino-no-brasil/).

## 4. O patch contém recodificação, não apenas saneamento de referências

Comparação com o objeto purificacao presente nos registros atuais:

| Fonte | Alterações propostas nos indicadores |
|---|---|
| As Estátuas Fallando | heraldizacao 2→1; enquadramento_arquitetonico 3→2; inscricao_estatal 0→1. |
| Alegoria abolicionista, BR-041 | apagamento_narrativo 2→1; monocromatizacao 2→0; inscricao_estatal 1→2. |
| A República, e1d2e177… | Todos os dez valores mudam; serialidade passa de 0 a 3, uniformizacao_facial de 0 a 3 e desincorporacao de 0 a 2. |
| Visconti, BR-024 | Os dez zeros de importação são substituídos por valores 2 ou 3. |
| O Malho, BR-019 | dessexualizacao 0→1; monocromatizacao 0→2; serialidade 0→2. |

BR-024 e BR-019 registram expressamente codificação pendente. Seus zeros não devem ser tratados como observações substantivas. Também não podem ser substituídos por valores novos sem registrar observador, instrumento, versão, evidência e decisão.

O ledger purification.jsonl é a autoridade para observações e proveniência de codificação segundo as instruções do projeto. A comparação acima detecta divergências nas cópias dos registros; não adjudica qual valor é correto. A PR #244 conserva a codificação legada, ao contrário do patch do dossiê.

As novas listas Iconclass e as categorias familia_alegorica, operacao e recusa também não foram justificadas por um cotejo do vocabulário e do codebook. Devem permanecer propostas separadas. O campo confianca=alta não supre essa documentação.

## 5. Auditoria dos comandos e formatos

### 5.1. Incompatibilidades verificadas

| Elemento | Resultado e risco |
|---|---|
| Cinco linhas do patch de records | Todas omitem master_record_version, batch_id, item_id, item_hash, input, webscout, iconocode, exports e timestamps. O esquema exige os nove. additionalProperties=false rejeita os campos novos soltos. A presença de JSON sintaticamente válido não torna as linhas master-record válidas. |
| record_id novo | Não substitui item_id. Se um adaptador o aceitasse como identidade nova, produziria duplicatas sem o histórico; se o usasse para substituir, perderia vínculos. |
| URLs | Os campos do patch contêm Markdown do tipo [https://…](https://…), não URLs simples. Corrigir tipo/serialização antes de qualquer consumo por API, deduplicação ou fetch. |
| Crosswalk | O arquivo corrente usa handle, uuid, class, source e created_at. O proposto usa legacy_id, record_id, resolution_method, status e canonical_url. O código acessa entry["handle"] e entry["uuid"]; anexar o formato novo pode causar erro de leitura. |
| Identidade BR-003 | Colisão já existente comprovada, não risco abstrato. Não criar alias para Villares. |
| Payload camada_i/camada_ii | Não é o formato de acervo.json nem o manifesto editorial vigente. publication_sync.py não procura acervo_patch_5_itens.json automaticamente. |
| status: approved da constelação | Não constitui evidência de aprovação autoral. O pipeline usa editorial_status e campos de aprovação; um status escrito pelo dossiê não substitui a decisão. |
| Direitos de imagem | Separar direitos da obra e da reprodução, crédito, licença declarada e fonte. O rótulo genérico “Domínio Público” do patch não demonstra todos esses campos para cada arquivo. |
| recorte_tese: true para todos | Seleção da tese é decisão metodológica. Não derivar inclusão integral de rótulos cronológicos aproximados ou de data do evento representado. |

### 5.2. Classificação dos comandos exatos

| Comando do dossiê | Segurança/efeito | Recomendação |
|---|---|---|
| cat patch_5_itens_br.jsonl >> data/processed/records.jsonl | **Inseguro.** Acrescenta linhas; não reconcilia identidades. Produz cinco linhas inválidas na primeira execução e repete-as em execuções seguintes. | Não executar. Preparar futuramente mudanças pontuais por item_id existente, com preservação de histórico. |
| cat patch_id_crosswalk.jsonl >> data/processed/id_crosswalk.jsonl | **Inseguro.** Formato incompatível, IDs novos e colisão BR-003. | Não executar. Eventuais aliases devem ser revisados individualmente no formato real. |
| python tools/scripts/validate_schemas.py data/processed/records.jsonl --schema master-record --verbose | **Seguro como diagnóstico de leitura.** Não corrige conteúdo nem reverte um append anterior. | Executar antes de qualquer operação mutante, sobre candidato separado e base. Não equivale a validação histórica. |
| python tools/scripts/code_purification.py --status | **Seguro como consulta.** Lê corpus e codificações. | Usar para estado operacional; não prova validade das observações. |
| python tools/scripts/vault_sync.py | **Incompleto.** command é argumento obrigatório. | Para inspeção, usar vault_sync.py status ou diff. Não substituir automaticamente por sync. |
| python scripts/publication_sync.py --check | **Seguro como checagem sem escrita pública.** Lê manifesto, corpus fixado e baseline; pode fazer consulta remota. | Não significa incorporação das cinco propostas nem revisão histórica. |
| python scripts/publication_sync.py | **Mutante.** Pode escrever acervo.json, stats.json, publication-overlay.json, constellations.json e estado privado. | Fora desta etapa; o manifesto atual nem contém as cinco propostas. |
| npx wrangler deploy | **Publicação externa.** Implanta o projeto configurado. | Não executar nesta auditoria. |

**Nenhum comando de sincronização com escrita é seguro para aplicar este pacote integral.** Os comandos seguros acima são de inspeção/validação. A sequência do dossiê não tem encadeamento que interrompa automaticamente todos os passos após erro; executar linha por linha pode continuar após uma validação malsucedida.

O manifesto editorial lido fixa corpus_commit=0d385ffc1c6b17f955780e672941c85fa6c0faed e uma baseline própria. Logo, sua aprovação técnica não demonstra sincronização com a main 8cdc2878… nem com a PR #244. Atualização do corpus, enriquecimento e publicação editorial são etapas distintas.

### 5.3. Divergências já presentes nas projeções do site

| Item | Corpus canônico/projeção atual | Arquivos versionados do site |
|---|---|---|
| BR-019 | URL 34623 e citação reconciliada | Conservam URL legado 4346. |
| BR-024 | Ficha A813 institucional | Conservam URL Commons. |
| BR-041 | Ficha MHN /pintura-alegorica-11/ | Conservam notícia antiga do MHN. |
| dfe19295… | Ficha MHN correta | URL MHN correta. |
| e1d2e177… | Título coletivo, 1889, URL genérica e suporte moeda; #244 pendente | Mantêm esses dados legados. |
| BR-007 | Referência legada com pendência; 240 rejeitado | Mantêm referência legada; isso não a torna confirmada. |

Essa defasagem não autoriza sobrescrever manualmente todo o acervo. Tampouco se deve declarar o site “corrigido” somente porque a main do corpus mudou.

Fontes técnicas: [master-record.schema.json](https://github.com/anavvanzin/iconocracy-corpus/blob/8cdc287817d9da45a3f681232b8ce515c91e2926/tools/schemas/master-record.schema.json), [id_crosswalk.jsonl](https://github.com/anavvanzin/iconocracy-corpus/blob/8cdc287817d9da45a3f681232b8ce515c91e2926/data/processed/id_crosswalk.jsonl), [vault_sync.py](https://github.com/anavvanzin/iconocracy-corpus/blob/8cdc287817d9da45a3f681232b8ce515c91e2926/tools/scripts/vault_sync.py), [publication_sync.py](https://github.com/anavvanzin/iconocracia/blob/26e878bbd740a5f8a1f0b5b303890326de8a897c/scripts/publication_sync.py), [manifesto editorial](https://github.com/anavvanzin/iconocracia/blob/26e878bbd740a5f8a1f0b5b303890326de8a897c/editorial/publication.json).

## 6. Separação das camadas de evidência

| Camada | Conteúdo admissível após correção | Conteúdo que exige trabalho adicional |
|---|---|---|
| Registro documental | Metadados atribuídos à ficha consultada; URLs verificadas; reproduções vistas; divergências de medidas e suporte; situação de inventário desconhecido; consulta com data. | Identificação do texto de 1827, autoria/página de O Malho, inventário e aquisição de A República, medidas da alegoria abolicionista. |
| Filologia teórica | Conceitos e passagens identificados por autor, obra, edição, página e contexto. | Menções genéricas a Panofsky, Warburg, Mondzain, Morelli/Ginzburg ou Martyn não demonstram que a teoria sustenta cada inferência histórica. Não foram certificadas nesta auditoria. |
| Hipótese iconológica | Comparação entre voz alegórica, representação estatal e exclusão política; leitura de contra-alegoria; testes das hipóteses de Ana. | Causalidade entre profusão de imagens e exclusão, intenção do artista, recepção social, circulação entre 1827 e 1917 e apagamento da agência negra não decorrem dos metadados. Precisam de fontes e contraprovas próprias. |

A montagem 1827–1917 pode ser uma hipótese comparativa. Não comprova elo histórico direto, transmissão ou mecanismo jurídico contínuo. O material de 1827 ainda não localizado limita, adicionalmente, esse argumento.

O catálogo registra fonte documental; não concede automaticamente autoria intelectual ou aprovação a cada texto analítico do dossiê. Expressões como “resolução definitiva”, “conceitos inéditos”, “status aprovado”, “verifica-se aumento sistemático” e “Purificação = 3” devem ser retiradas de enunciados factuais sem demonstração. Não foi demonstrada a série quantitativa citada pelo dossiê; um diagnóstico de preenchimento do banco não prova propriedade histórica das imagens.

Preservar três regimes interpretativos — Fundacional, Normativo e Militar — e contra-alegoria como teste crítico. Preservar dez indicadores separados, sem índice composto. Regime e intensidade não resultam automaticamente de ano, suporte ou instituição.

## 7. Correções documentais recomendadas, sem aplicação

1. Preservar todos os UUIDs, hashes históricos, evidence_id, codificações e decisões anteriores.
2. Retirar 240, os dois PDFs 404 e as hipóteses de migração/metátese da lista de acessos validados; conservar o registro das tentativas.
3. Para MHN 123275, manter a referência institucional já adotada na #243; separar data catalográfica e estimativa; corrigir reprodução e orientação; não fundir os dois registros.
4. Para A República, encaminhar a revisão pelo UUID e1d2e177… e pelas diferenças da #244. Não usar BR-003, não usar QID como tombo, não fixar tela/medidas/1889 como resolução definitiva.
5. Para A813, explicitar original, miniatura, atribuição de data, concurso e não execução; não atribuir ao objeto circulação postal.
6. Para O Malho, conservar localizador confirmado e referenciar a UFJF para a transcrição, mantendo autoria gráfica e página impressa pendentes.
7. Separar as propostas de recodificação em fila própria de adjudicação; não importá-las como saneamento bibliográfico.
8. Preparar eventual reconciliação futura como diff por campo, sobre identidades existentes, no esquema corrente. Só depois regenerar projeções e revisar o manifesto editorial. Isso é recomendação de sequência, não autorização de escrita nesta etapa.

## 8. Verificação realizada e limites

**Realizado:** leitura integral do dossiê; leitura da auditoria canônica e do parecer #244; estado das duas PRs; contagem do ledger; mapeamentos de IDs; inspeção dos cinco objetos JSON; comparação de campos e indicadores; leitura dos scripts relevantes; consulta renovada aos HTML da BN; fichas MHN, A813, Google Arts & Culture, Commons, UFJF e Constituição no Senado; inspeção visual de duas pinturas do MHN/Museu da República, A813 e imagem 47 da tese USP.

**Limites:** não houve leitura do texto pretendido de 1827 nem do fac-símile de O Malho. Q62092154 não foi confirmado. O substrato e a base das medidas de A República não foram decididos; o manifesto de binários não foi reconstituído. A #244 permanece proposta. Não se confirmou o conteúdo exato dos JSON em produção, devido ao 403.

A verificação técnica do patch foi estrutural: campos obrigatórios, propriedades admitidas, IDs, formato das URLs e comportamento do código. O validador completo do projeto não foi executado: jsonschema não estava disponível no ambiente de inspeção. Não se afirma teste de integração, aprovação de CI ou execução de pipeline. A incompatibilidade dos nove campos obrigatórios basta para rejeitar as cinco linhas como master-record atuais.

### Evidência reproduzida nesta sessão

| Consulta | Resultado |
|---|---|
| BN 702390/240 | HTTP 200; Gazeta do Brasil; Ano 1827 / Edição 00044; posição 5. |
| BN 116300/34623 | HTTP 200; Ano 1917 / Edição 0771; posição 25. |
| Dois PDFs propostos no domínio memoria.bn.gov.br | HTTP 404. |
| galeria-36.jpg | HTTP 200; 224.269 bytes; SHA-1 92a3e253f9a8368129474047e2dcb076c699f453. Coincide com a declaração do Commons. |
| A813.jpg | HTTP 200; 83.786 bytes. |
| Tese USP | PDF baixado; imagem na p. impressa 184 e legenda na p. 185 conferidas; correspondem às páginas 185–186 do arquivo. |

SHA-256 das capturas locais, para distinguir observação de simples referência:

- BN 1827 HTML: 3d7360ef3f8ce43e07176790e3ed7b9f9cf880c6236778cf8899c478e726ac90.
- BN 1917 HTML: 0a28a202630d25060ba522efde687c7e94aab4936c47557558f5951650849e6c.
- Fotografia A República: 69dbbd89d59efd8f9025cfadec6d59b789647a9b534b44e427ed24e7563300b3.
- Fotografia MHN 123275: a2603eb5f016e3f435afb330aac9cdeaa786eab60bf85d3159fa6e51b8b40616.
- Reprodução A813: 5b2c150955cbe352e5db6ef44bbda9f9499b15a90b74cbec3366857f0b56a955.
- Tese USP: 0740f3413aba1fb5ae80b97663ed0c4bc301c57ab75aa167bd5703c25b018fa3.

Esses hashes identificam os arquivos consultados, não autenticam inventários, datas de execução ou interpretação histórica.

