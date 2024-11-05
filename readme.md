# Instruções para Executar o Projeto

## Pré-requisitos
- Node.js (versão 22.11.X)

## Passo a Passo

### Backend

1. **Acesse o backend:**
  ```bash
  cd backend
  ```

2. **Instale as dependências:**
  ```bash
  npm install
  ```

3. **Executar as migrations:**
  ```bash
  npx prisma migrate dev
  ```

4. **Execute o projeto:**
  ```bash
  npm run dev
  ```

### Frontend

1. **Acesse o frontend:**
  ```bash
  cd frontend
  ```

2. **Instale as dependências:**
  ```bash
  npm install
  ```

3. **Execute o projeto:**
  ```bash
  npm run dev
  ```

4. **Acesse no navegador:**
  Abra o navegador e vá para `http://localhost:3000/admin/dashboard`

## Versão do Node Necessária
Certifique-se de que você está utilizando a versão 14.x do Node.js. Você pode verificar a versão instalada com o comando:
```bash
node -v
```

Se necessário, utilize o [nvm](https://github.com/nvm-sh/nvm) para gerenciar e instalar a versão correta do Node.js.