# Portafolio Cloud - Jean Pierr Revolledo

Sitio estático en HTML, CSS y JavaScript para presentar perfil profesional, proyectos, experiencia, certificaciones y currículum.

## Ejecutar con Docker

Requisitos: Docker Desktop instalado y en ejecución.

```powershell
docker build -t cloud-portfolio:1.0.0 .
docker run --name cloud-portfolio -d -p 8080:80 cloud-portfolio:1.0.0
```

Abre `http://localhost:8080` en el navegador. El currículum se abrirá desde `/assets/Jean_Pierr_Alex_Revolledo_Ureta_CV.pdf`.

Para detener y eliminar el contenedor:

```powershell
docker stop cloud-portfolio
docker rm cloud-portfolio
```

### Alternativa con Docker Compose

```powershell
docker compose up --build -d
docker compose down
```

## Publicar la imagen en Docker Hub

1. Crea una cuenta en [Docker Hub](https://hub.docker.com/) y reemplaza `TU_USUARIO_DOCKERHUB` en los comandos.
2. Inicia sesión y publica la imagen:

```powershell
docker login
docker tag cloud-portfolio:1.0.0 TU_USUARIO_DOCKERHUB/cloud-portfolio:1.0.0
docker tag cloud-portfolio:1.0.0 TU_USUARIO_DOCKERHUB/cloud-portfolio:latest
docker push TU_USUARIO_DOCKERHUB/cloud-portfolio:1.0.0
docker push TU_USUARIO_DOCKERHUB/cloud-portfolio:latest
```

## Desplegar en Vercel

Vercel no necesita la imagen Docker para este proyecto: al ser un sitio estático, sirve directamente `index.html`, CSS, JavaScript y el PDF del directorio `assets`.

### Opción recomendada: GitHub + panel de Vercel

1. Crea un repositorio nuevo en GitHub, por ejemplo `cloud-portfolio`.
2. Desde esta carpeta, inicializa y sube el repositorio:

```powershell
git init
git add .
git commit -m "feat: publish cloud portfolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/cloud-portfolio.git
git push -u origin main
```

3. Entra a [Vercel](https://vercel.com/new) e inicia sesión con GitHub.
4. Selecciona **Add New > Project** e importa el repositorio `cloud-portfolio`.
5. En la configuración, selecciona **Other** como framework. Deja vacíos los campos de Build Command y Output Directory.
6. Haz clic en **Deploy**.
7. Verifica la URL pública y prueba el botón **Ver currículum completo**.

Cada `git push` a `main` creará una nueva versión de producción automáticamente.

### Opción alternativa: CLI de Vercel

```powershell
npm install -g vercel
vercel login
vercel --prod
```

Cuando Vercel pregunte por el framework, selecciona `Other`. Mantén vacío el directorio de salida porque los archivos estáticos están en la raíz del proyecto.
