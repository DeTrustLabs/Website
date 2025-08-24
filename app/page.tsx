"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Globe,
  Zap,
  Users,
  Mail,
  MapPin,
  Code,
  UserCheck,
  FileText,
  ExternalLink,
  Github,
  X,
  ChevronDown,
  Globe2,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// Translation data
const translations = {
  en: {
    webDevCompany: "Web3 Development Company",
    forEveryone: "for Everyone",
    heroDescription:
      "DeTrust Labs creates Web3 solutions that democratize finance — building decentralised trust where traditional systems have failed.",
    reviewProtocol: "Review Escrow Protocol",
    joinTeam: "Join Our Team",
    currentProjects: "Current Projects",
    currentProjectsDesc:
      "Building the infrastructure for decentralised trust through innovative DeFi protocols and user-friendly interfaces.",
    protocolDesc:
      "A trustless, peer-to-peer escrow system that secures transactions between buyers and sellers — from global trade to freelancing. Built on the Internet Computer for speed and security, it removes intermediaries, reduces costs, and gives users full control over their payments.",
    exploreProtocol: "Explore Protocol",
    frontendTitle: "Interface for Escrow DeFi Protocol",
    frontendDesc:
      "An intuitive interface that makes the Escrow DeFi Protocol accessible to everyone — regardless of technical background. Secure escrow solutions that are easy to understand and simple to use.",
    goToInterface: "Go to Interface",
    creatingTrust: "Creating Trust in a Decentralised Way",
    creatingTrustDesc:
      "Traditional finance relies on costly intermediaries and excludes billions. We're building trustless systems that work for everyone, especially in emerging markets where financial services are expensive or unavailable.",
    underbanked: "Underbanked populations in emerging markets",
    highCost: "High-cost traditional financial intermediaries",
    complexBarriers: "Complex barriers to finance independent of trust",
    technologyFocus: "Technology Focus",
    technologyDesc:
      "We leverage the strengths of the Internet Computer and the security of Ethereum to create solutions that are truly decentralized—independent of trust in third parties.",
    smartContracts: "Smart Contracts",
    smartContractsDesc: "Self-executing contracts with terms directly written into code.",
    defiProtocols: "DeFi Protocols",
    defiProtocolsDesc: "Peer-to-peer solutions reduce costs and give users full control over their transactions.",
    userFriendlyDapps: "User-Friendly dApps",
    userFriendlyDappsDesc: "Intuitive interfaces that make Web3 accessible to users worldwide.",
    meetCTO: "Meet Our CTO",
    meetCTODesc:
      "A visionary who drives innovation in blockchain—with years of expertise and valuable open-source contributions.",
    backgroundExpertise: "Background & Expertise",
    openSourceProjects: "Open Source Projects",
    viewGitHub: "View GitHub Profile",
    ctoExperience1:
      "Over 13 years of experience in web development, with a focus on blockchain technologies for the past 5 years",
    ctoExperience2:
      "Led the development of decentralized solutions on the Internet Computer (IC), including Escrow Protocol, B3Wallet, and B3Forge",
    ctoExperience3: "Winner of various hackathons, including the BUIDL Bitcoin Hackathon and Cross-Chain Hacker's Den",
    ctoExperience4:
      "Deep expertise in decentralized applications (dApps), smart contracts, and Web3 technologies on IC",
    b3walletDesc:
      "Decentralized multi-chain wallet supporting Bitcoin, Ethereum, and more, using Internet Computer's threshold ECDSA for secure, efficient account management.",
    b3forgeDesc:
      "Interactive platform for managing Internet Computer dApps with a Candid UI playground and App Store-like interface.",
    icReactorDesc:
      "JavaScript libraries for seamless frontend development, state management, and React integration on the Internet Computer.",
    icRustNextjsDesc:
      "Starter template for dApps with Rust backend and Next.js frontend, including setup and deployment documentation.",
    ethPaymentTutorialDesc:
      "Step-by-step guide for building scalable Ethereum payment systems on the Internet Computer, beginner-friendly.",
    joinMission: "Join Our Mission",
    joinMissionDesc:
      "Whether you're a user, community member, or developer — help us build the future of decentralised trust.",
    forUsers: "For Users & Community",
    forUsersDesc:
      "Join the escrow protocol as an exporter, importer, or freelancer. Help shape the future of decentralised finance by participating in our community governance.",
    joinCommunity: "Join Community",
    forDevelopers: "For Developers",
    forDevelopersDesc:
      "We're actively seeking UX developers and full-stack developers familiar with Internet Computer. Help us build the infrastructure for global financial inclusion. Join our team and contribute to revolutionary Web3 solutions.",
    viewOpportunities: "View Opportunities",
    readyToBuild: "Ready to Build Decentralised Trust?",
    readyToBuildDesc:
      "Let's discuss how we can help bring your Web3 vision to life with secure, innovative solutions independent of trust that work for everyone.",
    startConversation: "Start a Conversation",
    emailUs: "Email Us",
    londonOffice: "London Office",
    website: "Website",
    contactUs: "Contact Us",
    footerText: "© 2025 DeTrust Labs Limited. Building decentralised trust for everyone.",
    weAreHiring: "We're Hiring!",
    currentlyLooking: "We are currently looking for:",
    fullStackDev: "Full-Stack Developer",
    uxuiDev: "UX/UI Developer",
    communityManager: "Community Manager",
    interestedContact:
      "If you're interested, please contact us and include your LinkedIn profile or CV along with your contact details.",
    escrowProtocol: "Escrow DeFi Protocol",
    ctoName: "Behrad Dehpour Deylami",
    ctoTitle: "CTO & Blockchain Developer",
  },
  es: {
    webDevCompany: "Empresa de Desarrollo Web3",
    forEveryone: "para Todos",
    heroDescription:
      "DeTrust Labs crea soluciones Web3 que democratizan las finanzas — construyendo confianza descentralizada donde los sistemas tradicionales han fallado.",
    reviewProtocol: "Revisar Protocolo Escrow",
    joinTeam: "Únete a Nuestro Equipo",
    currentProjects: "Proyectos Actuales",
    currentProjectsDesc:
      "Construyendo la infraestructura para la confianza descentralizada a través de protocolos DeFi innovadores e interfaces fáciles de usar.",
    protocolDesc:
      "Un sistema de depósito en garantía seguro que permite transacciones sin confianza entre compradores y vendedores — desde comercio internacional (exportadores e importadores) hasta trabajo freelance. Construido en Internet Computer para velocidad y seguridad.",
    exploreProtocol: "Explorar Protocolo",
    frontendTitle: "Interfaz DeFi de Escrow",
    frontendDesc:
      "Una interfaz web intuitiva que hace el escrow accesible a usuarios del mundo real en todas partes. Transforma interacciones complejas de blockchain en procesos simples y familiares que cualquiera puede confiar y entender, independientemente de su experiencia técnica.",
    goToInterface: "Ir a la Interfaz",
    creatingTrust: "Creando Confianza de Manera Descentralizada",
    creatingTrustDesc:
      "Las finanzas tradicionales dependen de intermediarios costosos y excluyen a miles de millones. Estamos construyendo sistemas sin confianza que funcionan para todos, especialmente en mercados emergentes donde los servicios financieros son caros o no están disponibles.",
    underbanked: "Poblaciones sin servicios bancarios en mercados emergentes",
    highCost: "Intermediarios financieros tradicionales de alto costo",
    complexBarriers: "Barreras complejas para las finanzas sin confianza",
    technologyFocus: "Enfoque Tecnológico",
    technologyDesc:
      "Especializándose en Internet Computer con integración de Ethereum para construir soluciones verdaderamente descentralizadas y sin confianza.",
    smartContracts: "Contratos Inteligentes",
    smartContractsDesc:
      "Contratos autoejecutables con términos escritos directamente en código, eliminando intermediarios.",
    defiProtocols: "Protocolos DeFi",
    defiProtocolsDesc: "Protocolos financieros sin confianza que eliminan intermediarios y reducen costos.",
    userFriendlyDapps: "dApps Fáciles de Usar",
    userFriendlyDappsDesc: "Interfaces intuitivas que hacen Web3 accesible a usuarios en todo el mundo.",
    meetCTO: "Conoce a Nuestro CTO",
    meetCTODesc:
      "Liderando la innovación en desarrollo blockchain con experiencia comprobada y contribuciones de código abierto.",
    backgroundExpertise: "Antecedentes y Experiencia",
    openSourceProjects: "Proyectos de Código Abierto",
    viewGitHub: "Ver Perfil de GitHub",
    ctoExperience1:
      "Más de 13 años de experiencia en desarrollo web, con enfoque en tecnologías blockchain durante los últimos 5 años",
    ctoExperience2:
      "Lideró el desarrollo de soluciones descentralizadas en Internet Computer (IC), incluyendo Escrow Protocol, B3Wallet y B3Forge",
    ctoExperience3: "Ganador de varios hackathons, incluyendo BUIDL Bitcoin Hackathon y Cross-Chain Hacker's Den",
    ctoExperience4:
      "Experiencia profunda en aplicaciones descentralizadas (dApps), contratos inteligentes y tecnologías Web3 en IC",
    b3walletDesc:
      "Billetera descentralizada multi-cadena que soporta Bitcoin, Ethereum y más, usando ECDSA de umbral de Internet Computer para gestión de cuentas segura y eficiente.",
    b3forgeDesc:
      "Plataforma interactiva para gestionar dApps de Internet Computer con un playground de Candid UI e interfaz tipo App Store.",
    icReactorDesc:
      "Librerías JavaScript para desarrollo frontend fluido, gestión de estado e integración React en Internet Computer.",
    icRustNextjsDesc:
      "Plantilla inicial para dApps con backend Rust y frontend Next.js, incluyendo documentación de configuración y despliegue.",
    ethPaymentTutorialDesc:
      "Guía paso a paso para construir sistemas de pago Ethereum escalables en Internet Computer, amigable para principiantes.",
    joinMission: "Únete a Nuestra Misión",
    joinMissionDesc:
      "Ya seas usuario, miembro de la comunidad o desarrollador — ayúdanos a construir el futuro de la confianza descentralizada.",
    forUsers: "Para Usuarios y Comunidad",
    forUsersDesc:
      "Únete al protocolo escrow como exportador, importador o freelancer. Ayuda a dar forma al futuro de las finanzas descentralizadas participando en nuestra gobernanza comunitaria.",
    joinCommunity: "Únete a la Comunidad",
    forDevelopers: "Para Desarrolladores",
    forDevelopersDesc:
      "Estamos buscando activamente desarrolladores UX y desarrolladores full-stack familiarizados con Internet Computer. Ayúdanos a construir la infraestructura para la inclusión financiera global. Únete a nuestro equipo y contribuye a soluciones Web3 revolucionarias.",
    viewOpportunities: "Ver Oportunidades",
    readyToBuild: "¿Listo para Construir Confianza Descentralizada?",
    readyToBuildDesc:
      "Hablemos sobre cómo podemos ayudar a dar vida a tu visión Web3 con soluciones seguras, sin confianza e innovadoras que funcionen para todos.",
    startConversation: "Iniciar una Conversación",
    emailUs: "Envíanos un Email",
    londonOffice: "Oficina de Londres",
    website: "Sitio Web",
    contactUs: "Contáctanos",
    footerText: "© 2025 DeTrust Labs Limited. Construyendo confianza descentralizada para todos.",
    weAreHiring: "¡Estamos Contratando!",
    currentlyLooking: "Actualmente estamos buscando:",
    fullStackDev: "Desarrollador Full-Stack",
    uxuiDev: "Desarrollador UX/UI",
    communityManager: "Gerente de Comunidad",
    interestedContact:
      "Si estás interesado, por favor contáctanos e incluye tu perfil de LinkedIn o CV junto con tus datos de contacto.",
    escrowProtocol: "Protocolo Escrow",
    ctoName: "Behrad Dehpour Deylami",
    ctoTitle: "CTO & Desarrollador Blockchain",
  },
  fr: {
    webDevCompany: "Entreprise de Développement Web3",
    forEveryone: "pour Tous",
    heroDescription:
      "DeTrust Labs crée des solutions Web3 qui démocratisent la finance — construisant une confiance décentralisée là où les systèmes traditionnels ont échoué.",
    reviewProtocol: "Examiner le Protocole Escrow",
    joinTeam: "Rejoignez Notre Équipe",
    currentProjects: "Projets Actuels",
    currentProjectsDesc:
      "Construire l'infrastructure pour la confiance décentralisée grâce à des protocoles DeFi innovants et des interfaces conviviales.",
    protocolDesc:
      "Un système d'entiercement sécurisé permettant des transactions sans confiance entre acheteurs et vendeurs — du commerce international (exportateurs et importateurs) au travail freelance. Construit sur Internet Computer pour la vitesse et la sécurité.",
    exploreProtocol: "Explorer le Protocole",
    frontendTitle: "Interface DeFi d'Entiercement",
    frontendDesc:
      "Une interface web intuitive qui rend l'entiercement accessible aux utilisateurs du monde réel partout. Transforme les interactions blockchain complexes en processus simples et familiers que tout le monde peut faire confiance et comprendre, quel que soit leur background technique.",
    goToInterface: "Aller à l'Interface",
    creatingTrust: "Créer la Confiance de Manière Décentralisée",
    creatingTrustDesc:
      "La finance traditionnelle s'appuie sur des intermédiaires coûteux et exclut des milliards de personnes. Nous construisons des systèmes sans confiance qui fonctionnent pour tous, en particulier dans les marchés émergents où les services financiers sont chers ou indisponibles.",
    underbanked: "Populations sous-bancarisées dans les marchés émergents",
    highCost: "Intermédiaires financiers traditionnels à coût élevé",
    complexBarriers: "Barrières complexes à la finance sans confiance",
    technologyFocus: "Focus Technologique",
    technologyDesc:
      "Spécialisé dans Internet Computer avec intégration Ethereum pour construire des solutions vraiment décentralisées et sans confiance.",
    smartContracts: "Contrats Intelligents",
    smartContractsDesc:
      "Contrats auto-exécutables avec des termes écrits directement dans le code, éliminant les intermédiaires.",
    defiProtocols: "Protocoles DeFi",
    defiProtocolsDesc: "Protocoles financiers sans confiance qui éliminent les intermédiaires et réduisent les coûts.",
    userFriendlyDapps: "dApps Conviviales",
    userFriendlyDappsDesc: "Interfaces intuitives qui rendent Web3 accessible aux utilisateurs du monde entier.",
    meetCTO: "Rencontrez Notre CTO",
    meetCTODesc:
      "Mener l'innovation dans le développement blockchain avec une expertise prouvée et des contributions open source.",
    backgroundExpertise: "Contexte et Expertise",
    openSourceProjects: "Projets Open Source",
    viewGitHub: "Voir le Profil GitHub",
    ctoExperience1:
      "Plus de 13 ans d'expérience en développement web, avec un focus sur les technologies blockchain depuis 5 ans",
    ctoExperience2:
      "A dirigé le développement de solutions décentralisées sur Internet Computer (IC), incluant Escrow Protocol, B3Wallet et B3Forge",
    ctoExperience3: "Gagnant de divers hackathons, incluant BUIDL Bitcoin Hackathon et Cross-Chain Hacker's Den",
    ctoExperience4:
      "Expertise approfondie en applications décentralisées (dApps), contrats intelligents et technologies Web3 sur IC",
    b3walletDesc:
      "Portefeuille décentralisé multi-chaînes supportant Bitcoin, Ethereum et plus, utilisant l'ECDSA à seuil d'Internet Computer pour une gestion de compte sécurisée et efficace.",
    b3forgeDesc:
      "Plateforme interactive pour gérer les dApps Internet Computer avec un playground Candid UI et une interface type App Store.",
    icReactorDesc:
      "Bibliothèques JavaScript pour un développement frontend fluide, gestion d'état et intégration React sur Internet Computer.",
    icRustNextjsDesc:
      "Template de démarrage pour dApps avec backend Rust et frontend Next.js, incluant la documentation de configuration et déploiement.",
    ethPaymentTutorialDesc:
      "Guide étape par étape pour construire des systèmes de paiement Ethereum évolutifs sur Internet Computer, adapté aux débutants.",
    joinMission: "Rejoignez Notre Mission",
    joinMissionDesc:
      "Que vous soyez utilisateur, membre de la communauté ou développeur — aidez-nous à construire l'avenir de la confiance décentralisée.",
    forUsers: "Pour les Utilisateurs et la Communauté",
    forUsersDesc:
      "Rejoignez le protocole escrow en tant qu'exportateur, importateur ou freelancer. Aidez à façonner l'avenir de la finance décentralisée en participant à notre gouvernance communautaire.",
    joinCommunity: "Rejoindre la Communauté",
    forDevelopers: "Pour les Développeurs",
    forDevelopersDesc:
      "Nous recherchons activement des développeurs UX et des développeurs full-stack familiers avec Internet Computer. Aidez-nous à construire l'infrastructure pour l'inclusion financière mondiale. Rejoignez notre équipe et contribuez aux solutions Web3 révolutionnaires.",
    viewOpportunities: "Voir les Opportunités",
    readyToBuild: "Prêt à Construire la Confiance Décentralisée?",
    readyToBuildDesc:
      "Discutons de la façon dont nous pouvons aider à donner vie à votre vision Web3 avec des solutions sécurisées, sans confiance et innovantes qui fonctionnent pour tous.",
    startConversation: "Commencer une Conversation",
    emailUs: "Envoyez-nous un Email",
    londonOffice: "Bureau de Londres",
    website: "Site Web",
    contactUs: "Contactez-nous",
    footerText: "© 2025 DeTrust Labs Limited. Construire une confiance décentralisée pour tous.",
    weAreHiring: "Nous Recrutons!",
    currentlyLooking: "Nous recherchons actuellement:",
    fullStackDev: "Développeur Full-Stack",
    uxuiDev: "Développeur UX/UI",
    communityManager: "Gestionnaire de Communauté",
    interestedContact:
      "Si vous êtes intéressé, veuillez nous contacter et inclure votre profil LinkedIn ou CV avec vos coordonnées.",
    escrowProtocol: "Protocole Escrow",
    ctoName: "Behrad Dehpour Deylami",
    ctoTitle: "CTO & Développeur Blockchain",
  },
  de: {
    webDevCompany: "Web3-Entwicklungsunternehmen",
    forEveryone: "für Alle",
    heroDescription:
      "DeTrust Labs entwickelt Web3-Lösungen, die Teile des Finanzsystems neu definieren – durch dezentrales Vertrauen statt zentraler Abhängigkeit.",
    reviewProtocol: "Escrow-Protokoll Prüfen",
    joinTeam: "Unserem Team Beitreten",
    currentProjects: "Aktuelle Projekte",
    currentProjectsDesc:
      "Wir bauen die Infrastruktur für dezentrales Vertrauen – mit innovativen DeFi-Protokollen und intuitiven Schnittstellen.",
    protocolDesc:
      "Das digitale Treuhandskonto: sichere Transaktionen für Handel und Freelancing. Ermöglicht durch Smart Contracts auf dem Internet Computer – schnell, sicher, dezentral.",
    exploreProtocol: "Protokoll erkunden",
    frontendTitle: "Interface für Escrow DeFi Protocol",
    frontendDesc:
      "Ein intuitives Interface, das das Escrow Protocol für alle zugänglich macht – unabhängig vom technischen Hintergrund. Treuhandlösungen, die jeder versteht und nutzen kann.",
    goToInterface: "Zur Schnittstelle",
    creatingTrust: "Vertrauen auf dezentrale Weise schaffen",
    creatingTrustDesc:
      "Das traditionelle Finanzsystem stützt sich auf zahlreiche, meist teure Finanzintermediäre und schließt Milliarden Menschen aus. Wir entwickeln Lösungen, die ohne Abhängigkeit von Dritten funktionieren – für alle, besonders in Schwellenmärkten, wo Finanzdienstleistungen teuer oder schwer zugänglich sind.",
    underbanked: "Fehlender Zugang zu Finanzdienstleistungen für unterversorgte Bevölkerungen in Schwellenmärkten",
    highCost: "Hohe Kosten durch zentrale Finanzintermediäre",
    complexBarriers: "Komplexe Hürden beim Zugang zu fairen und sicheren Lösungen",
    technologyFocus: "Technologie Fokus",
    technologyDesc:
      "Wir nutzen die Stärken des Internet Computers und die Sicherheit von Ethereum, um Lösungen zu schaffen, die wirklich dezentral sind – unabhängig von Vertrauen in Dritte.",
    smartContracts: "Smart Contracts",
    smartContractsDesc:
      "Selbstausführende Verträge mit direkt in Code geschriebenen Bedingungen, die Vermittler eliminieren.",
    defiProtocols: "DeFi Protokolle",
    defiProtocolsDesc:
      "Direkte Interaktion statt Vermittler: Peer-to-Peer-Lösungen reduzieren Kosten und geben Nutzern die volle Kontrolle über ihre Transaktionen.",
    userFriendlyDapps: "Benutzerfreundliche dApps",
    userFriendlyDappsDesc: "Intuitive Schnittstellen, die Web3 für Nutzer weltweit zugänglich machen.",
    meetCTO: "Lernen Sie unseren CTO kennen",
    meetCTODesc:
      "Ein Visionär, der Innovation in der Blockchain vorantreibt – mit langjähriger Expertise und wertvollen Open-Source-Beiträgen.",
    backgroundExpertise: "Hintergrund & Expertise",
    openSourceProjects: "Open-Source-Projekte",
    viewGitHub: "GitHub-Profil Anzeigen",
    ctoExperience1:
      "Über 13 Jahre Erfahrung in der Webentwicklung, mit Fokus auf Blockchain-Technologien in den letzten 5 Jahren",
    ctoExperience2:
      "Leitete die Entwicklung dezentraler Lösungen auf dem Internet Computer (IC), einschließlich Escrow Protocol, B3Wallet und B3Forge",
    ctoExperience3:
      "Gewinner verschiedener Hackathons, einschließlich BUIDL Bitcoin Hackathon und Cross-Chain Hacker's Den",
    ctoExperience4:
      "Tiefgründige Expertise in dezentralen Anwendungen (dApps), Smart Contracts und Web3-Technologien auf IC",
    b3walletDesc:
      "Dezentrale Multi-Chain-Wallet, die Bitcoin, Ethereum und mehr unterstützt, mit Internet Computers Threshold-ECDSA für sichere, effiziente Kontoverwaltung.",
    b3forgeDesc:
      "Interaktive Plattform zur Verwaltung von Internet Computer dApps mit Candid UI Playground und App Store-ähnlicher Schnittstelle.",
    icReactorDesc:
      "JavaScript-Bibliotheken für nahtlose Frontend-Entwicklung, Zustandsverwaltung und React-Integration auf Internet Computer.",
    icRustNextjsDesc:
      "Starter-Template für dApps mit Rust-Backend und Next.js-Frontend, einschließlich Setup- und Deployment-Dokumentation.",
    ethPaymentTutorialDesc:
      "Schritt-für-Schritt-Anleitung zum Aufbau skalierbarer Ethereum-Zahlungssysteme auf Internet Computer, anfängerfreundlich.",
    joinMission: "Schließen Sie sich unserer Mission an",
    joinMissionDesc:
      "Ob Sie Nutzer, Community-Mitglied oder Entwickler sind — unterstützen Sie uns, die Zukunft des dezentralen Vertrauens zu bauen.",
    forUsers: "Für Nutzer & Community",
    forUsersDesc:
      "Treten Sie dem Escrow-Protokoll als Exporteur, Importeur oder Freiberufler bei. Gestalten Sie die Zukunft der dezentralen Finanzwelt mit, indem Sie sich an unserer Community beteiligen.",
    joinCommunity: "Community Beitreten",
    forDevelopers: "Für Entwickler",
    forDevelopersDesc:
      "Wir suchen aktiv UX-Entwickler und Full-Stack-Entwickler, die mit dem Internet Computer vertraut sind. Helfen Sie uns, die Infrastruktur für globale finanzielle Inklusion aufzubauen. Treten Sie unserem Team bei und tragen Sie zu revolutionären Web3-Lösungen bei.",
    viewOpportunities: "Möglichkeiten Anzeigen",
    readyToBuild: "Bereit, dezentrales Vertrauen auszubauen?",
    readyToBuildDesc:
      "Lassen Sie uns besprechen, wie wir Ihnen helfen können, Ihre Web3-Vision mit sicheren, vertrauensunabhängigen und innovativen Lösungen zum Leben zu erwecken.",
    startConversation: "Gespräch Beginnen",
    emailUs: "E-Mail Senden",
    londonOffice: "Londoner Büro",
    website: "Website",
    contactUs: "Kontaktieren Sie uns",
    footerText: "© 2025 DeTrust Labs Limited. Dezentrales Vertrauen für alle aufbauen.",
    weAreHiring: "Wir stellen ein!",
    currentlyLooking: "Wir suchen derzeit:",
    fullStackDev: "Full-Stack-Entwickler",
    uxuiDev: "UX/UI-Entwickler",
    communityManager: "Community-Manager",
    interestedContact:
      "Wenn Sie interessiert sind, kontaktieren Sie uns bitte und fügen Sie Ihr LinkedIn-Profil oder Ihren Lebenslauf zusammen mit Ihren Kontaktdaten bei.",
    escrowProtocol: "Escrow Protokoll",
    ctoName: "Behrad Dehpour Deylami",
    ctoTitle: "CTO & Blockchain-Entwickler",
  },
  pt: {
    webDevCompany: "Empresa de Desenvolvimento Web3",
    forEveryone: "para Todos",
    heroDescription:
      "DeTrust Labs cria soluções Web3 que democratizam as finanças — construindo confiança descentralizada onde os sistemas tradicionais falharam.",
    reviewProtocol: "Revisar Protocolo Escrow",
    joinTeam: "Junte-se à Nossa Equipe",
    currentProjects: "Projetos Atuais",
    currentProjectsDesc:
      "Construindo a infraestrutura para confiança descentralizada através de protocolos DeFi inovadores e interfaces amigáveis ao usuário.",
    protocolDesc:
      "Um sistema de custódia seguro que permite transações sem confiança entre compradores e vendedores — desde comércio internacional (exportadores e importadores) até trabalho freelance. Construído no Internet Computer para velocidade e segurança.",
    exploreProtocol: "Explorar Protocolo",
    frontendTitle: "Interface DeFi de Custódia",
    frontendDesc:
      "Uma interface web intuitiva que torna a custódia acessível a usuários do mundo real em todos os lugares. Transforma interações complexas de blockchain em processos simples e familiares que qualquer pessoa pode confiar e entender, independentemente de sua experiência técnica.",
    goToInterface: "Ir para Interface",
    creatingTrust: "Criando Confiança de Forma Descentralizada",
    creatingTrustDesc:
      "As finanças tradicionais dependem de intermediários caros e excluem bilhões. Estamos construindo sistemas sem confiança que funcionam para todos, especialmente em mercados emergentes onde os serviços financeiros são caros ou indisponíveis.",
    underbanked: "Populações subbancarizadas em mercados emergentes",
    highCost: "Intermediários financeiros tradicionais de alto custo",
    complexBarriers: "Barreiras complexas para finanças sem confiança",
    technologyFocus: "Foco Tecnológico",
    technologyDesc:
      "Especializando-se em Internet Computer com integração Ethereum para construir soluções verdadeiramente descentralizadas e sem confiança.",
    smartContracts: "Contratos Inteligentes",
    smartContractsDesc:
      "Contratos auto-executáveis com termos escritos diretamente em código, eliminando intermediários.",
    defiProtocols: "Protocolos DeFi",
    defiProtocolsDesc: "Protocolos financeiros sem confiança que eliminam intermediários e reduzem custos.",
    userFriendlyDapps: "dApps Amigáveis",
    userFriendlyDappsDesc: "Interfaces intuitivas que tornam Web3 acessível para usuários em todo o mundo.",
    meetCTO: "Conheça Nosso CTO",
    meetCTODesc:
      "Liderando inovação no desenvolvimento blockchain com expertise comprovada e contribuições open source.",
    backgroundExpertise: "Histórico e Expertise",
    openSourceProjects: "Projetos Open Source",
    viewGitHub: "Ver Perfil GitHub",
    ctoExperience1:
      "Mais de 13 anos de experiência em desenvolvimento web, com foco em tecnologias blockchain nos últimos 5 anos",
    ctoExperience2:
      "Liderou o desenvolvimento de soluções descentralizadas no Internet Computer (IC), incluindo Escrow Protocol, B3Wallet e B3Forge",
    ctoExperience3: "Vencedor de vários hackathons, incluindo BUIDL Bitcoin Hackathon e Cross-Chain Hacker's Den",
    ctoExperience4:
      "Expertise profunda em aplicações descentralizadas (dApps), contratos inteligentes e tecnologias Web3 no IC",
    b3walletDesc:
      "Carteira descentralizada multi-chain suportando Bitcoin, Ethereum e mais, usando ECDSA de limiar do Internet Computer para gerenciamento de conta seguro e eficiente.",
    b3forgeDesc:
      "Plataforma interativa para gerenciar dApps do Internet Computer com playground Candid UI e interface tipo App Store.",
    icReactorDesc:
      "Bibliotecas JavaScript para desenvolvimento frontend fluido, gerenciamento de estado e integração React no Internet Computer.",
    icRustNextjsDesc:
      "Template inicial para dApps com backend Rust e frontend Next.js, incluindo documentação de configuração e implantação.",
    ethPaymentTutorialDesc:
      "Guia passo a passo para construir sistemas de pagamento Ethereum escaláveis no Internet Computer, amigável para iniciantes.",
    joinMission: "Junte-se à Nossa Missão",
    joinMissionDesc:
      "Seja você usuário, membro da comunidade ou desenvolvedor — ajude-nos a construir o futuro da confiança descentralizada.",
    forUsers: "Para Usuários e Comunidade",
    forUsersDesc:
      "Junte-se ao protocolo escrow como exportador, importador ou freelancer. Ajude a moldar o futuro das finanças descentralizadas participando de nossa governança comunitária.",
    joinCommunity: "Juntar-se à Comunidade",
    forDevelopers: "Para Desenvolvedores",
    forDevelopersDesc:
      "Estamos procurando ativamente desenvolvedores UX e desenvolvedores full-stack familiarizados com Internet Computer. Ajude-nos a construir a infraestrutura para inclusão financeira global. Junte-se à nossa equipe e contribua para soluções Web3 revolucionárias.",
    viewOpportunities: "Ver Oportunidades",
    readyToBuild: "Pronto para Construir Confiança Descentralizada?",
    readyToBuildDesc:
      "Vamos discutir como podemos ajudar a dar vida à sua visão Web3 com soluções seguras, sem confiança e inovadoras que funcionam para todos.",
    startConversation: "Iniciar Conversa",
    emailUs: "Envie-nos Email",
    londonOffice: "Escritório de Londres",
    website: "Website",
    contactUs: "Contate-nos",
    footerText: "© 2025 DeTrust Labs Limited. Construindo confiança descentralizada para todos.",
    escrowProtocol: "Protocolo Escrow",
    ctoName: "Behrad Dehpour Deylami",
    ctoTitle: "CTO & Desenvolvedor Blockchain",
  },
  ru: {
    webDevCompany: "Компания Web3 Разработки",
    forEveryone: "для Всех",
    heroDescription:
      "DeTrust Labs создает Web3 решения, которые демократизируют финансы — строя децентрализованное доверие там, где традиционные системы потерпели неудачу.",
    reviewProtocol: "Обзор Протокола Эскроу",
    joinTeam: "Присоединиться к Команде",
    currentProjects: "Текущие Проекты",
    currentProjectsDesc:
      "Создание инфраструктуры для децентрализованного доверия через инновационные DeFi протоколы и удобные интерфейсы.",
    protocolDesc:
      "Безопасная система условного депонирования, обеспечивающая транзакции без доверия между покупателями и продавцами — от международной торговли (экспортеры и импортеры) до фриланса. Построена на Internet Computer для скорости и безопасности.",
    exploreProtocol: "Изучить Протокол",
    frontendTitle: "DeFi Интерфейс Эскроу",
    frontendDesc:
      "Интуитивный веб-интерфейс, который делает эскроу доступным для реальных пользователей везде. Превращает сложные блокчейн взаимодействия в простые, знакомые процессы, которым каждый может доверять и понимать, независимо от технического опыта.",
    goToInterface: "Перейти к Интерфейсу",
    creatingTrust: "Создание Доверия Децентрализованным Способом",
    creatingTrustDesc:
      "Традиционные финансы полагаются на дорогих посредников и исключают миллиарды людей. Мы строим системы без доверия, которые работают для всех, особенно на развивающихся рынках, где финансовые услуги дороги или недоступны.",
    underbanked: "Недобанковские популяции на развивающихся рынках",
    highCost: "Дорогие традиционные финансовые посредники",
    complexBarriers: "Сложные барьеры для финансов без доверия",
    technologyFocus: "Технологический Фокус",
    technologyDesc:
      "Специализируемся на Internet Computer с интеграцией Ethereum для создания действительно децентрализованных решений без доверия.",
    smartContracts: "Умные Контракты",
    smartContractsDesc: "Самоисполняющиеся контракты с условиями, написанными прямо в коде, исключающие посредников.",
    defiProtocols: "DeFi Протоколы",
    defiProtocolsDesc: "Финансовые протоколы без доверия, которые исключают посредников и снижают затраты.",
    userFriendlyDapps: "Удобные dApps",
    userFriendlyDappsDesc: "Интуитивные интерфейсы, которые делают Web3 доступным для пользователей по всему миру.",
    meetCTO: "Познакомьтесь с Нашим CTO",
    meetCTODesc: "Ведущий инновации в разработке блокчейна с проверенной экспертизой и вкладом в открытый код.",
    backgroundExpertise: "Опыт и Экспертиза",
    openSourceProjects: "Проекты с Открытым Кодом",
    viewGitHub: "Посмотреть Профиль GitHub",
    ctoExperience1: "Более 13 лет опыта в веб-разработке, с фокусом на блокчейн-технологии в течение последних 5 лет",
    ctoExperience2:
      "Руководил разработкой децентрализованных решений на Internet Computer (IC), включая Escrow Protocol, B3Wallet и B3Forge",
    ctoExperience3: "Победитель различных хакатонов, включая BUIDL Bitcoin Hackathon и Cross-Chain Hacker's Den",
    ctoExperience4:
      "Глубокая экспертиза в децентрализованных приложениях (dApps), умных контрактах и Web3 технологиях на IC",
    b3walletDesc:
      "Децентрализованный мульти-чейн кошелек, поддерживающий Bitcoin, Ethereum и другие, использующий пороговую ECDSA Internet Computer для безопасного, эффективного управления аккаунтами.",
    b3forgeDesc:
      "Интерактивная платформа для управления dApps Internet Computer с Candid UI playground и интерфейсом в стиле App Store.",
    icReactorDesc:
      "JavaScript библиотеки для бесшовной фронтенд-разработки, управления состоянием и React интеграции на Internet Computer.",
    icRustNextjsDesc:
      "Стартовый шаблон для dApps с Rust бэкендом и Next.js фронтендом, включая документацию по настройке и развертыванию.",
    ethPaymentTutorialDesc:
      "Пошаговое руководство по созданию масштабируемых систем платежей Ethereum на Internet Computer, дружелюбное к новичкам.",
    joinMission: "Присоединяйтесь к Нашей Миссии",
    joinMissionDesc:
      "Будь вы пользователь, член сообщества или разработчик — помогите нам построить будущее децентрализованного доверия.",
    forUsers: "Для Пользователей и Сообщества",
    forUsersDesc:
      "Присоединяйтесь к escrow протоколу как экспортер, импортер или фрилансер. Помогите формировать будущее децентрализованных финансов, участвуя в нашем управлении сообществом.",
    joinCommunity: "Присоединиться к Сообществу",
    forDevelopers: "Для Разработчиков",
    forDevelopersDesc:
      "Мы активно ищем UX разработчиков и full-stack разработчиков, знакомых с Internet Computer. Помогите нам построить инфраструктуру для глобального финансового включения. Присоединяйтесь к нашей команде и вносите вклад в революционные Web3 решения.",
    viewOpportunities: "Посмотреть Возможности",
    readyToBuild: "Готовы Построить Децентрализованное Доверие?",
    readyToBuildDesc:
      "Давайте обсудим, как мы можем помочь воплотить ваше Web3 видение в жизнь с безопасными, без доверия и инновационными решениями, которые работают для всех.",
    startConversation: "Начать Разговор",
    emailUs: "Написать Нам",
    londonOffice: "Лондонский Офис",
    website: "Веб-сайт",
    contactUs: "Связаться с Нами",
    footerText: "© 2025 DeTrust Labs Limited. Строим децентрализованное доверие для всех.",
    weAreHiring: "Мы Нанимаем!",
    currentlyLooking: "В настоящее время мы ищем:",
    fullStackDev: "Full-Stack Разработчика",
    uxuiDev: "UX/UI Разработчика",
    communityManager: "Менеджера Сообщества",
    interestedContact:
      "Если вы заинтересованы, пожалуйста, свяжитесь с нами и включите ваш профиль LinkedIn или резюме вместе с контактными данными.",
    escrowProtocol: "Протокол Эскроу",
  },
  fa: {
    webDevCompany: "شرکت توسعه وب۳",
    forEveryone: "برای همه",
    heroDescription:
      "دی‌تراست لبز راه‌حل‌های وب۳ ایجاد می‌کند که مالی را دموکراتیک می‌کند — ساخت اعتماد غیرمتمرکز جایی که سیستم‌های سنتی شکست خورده‌اند.",
    reviewProtocol: "بررسی پروتکل اسکرو",
    joinTeam: "به تیم ما بپیوندید",
    currentProjects: "پروژه‌های فعلی",
    currentProjectsDesc: "ساخت زیرساخت برای اعتماد غیرمتمرکز از طریق پروتکل‌های دی‌فای نوآورانه و رابط‌های کاربرپسند.",
    protocolDesc:
      "سیستم امانت امن که معاملات بدون اعتماد بین خریداران و فروشندگان را امکان‌پذیر می‌کند — از تجارت بین‌المللی (صادرکنندگان و واردکنندگان) تا فریلنسینگ. بر روی اینترنت کامپیوتر برای سرعت و امنیت ساخته شده.",
    exploreProtocol: "کاوش پروتکل",
    frontendTitle: "رابط دی‌فای اسکرو",
    frontendDesc:
      "رابط وب شهودی که اسکرو را برای کاربران واقعی در همه جا قابل دسترس می‌کند. تعاملات پیچیده بلاک‌چین را به فرآیندهای ساده و آشنا تبدیل می‌کند که هر کسی می‌تواند به آن اعتماد کند و درک کند، صرف نظر از پیشینه فنی‌شان.",
    goToInterface: "رفتن به رابط",
    creatingTrust: "ایجاد اعتماد به شیوه غیرمتمرکز",
    creatingTrustDesc:
      "مالی سنتی بر واسطه‌های گران تکیه می‌کند و میلیاردها نفر را محروم می‌کند. ما سیستم‌های بدون اعتماد می‌سازیم که برای همه کار می‌کند، به‌ویژه در بازارهای نوظهور که خدمات مالی گران یا در دسترس نیست.",
    underbanked: "جمعیت‌های کم‌بانک در بازارهای نوظهور",
    highCost: "واسطه‌های مالی سنتی پرهزینه",
    complexBarriers: "موانع پیچیده برای مالی بدون اعتماد",
    technologyFocus: "تمرکز فناوری",
    technologyDesc:
      "ما از قدرت اینترنت کامپیوتر و امنیت اتریوم استفاده می‌کنیم تا راه‌حل‌هایی بسازیم که واقعاً غیرمتمرکز هستند — مستقل از اعتماد به اشخاص ثالث.",
    smartContracts: "قراردادهای هوشمند",
    smartContractsDesc: "قراردادهای خودکار با شرایط مستقیماً در کد نوشته شده، حذف واسطه‌ها.",
    defiProtocols: "پروتکل‌های دی‌فای",
    defiProtocolsDesc: "پروتکل‌های مالی بدون اعتماد که واسطه‌ها را حذف و هزینه‌ها را کاهش می‌دهند.",
    userFriendlyDapps: "دپ‌های کاربرپسند",
    userFriendlyDappsDesc: "رابط‌های شهودی که وب۳ را برای کاربران در سراسر جهان قابل دسترس می‌کند.",
    meetCTO: "با مدیرعامل فنی ما آشنا شوید",
    meetCTODesc: "رهبری نوآوری در توسعه بلاک‌چین با تخصص اثبات‌شده و مشارکت‌های متن‌باز.",
    backgroundExpertise: "پیشینه و تخصص",
    openSourceProjects: "پروژه‌های متن‌باز",
    viewGitHub: "مشاهده پروفایل گیت‌هاب",
    ctoName: "بهراد دهپور دیلمی",
    ctoTitle: "مدیر ارشد فناوری (CTO) و توسعه‌دهنده بلاکچین",
    ctoExperience1: "بیش از ۱۳ سال تجربه در توسعه وب، با تمرکز بر فناوری‌های بلاک‌چین در ۵ سال گذشته",
    ctoExperience2: "رهبری توسعه راه‌حل‌های غیرمتمرکز در اینترنت کامپیوتر (IC)، شامل پروتکل اسکرو، B3Wallet و B3Forge",
    ctoExperience3: "برنده هکاتون‌های مختلف، شامل BUIDL Bitcoin Hackathon و Cross-Chain Hacker's Den",
    ctoExperience4: "تخصص عمیق در اپلیکیشن‌های غیرمتمرکز (dApps)، قراردادهای هوشمند و فناوری‌های وب۳ در IC",
    b3walletDesc:
      "کیف پول غیرمتمرکز چندزنجیره‌ای که از بیت‌کوین، اتریوم و بیشتر پشتیبانی می‌کند، با استفاده از ECDSA آستانه اینترنت کامپیوتر برای مدیریت حساب امن و کارآمد.",
    b3forgeDesc: "پلتفرم تعاملی برای مدیریت dAppهای اینترنت کامپیوتر با زمین بازی Candid UI و رابط شبیه App Store.",
    icReactorDesc:
      "کتابخانه‌های جاوااسکریپت برای توسعه فرانت‌اند یکپارچه، مدیریت حالت و یکپارچگی React در اینترنت کامپیوتر.",
    icRustNextjsDesc: "قالب شروع برای dAppها با بک‌اند Rust و فرانت‌اند Next.js، شامل مستندات راه‌اندازی و استقرار.",
    ethPaymentTutorialDesc:
      "راهنمای گام‌به‌گام برای ساخت سیستم‌های پرداخت اتریوم مقیاس‌پذیر در اینترنت کامپیوتر، مناسب مبتدیان.",
    joinMission: "به ماموریت ما بپیوندید",
    joinMissionDesc: "چه کاربر, عضو جامعه یا توسعه‌دهنده باشید — به ما کمک کنید آینده اعتماد غیرمتمرکز را بسازیم.",
    forUsers: "برای کاربران و جامعه",
    forUsersDesc:
      "به پروتکل اسکرو به عنوان صادرکننده, واردکننده یا فریلنسر بپیوندید. با شرکت در حکمرانی جامعه‌مان به شکل‌دهی آینده مالی غیرمتمرکز کمک کنید.",
    joinCommunity: "پیوستن به جامعه",
    forDevelopers: "برای توسعه‌دهندگان",
    forDevelopersDesc:
      "ما فعالانه به دنبال توسعه‌دهندگان UX و توسعه‌دهندگان فول‌استک آشنا با اینترنت کامپیوتر هستیم. به ما کمک کنید زیرساخت برای شمول مالی جهانی بسازیم. به تیم ما بپیوندید و به راه‌حل‌های انقلابی وب۳ کمک کنید.",
    viewOpportunities: "مشاهده فرصت‌ها",
    readyToBuild: "آماده ساخت اعتماد غیرمتمرکز؟",
    readyToBuildDesc:
      "بیایید درباره چگونگی کمک به تحقق چشم‌انداز وب۳ شما با راه‌حل‌های امن, بدون اعتماد و نوآورانه که برای همه کار می‌کند, صحبت کنیم.",
    startConversation: "شروع گفتگو",
    emailUs: "ایمیل به ما",
    londonOffice: "دفتر لندن",
    website: "وب‌سایت",
    contactUs: "تماس با ما",
    footerText: "© ۲۰۲۵ دی‌تراست لبز لیمیتد. ساخت اعتماد غیرمتمرکز برای همه.",
    weAreHiring: "ما استخدام می‌کنیم!",
    currentlyLooking: "ما در حال حاضر به دنبال:",
    fullStackDev: "توسعه‌دهنده فول‌استک",
    uxuiDev: "توسعه‌دهنده UX/UI",
    communityManager: "مدیر جامعه",
    interestedContact:
      "اگر علاقه‌مند هستید, لطفاً با ما تماس بگیرید و پروفایل لینکدین یا رزومه خود را همراه با جزئیات تماس ارسال کنید.",
    escrowProtocol: "پروتکل اسکرو",
  },
  ko: {
    webDevCompany: "웹3 개발 회사",
    forEveryone: "모두를 위한",
    heroDescription:
      "DeTrust Labs는 금융을 민주화하는 Web3 솔루션을 만듭니다 — 전통적인 시스템이 실패한 곳에서 탈중앙화된 신뢰를 구축합니다.",
    reviewProtocol: "에스크로 프로토콜 검토",
    joinTeam: "팀에 합류하기",
    currentProjects: "현재 프로젝트",
    currentProjectsDesc:
      "혁신적인 DeFi 프로토콜과 사용자 친화적인 인터페이스를 통해 탈중앙화된 신뢰를 위한 인프라를 구축합니다.",
    protocolDesc:
      "구매자와 판매자 간의 무신뢰 거래를 가능하게 하는 안전한 에스크로 시스템 — 국제 무역(수출업체 및 수입업체)부터 프리랜싱까지. 속도와 보안을 위해 인터넷 컴퓨터에 구축되었습니다.",
    exploreProtocol: "프로토콜 탐색",
    frontendTitle: "DeFi 에스크로 인터페이스",
    frontendDesc:
      "전 세계 실제 사용자들이 에스크로에 접근할 수 있게 하는 직관적인 웹 인터페이스입니다. 복잡한 블록체인 상호작용을 기술적 배경에 관계없이 누구나 신뢰하고 이해할 수 있는 간단하고 친숙한 프로세스로 변환합니다.",
    goToInterface: "인터페이스로 이동",
    creatingTrust: "탈중앙화된 방식으로 신뢰 창조",
    creatingTrustDesc:
      "전통적인 금융은 비용이 많이 드는 중개자에 의존하며 수십억 명을 배제합니다. 우리는 모든 사람, 특히 금융 서비스가 비싸거나 이용할 수 없는 신흥 시장에서 작동하는 무신뢰 시스템을 구축하고 있습니다.",
    underbanked: "신흥 시장의 은행 서비스 부족 인구",
    highCost: "고비용 전통 금융 중개자",
    complexBarriers: "무신뢰 금융에 대한 복잡한 장벽",
    technologyFocus: "기술 집중",
    technologyDesc:
      "인터넷 컴퓨터의 강점과 이더리움의 보안을 활용하여 제3자에 대한 신뢰와 독립적인 진정으로 탈중앙화된 솔루션을 만듭니다.",
    smartContracts: "스마트 계약",
    smartContractsDesc: "조건이 코드에 직접 작성된 자체 실행 계약으로 중개자를 제거합니다.",
    defiProtocols: "DeFi 프로토콜",
    defiProtocolsDesc: "중개자를 제거하고 비용을 줄이는 무신뢰 금융 프로토콜입니다.",
    userFriendlyDapps: "사용자 친화적 dApp",
    userFriendlyDappsDesc: "전 세계 사용자들이 Web3에 접근할 수 있게 하는 직관적인 인터페이스입니다.",
    meetCTO: "CTO 만나기",
    meetCTODesc: "검증된 전문성과 오픈소스 기여로 블록체인 개발의 혁신을 이끄는 리더입니다.",
    backgroundExpertise: "배경 및 전문성",
    openSourceProjects: "오픈소스 프로젝트",
    viewGitHub: "GitHub 프로필 보기",
    ctoExperience1: "웹 개발 분야에서 13년 이상의 경험, 지난 5년간 블록체인 기술에 집중",
    ctoExperience2: "에스크로 프로토콜, B3Wallet, B3Forge를 포함한 인터넷 컴퓨터(IC)의 탈중앙화 솔루션 개발 주도",
    ctoExperience3: "BUIDL Bitcoin Hackathon 및 Cross-Chain Hacker's Den을 포함한 다양한 해커톤 우승",
    ctoExperience4: "IC의 탈중앙화 애플리케이션(dApp), 스마트 계약 및 Web3 기술에 대한 깊은 전문성",
    b3walletDesc:
      "안전하고 효율적인 계정 관리를 위해 인터넷 컴퓨터의 임계값 ECDSA를 사용하여 비트코인, 이더리움 등을 지원하는 탈중앙화 멀티체인 지갑입니다.",
    b3forgeDesc:
      "Candid UI 플레이그라운드와 App Store 같은 인터페이스로 인터넷 컴퓨터 dApp을 관리하는 대화형 플랫폼입니다.",
    icReactorDesc:
      "인터넷 컴퓨터에서 원활한 프론트엔드 개발, 상태 관리 및 React 통합을 위한 JavaScript 라이브러리입니다.",
    icRustNextjsDesc: "설정 및 배포 문서를 포함한 Rust 백엔드와 Next.js 프론트엔드가 있는 dApp용 스타터 템플릿입니다.",
    ethPaymentTutorialDesc:
      "인터넷 컴퓨터에서 확장 가능한 이더리움 결제 시스템 구축을 위한 초보자 친화적인 단계별 가이드입니다.",
    joinMission: "우리의 미션에 참여하기",
    joinMissionDesc: "사용자, 커뮤니티 구성원 또는 개발자든 — 탈중앙화된 신뢰의 미래를 구축하는 데 도움을 주세요.",
    forUsers: "사용자 및 커뮤니티를 위해",
    forUsersDesc:
      "수출업체, 수입업체 또는 프리랜서로 에스크로 프로토콜에 참여하세요. 커뮤니티 거버넌스에 참여하여 탈중앙화 금융의 미래를 형성하는 데 도움을 주세요.",
    joinCommunity: "커뮤니티 참여",
    forDevelopers: "개발자를 위해",
    forDevelopersDesc:
      "인터넷 컴퓨터에 익숙한 UX 개발자와 풀스택 개발자를 적극적으로 찾고 있습니다. 글로벌 금융 포용을 위한 인프라 구축을 도와주세요. 우리 팀에 합류하여 혁신적인 Web3 솔루션에 기여하세요.",
    viewOpportunities: "기회 보기",
    readyToBuild: "탈중앙화된 신뢰를 구축할 준비가 되셨나요?",
    readyToBuildDesc:
      "모든 사람을 위해 작동하는 안전하고 무신뢰적이며 혁신적인 솔루션으로 Web3 비전을 실현하는 데 어떻게 도움을 드릴 수 있는지 논의해 봅시다.",
    startConversation: "대화 시작",
    emailUs: "이메일 보내기",
    londonOffice: "런던 사무소",
    website: "웹사이트",
    contactUs: "문의하기",
    footerText: "© 2025 DeTrust Labs Limited. 모든 사람을 위한 탈중앙화된 신뢰 구축.",
    weAreHiring: "채용 중입니다!",
    currentlyLooking: "현재 다음을 찾고 있습니다:",
    fullStackDev: "풀스택 개발자",
    uxuiDev: "UX/UI 개발자",
    communityManager: "커뮤니티 매니저",
    interestedContact: "관심이 있으시면 연락처 정보와 함께 LinkedIn 프로필이나 이력서를 포함하여 연락해 주세요.",
    escrowProtocol: "에스크로 프로토콜",
  },
  ja: {
    webDevCompany: "Web3開発会社",
    forEveryone: "すべての人のために",
    heroDescription:
      "DeTrust Labsは金融を民主化するWeb3ソリューションを作成します — 従来のシステムが失敗したところで分散化された信頼を構築します。",
    reviewProtocol: "エスクロープロトコルをレビュー",
    joinTeam: "チームに参加",
    currentProjects: "現在のプロジェクト",
    currentProjectsDesc:
      "革新的なDeFiプロトコルとユーザーフレンドリーなインターフェースを通じて分散化された信頼のためのインフラを構築します。",
    protocolDesc:
      "買い手と売り手間のトラストレス取引を可能にする安全なエスクローシステム — 国際貿易（輸出業者と輸入業者）からフリーランシングまで。速度とセキュリティのためにInternet Computerに構築されています。",
    exploreProtocol: "プロトコルを探索",
    frontendTitle: "DeFiエスクローインターフェース",
    frontendDesc:
      "世界中の実際のユーザーがエスクローにアクセスできるようにする直感的なWebインターフェースです。複雑なブロックチェーンの相互作用を、技術的背景に関係なく誰もが信頼し理解できるシンプルで馴染みのあるプロセスに変換します。",
    goToInterface: "インターフェースへ移動",
    creatingTrust: "分散化された方法で信頼を創造",
    creatingTrustDesc:
      "従来の金融は高コストの仲介者に依存し、数十億人を排除しています。私たちは、特に金融サービスが高価または利用できない新興市場で、すべての人のために機能するトラストレスシステムを構築しています。",
    underbanked: "新興市場の銀行サービス不足人口",
    highCost: "高コストの従来の金融仲介者",
    complexBarriers: "トラストレス金融への複雑な障壁",
    technologyFocus: "技術フォーカス",
    technologyDesc:
      "Internet Computerの強みとEthereumのセキュリティを活用して、第三者への信頼から独立した真に分散化されたソリューションを作成します。",
    smartContracts: "スマートコントラクト",
    smartContractsDesc: "条件がコードに直接書かれた自己実行契約で、仲介者を排除します。",
    defiProtocols: "DeFiプロトコル",
    defiProtocolsDesc: "仲介者を排除し、コストを削減するトラストレス金融プロトコルです。",
    userFriendlyDapps: "ユーザーフレンドリーなdApp",
    userFriendlyDappsDesc: "世界中のユーザーがWeb3にアクセスできるようにする直感的なインターフェースです。",
    meetCTO: "CTOに会う",
    meetCTODesc: "実証された専門知識とオープンソースへの貢献でブロックチェーン開発のイノベーションをリードしています。",
    backgroundExpertise: "背景と専門知識",
    openSourceProjects: "オープンソースプロジェクト",
    viewGitHub: "GitHubプロフィールを見る",
    ctoExperience1: "Web開発で13年以上の経験, 過去5年間はブロックチェーン技術に焦点",
    ctoExperience2:
      "エスクロープロトコル, B3Wallet, B3Forgeを含むInternet Computer（IC）での分散化ソリューションの開発を主導",
    ctoExperience3: "BUIDL Bitcoin HackathonやCross-Chain Hacker's Denを含む様々なハッカソンの優勝者",
    ctoExperience4: "ICでの分散化アプリケーション（dApp）, スマートコントラクト, Web3技術の深い専門知識",
    b3walletDesc:
      "安全で効率的なアカウント管理のためにInternet Computerの閾値ECDSAを使用して, Bitcoin, Ethereumなどをサポートする分散化マルチチェーンウォレットです。",
    b3forgeDesc:
      "Candid UIプレイグラウンドとApp Storeのようなインターフェースを持つInternet Computer dAppを管理するためのインタラクティブプラットフォームです。",
    icReactorDesc:
      "Internet Computerでのシームレスなフロントエンド開発, 状態管理, React統合のためのJavaScriptライブラリです。",
    icRustNextjsDesc:
      "セットアップとデプロイメントドキュメントを含むRustバックエンドとNext.jsフロントエンドを持つdApp用のスターターテンプレートです。",
    ethPaymentTutorialDesc:
      "Internet ComputerでスケーラブルなEthereum決済システムを構築するための初心者向けステップバイステップガイドです。",
    joinMission: "私たちのミッションに参加",
    joinMissionDesc:
      "ユーザー, コミュニティメンバー, 開発者のいずれであっても — 分散化された信頼の未来を構築するのを手伝ってください。",
    forUsers: "ユーザーとコミュニティのために",
    forUsersDesc:
      "輸出業者, 輸入業者, またはフリーランサーとしてエスクロープロトコルに参加してください。コミュニティガバナンスに参加して分散化金融の未来を形作るのを手伝ってください。",
    joinCommunity: "コミュニティに参加",
    forDevelopers: "開発者のために",
    forDevelopersDesc:
      "Internet Computerに精通したUX開発者とフルスタック開発者を積極的に求めています。グローバル金融包摂のためのインフラ構築を手伝ってください。私たちのチームに参加して革新的なWeb3ソリューションに貢献してください。",
    viewOpportunities: "機会を見る",
    readyToBuild: "分散化された信頼を構築する準備はできていますか？",
    readyToBuildDesc:
      "すべての人のために機能する安全でトラストレスで革新的なソリューションでWeb3ビジョンを実現するお手伝いをする方法について話し合いましょう。",
    startConversation: "会話を始める",
    emailUs: "メールを送る",
    londonOffice: "ロンドンオフィス",
    website: "ウェブサイト",
    contactUs: "お問い合わせ",
    footerText: "© 2025 DeTrust Labs Limited. すべての人のための分散化された信頼を構築。",
    weAreHiring: "採用中です！",
    currentlyLooking: "現在以下を探しています：",
    fullStackDev: "フルスタック開発者",
    uxuiDev: "UX/UI開発者",
    communityManager: "コミュニティマネージャー",
    interestedContact: "興味がある場合は, 連絡先詳細と一緒にLinkedInプロフィールまたは履歴書を含めてご連絡ください。",
    escrowProtocol: "エスクロープロトコル",
  },
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

export default function HomePage() {
  const [showJobModal, setShowJobModal] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("en")

  const t = translations[currentLanguage] || translations.en

  const handleLanguageChange = (langCode, langName) => {
    setCurrentLanguage(langCode)
    setShowLanguageDropdown(false)

    if (langCode === "fa") {
      document.documentElement.setAttribute("dir", "rtl")
      document.documentElement.setAttribute("lang", "fa")
    } else {
      document.documentElement.setAttribute("dir", "ltr")
      document.documentElement.setAttribute("lang", langCode)
    }
  }

  useEffect(() => {
    if (currentLanguage === "fa") {
      document.documentElement.setAttribute("dir", "rtl")
      document.documentElement.setAttribute("lang", "fa")
    } else {
      document.documentElement.setAttribute("dir", "ltr")
      document.documentElement.setAttribute("lang", currentLanguage)
    }
  }, [currentLanguage])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Job Opportunities Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowJobModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-slate-700 mb-4">{t.weAreHiring}</h3>
              <p className="font-sans text-slate-600 mb-6">{t.currentlyLooking}</p>
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full" />
                  <span className="font-sans text-slate-700">{t.fullStackDev}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full" />
                  <span className="font-sans text-slate-700">{t.uxuiDev}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full" />
                  <span className="font-sans text-slate-700">{t.communityManager}</span>
                </div>
              </div>
              <p className="font-sans text-sm text-slate-600 mb-6">{t.interestedContact}</p>
              <Button
                className="bg-green-700 hover:bg-green-800 text-white w-full"
                onClick={() => {
                  setShowJobModal(false)
                  window.location.href = "/contact"
                }}
              >
                {t.contactUs}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/decentralised-trust.png"
                alt="DeTrust Labs Logo"
                width={32}
                height={32}
                className="brightness-0 saturate-100 hue-rotate-90 contrast-200"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(2000%) hue-rotate(90deg) brightness(0.8) contrast(1.2)",
                }}
              />
              <span className="font-serif font-bold text-xl text-green-700">DeTrust Labs</span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
                >
                  <Globe2 className="h-4 w-4" />
                  <span>
                    {languages
                      .find((lang) => lang.code === currentLanguage)
                      ?.name.split(" ")[0]
                      .toUpperCase() || "EN"}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-green-100 py-2 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code, lang.name)}
                        className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-green-50 flex items-center space-x-3"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white bg-transparent border"
                onClick={() => (window.location.href = "/contact")}
              >
                {t.contactUs}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 text-slate-600 border-slate-300 bg-transparent hover:bg-slate-50">
              {t.webDevCompany}
            </Badge>
            <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-700 mb-6 leading-tight">
              <span className="text-green-700 notranslate">De</span>centralised{" "}
              <span className="text-green-700 notranslate">Trust</span>
              <br />
              <span className="notranslate">{t.forEveryone}</span>
            </h1>
            <p className="font-sans text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white font-sans font-semibold"
                onClick={() => window.open("https://www.escrow-protocol.com/", "_blank")}
              >
                {t.reviewProtocol}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="border-green-700 text-green-700 hover:bg-green-50 font-sans font-semibold bg-transparent border"
                onClick={() => setShowJobModal(true)}
              >
                {t.joinTeam}
              </Button>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-r from-green-100 to-lime-50 border border-green-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-serif font-bold text-2xl text-green-800 notranslate">
                BECAUSE TRUST CHANGES EVERYTHING
              </p>
            </div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-green-700 rounded-full opacity-30" />
            <div className="absolute top-4 right-4 w-3 h-3 bg-green-700 rounded-full opacity-30" />
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-700 rounded-full opacity-30" />
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-700 rounded-full opacity-30" />
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-700 mb-4">{t.currentProjects}</h2>
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">{t.currentProjectsDesc}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-green-200 hover:border-green-300 transition-colors group flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-700 mb-4">{t.escrowProtocol}</h3>
                <p className="font-sans text-slate-600 mb-6 leading-relaxed flex-grow">{t.protocolDesc}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button
                    className="bg-green-700 hover:bg-green-800 text-white"
                    onClick={() => window.open("https://www.escrow-protocol.com/", "_blank")}
                  >
                    {t.exploreProtocol}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:border-green-300 transition-colors group flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-700 mb-4">{t.frontendTitle}</h3>
                <p className="font-sans text-slate-600 mb-6 leading-relaxed flex-grow">{t.frontendDesc}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button
                    className="bg-green-700 hover:bg-green-800 text-white"
                    onClick={() => window.open("https://qhsea-iaaaa-aaaaj-qa6kq-cai.icp0.io/", "_blank")}
                  >
                    {t.goToInterface}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Gap We Bridge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-700 mb-6">{t.creatingTrust}</h2>
              <p className="font-sans text-lg text-slate-600 mb-6 leading-relaxed">{t.creatingTrustDesc}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-500 rounded-full" />
                  <span className="font-sans text-slate-600">{t.underbanked}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-500 rounded-full" />
                  <span className="font-sans text-slate-600">{t.highCost}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-500 rounded-full" />
                  <span className="font-sans text-slate-600">{t.complexBarriers}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/web3u-cropped.jpg"
                  alt="Futuristic Web3 technology visualization with hexagonal patterns"
                  width={600}
                  height={400}
                  className="object-cover object-center scale-110"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-700 mb-4">{t.technologyFocus}</h2>
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">{t.technologyDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 hover:border-green-300 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-800 transition-colors">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-700 mb-2">{t.smartContracts}</h3>
                <p className="font-sans text-sm text-slate-600">{t.smartContractsDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:border-green-300 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-800 transition-colors">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-700 mb-2">{t.defiProtocols}</h3>
                <p className="font-sans text-sm text-slate-600">{t.defiProtocolsDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:border-green-300 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-800 transition-colors">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-700 mb-2">{t.userFriendlyDapps}</h3>
                <p className="font-sans text-sm text-slate-600">{t.userFriendlyDappsDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTO Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-700 mb-4">{t.meetCTO}</h2>
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">{t.meetCTODesc}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h4 className="font-serif font-bold text-xl text-slate-700 mb-6">{t.backgroundExpertise}</h4>
                <div className="space-y-3 text-slate-600 mb-[2.6rem]">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mt-2" />
                    <span className="font-sans">{t.ctoExperience1}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mt-2" />
                    <span className="font-sans">{t.ctoExperience2}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mt-2" />
                    <span className="font-sans">{t.ctoExperience3}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mt-2" />
                    <span className="font-sans">{t.ctoExperience4}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <Image
                      src="/behrad-cto.jpg"
                      alt="Behrad Dehpour Deylami - CTO"
                      width={300}
                      height={300}
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-slate-700 mb-2">{t.ctoName}</h3>
                  <p className="font-sans text-lg text-green-700 mb-4">{t.ctoTitle}</p>
                  <Button
                    variant="outline"
                    className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
                    onClick={() => window.open("https://github.com/b3hr4d", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {t.viewGitHub}
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-xl text-slate-700 mb-6">{t.openSourceProjects}</h4>
              <div className="grid gap-4">
                <Card className="border-green-200 hover:border-green-300 transition-colors">
                  <CardContent className="p-2">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-serif font-semibold text-slate-700">B3Wallet</h5>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-green-700 hover:text-green-800"
                        onClick={() => window.open("https://github.com/B3Pay/B3Wallet", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-sans text-sm text-slate-600">{t.b3walletDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:border-green-300 transition-colors">
                  <CardContent className="p-2">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-serif font-semibold text-slate-700">B3Forge</h5>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-green-700 hover:text-green-800"
                        onClick={() => window.open("http://forge.b3pay.net", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-sans text-sm text-slate-600">{t.b3forgeDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:border-green-300 transition-colors">
                  <CardContent className="p-2">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-serif font-semibold text-slate-700">ic-reactor</h5>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-green-700 hover:text-green-800"
                        onClick={() => window.open("https://github.com/B3Pay/ic-reactor", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-sans text-sm text-slate-600">{t.icReactorDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:border-green-300 transition-colors">
                  <CardContent className="p-2">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-serif font-semibold text-slate-700">ic-rust-nextjs</h5>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-green-700 hover:text-green-800"
                        onClick={() => window.open("https://github.com/b3hr4d/ic-rust-nextjs", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-sans text-sm text-slate-600">{t.icRustNextjsDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:border-green-300 transition-colors">
                  <CardContent className="p-2">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-serif font-semibold text-slate-700">Ethereum Payment Tutorial</h5>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-green-700 hover:text-green-800"
                        onClick={() => window.open("https://github.com/b3hr4d/eth_payment_tutorial", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-sans text-sm text-slate-600">{t.ethPaymentTutorialDesc}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-700 mb-4">{t.joinMission}</h2>
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">{t.joinMissionDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-lime-200 bg-lime-50 hover:bg-lime-100 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-serif font-bold text-2xl text-slate-700 mb-4">{t.forUsers}</h3>
                <p className="font-sans text-slate-600 mb-6 leading-relaxed">{t.forUsersDesc}</p>

                <Button
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-white"
                  onClick={() => window.open("https://community.escrow-protocol.com/", "_blank")}
                >
                  {t.joinCommunity}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50 hover:bg-lime-100 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-700 mb-4">{t.forDevelopers}</h3>
                <p className="font-sans text-slate-600 mb-6 leading-relaxed">{t.forDevelopersDesc}</p>
                <Button
                  size="lg"
                  className="bg-green-700 text-white hover:bg-green-800"
                  onClick={() => setShowJobModal(true)}
                >
                  {t.viewOpportunities}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-6">{t.readyToBuild}</h2>
              <p className="font-sans text-lg text-slate-300 mb-8 leading-relaxed">{t.readyToBuildDesc}</p>
              <Button
                size="lg"
                className="bg-green-800 hover:bg-green-900 text-white font-sans font-semibold"
                onClick={() => (window.location.href = "/contact")}
              >
                {t.startConversation}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-lg">{t.emailUs}</p>
                  <p className="font-sans text-slate-300">info@detrust-labs.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-lg">{t.londonOffice}</p>
                  <p className="font-sans text-slate-300">
                    71-75 Shelton Street
                    <br />
                    Covent Garden, London, WC2H 9JQ
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-lg">{t.website}</p>
                  <p className="font-sans text-slate-300">www.detrust-labs.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-lg">GitHub</p>
                  <a
                    href="https://github.com/DeTrustLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-slate-300 hover:text-white transition-colors"
                  >
                    github.com/DeTrustLabs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DT</span>
            </div>
            <span className="font-serif font-bold text-lg">DeTrust Labs</span>
          </div>
          <p className="font-sans text-slate-400 text-sm">© 2024 DeTrust Labs Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
