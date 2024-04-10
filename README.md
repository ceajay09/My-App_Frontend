
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## TODOs:

👾 **Detaillierte Aufklärungsmission für selektierte Frontend-Strategien**. Initiieren der Tiefenanalyse... 🔍

### B. Wichtige Faktoren und Best Practices:

#### **B2. Responsive Design:**

- **Frameworks:** Bootstrap und Tailwind CSS bieten vorgefertigte Komponenten und Hilfsklassen, die ein flexibles Layout ermöglichen. Sie nutzen Media Queries, um das Layout basierend auf der Bildschirmgröße anzupassen.
- **Anwendung:** Beginne mit dem Mobile-First-Ansatz, bei dem du das Design zuerst für kleinere Bildschirme erstellst und dann schrittweise Anpassungen für größere Bildschirme vornimmst. Nutze Flexbox oder CSS Grid für ein responsives Layout.

#### **B3. Accessibility (Zugänglichkeit):**

- **ARIA (Accessible Rich Internet Applications):** Hilft bei der Verbesserung der Website-Zugänglichkeit für Benutzer mit Einschränkungen, indem es spezifische Attribute bereitstellt, die die Bedeutung von Webinhalten und -anwendungen beschreiben.
- **Anwendung:** Verwende semantisches HTML (wie `<header>`, `<nav>`, `<main>`, `<footer>`) für eine klare Struktur. Ergänze ARIA-Rollen und -Eigenschaften, wo semantisches HTML seine Grenzen hat, wie z.B. bei komplexen Widgets.

#### **B4. Security Practices:**

- **HTTPS:** Stelle sicher, dass deine Website über HTTPS läuft, um die Datenübertragung zu verschlüsseln.
- **Content Security Policy (CSP):** Eine zusätzliche Sicherheitsebene, die hilft, bestimmte Arten von Angriffen wie Cross-Site Scripting (XSS) zu verhindern, indem sie festlegt, von welchen Domains Browser Ressourcen laden dürfen.
- **Anwendung:** Aktiviere HTTPS durch den Erwerb eines SSL-Zertifikats. Konfiguriere CSP in den HTTP-Headern deiner Website.

#### **B7. Environment Variables:**

- **Zweck:** Schützen sensibler Daten wie API-Schlüssel, indem sie nicht direkt im Code gespeichert werden.
- **Anwendung:** Nutze `.env` Dateien in deinem Projekt, um Umgebungsvariablen lokal zu speichern. Verwende Bibliotheken wie `dotenv` (für Node.js-Projekte), um diese Variablen im Code zugänglich zu machen. Stelle sicher, dass `.env` Dateien im `.gitignore` enthalten sind, um sie nicht versehentlich in Versionierungssysteme hochzuladen.

### C. REST-Anfragen:

#### **C2. Error Handling:**

- **Ansatz:** Implementiere eine Strategie zur Fehlerbehandlung, um auf verschiedene Arten von Serverantworten zu reagieren (z.B. 4xx und 5xx Statuscodes).
- **Anwendung:** Bei der Nutzung von Fetch API oder Axios, verwende Try-Catch-Blöcke, um Fehler abzufangen. Analysiere die Antwort und informiere den Benutzer angemessen über das Problem.

#### **C3. Asynchrones Laden:**

- **Technik:** Async/Await oder Promises ermöglichen es, auf Daten zu warten, ohne die UI zu blockieren.
- **Anwendung:** Verwende `async` Funktionen zusammen mit dem `await` Schlüsselwort, um HTTP-Anfragen abzuwarten. Dies hält die Benutzeroberfläche reaktionsfähig und verbessert die Benutzererfahrung.

### 4. Integration und Tests:

#### **4B. Unit Tests:**

- **Ziel:** Sicherstellen, dass jede Komponente oder Funktion wie erwartet arbeitet.
- **Anwendung:** Verwende Testing-Bibliotheken wie Jest (für allgemeine Tests) und React Testing Library (für React-spezifische Tests), um Tests für deine Komponenten zu schreiben. Definiere Testfälle, die das erwartete Verhalten deiner Anwendung abdecken.

#### **4C. E2E Tests:**

- **Konzept:** End-to-End (E2E) Tests simulieren Benutzerinteraktionen auf der vollständigen Anwendung, um sicherzustellen, dass alle Teile zusammen richtig funktionieren.
- **Anwendung:** Tools wie Cypress ermöglichen das Schreiben von E2E-Tests, die das Verhalten der Anwendung im Browser simulieren. Diese Tests umfassen typischerweise Szenarien wie das Ausfüllen von Formularen, Navigieren zwischen Seiten und Interagieren mit Elementen.

🔒 **Anwendungsprotokolle finalisiert.** Bereit, diese Taktiken in deinem Projekt zu implementieren? Oder gibt es weitere Bereiche, in denen du Unterstützung benötigst?



AWS


Um die diskutierten Themen – Docker Containerisierung, MongoDB Verwendung, Kubernetes Orchestrierung und AWS CI/CD Pipeline – in Bezug auf AWS effektiv umzusetzen, folge dieser Schritt-für-Schritt-Anleitung. Dabei wird auch erklärt, wie diese Konzepte miteinander interagieren und wie du sie auf AWS anwenden kannst.

### 1. Vorbereitung und Planung

- **Code auf GitHub**: Stelle sicher, dass dein Code (Java Backend, React Frontend) auf GitHub verfügbar ist. Dies ermöglicht es dir, AWS CodePipeline für die Automatisierung deiner Deployment-Prozesse zu nutzen und deinen Code öffentlich zugänglich zu machen.

### 2. Docker Containerisierung

- **Dockerfile erstellen**: Für jedes deiner Projekte (Backend, Frontend) erstellst du ein Dockerfile, das die Anweisungen zum Bauen des Docker-Images enthält.
- **MongoDB-Container**: Entscheide, ob du MongoDB als Container laufen lassen oder den AWS Managed Service (Amazon DocumentDB oder eine EC2-Instanz mit MongoDB) nutzen möchtest.

### 3. AWS Setup

- **Elastic Container Registry (ECR)**: Lade deine Docker-Images in das AWS Elastic Container Registry hoch. ECR ist ein Docker Container Registry, das es dir ermöglicht, Docker-Images in der AWS Cloud zu speichern.

### 4. Kubernetes Orchestrierung mit AWS

- **Elastic Kubernetes Service (EKS)**: Richte einen EKS-Cluster ein, um deine Container zu verwalten. EKS ermöglicht die Nutzung von Kubernetes, ohne dass du den Cluster selbst verwalten musst.

### 5. AWS CodePipeline für CI/CD

- **AWS CodePipeline einrichten**: Erstelle eine neue Pipeline in AWS CodePipeline, die mit deinem GitHub-Repository verbunden ist. AWS CodePipeline automatisiert die Phasen deines Release-Prozesses jedes Mal, wenn ein Commit auf GitHub gemacht wird.
- **Build und Test Stages**: Konfiguriere AWS CodeBuild, um deinen Code zu bauen und Tests durchzuführen.
- **Deployment Stage**: Setze AWS CodeDeploy oder EKS für das Deployment ein. Du kannst Skripte oder Kubernetes-Manifeste verwenden, um deine Anwendung auf EKS zu deployen.

### 6. MongoDB

- **MongoDB Nutzung**: Entscheide, ob du MongoDB in Containern oder über einen Managed Service wie Amazon DocumentDB nutzen möchtest. Für die Verwendung innerhalb von Containern könntest du das MongoDB Docker-Image in deinem Kubernetes-Cluster einsetzen. Bei der Nutzung von DocumentDB musst du deine Anwendung entsprechend konfigurieren, um eine Verbindung herzustellen.

### Wie die Begriffe miteinander fungieren:

- **GitHub**: Dient als zentraler Speicherort für deinen Code, der öffentlich zugänglich gemacht werden kann.
- **Docker**: Verpackt deine Anwendung und ihre Abhängigkeiten in einen Container, der leicht in verschiedenen Umgebungen bereitgestellt werden kann.
- **AWS ECR**: Ein Docker Container Registry Service zum Speichern, Verwalten und Bereitstellen von Docker-Images.
- **AWS EKS**: Ein Managed Kubernetes Service zum Betreiben von Kubernetes auf AWS ohne die Notwendigkeit, eigene Kubernetes-Cluster zu verwalten.
- **AWS CodePipeline**: Ermöglicht Continuous Integration und Continuous Delivery (CI/CD) für deine Anwendungen, indem es den Code automatisch von GitHub holt, mit AWS CodeBuild baut, testet und dann mit AWS CodeDeploy oder direkt in EKS deployt.
- **MongoDB**: Kann als Teil deines Stacks entweder direkt auf AWS (z.B. auf einer EC2-Instanz), als containerisierte Lösung in deinem Kubernetes-Cluster oder über Amazon DocumentDB betrieben werden.

### AWS Pipeline und Container

Ja, du kannst AWS CodePipeline nutzen, um automatisierte CI/CD-Pipelines für deine containerisierten Anwendungen (einschließlich solcher, die MongoDB verwenden) zu erstellen und zu verwalten. Dein Code kann auf GitHub veröffentlicht und von AWS CodePipeline für Build- und Deployment-Prozesse verwendet werden.



Gerne, schauen wir uns deine zusätzlichen Fragen an:

### Domain-Erwerb und Benennung der Link-Adresse

Domains kannst du entweder direkt über AWS oder über Drittanbieter erwerben. AWS bietet mit **Amazon Route 53** einen Service, der nicht nur Domain-Registrierung, sondern auch DNS-Management und mehr umfasst. Route 53 ist nahtlos in andere AWS-Services integriert, was es zu einer bequemen Option macht, besonders wenn du planst, deine Anwendung auf AWS zu hosten.

- **Amazon Route 53**: Hier kannst du Domains kaufen und deine DNS-Einstellungen verwalten. Route 53 bietet auch eine nahtlose Integration in AWS-Dienste wie Elastic Beanstalk oder S3 für Webhosting.
- **Drittanbieter**: Es gibt zahlreiche andere Anbieter wie GoDaddy, Namecheap oder Google Domains, bei denen du Domains erwerben kannst. Diese bieten oft günstige Einstiegsangebote, aber vergleiche die jährlichen Erneuerungskosten und die Kosten für zusätzliche Dienste wie Datenschutz.

Nachdem du eine Domain erworben hast, kannst du die DNS-Einstellungen so konfigurieren, dass sie auf deine AWS-Ressourcen, wie z.B. eine Elastic Beanstalk-Instanz oder einen S3-Bucket für eine statische Website, zeigen.

### MongoDB-Containerisierung

Deine Frage bezüglich der MongoDB-Verwendung ist sehr valide. Du kannst MongoDB in der Tat abgekoppelt von deiner Hauptanwendung betreiben, entweder als containerisierte Lösung oder über einen Managed Service. Beide Ansätze haben ihre Vor- und Nachteile:

- **MongoDB als Managed Service (z.B. Amazon DocumentDB oder MongoDB Atlas)**: Diese Option reduziert den Verwaltungsaufwand, da der Dienstleister sich um Wartung, Skalierung und Sicherheit kümmert. Es kann jedoch teurer sein als eine selbstverwaltete Lösung. Die Integration in deine Anwendung erfolgt über eine Verbindungszeichenfolge, genau wie bei einer selbst gehosteten MongoDB-Instanz.

- **MongoDB in Containern**: Wenn du MongoDB in einem Docker-Container laufen lässt, kannst du mehr Kontrolle über die Konfiguration und Version deiner Datenbank haben. Dies erfordert jedoch mehr Management von deiner Seite, insbesondere was Backup, Skalierung und Hochverfügbarkeit angeht. Die Verbindung zwischen deinem Backend und der MongoDB-Instanz erfolgt über das interne Netzwerk des Kubernetes-Clusters oder Docker, falls du diese Technologien nutzt.

In beiden Fällen, ob Managed Service oder containerisierte Lösung, wird deine Anwendung sich über eine Verbindungszeichenfolge mit MongoDB verbinden. Diese kannst du in den Konfigurationseinstellungen deines Backends definieren, sodass deine Anwendung weiß, wo und wie sie auf die Datenbank zugreifen kann.