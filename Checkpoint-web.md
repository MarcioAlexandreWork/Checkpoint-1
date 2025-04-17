# Checkpoint  Sistema Basico de Gerenciamento de Vinhos


**Projeto: _vinharia-agnello_**

---

### 👥 Trabalho em Grupo

- Este checkpoint deve ser feito **em grupo de até 5 pessoas**.
- O projeto deve ser desenvolvido **na branch `main`** do repositório.
- Todos os integrantes devem participar ativamente:
  - **Cada integrante deve realizar pelo menos *dois commits*** com mensagens claras.
- O código deve estar **organizado, indentado e comentado** quando necessário.

---

### 📤 Entrega

- O grupo deve:
  - Criar um repositório no GitHub com o nome `vinharia-agnello`
  - Trabalhar diretamente na **branch `main`**
  - Ativar o **GitHub Pages**
  - Enviar via **Microsoft Teams**:
    - O link do repositório no GitHub
    - O link da página no GitHub Pages

---

### 📄 README.md – Explicação do Projeto

O arquivo `README.md`, localizado na raiz do projeto, deve conter:

- Nome do projeto  
- Descrição resumida (ex: "Sistema básico para cadastro e análise de vinhos artesanais da Vinheira Agnello")  
- Lista com o **nome completo dos integrantes do grupo**
- Link do GitHub Pages  
- (Opcional) Imagem da tela ou GIF de demonstração

---

### 🧠 Objetivo da Atividade

Desenvolver um sistema **básico de gerenciamento de vinhos** usando apenas os recursos de JavaScript já estudados:

- Variáveis e operadores  
- `prompt()`, `alert()` e `console.log()`  
- Controle de fluxo (`if`, `else`, operadores relacionais e lógicos)

---

### 📋 Requisitos do Sistema

1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`  
   - Se o campo estiver vazio ou cancelado, solicite novamente a entrada
3. Após o cadastro, exiba um `alert()` informando:  
   > `"Cadastro realizado! Veja os detalhes no console."`
4. **Sempre que alguma informação for exibida no console, deve haver um `alert()` antes avisando o usuário**, como por exemplo:  
   > `"A seguir, veja os detalhes do vinho no console."`
5. Informações obrigatórias a serem coletadas:
   - Nome do vinho  
   - Tipo (Tinto, Branco, Rosé)  
   - Safra (ano)  
   - Quantidade em estoque
6. Verificação de estoque:
   - Se a quantidade for menor que 5, exiba `"ESTOQUE BAIXO"` no console
7. Classificação da safra:
   - **2020 em diante** → "Vinho jovem"  
   - **2015 a 2019** → "Vinho amadurecido"  
   - **Antes de 2015** → "Vinho antigo"
8. Exiba todas as informações no `console.log()` de forma clara e organizada

---

### 📄 Sobre a Página `index.html`

- Deve conter uma apresentação visual simples com:
  - Título com o nome da vinícola
  - Breve descrição do projeto
  - Estilização com CSS (em `style.css`)
- O código JavaScript **só deve começar a rodar após a página carregar**
  - Para isso, **adicione o script no final do arquivo**, antes do `</body>`:
    ```html
    <script src="src/js/script.js"></script>
    </body>
    </html>
    ```

---

### 📁 Estrutura do Projeto

Organize os arquivos assim:

```
vinharia-agnello/
│
├── index.html               → Página principal com apresentação do projeto
├── README.md                → Informações sobre o projeto e os integrantes
│
└── src/
    ├── css/
    │   └── style.css        → Estilo da página
    │
    ├── js/
    │   └── script.js        → Todo o código JavaScript do sistema
    │
    └── assets/
        └── imgs/            → (Opcional) Imagens usadas no projeto
```
