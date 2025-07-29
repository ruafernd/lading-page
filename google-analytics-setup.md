# Configuração Google Analytics - Dental Magic

## 📊 Configuração Google Analytics 4 (GA4)

### 1. Criar Conta Google Analytics
- Acesse: https://analytics.google.com/
- Clique em "Começar a medir"
- Preencha os dados da conta

### 2. Configurar Propriedade
- **Nome da Propriedade**: Dental Magic
- **Fuso Horário**: (GMT-03:00) Brasília
- **Moeda**: Real brasileiro (BRL)
- **Indústria**: Saúde
- **Tamanho da empresa**: Pequena empresa

### 3. Configurar Stream de Dados
- **Nome do stream**: Dental Magic Website
- **URL do site**: https://dentalmagicpb.netlify.app/
- **Nome do stream**: Dental Magic Web

### 4. Instalar Código de Rastreamento

#### Adicione este código no `<head>` do seu HTML:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Substitua `GA_MEASUREMENT_ID` pelo ID real fornecido pelo Google Analytics.**

### 5. Configurações Importantes

#### Eventos Personalizados para Rastrear:
- **Agendamento WhatsApp**: Quando clicar no botão WhatsApp
- **Visualização de Tratamentos**: Quando visualizar seção de tratamentos
- **Visualização de Localização**: Quando visualizar mapa
- **Visualização de Depoimentos**: Quando visualizar depoimentos
- **Clique em Convênios**: Quando clicar em convênios

#### Configurar Conversões:
1. **Agendamento**: Clique no WhatsApp
2. **Contato**: Clique em "Como Chegar"
3. **Engajamento**: Tempo na página > 2 minutos

## 📈 Métricas Importantes para Acompanhar

### 1. Tráfego
- **Usuários**: Quantos visitantes únicos
- **Sessões**: Quantas visitas ao site
- **Visualizações de página**: Quantas páginas foram vistas

### 2. Comportamento
- **Tempo na sessão**: Quanto tempo ficam no site
- **Taxa de rejeição**: Quantos saem sem interagir
- **Páginas por sessão**: Quantas páginas visitam

### 3. Conversões
- **Agendamentos**: Cliques no WhatsApp
- **Contatos**: Cliques em informações de contato
- **Engajamento**: Tempo na página

### 4. Dispositivos
- **Desktop**: Usuários em computador
- **Mobile**: Usuários em celular
- **Tablet**: Usuários em tablet

## 🎯 Configurações Avançadas

### 1. Filtros
- **Excluir IPs internos**: Para não contar acessos da equipe
- **Excluir bots**: Para dados mais precisos

### 2. Metas
- **Agendamento**: Clique no WhatsApp
- **Contato**: Clique em informações
- **Engajamento**: Tempo > 2 minutos

### 3. Relatórios Personalizados
- **Relatório de Conversões**: Foco em agendamentos
- **Relatório de Dispositivos**: Performance mobile
- **Relatório de Localização**: De onde vêm os visitantes

## 📱 Configuração Mobile

### 1. Verificar Mobile-Friendly
- Use Google Mobile-Friendly Test
- Otimize para dispositivos móveis

### 2. Configurar App (se tiver)
- Integrar com Firebase Analytics
- Rastrear downloads e uso

## 🔍 Integração com Google Search Console

### 1. Conectar Contas
- No GA4: Admin > Propriedade > Associações
- Conecte com Google Search Console

### 2. Relatórios Combinados
- Tráfego orgânico + comportamento
- Palavras-chave + conversões

## 📊 Relatórios Recomendados

### 1. Relatório de Aquisição
- **Canais**: De onde vêm os visitantes
- **Fonte/Meio**: Sites que enviam tráfego
- **Campanhas**: Efetividade de marketing

### 2. Relatório de Comportamento
- **Páginas mais visitadas**: Quais seções são populares
- **Fluxo de comportamento**: Como navegam no site
- **Eventos**: Interações específicas

### 3. Relatório de Conversões
- **Funnel de conversão**: Jornada do usuário
- **Taxa de conversão**: Efetividade do site
- **Valor de conversão**: ROI das ações

## 🚀 Otimizações Baseadas em Dados

### 1. Análise de Performance
- **Páginas com alta taxa de rejeição**: Otimizar
- **Páginas com baixo tempo**: Melhorar conteúdo
- **Dispositivos com baixa conversão**: Otimizar mobile

### 2. Testes A/B
- **Botões de CTA**: Testar cores e textos
- **Layout**: Testar diferentes estruturas
- **Conteúdo**: Testar diferentes abordagens

### 3. Segmentação
- **Novos vs. Recorrentes**: Diferentes estratégias
- **Dispositivos**: Otimizações específicas
- **Localização**: Marketing local

## 📅 Frequência de Análise

### Diário
- Conversões e agendamentos
- Erros e problemas técnicos

### Semanal
- Performance geral
- Tendências de tráfego
- Efetividade de campanhas

### Mensal
- Análise completa
- Planejamento de melhorias
- Relatório para stakeholders

## 🎯 Próximos Passos

1. **Configurar Google Tag Manager**
2. **Implementar Enhanced Ecommerce**
3. **Configurar Remarketing**
4. **Implementar Google Optimize**
5. **Configurar Data Studio**

## 📞 Suporte

- Documentação GA4: https://support.google.com/analytics/
- Google Analytics Academy: https://analytics.google.com/analytics/academy/
- Google Analytics Help: https://support.google.com/analytics/ 