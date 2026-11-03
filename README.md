# DM Estética Automotiva

Site da DM Estética Automotiva (Parnamirim-RN) com tabela de serviços e agendamento online.

## Estrutura

```
index.html   estrutura das seções
style.css    estilos e responsividade
script.js    serviços, preços, agendamento e painel
assets/      logo, vídeos e fotos
```

## Agendamento

Versão de demonstração: os agendamentos ficam no `localStorage` do navegador e a confirmação é enviada pelo WhatsApp. A camada de dados está isolada no objeto `Store` em `script.js`, pronta para ser trocada pelo Supabase.

Horários, preços e número de WhatsApp ficam em `CONFIG`, `SERVICES` e `EXTRAS` no início do `script.js`.

## Rodar localmente

Abra o `index.html` no navegador ou use uma extensão como Live Server.
