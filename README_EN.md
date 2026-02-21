# Curriculum Vitae

## Basic Information

|Key| Value                                                    |
|---|----------------------------------------------------------|
|Name| Yusuke Harada                                            |
|Qiita| [yharada](https://qiita.com/yharada)                     |
|SlideShare| [Yusuke Harada](https://www.slideshare.net/ssuser19a9df) |
|SpeakerDeck| [yusukeharada](https://speakerdeck.com/yusukeharada)     |
|GitHub| [m96-chan](https://github.com/m96-chan)                  |
|Website| [DEVenus](https://www.devenus.com/)                      |

## Skills

### Languages

#### Programming Languages

| Language       | Experience        |
|----------------|-------------------|
| Python         | 10+ years         |
| Scala          | 3+ years          |
| Java           | 1+ years          |
| Kotlin         | Less than 1 year  |
| GoLang         | Less than 1 year (technical evaluation) |
| Rust           | Less than 1 year  |
| PHP            | 1+ years          |
| C#             | 3+ years          |
| C              | Less than 1 year  |
| C++            | 1+ years          |
| Swift          | 1+ years          |
| JavaScript     | 10+ years         |
| TypeScript     | 10+ years         |
| coffeeScript   | Less than 1 year  |
| Ruby           | Less than 1 year (used with Chef) |
| Solidity       | Less than 1 year  |
| VBScript       | Less than 1 year  |
| bash/zsh       | 5+ years          |
| powershell     | Less than 1 year  |
| SQL            | 3+ years          |
| Gremlin        | Less than 1 year (technical evaluation) |
| WGSL           | Less than 1 year  |

### Frameworks

- Python
  - Django
  - Tornado
  - FastAPI
- Scala
  - Play Framework
- PHP
  - Proprietary framework only
  - Smarty
- C#
  - ASP.NET
  - Unity (build scripting, VRChat avatar modifications)
- C/C++
  - Cocos2dx
  - CUDA (kernel programming, TensorCore)
- Rust
  - PyO3 (Python-Rust bindings)
- JavaScript
  - AngularJS
  - Express
  - Three.js
- TypeScript
  - Angular
  - React
  - Next.js
  - Vue.js
  - Svelte
  - ReactNative
  - WebGPU / WGSL
  - Astro
- coffeeScript
  - hubot
- Java / Kotlin
  - Spring Framework

### Tools & Middleware

#### Tools
- Git
  - GitHub
  - GitLab
  - Bitbucket
- SVN
- Chef
- Docker
  - docker-compose
  - k8s
- Jenkins
- GitLabCI

#### Testing Tools
- NUnit
- Jasmine
- pyTest
- Specs2

#### Middleware
- AWS
  - EKS
  - Aurora
  - DynamoDB
  - Neptune
  - ElastiCache
  - EC2
  - S3
  - SQS
  - ECS
  - Lambda
  - Bedrock
  - Amplify
  - Redshift Serverless

- GCP
  - BigQuery
  - AppEngine

- Azure
  - App Service
  - Container Apps Jobs
  - Azure OpenAI

### Other

- Deep interest in AI/GPU low-level technologies
  - Continuously exploring CUDA kernel programming, WebGPU shaders (WGSL), and LLM inference optimization through personal projects
  - Working on inference optimization for edge devices, including NN kernels for Qualcomm SoCs
- AI-Driven Development (AIDD)
  - Designed and practiced Agent-based development workflows using Claude Code, enabling rapid value delivery in production
- Business acumen
  - Studied at a graduate business school, possessing foundational knowledge of business management
  - Takes a development approach that starts from business value rather than technical discussions, extracting the necessary technologies from business requirements
- Passion for education
  - Enjoys mentoring new graduates and mid-career engineers
- Culture building
  - Dedicated to building better engineering culture through education and organizational improvements

## Strengths

- Vertical integration from GPU/LLM low-level development to frontend
  - Capable of building every layer of the LLM inference pipeline — from CUDA kernel programming and TensorCore optimization to browser-based inference via WebGPU
  - Able to architect entire systems spanning frontend, backend, and infrastructure, including GPU inference components
- Real-time system design & implementation
  - Experience building real-time pipelines combining LLM inference, audio processing, and video processing under sub-100ms latency constraints
  - Expertise in low-latency technologies such as WebRTC, WASAPI, and GPU encoding
- AI-Driven Development (AIDD) practice & advocacy
  - Practicing AI-driven development in production using Claude Code, achieving rapid value delivery
  - Designed Agent-based development workflows (separating ISSUE and Planner layers) and applied them to team development
- OSS library design & publication
  - Maintaining multiple PyPI-published libraries, with expertise in Python bindings for Rust/C++ cores
  - Published low-level Python libraries for GPU inference runtimes, audio capture, and ETW monitoring
- Business-oriented technology selection
  - Capable of product development from a management perspective, grounded in business fundamentals
  - Conducts technology evaluations considering both future technical viability and team proficiency
- Customer & executive-facing proposals
  - Able to present proposals aligned with the perspectives of executives and clients, backed by business knowledge
  - Can prepare documentation and deliver presentations as needed
- Experience across organizations of all sizes (300 to 3,000+ employees)
  - Able to design development team structures and foster engineering culture, considering the balance between the development organization and the business
- Offshore development experience
  - Experience in international vendor management and coordination
  - Comfortable working in English

## Current Focus Areas

- Low-level implementation of LLM inference engines (CUDA / WebGPU / custom kernels)
- Real-time AI audio & video processing pipelines
- Systems programming in Rust/C++ with Python bindings
- Establishing and practicing AI-Driven Development (AIDD) methodologies

## Work Experience

### Nov 2023 - Present: DEVenus Co., Ltd. (有限会社DEVenus) — CEO

Transitioned the business to SI and DX consulting.
Relocated headquarters to Shinjuku, Tokyo.
Currently focused on AI and 3D projects.

#### Dec 2025 - Present: Company A — Real-time AI Voice Chat System Development

Developing PyGPUkit (low-level GPU library).
Implementing GPU kernel programming with Rust and C++ for GPU scheduling and inference faster than PyTorch.
Building LLM inference kernels for RTX 5090 (SM120) and RTX 3090 (SM86) architectures.
Added media-layer operations for real-time STT via GPU encoding with Whisper-1.

##### Responsibilities
- GPU programming
- Server architecture design
- 3D model rendering with ReactNative

Technologies: C++, Rust, Python, TypeScript
Environment: Windows, Linux (Runpods), FastAPI

#### Oct 2025 - Jan 2026: Direct Marketing Agency Co., Ltd. (株式会社ダイレクトマーケティングエージェンシー) — CRM AI Agent Tool Development

Developed an Agent Widget for a CRM tool.

##### Responsibilities
- AWS infrastructure selection
- Full development of admin tool, Widget frontend, Widget backend, and AgentCore
- CI/CD pipeline setup

Technologies: TypeScript, Python
Tools: Lambda API, Next.js, React, AWS Bedrock, Redshift Serverless, Amplify Gen 2

#### Sep 2024 - Oct 2025: Company A — AI Support Tool for HR Services

Developed an AI video chat application for job-seeking support services.

##### Responsibilities
- End-to-end development of the AI video chat application

Technologies: TypeScript, Python
Tools: FastAPI, Next.js, React

#### May 2024 - Sep 2024: Classmethod, Inc. (クラスメソッド株式会社) — Point Service SI Development

Developed an SI system integrating a proprietary point service with third-party systems.

##### Responsibilities
- Smaregi integration research
- Point service feature development

Technologies: Kotlin, TypeScript
Tools: Spring Framework, Next.js, React, PostgreSQL

#### Sep 2023 - Mar 2024: KAKEHASHI, Inc. (株式会社カケハシ) — Healthcare Application Development

Large-scale refactoring of the musubi product.
Integration testing after refactoring.

##### Responsibilities
- New refactoring initiatives
- Integration testing of existing features

Technologies: TypeScript, Python
Tools: FastAPI, Angular, MySQL, Redis

#### Projects prior to Nov 2023

- Developed a matching application using OpenAI
  - Responsible for frontend, backend, and infrastructure
- Developed an AI interview application using WebGL
  - Responsible for frontend rebuild
- Developed a web application for FireStick

### Sep 2021 - Aug 2023: ENJOY LLC (合同会社ENJOY)

Served as CTO (hired), handling various products and conducting technology evaluations.
- Solidity
- Product architecture reviews
- Product platform development

### Apr 2022 - Aug 2022: Celid, Inc. (株式会社Celid)

#### Apr 2022 - Aug 2022: ECS Platform Development

Built functionality in Python to launch GPU instances on EC2 and operate them like ECS.
After a strategic pivot, developed automatic GPU instance attachment to ECS.
Managed overall infrastructure and feature additions.

### Aug 2021 - Nov 2023: JIEM (株式会社教育測定研究所 — Japan Institute for Educational Measurement)

#### Aug 2021 - Nov 2023: Platform Billing

Served as Bridge SE, managing vendor control for the following platform products:
- Billing (Payment)
- Product Management (Product)
- User Ticket Management (Ticketing)
- Item Bank Management (ItemBank)

#### Aug 2022 - Present: Platform Operations & Management

Due to platform business downsizing, consolidated four vendors. Currently responsible for operating the following products:
- Account
- Billing (Payment)
- Product Management (Product)
- User Ticket Management (Ticketing)
- Item Bank Management (ItemBank)

#### Apr 2022 - Present: Deputy Department Head (Technical Lead)

Following the departure of the department head, took on the technical responsibilities as a separate technical lead role.
Current responsibilities include:

- Internal development process improvement
- Vendor training for the India subsidiary
- Internal study sessions
- Architecture reviews for new products
- Development organization improvement (software verification, etc.)
- Training for new engineers in Vietnam

Contributed to headquarters function strengthening by benchmarking competitors and developing efficient organizational structures and development schemes.

### Dec 2017 - Aug 2021: CAPCOM Co., Ltd. (株式会社CAPCOM)

Worked as a game server engineer developing server-side systems for in-house mobile applications.
Also handled AWS infrastructure as a full-stack engineer.
Served as server operations team lead.

#### Jan 2018 - Oct 2018: In-house Application Development

Responsible for game logic implementation as a game server engineer.
Built CI pipelines with Jenkins and provided local server tools for client engineers.
Partially configured infrastructure using AWS CloudFormation.
Technologies: Python (Django), TypeScript (Angular)
Tools: GitLab, Jenkins, MySQL, Docker on AWS

##### Responsibilities
- Infrastructure design
- Game server architecture planning
- Requirements definition
- Basic & detailed design
- Database design
- Implementation
- CI/CD setup
- Workflow design

#### Nov 2018 - Mar 2019: In-house Application Admin Tool Development

Assigned as Osaka server lead to support the Tokyo team's application development.
While the game server was largely complete, no admin tool existed for the partner company.
Led requirements definition, effort estimation, staffing, and base development for the admin tool.
Successfully delivered the admin tool before launch.
Also addressed issues in the game server prior to operations launch.
Technologies: TypeScript (Angular), C# (ASP.NET)
Tools: GitLab, MySQL

##### Responsibilities
- Infrastructure design
- Admin tool technology selection
- Requirements definition
- Database design
- Project foundation implementation
- Implementation
- Workflow design
- User manual creation
- Staffing & personnel management

#### Apr 2019 - Mar 2021: In-house Application Development & Operations

Resumed work on the title originally developed in 2018.
Served as infrastructure and server engineer.
Took over as lead engineer after the previous lead was reassigned.
Technologies: Python (Tornado), TypeScript (Angular/Vue.js)
Tools: GitLab, Jenkins, DynamoDB, Docker

##### Responsibilities
- Infrastructure operations
- Coordination with external partners
- Requirements definition
- Database design
- Peripheral tool development
- Implementation, testing & incident response
- Budget management
- Personnel management

#### Apr 2021 - Aug 2021: Standby Due to Departmental Restructuring

On standby due to department consolidation.
Focused on self-improvement through technical investigations.
Created training materials and presentation decks for new graduates.
Worked on improving the efficiency of onboarding.

### May 2013 - Nov 2017: Septeni Group (セプテーニグループ)

#### Mar 2016 - Nov 2017: In-house Manga Application Development

Worked as a full-stack engineer on an in-house manga application.
Gathered requirements directly from the product owner and implemented features.
- Requirements definition
- Database design
- Server implementation
- Client implementation
- Testing & incident response

#### Aug 2014 - Mar 2016: In-house Ad Tool Development

Initially contributed as a team member for technology selection, then led the tool development.
Team grew to a maximum of 20 members.

The new technology stack introduced initially caused the product owner to perceive development as slow.
Regret not being able to fully compensate for that gap through team effort.

Technologies: Scala (Play Framework), TypeScript (AngularJS)
Infrastructure: AWS

##### Responsibilities
- Technology selection
- Requirements definition
- Database design
- Server implementation
- Testing & incident response

#### Jun 2013 - Aug 2014: Social Game Development & Operations

Took over a third-party social game for development and operations.
During the handover period, worked on-site at the partner company; after stabilization, operated remotely via VPN.
Technologies: C# (ASP.NET), partially PHP (Flash compositing)

As sub-leader, proactively proposed operational improvements.
Transitioned support staff from email-driven workflows to Redmine ticket-based workflows.
Introduced automated unit testing and drove project improvements.

Significantly improved operational efficiency and reduced overtime hours.

##### Responsibilities
- Requirements definition
- Database design
- Server implementation
- Testing & incident response

#### May 2013 - Jun 2013: Social Game Porting

Learned PHP while porting a social game from another platform.
Technologies: PHP (proprietary framework)

##### Responsibilities
- Server implementation

### Apr 2010 - Apr 2013: Yayoi Co., Ltd. (弥生株式会社)

Worked as a Windows client engineer.
Handled maintenance of legacy Win32API environments and migration to .NET.

#### Apr 2010 - Apr 2013: In-house Payroll Software Development & Support

Primarily responsible for new feature development, data support, and builds for the in-house payroll software.
Technologies: C++ (proprietary framework), C# (WPF)
Tools: SVN

##### Responsibilities
- Installer development with InstallShield
- Build script maintenance
- Customer support for data corruption issues
- Requirements definition through testing for new payroll features
- Common library porting

## OSS Activities

### GPU / LLM Inference

- [PyGPUkit](https://github.com/m96-chan/PyGPUkit) — Minimal GPU runtime for Python. Implements CUDA kernels, memory management, and LLM inference without heavy dependencies. Supports Ampere/Hopper/Blackwell architectures
- [0xBitNet](https://github.com/m96-chan/0xBitNet) — Runs BitNet b1.58 ternary LLMs in browsers and native apps via WebGPU. Implemented in WGSL

### Real-time Media Processing

- [ProcTap](https://github.com/m96-chan/ProcTap) — Per-process audio capture library (WASAPI Process Loopback). Published on PyPI
- [ProcTapPipes](https://github.com/m96-chan/ProcTapPipes) — Modular audio processing pipeline for ProcTap
- [OBS-WebRTC-Link](https://github.com/m96-chan/OBS-WebRTC-Link) — WebRTC plugin for OBS Studio (C++). Low-latency bidirectional video & audio
- [MeetScribe](https://github.com/m96-chan/MeetScribe) — Multi-meeting integration app: BOT + external recording + meeting minutes

### Systems Programming

- [PyETWkit](https://github.com/m96-chan/PyETWkit) — High-performance Windows ETW (Event Tracing) consumer library. Rust core with PyO3 bindings

### Tools & Other

- [ai_research_dashboard](https://github.com/m96-chan/ai_research_dashboard) — Research dashboard for auto-collecting AI/ML papers, models & trends (Astro)
- [comike-cli](https://github.com/m96-chan/comike-cli) — Natural language CLI tool for Comiket web catalog (OpenAI integration)
- [pyTimeTree](https://github.com/m96-chan/pytimetree) — Unofficial TimeTree Python SDK. Published on PyPI

## Other Development Activities (Outside Work)

- Publishing and maintaining multiple OSS packages on PyPI, including GPU inference engines and audio processing libraries
- R&D on NN kernels for Qualcomm SoCs
- Automated collection and monitoring of the latest AI/ML papers and models via AI Research Dashboard
- VRChat-related tool development (event tools, metaverse checker)
- Game development with Cocos2dx

## Speaking

- Presented at company-hosted study sessions:
  - [Scala × DDD × Real-world Practice](https://www.slideshare.net/ssuser19a9df/scala-ddd)
  - [DDD × New Graduate Training](https://www.slideshare.net/ssuser19a9df/ddd-49453272)

## Information Gathering

Maintains connections with CTOs and freelance engineers for regular knowledge sharing.
For AI/ML, uses a self-built research dashboard to automatically collect trends from arXiv, HuggingFace, and GitHub on an hourly basis.
Regularly attends meetups and actively seeks out new communities for information exchange.
Prioritizes firsthand experience over web research, as real-world insights often differ from online information.

## Certifications & Awards

- Initial System Administrator Certification (初級システムアドミニストレータ)
- 2006: Fundamental Information Technology Engineer Examination (基本情報技術者試験)
- 2007: Applied Information Technology Engineer Examination (応用情報技術者試験)
- 2017: In-house Engineer Award at CAPCOM
- 2024: Bronze Award, AI Video Category at [Tokyo AI Festival](https://www.aisai.tokyo/)
