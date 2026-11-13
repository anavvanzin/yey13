# Status do projeto — CPLX Artifacts / ICONOCRACIA

**Versão corrigida em 1 de novembro de 2026.** Consulta aos documentos de trabalho, às decisões metodológicas e ao estado dos repositórios e das páginas públicas em 01/11. As datas abaixo usam o horário de Brasília (UTC−3), salvo indicação contrária. Cada resultado técnico conserva a data da execução que o sustenta.

## 1. Tese — ICONOCRACIA, PPGD/UFSC

### Recorte e arquitetura metodológica

O eixo argumentativo da tese está definido como **Brasil, 1822–1922**, com comparações internacionais justificadas. A tarefa atual é consolidar sua aplicação ao manuscrito e à seleção dos casos. Esse recorte deve permanecer distinto da janela do catálogo operacional transnacional, registrada no contrato de julho como 1800–2000. A inclusão de um objeto no catálogo não determina sua inclusão na demonstração da tese. [1]

A diretriz de 26/10 organiza a análise em **três estratos epistemológicos**: registro documental, filologia dos conceitos teóricos e construção de hipóteses iconológicas. A conciliação metodológica de 26/10 já aplica o recorte brasileiro e articula catálogo documentado, leitura densa de casos e montagem. O atlas conserva sua função de estrutura argumentativa e operador relacional. [1–2]

Permanecem **dez indicadores ordinais de 0 a 3, separados**, acompanhados de inventário verbal e interpretação contextualizada. Os três regimes constituem uma tipologia de leitura; a contra-alegoria funciona como teste crítico. Indicadores, somas ou médias não atribuem automaticamente um regime nem demonstram eficácia jurídico-política. O contrato de 31/07 deve ser lido com as decisões posteriores. [3]

Há uma **divergência documental sobre o codebook**: a decisão de 31/07 registra a passagem a v2.3.0, enquanto o arquivo MASTER ainda se identifica como v2.2.1 e o arquivo v2.3.0 conserva metadados de patch piloto de junho. A pendência é reconciliar os documentos com as decisões e identificar a versão efetivamente aplicada em cada observação. [3–4]

### Índice composto, manuscrito e testes

O índice composto foi aposentado em **28/07**. A remoção definitiva de `endurecimento_score` dos dados ativos, exportadores e manuscrito foi decidida em **24/09**, com verificação operacional em **29/09**. A PR #239, de **24/10**, retirou resíduos do argumento quantitativo no manuscrito, tratou N=145 como instantâneo histórico e corrigiu numeração e build. Portanto, a retirada do composto não deve ser apresentada como decisão nascida em 24/10. [3, 6]

O workflow de validação associado à #239 passou. A descrição da PR registra **492 testes aprovados, dois xfailed e 337/337 registros válidos no schema** naquela rodada. Isso não permite afirmar que todo o CI permanece sem problemas: o CRDA Scan falhou posteriormente porque a ação `redhat-actions/crda` não foi encontrada, antes de executar a análise. A falha não é um resultado de vulnerabilidade nem uma reprovação da suíte do corpus. [6–7]

**O arquivo `tese/tese_completa.docx` não foi regenerado na #239**. Precisa ser reconstruído antes de distribuição para refletir as fontes revisadas. [6]

N=145 é um instantâneo histórico; percentuais atuais exigem fonte, versão, unidade de contagem, exclusões e denominador próprios.

### Originalidade e comparações

A formulação da contribuição autoral continua em consolidação, dentro do recorte já assumido. A frase **“nada disso foi adotado ainda” deve ser retirada**: há conciliação metodológica e correções em textos de trabalho, e o capítulo 2 já contém tratamento mais cuidadoso de Landes e Resnik/Curtis. Isso não comprova a incorporação integral de todas as recomendações de uma rodada específica. [1, 5]

O memorando de 26/10 distingue os estados das verificações:

- **Landes/Pateman:** recomenda retirar a caracterização de Landes como autora “sem Pateman”; a passagem pertinente do livro ainda requer cotejo direto para citação.
- **Elisabete Leal:** a tese de 2006 já é mobilizada no cotejo registrado no memorando. Sua incorporação no estado da arte final deve ser conferida; não cabe descrevê-la simplesmente como precedente ainda desconhecido pelo projeto.
- **Resnik/Curtis:** o artigo consultado sustenta uma interlocução sobre gênero e iconografia da Justiça, mas não autoriza uma crítica genérica à ausência de método no livro de 2011. A leitura e localização das passagens do livro permanecem prioritárias.
- **Contribuição própria:** deve ser demonstrada pelas operações visuais e jurídicas brasileiras reconstruídas nas fontes, pelas mediações institucionais e pelo rendimento dos conceitos. A formulação final e a seleção dos casos continuam trabalho autoral. [5]

O memo sobre “Motherland”, os parágrafos de rascunho e as figuras candidatas devem conservar o estatuto de **materiais comparativos de trabalho**. Esta revisão não localizou uma evidência suficiente de aprovação de capítulo ou adoção integral de suas propostas.

O **LPAI v3 permanece proposta para deliberação** nos documentos consultados. Sua eventual adoção exige decisão e registro de mudanças, mas não bloqueia a aplicação do método já estabelecido. [8]

## 2. Corpus e publicações dos dados

| Camada | Situação verificada em 01/11 | Como interpretar |
|---|---:|---|
| Ledger canônico — `records.jsonl` | **337 registros** | Inventário de registros, no commit `b1333ea`. |
| Observações — `purification.jsonl` | **286 observações** | Unidade distinta do total de registros; não implica 286 casos integralmente validados. |
| Catálogo público servido por iconocracia.com | **337 registros e 337 IDs únicos** | Confirmação do JSON publicado, além da projeção no repositório. |
| Filtro público Brasil, 1822–1922 | **53 registros** | Resultado operacional dos metadados; não equivale à seleção final e validação documental dos casos da tese. |
| 95 itens / relação histórica 335↔95 | **Instantâneos anteriores** | Não descrevem o catálogo público atual. |

As contagens canônicas foram reexecutadas nos arquivos atuais; as públicas foram verificadas no JSON servido pelo site. [9–10]

O relatório de enriquecimento de 29/09 já distingue **fonte autoritativa com 337 registros, camada legada de 95 e saída com 337**. A referência 335↔95 pertence a uma auditoria anterior. Não deve ser apresentada como equivalência atual: o `id_crosswalk.jsonl` consultado tem 316 linhas/UUIDs e responde a um mecanismo específico de identificação, diferente da contagem total do catálogo. [11]

A entrada de candidatos deve preservar staging, proveniência e promoção rastreável. A publicação de um registro não substitui a documentação histórica de suas afirmações. A seleção para o núcleo da tese continua sujeita a pertinência, atribuição institucional, cronologia e densidade documental.

A branch **`main` de `iconocracy-corpus` permanece em `b1333ea`, de 24/10/2026**, merge da #239. A frase “sem commits desde 27/10” é compatível com esse resultado, mas a data do último commit é mais informativa. Esta constatação diz respeito à branch principal; não mede o trabalho em sessões, documentos externos ou todos os branches. [6]

A referência a um “Atlas legado” precisa identificar URL, arquivo e versão. O atlas como método, o grafo de navegação do repositório e os protótipos publicados têm funções diferentes. Foi confirmada uma divergência na apresentação pública atual de regimes; não foi comprovado que todo artefato denominado Atlas ainda utiliza o composto.

## 3. Sites

### iconocracia.com / Mnemosyne Viva

**Germania DE-100M-1908.** A correção principal foi integrada pela #80 e está publicada: a identificação da figura em medalhão, os créditos e a distinção entre data impressa e reimpressões foram atualizados. Resta corrigir uma justificativa residual de classificação que ainda menciona “suporte numismático, pose sentada”, incompatível com a identificação revisada. [12]

**Validação do acervo.** A última execução agendada localizada é a de **26/10**, com JSON e schema válidos, **135 URLs verificadas, 82 acessíveis com status 200 e 53 problemas**. A rodada anterior tinha 50 problemas. Assim, as três ocorrências novas estão incluídas em um conjunto de 53; não são o total de falhas. [13]

| Registro | Ocorrência nova registrada em 26/10 | Situação nesta revisão |
|---|---|---|
| BR-010 — Eliseu Visconti | Certificado SSL expirado no endereço da imagem. | Reteste externo ainda pendente. |
| EU-003 — Jacob Matham | Timeout no endereço da imagem da HAB. | Reteste externo ainda pendente. |
| EU-006 — Johann Oswald Harms | Timeout no endereço da imagem da HAB. | Reteste externo ainda pendente. |

Esses resultados descrevem o acesso automatizado na data da execução. Bloqueios, limites de acesso e timeouts precisam ser distinguidos de URLs definitivamente inválidas antes de substituir fontes.

Em **01/11**, os workflows de desempenho e de publicação passaram, e houve atualização automática do histórico de desempenho. São execuções diferentes da validação das URLs; não encerram a pendência registrada em 26/10. [14]

**Coerência metodológica pública.** A homepage atual ainda apresenta a contra-alegoria como quarto regime, e o arquivo público de estatísticas também a agrega como categoria. A revisão precisa harmonizar apresentação, filtros e explicações com a decisão de três regimes e teste crítico. Essa divergência está na publicação atual e não deve ser atribuída exclusivamente a um Atlas antigo. [3, 10, 15]

**Trabalho aberto.** A PR #81, **FUNDIÇÃO**, propõe um arcade em `/jogo` e permanece aberta. É distinta do Baralho das Alegorias. Também permanecem abertas intervenções específicas, como a #77, sobre o tema com armazenamento bloqueado, e a #71, sobre URLs de BE-002 e BR-005. [16]

### anavanzin.com

As PRs **#179, #180, #181 e #182 foram integradas**. O texto histórico “review candidate” no título da #180 não representa seu estado atual.

| Mudança | Estado | Merge em Brasília |
|---|---|---|
| #179 — consolidação dos releases Cloudflare Pages e previews | Integrada | **31/10, 20h49** |
| #180 — integração editorial de Home e Research/Works | Integrada | **31/10, 20h59** |
| #181 — composição da homepage, ícones vetoriais e autoria das exposições | Integrada | **31/10, 23h15** |
| #182 — homenagem à mãe e prioridade às apresentações acessíveis | Integrada | **01/11, 18h29** |

Os links de ORCID foram adicionados pelo commit `5e5cb39`, em **27/10, 22h18 de Brasília**, correspondente a 28/10, 01h18 UTC. A data original de 28/10 provinha do fuso UTC. [17]

Os checks de release e a publicação Cloudflare Pages do último merge passaram. A consulta ao vivo confirmou que **Home e Trabalhos refletem as mudanças verificadas**: a homenagem está presente, e os 18 identificadores de cartões de Trabalhos e sua ordem coincidem com o último commit. [18–19]

A divergência observada em 26/10 deve permanecer como registro histórico. A pendência “aprovar a integração #180” está encerrada. Uma conferência adicional precisa nomear as páginas e os problemas restantes; a verificação de Home e Trabalhos não constitui auditoria de todas as páginas internas.

## 4. Artefatos

**Baralho das Alegorias.** O relatório de origem informa uma versão de campanha com quatro fases e relíquias. Essa versão não foi funcionalmente revalidada nesta revisão, portanto “estável” deve ser mantido apenas como estado anteriormente relatado. O documento acessível localizado no Drive é uma versão histórica de julho e não certifica a campanha atual. Sua função de apoio à organização do trabalho e à prioridade da escrita pode ser preservada, sem atribuir ao jogo autoridade para definir o método da tese. [20]

## 5. Pendências atualizadas

1. **Consolidar a aplicação do recorte Brasil, 1822–1922** no manuscrito, nos casos exemplares e nos comparadores. O período principal já é direção assumida.
2. **Fechar a formulação da contribuição e o cotejo bibliográfico**, registrando por passagem o que foi verificado e incorporado, sobretudo Landes/Pateman, Leal e Resnik/Curtis.
3. **Reconciliar contrato, codebooks e apresentação pública** quanto a versões, indicadores separados, três regimes e estatuto crítico da contra-alegoria.
4. **Corrigir a justificativa residual de Germania** e preservar a identificação e a proveniência já corrigidas.
5. **Revalidar as ocorrências de URL e tratar o conjunto de 53 problemas** do último relatório, distinguindo regressões, bloqueios temporários e endereços inválidos. Uma nova execução precisa ter seu resultado registrado.
6. **Restabelecer o workflow CRDA** ou rever sua manutenção, pois a ação externa não é resolvida. A falha ocorre antes da análise.
7. **Regenerar o DOCX da tese antes de distribuir**, para incorporar as fontes revisadas na #239.
8. **Revisar as frentes realmente abertas dos sites**, incluindo #81 e eventuais problemas específicos de páginas internas. #180 já foi integrada e sua aprovação não é uma pendência.
9. **Manter o LPAI v3 identificado como proposta**; deliberar sobre alterações apenas quando houver uma mudança concreta a registrar.

## 6. Alcance desta revisão

Este relatório corrige o estado do projeto; não constitui nova validação iconológica dos 337 registros nem auditoria integral da bibliografia. As contagens, os metadados dos PRs e os resultados das execuções foram conferidos. A consulta pública foi limitada aos dados e às páginas indicadas. O reteste das três URLs externas, a validação funcional da campanha do Baralho e o status de aprovação do memo Motherland permanecem sem confirmação atual.

## Fontes e evidências

**[1] Recorte e conciliação metodológica.** [README do corpus](https://github.com/anavvanzin/iconocracy-corpus/blob/b1333ea46fe26c4c9671c74790dbffed5ce22c23/README.md); [capítulo metodológico reconciliado, 26/10](https://chatgpt.com/library?file_id=libfile_3ba18c8439c081918b71be73cdc17786&account_id=personal). Documento de trabalho que aplica decisões anteriores e preserva escolhas ainda abertas.

**[2] Três estratos.** [Nova diretriz operacional: aplicação ao recorte 1822–1922, 26/10](https://docs.google.com/document/d/1QFSiDjAIRDXNpL9Dkt6_Ffdz-KjXjzpiJRld7J6nCsQ/edit). Consultado para o procedimento; seus exemplos históricos não foram promovidos a fatos verificados nesta revisão.

**[3] Decisões metodológicas.** [Aposentadoria do composto, 28/07](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/decisions/2026-07-28-aposentadoria-do-indice-composto.md); [aparato mínimo, 29/07](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/decisions/2026-07-29-aparato-minimo-suficiente.md); [consolidação, 31/07](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/decisions/2026-07-31-metodologia-2-0-iconometry-consolidation.md); [remoção definitiva, 24/09, com complemento de 29/09](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/decisions/2026-09-24-remocao-definitiva-do-campo.md).

**[4] Documentação operacional.** [Contrato de 31/07](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/METHOD_CONTRACT_2026-07-31.md); [codebooks](https://github.com/anavvanzin/iconocracy-corpus/tree/main/docs/methodology/codebooks); [v2.3.0](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/methodology/codebooks/codebook-v2.3.0.md).

**[5] Originalidade.** [Síntese crítica e mapa de atualização, 26/10](https://chatgpt.com/library?file_id=libfile_e6ffbcc1e1dc81918b63a526a7259a82&account_id=personal); [capítulo 2 no repositório](https://github.com/anavvanzin/iconocracy-corpus/blob/main/tese/manuscrito/Capitulo2_iconocracia.md). A primeira fonte documenta o alcance de sua própria consulta bibliográfica; a presente revisão não repetiu integralmente esses cotejos.

**[6] Revisão do manuscrito em 24/10.** [PR #239](https://github.com/anavvanzin/iconocracy-corpus/pull/239); [commit b1333ea](https://github.com/anavvanzin/iconocracy-corpus/commit/b1333ea46fe26c4c9671c74790dbffed5ce22c23); [Validate Schemas, execução 40143619790](https://github.com/anavvanzin/iconocracy-corpus/actions/runs/40143619790). A PR registra o DOCX ainda não regenerado.

**[7] CI posterior.** [CRDA Scan, execução 41256960989](https://github.com/anavvanzin/iconocracy-corpus/actions/runs/41256960989), 31/10, 21h29 de Brasília / 01/11, 00h29 UTC; log de setup: “Unable to resolve action redhat-actions/crda, repository not found”. [CodeQL, execução 41331342702](https://github.com/anavvanzin/iconocracy-corpus/actions/runs/41331342702), concluída com sucesso em 01/11.

**[8] LPAI v3.** [Plano mestre de transição](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/metodologia/plano-mestre-transicao-lpai-v3.md); [reconciliação de publicação e registros, 16/09](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/metodologia/reconciliacao-publicacao-registros.md).

**[9] Contagens canônicas.** [records.jsonl](https://github.com/anavvanzin/iconocracy-corpus/blob/b1333ea46fe26c4c9671c74790dbffed5ce22c23/data/processed/records.jsonl); [purification.jsonl](https://github.com/anavvanzin/iconocracy-corpus/blob/b1333ea46fe26c4c9671c74790dbffed5ce22c23/data/processed/purification.jsonl); [projeção corpus-data.json](https://github.com/anavvanzin/iconocracy-corpus/blob/b1333ea46fe26c4c9671c74790dbffed5ce22c23/corpus/corpus-data.json).

**[10] Dados públicos consultados ao vivo.** [corpus-data-enriched.json](https://iconocracia.com/data/corpus-data-enriched.json); [stats.json](https://iconocracia.com/data/stats.json). Respostas HTTP 200; contagens de metadados, sem certificação iconológica.

**[11] Histórico dos 95 itens e do crosswalk.** [Relatório de enriquecimento de 29/09](https://github.com/anavvanzin/iconocracy-corpus/blob/main/corpus/enrichment-report.md); [checkpoint de identificadores citáveis](https://github.com/anavvanzin/iconocracy-corpus/blob/main/docs/records-citable-implementation.md); [crosswalk atual](https://github.com/anavvanzin/iconocracy-corpus/blob/main/data/processed/id_crosswalk.jsonl); [reconciliação da PR #33](https://github.com/anavvanzin/iconocracia/blob/main/docs/pr33-reconciliation.md).

**[12] Germania.** [PR #80](https://github.com/anavvanzin/iconocracia/pull/80); [observação sobre a justificativa residual](https://github.com/anavvanzin/iconocracia/pull/80#discussion_r4368917089); registro DE-100M-1908 no JSON público de [10].

**[13] Validação das URLs.** [Execução de 26/10](https://github.com/anavvanzin/iconocracia/actions/runs/40331481023); [relatório de 26/10 na issue #14](https://github.com/anavvanzin/iconocracia/issues/14#issuecomment-6417337821); [relatório de 19/10](https://github.com/anavvanzin/iconocracia/issues/14#issuecomment-6266894617). Ocorrências novas: [BR-010](https://eliseuvisconti.com.br/wp-content/uploads/2017/06/D702.jpg), [EU-003](http://diglib.hab.de/varia/haum/matham-j-wb3-0015/max/000001.jpg), [EU-006](http://diglib.hab.de/varia/haumzeichnungen/z-04356/max/000001.jpg). URLs reproduzidas para rastreabilidade, não como atestado de acesso atual.

**[14] Desempenho e publicação em 01/11.** [Performance do acervo](https://github.com/anavvanzin/iconocracia/actions/runs/41304468137); [GitHub Pages](https://github.com/anavvanzin/iconocracia/actions/runs/41304498621); [commit automático 14ff9d8](https://github.com/anavvanzin/iconocracia/commit/14ff9d8de057d1d3e72d9e00c7bd3f46e01fd267).

**[15] Apresentação metodológica pública.** [Homepage de iconocracia.com](https://iconocracia.com/), consultada em 01/11, trecho “Como a pesquisa lê”, em confronto com [3]. Não se utilizou a página Sobre recuperada com cache antigo como prova do estado atual dessa página.

**[16] Frentes abertas.** [#81 — FUNDIÇÃO](https://github.com/anavvanzin/iconocracia/pull/81); [#77](https://github.com/anavvanzin/iconocracia/pull/77); [#71](https://github.com/anavvanzin/iconocracia/pull/71).

**[17] anavanzin — alterações integradas.** [ORCID, commit 5e5cb39](https://github.com/anavvanzin/anavanzin/commit/5e5cb39); [#179](https://github.com/anavvanzin/anavanzin/pull/179); [#180](https://github.com/anavvanzin/anavanzin/pull/180); [#181](https://github.com/anavvanzin/anavanzin/pull/181); [#182](https://github.com/anavvanzin/anavanzin/pull/182). Metadados atuais confirmam todos os quatro merges; datas convertidas de UTC.

**[18] anavanzin — release e deploy.** [Commit 34b66cd](https://github.com/anavvanzin/anavanzin/commit/34b66cd87f202b400f3cc6f997d2c5268cc32fdc); [Pages release checks](https://github.com/anavvanzin/anavanzin/actions/runs/41352283706); [deployment Cloudflare Pages](https://0d836d79.anavanzin.pages.dev).

**[19] anavanzin — publicação observada.** [Home](https://anavanzin.com/); [Trabalhos](https://anavanzin.com/trabalhos/). Consulta ao vivo em 01/11, com conferência de marcadores de conteúdo e ordem dos 18 cartões; não comparação integral byte a byte de todo o site.

**[20] Baralho.** [Baralho das Alegorias.dc](https://docs.google.com/document/d/1T7bC28ggUwuNBtyacZvUoc6CGX8xDfHu0vOZypxhnVs/edit), versão histórica de julho. A descrição da campanha com quatro fases e relíquias provém do relatório entregue para correção e não foi certificada por esse documento.

