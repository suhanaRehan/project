export interface ProcessStep {
  title: string
  description: string
}

export interface QuestionnaireField {
  question: string
  type: 'text' | 'select' | 'textarea'
  options?: string[]
  placeholder?: string
}

export interface SubService {
  slug: string
  title: string
  shortDescription: string
  heroTagline: string
  whatIs: string
  whyNeeded: string
  whatWeProvide: string[]
  keyFeatures: string[]
  benefits: string[]
  process: ProcessStep[]
}

export interface ServiceCategory {
  slug: string
  name: string
  shortName: string
  navLabel: string
  tagline: string
  description: string
  icon: string
  stats: { label: string; value: string }[]
  questionnaire: QuestionnaireField[]
  subServices: SubService[]
}

export const categories: ServiceCategory[] = [
  // ─────────────────────────────────────────── CYBER SECURITY ───────────────────────────────────────────
  {
    slug: 'cyber-security',
    name: 'Cyber Security Services',
    shortName: 'Cyber Security',
    navLabel: 'Cyber Security',
    tagline: 'Intelligence-driven security for the modern enterprise',
    description:
      'We protect enterprise assets, ensure regulatory compliance, and mitigate digital risk with security programs built on continuous monitoring, identity governance, and AI-assisted threat intelligence.',
    icon: 'ShieldCheck',
    stats: [
      { label: 'Threats monitored', value: '24/7' },
      { label: 'Mean detection time', value: '<5 min' },
      { label: 'Compliance frameworks', value: '15+' },
    ],
    questionnaire: [
      { question: 'What best describes your current security posture?', type: 'select', options: ['No formal program', 'Basic controls in place', 'Established program, needs maturing', 'Advanced, seeking optimization'] },
      { question: 'Which compliance or regulatory frameworks apply to your business?', type: 'text', placeholder: 'e.g. GDPR, HIPAA, SOC 2, PCI-DSS' },
      { question: 'Do you currently have 24/7 security monitoring in place?', type: 'select', options: ['Yes, in-house', 'Yes, outsourced', 'Partial coverage', 'No coverage'] },
      { question: 'What is your primary environment?', type: 'select', options: ['On-premises', 'Cloud-native', 'Hybrid', 'Multi-cloud'] },
      { question: 'Have you experienced a security incident in the last 12 months?', type: 'select', options: ['Yes, significant', 'Yes, minor', 'No', 'Unsure'] },
      { question: 'What outcome matters most to your organization right now?', type: 'textarea', placeholder: 'e.g. passing an audit, reducing breach risk, securing a cloud migration' },
    ],
    subServices: [
      {
        slug: 'identity-access-management',
        title: 'Identity and Access Management',
        shortDescription: 'Robust authentication, role-based access, and privileged account governance.',
        heroTagline: 'Control exactly who can reach what, every time.',
        whatIs:
          'Identity and Access Management (IAM) is the discipline of governing digital identities and the permissions attached to them, so that every employee, partner, and system account has precisely the access it needs and nothing more. Our IAM practice spans authentication, authorization, lifecycle management, and privileged access controls across cloud and on-premises systems.',
        whyNeeded:
          'Compromised credentials remain one of the leading causes of enterprise breaches. As organizations adopt more SaaS applications and distributed teams, manually managed access quickly becomes inconsistent, over-permissioned, and difficult to audit, creating an expanding attack surface that attackers actively target.',
        whatWeProvide: [
          'Single sign-on (SSO) and multi-factor authentication (MFA) rollout',
          'Role-based and attribute-based access control (RBAC/ABAC) design',
          'Privileged Access Management (PAM) for administrative and service accounts',
          'Automated joiner-mover-leaver identity lifecycle workflows',
          'Directory consolidation and federation across cloud and legacy systems',
          'Access certification and periodic entitlement review programs',
        ],
        keyFeatures: [
          'Centralized identity governance dashboard',
          'Just-in-time privileged access elevation',
          'Adaptive, risk-based authentication policies',
          'Full audit trail for every access decision',
          'Integration with existing HR and IT service management systems',
        ],
        benefits: [
          'Significantly reduced credential-based breach risk',
          'Faster onboarding and offboarding with fewer manual errors',
          'Simplified audits with always-current access records',
          'Lower help desk burden from self-service access requests',
          'Consistent policy enforcement across every application',
        ],
        process: [
          { title: 'Identity Assessment', description: 'We map existing identities, entitlements, and authentication methods to surface gaps and excess privilege.' },
          { title: 'Architecture Design', description: 'We design an IAM architecture aligned to your applications, compliance needs, and growth plans.' },
          { title: 'Implementation & Migration', description: 'We deploy SSO, MFA, and access controls in stages to avoid disrupting daily operations.' },
          { title: 'Governance & Optimization', description: 'We establish ongoing access reviews and refine policies as your organization evolves.' },
        ],
      },
      {
        slug: 'data-protection-privacy',
        title: 'Data Protection and Privacy',
        shortDescription: 'Encryption, data loss prevention, and global privacy compliance.',
        heroTagline: 'Safeguard sensitive data wherever it lives or travels.',
        whatIs:
          'Data Protection and Privacy services secure sensitive information throughout its lifecycle, from creation to storage, transmission, and deletion, while ensuring your handling practices align with regulations such as GDPR and CCPA. This combines encryption, classification, data loss prevention (DLP), and privacy governance into a single coherent program.',
        whyNeeded:
          'Regulators are imposing larger penalties for mishandled personal data, and customers increasingly choose vendors based on demonstrated data stewardship. Without classification and DLP controls, sensitive data routinely leaks through email, file shares, and unmanaged endpoints without anyone noticing.',
        whatWeProvide: [
          'Data discovery and classification across structured and unstructured stores',
          'Encryption at rest and in transit, including key management',
          'Data Loss Prevention (DLP) policy design and enforcement',
          'Privacy impact assessments and regulatory gap analysis',
          'Data retention, minimization, and secure disposal programs',
          'Consent and subject-rights request workflow design',
        ],
        keyFeatures: [
          'Automated sensitive-data discovery and tagging',
          'Policy-based DLP across endpoint, network, and cloud',
          'Centralized encryption key lifecycle management',
          'Privacy regulation mapping (GDPR, CCPA, and beyond)',
          'Real-time alerts on anomalous data movement',
        ],
        benefits: [
          'Reduced exposure to regulatory fines and litigation',
          'Stronger customer trust through demonstrable data stewardship',
          'Faster, less stressful response to data subject requests',
          'Clear visibility into where sensitive data actually resides',
          'Lower likelihood of accidental or malicious data exfiltration',
        ],
        process: [
          { title: 'Discovery & Classification', description: 'We locate and categorize sensitive data across your systems and third-party tools.' },
          { title: 'Risk & Compliance Mapping', description: 'We assess exposure against applicable privacy regulations and internal policy.' },
          { title: 'Control Implementation', description: 'We deploy encryption, DLP, and retention controls tailored to each data category.' },
          { title: 'Monitoring & Reporting', description: 'We maintain continuous oversight and provide audit-ready reporting on demand.' },
        ],
      },
      {
        slug: 'vulnerability-management',
        title: 'Vulnerability Management',
        shortDescription: 'Continuous scanning, risk assessment, and proactive remediation.',
        heroTagline: 'Find weaknesses before attackers do.',
        whatIs:
          'Vulnerability Management is the ongoing process of identifying, prioritizing, and remediating security weaknesses across networks, applications, and endpoints before they can be exploited. Rather than a one-time scan, it is a continuous cycle of discovery, risk scoring, and verified remediation.',
        whyNeeded:
          'New vulnerabilities are disclosed daily, and attackers automate scanning for unpatched systems within hours of disclosure. Organizations without a structured program accumulate unmanaged risk that grows silently until it is exploited.',
        whatWeProvide: [
          'Continuous internal and external vulnerability scanning',
          'Risk-based prioritization tied to business criticality',
          'Patch management coordination and remediation tracking',
          'Configuration and hardening reviews against industry benchmarks',
          'Executive and technical reporting on risk trends',
          'Exception handling and compensating control guidance',
        ],
        keyFeatures: [
          'Automated, scheduled scanning across hybrid environments',
          'CVSS and business-context risk scoring',
          'Remediation SLAs with tracked accountability',
          'Integration with ticketing and DevOps pipelines',
          'Trend dashboards for leadership visibility',
        ],
        benefits: [
          'Materially smaller attack surface over time',
          'Faster, evidence-based remediation prioritization',
          'Improved standing in security questionnaires and audits',
          'Reduced likelihood of breach via known, unpatched flaws',
          'Clear accountability between security and IT operations teams',
        ],
        process: [
          { title: 'Asset & Scope Mapping', description: 'We inventory systems, applications, and cloud assets to define complete scan coverage.' },
          { title: 'Continuous Scanning', description: 'We run scheduled and ad-hoc scans across your environment to surface new exposures.' },
          { title: 'Risk Prioritization', description: 'We score findings by exploitability and business impact, not raw vulnerability count.' },
          { title: 'Remediation & Verification', description: 'We track fixes to completion and verify closure with re-testing.' },
        ],
      },
      {
        slug: 'managed-security-services',
        title: 'Managed Security Services',
        shortDescription: '24/7 monitoring, threat detection, and expert incident response.',
        heroTagline: 'A security team that never sleeps, so you can.',
        whatIs:
          'Managed Security Services (MSS) extend your organization with a dedicated team and toolset that monitors, detects, and responds to threats around the clock. It covers everything from log monitoring and alert triage to coordinated incident response, without the cost of building an in-house 24/7 operation.',
        whyNeeded:
          'Attacks happen at all hours, and most internal teams lack the staffing or specialized tooling to maintain continuous coverage. Delayed detection is one of the strongest predictors of breach severity and cost.',
        whatWeProvide: [
          '24/7 security event monitoring and alert triage',
          'Security Information and Event Management (SIEM) operation',
          'Threat hunting led by experienced analysts',
          'Incident response coordination and containment',
          'Monthly risk and posture reporting for stakeholders',
          'Tooling integration across endpoint, network, and cloud telemetry',
        ],
        keyFeatures: [
          'Round-the-clock human-led monitoring, not just automated alerts',
          'Defined incident response runbooks and escalation paths',
          'Correlated visibility across the full technology stack',
          'Proactive threat hunting beyond reactive alerting',
          'Transparent reporting on detection and response metrics',
        ],
        benefits: [
          'Dramatically reduced time to detect and contain threats',
          'Predictable security operations cost versus building in-house',
          'Access to specialized analyst expertise on demand',
          'Reduced alert fatigue for internal IT staff',
          'Stronger resilience during after-hours and holiday periods',
        ],
        process: [
          { title: 'Onboarding & Integration', description: 'We connect your log sources, endpoints, and cloud platforms into our monitoring stack.' },
          { title: 'Baseline & Tuning', description: 'We establish behavioral baselines and tune detection rules to your environment.' },
          { title: 'Continuous Monitoring', description: 'Our analysts monitor, triage, and investigate alerts around the clock.' },
          { title: 'Response & Reporting', description: 'We coordinate containment for real incidents and deliver regular posture reports.' },
        ],
      },
      {
        slug: 'cyber-ai-solutions',
        title: 'Cyber AI Solutions',
        shortDescription: 'AI and machine learning to predict, detect, and neutralize threats.',
        heroTagline: 'Outpace attackers with machine-speed defense.',
        whatIs:
          'Cyber AI Solutions apply machine learning and behavioral analytics to security operations, enabling detection of subtle anomalies and emerging attack patterns that signature-based tools routinely miss. AI augments human analysts rather than replacing them, surfacing the threats that matter most.',
        whyNeeded:
          'Modern attacks increasingly use techniques designed to evade static, rule-based defenses. As alert volumes grow beyond what teams can manually review, AI-assisted triage becomes essential to separate genuine threats from noise.',
        whatWeProvide: [
          'Behavioral anomaly detection across users and entities (UEBA)',
          'AI-assisted alert triage and prioritization',
          'Machine learning models for malware and phishing detection',
          'Automated threat intelligence correlation',
          'Adaptive detection tuning that learns from analyst feedback',
          'Model governance to keep detection logic explainable',
        ],
        keyFeatures: [
          'Continuous behavioral baselining of users and systems',
          'Reduced false-positive rates through learned context',
          'Natural language summarization of complex incidents',
          'Integration with existing SIEM and SOAR platforms',
          'Ongoing model retraining as your environment changes',
        ],
        benefits: [
          'Faster identification of novel and evasive threats',
          'Less analyst time spent triaging false positives',
          'Earlier detection of insider and account-takeover risk',
          'Scalable detection that grows with data volume',
          'Clearer, faster decision-making during live incidents',
        ],
        process: [
          { title: 'Data Pipeline Setup', description: 'We connect relevant telemetry sources to feed detection models reliably.' },
          { title: 'Model Selection & Training', description: 'We select and train models suited to your threat landscape and data quality.' },
          { title: 'Integration with SOC Workflow', description: 'We embed AI-driven insights directly into analyst triage and response tools.' },
          { title: 'Continuous Learning', description: 'We retrain and refine models as new threats and feedback emerge.' },
        ],
      },
      {
        slug: 'infrastructure-security',
        title: 'Infrastructure Security',
        shortDescription: 'Securing network perimeters, endpoints, firewalls, and core hardware.',
        heroTagline: 'Harden every layer your business runs on.',
        whatIs:
          'Infrastructure Security protects the foundational technology that everything else depends on, networks, endpoints, firewalls, and physical or virtual hardware, through layered controls, segmentation, and continuous hardening.',
        whyNeeded:
          'A single misconfigured firewall rule or unpatched server can provide attackers a foothold that spreads laterally through an entire network. As infrastructure grows more complex, manual configuration management becomes error-prone and difficult to verify.',
        whatWeProvide: [
          'Network segmentation and zero-trust architecture design',
          'Firewall, IDS/IPS, and perimeter defense management',
          'Endpoint detection and response (EDR) deployment',
          'Server and device hardening against industry benchmarks',
          'Wireless and remote access security configuration',
          'Infrastructure-level penetration testing',
        ],
        keyFeatures: [
          'Defense-in-depth architecture across every layer',
          'Continuous configuration drift detection',
          'Centralized endpoint visibility and response',
          'Segmented network zones to contain breaches',
          'Hardened baselines aligned to CIS and NIST benchmarks',
        ],
        benefits: [
          'Reduced blast radius if a breach does occur',
          'Lower risk from unpatched or misconfigured systems',
          'Improved visibility into endpoint and network activity',
          'Stronger resilience against ransomware propagation',
          'A defensible, auditable infrastructure baseline',
        ],
        process: [
          { title: 'Infrastructure Audit', description: 'We assess current network, endpoint, and perimeter configurations against best practice.' },
          { title: 'Segmentation Design', description: 'We architect network zones and access boundaries to limit lateral movement.' },
          { title: 'Hardening & Deployment', description: 'We apply secure configurations and deploy endpoint and perimeter defenses.' },
          { title: 'Ongoing Validation', description: 'We continuously verify configurations remain hardened as infrastructure changes.' },
        ],
      },
      {
        slug: 'ot-security',
        title: 'Operational Technology Security',
        shortDescription: 'Safeguarding industrial control systems and SCADA environments.',
        heroTagline: 'Protect the systems that run physical operations.',
        whatIs:
          'Operational Technology (OT) Security protects industrial control systems (ICS), SCADA platforms, and other systems that monitor or control physical processes, from manufacturing lines to utility grids, against cyber disruption.',
        whyNeeded:
          'OT environments were historically isolated, but increasing IT/OT convergence has exposed legacy industrial systems, many never designed with cybersecurity in mind, to network-borne threats that can cause real-world physical and safety consequences.',
        whatWeProvide: [
          'OT and ICS asset inventory and risk assessment',
          'IT/OT network segmentation and secure remote access design',
          'OT-aware monitoring and anomaly detection',
          'Patch and lifecycle management for legacy industrial systems',
          'Incident response planning tailored to safety-critical environments',
          'Compliance support for OT-specific regulatory frameworks',
        ],
        keyFeatures: [
          'Passive monitoring that avoids disrupting sensitive control systems',
          'Purpose-built segmentation between IT and OT networks',
          'Visibility into legacy protocols and proprietary equipment',
          'Safety-first incident response procedures',
          'Vendor and third-party access governance for OT systems',
        ],
        benefits: [
          'Reduced risk of operational downtime from cyber incidents',
          'Improved safety posture across industrial environments',
          'Clear visibility into previously unmonitored OT assets',
          'Stronger compliance with industrial security standards',
          'Coordinated response plans that protect both data and physical safety',
        ],
        process: [
          { title: 'OT Asset Discovery', description: 'We inventory control systems, sensors, and industrial network segments.' },
          { title: 'Risk Assessment', description: 'We evaluate exposure across IT/OT convergence points and legacy protocols.' },
          { title: 'Segmentation & Monitoring', description: 'We implement segmentation and passive monitoring suited to industrial environments.' },
          { title: 'Resilience Planning', description: 'We build response plans that prioritize operational safety and continuity.' },
        ],
      },
      {
        slug: 'threat-detection-response',
        title: 'Threat Detection and Response',
        shortDescription: 'Real-time SOC operations, threat hunting, and rapid mitigation.',
        heroTagline: 'See threats the moment they emerge, act before they spread.',
        whatIs:
          'Threat Detection and Response combines real-time Security Operations Center (SOC) monitoring with proactive threat hunting and structured incident response, designed to identify active threats quickly and contain them before significant damage occurs.',
        whyNeeded:
          'The window between initial compromise and meaningful damage is often measured in hours, not days. Organizations relying solely on automated alerts without active hunting and response capability frequently discover breaches far too late.',
        whatWeProvide: [
          'Real-time SOC monitoring across your technology stack',
          'Proactive threat hunting based on emerging tactics and techniques',
          'Security orchestration, automation, and response (SOAR) playbooks',
          'Incident triage, containment, and root-cause analysis',
          'Post-incident reporting and lessons-learned reviews',
          'Tabletop exercises to test response readiness',
        ],
        keyFeatures: [
          'MITRE ATT&CK-aligned detection coverage',
          'Automated response playbooks for common attack patterns',
          'Dedicated incident commander during active events',
          'Cross-source correlation for faster root-cause analysis',
          'Continuous improvement loop from every incident',
        ],
        benefits: [
          'Faster containment that limits breach scope and cost',
          'Improved detection of threats that evade automated tools',
          'Clear, documented response procedures during high-stress events',
          'Stronger institutional readiness through regular exercises',
          'Reduced downtime and reputational impact from incidents',
        ],
        process: [
          { title: 'Detection Engineering', description: 'We build and tune detections mapped to relevant adversary techniques.' },
          { title: 'Active Threat Hunting', description: 'Our analysts proactively search for indicators that automated tools may miss.' },
          { title: 'Incident Response', description: 'We triage, contain, and remediate confirmed incidents with a defined playbook.' },
          { title: 'Post-Incident Review', description: 'We document root cause and strengthen defenses against recurrence.' },
        ],
      },
      {
        slug: 'governance-risk-compliance',
        title: 'Governance, Risk, and Compliance',
        shortDescription: 'Aligning security with business strategy and compliance audits.',
        heroTagline: 'Turn security into a measurable business discipline.',
        whatIs:
          'Governance, Risk, and Compliance (GRC) aligns your security program with business strategy, formalizing policies, managing audits, and quantifying risk so leadership can make informed, defensible decisions about where to invest.',
        whyNeeded:
          'Without structured governance, security efforts become reactive and disconnected from business priorities, leading to wasted spend, failed audits, and difficulty demonstrating due diligence to regulators, customers, and insurers.',
        whatWeProvide: [
          'Security policy and standards development',
          'Risk register development and quantified risk scoring',
          'Compliance audit preparation and management (SOC 2, ISO 27001, and more)',
          'Third-party and vendor risk assessment programs',
          'Board and executive risk reporting',
          'Control mapping across overlapping regulatory frameworks',
        ],
        keyFeatures: [
          'Unified control framework spanning multiple regulations',
          'Quantified, business-aligned risk scoring',
          'Audit-ready documentation maintained continuously',
          'Structured vendor risk assessment workflows',
          'Executive dashboards translating risk into business terms',
        ],
        benefits: [
          'Smoother, faster compliance audits with less last-minute scrambling',
          'Security investment decisions grounded in quantified risk',
          'Improved trust with customers, partners, and insurers',
          'Reduced duplicate effort across overlapping frameworks',
          'Clear accountability for risk ownership across the business',
        ],
        process: [
          { title: 'Current State Assessment', description: 'We evaluate existing policies, controls, and compliance posture.' },
          { title: 'Framework Design', description: 'We build a governance framework mapped to applicable regulations and standards.' },
          { title: 'Implementation', description: 'We roll out policies, risk registers, and reporting cadences across the business.' },
          { title: 'Continuous Governance', description: 'We maintain audit readiness and refine risk scoring as the business evolves.' },
        ],
      },
      {
        slug: 'cloud-security',
        title: 'Cloud Security',
        shortDescription: 'Guardrails, posture management, and native controls across multi-cloud.',
        heroTagline: 'Move fast in the cloud without losing control.',
        whatIs:
          'Cloud Security implements guardrails, posture management, and native security controls across AWS, Azure, Google Cloud, and other platforms, ensuring cloud environments remain secure even as teams deploy and scale rapidly.',
        whyNeeded:
          'Cloud misconfigurations, exposed storage buckets, overly permissive identities, unmonitored services, are among the most common causes of cloud breaches, and they accumulate quickly when development velocity outpaces security review.',
        whatWeProvide: [
          'Cloud Security Posture Management (CSPM) implementation',
          'Identity and entitlement review across cloud accounts',
          'Infrastructure-as-Code security scanning',
          'Cloud workload protection and container security',
          'Multi-cloud security baseline and guardrail design',
          'Cloud-native logging and detection configuration',
        ],
        keyFeatures: [
          'Continuous misconfiguration detection and auto-remediation options',
          'Least-privilege identity guardrails across cloud accounts',
          'Shift-left security scanning in CI/CD pipelines',
          'Unified visibility across multiple cloud providers',
          'Compliance mapping for cloud-specific frameworks',
        ],
        benefits: [
          'Significantly fewer exploitable cloud misconfigurations',
          'Faster, safer cloud deployment velocity for engineering teams',
          'Centralized visibility across sprawling multi-cloud estates',
          'Reduced risk of accidental public data exposure',
          'Stronger audit readiness for cloud-hosted workloads',
        ],
        process: [
          { title: 'Cloud Posture Assessment', description: 'We assess current configurations, identities, and workloads across cloud accounts.' },
          { title: 'Guardrail Design', description: 'We define security baselines and automated guardrails for ongoing deployments.' },
          { title: 'Implementation', description: 'We deploy posture management, identity controls, and workload protection.' },
          { title: 'Continuous Monitoring', description: 'We maintain ongoing visibility and respond to new misconfigurations as they arise.' },
        ],
      },
      {
        slug: 'cyber-advisory-services',
        title: 'Cyber Advisory Services',
        shortDescription: 'Strategic consultation, risk readiness, and security roadmap development.',
        heroTagline: 'Strategic clarity for complex security decisions.',
        whatIs:
          'Cyber Advisory Services provide strategic consultation for leadership teams navigating security investment decisions, from readiness assessments to multi-year roadmap development, grounded in business priorities rather than generic checklists.',
        whyNeeded:
          'Many organizations invest in security tools without a coherent strategy, resulting in overlapping capabilities, unaddressed gaps, and difficulty justifying spend to the board. Strategic advisory closes that gap with a clear, prioritized plan.',
        whatWeProvide: [
          'Security maturity and readiness assessments',
          'Multi-year security roadmap development',
          'Budget planning and tooling rationalization',
          'M&A and due diligence security review',
          'Virtual CISO advisory and board-level reporting support',
          'Crisis and breach-readiness strategic planning',
        ],
        keyFeatures: [
          'Independent, vendor-neutral recommendations',
          'Roadmaps prioritized by business risk and impact',
          'Direct executive and board communication support',
          'Benchmarking against industry peers',
          'Actionable, phased implementation plans',
        ],
        benefits: [
          'Security spend directed at the highest-impact priorities',
          'Clearer board and executive confidence in security strategy',
          'Reduced tool sprawl and overlapping vendor contracts',
          'Faster alignment between security and business objectives',
          'A defensible plan to present to auditors, insurers, and acquirers',
        ],
        process: [
          { title: 'Discovery & Interviews', description: 'We meet with stakeholders to understand business priorities and current capabilities.' },
          { title: 'Maturity Assessment', description: 'We benchmark your program against industry frameworks and peer organizations.' },
          { title: 'Roadmap Development', description: 'We build a phased, prioritized roadmap tied to measurable risk reduction.' },
          { title: 'Advisory Support', description: 'We provide ongoing strategic guidance as priorities and threats evolve.' },
        ],
      },
      {
        slug: 'sase',
        title: 'Secure Access Service Edge',
        shortDescription: 'Converging network security and WAN into a unified cloud-delivered service.',
        heroTagline: 'One unified edge for security and connectivity.',
        whatIs:
          'Secure Access Service Edge (SASE) converges network security functions, secure web gateway, firewall-as-a-service, zero-trust network access, and CASB, with wide-area networking into a single cloud-delivered service architecture.',
        whyNeeded:
          'Distributed workforces and cloud-first applications have made traditional hub-and-spoke network security architectures slow and difficult to scale. SASE delivers consistent protection regardless of where users or applications reside.',
        whatWeProvide: [
          'SASE architecture design and vendor selection',
          'Zero Trust Network Access (ZTNA) implementation',
          'Secure web gateway and CASB deployment',
          'Firewall-as-a-Service configuration',
          'WAN optimization integrated with security policy',
          'Migration planning from legacy VPN and MPLS architectures',
        ],
        keyFeatures: [
          'Consistent policy enforcement for remote and on-site users alike',
          'Cloud-delivered architecture with global points of presence',
          'Reduced reliance on traditional VPN infrastructure',
          'Integrated visibility across network and security telemetry',
          'Scalable architecture that grows with distributed teams',
        ],
        benefits: [
          'Improved user experience for remote and hybrid teams',
          'Simplified network security management at scale',
          'Lower total cost compared to maintaining legacy WAN hardware',
          'Stronger protection for cloud and SaaS application access',
          'Faster rollout of new sites and remote locations',
        ],
        process: [
          { title: 'Architecture Assessment', description: 'We evaluate current network and security architecture against SASE principles.' },
          { title: 'Solution Design', description: 'We design a SASE architecture aligned to your connectivity and security needs.' },
          { title: 'Phased Migration', description: 'We migrate sites and users in planned phases to avoid business disruption.' },
          { title: 'Optimization', description: 'We tune policies and performance as adoption scales across the organization.' },
        ],
      },
      {
        slug: 'hybrid-cloud-security',
        title: 'Hybrid Cloud Security',
        shortDescription: 'Consistent, unified security policies across on-prem and public cloud.',
        heroTagline: 'One consistent policy, wherever your workloads run.',
        whatIs:
          'Hybrid Cloud Security delivers consistent, unified security policies across on-premises data centers and public cloud infrastructure, eliminating the gaps that appear when environments are secured with disconnected tools and standards.',
        whyNeeded:
          'Most enterprises run a mix of on-premises and cloud workloads, and inconsistent security policy between the two creates blind spots that attackers exploit, particularly during cloud migration projects when both environments are simultaneously active.',
        whatWeProvide: [
          'Unified policy framework spanning on-prem and cloud',
          'Hybrid identity and access governance',
          'Consistent logging and monitoring across environments',
          'Secure connectivity design between data centers and cloud',
          'Workload migration security review',
          'Hybrid backup and disaster recovery security alignment',
        ],
        keyFeatures: [
          'Single policy framework applied consistently everywhere',
          'Unified visibility across on-prem and cloud telemetry',
          'Secure, monitored connectivity between environments',
          'Consistent identity governance regardless of workload location',
          'Migration-aware security controls during transition periods',
        ],
        benefits: [
          'Eliminated security gaps between on-prem and cloud environments',
          'Smoother, safer cloud migration with consistent controls',
          'Simplified compliance reporting across hybrid infrastructure',
          'Reduced operational complexity for security teams',
          'Stronger resilience during infrastructure transitions',
        ],
        process: [
          { title: 'Environment Mapping', description: 'We document workloads, dependencies, and existing controls across both environments.' },
          { title: 'Unified Policy Design', description: 'We define a consistent security policy framework spanning on-prem and cloud.' },
          { title: 'Implementation', description: 'We apply unified controls, identity governance, and monitoring across both environments.' },
          { title: 'Ongoing Alignment', description: 'We keep policies synchronized as workloads shift and infrastructure evolves.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────── SOFTWARE DEVELOPMENT ───────────────────────────────────────
  {
    slug: 'software-development',
    name: 'Software Development & Modernization',
    shortName: 'Software Development',
    navLabel: 'Software Development',
    tagline: 'End-to-end engineering for ambitious products',
    description:
      'We design, build, and modernize enterprise software using agile practices and cloud-native architectures, delivering systems that are reliable, scalable, and built to evolve with your business.',
    icon: 'Code2',
    stats: [
      { label: 'Production deployments', value: '500+' },
      { label: 'Average uptime', value: '99.95%' },
      { label: 'Engineering disciplines', value: '5' },
    ],
    questionnaire: [
      { question: 'What are you looking to build or modernize?', type: 'select', options: ['New product from scratch', 'Existing legacy system', 'Internal enterprise tool', 'Mobile application'] },
      { question: 'What is your current technology stack, if any?', type: 'text', placeholder: 'e.g. .NET, Java, Node.js, PHP' },
      { question: 'What is your target timeline?', type: 'select', options: ['Under 3 months', '3-6 months', '6-12 months', 'Ongoing partnership'] },
      { question: 'Do you have an in-house engineering team today?', type: 'select', options: ['No team', 'Small team, needs augmentation', 'Established team, needs specialized expertise', 'Fully staffed, exploring options'] },
      { question: 'What is the biggest technical challenge you are facing?', type: 'textarea', placeholder: 'e.g. scaling issues, outdated architecture, slow release cycles' },
    ],
    subServices: [
      {
        slug: 'custom-software-development',
        title: 'Custom Software Development',
        shortDescription: 'Web, mobile, and backend systems tailored to your business workflows.',
        heroTagline: 'Software built around how your business actually works.',
        whatIs:
          'Custom Software Development is the design and engineering of applications built specifically for your business processes, rather than adapted from generic off-the-shelf products. It spans modern web applications, native and cross-platform mobile apps, and high-performance backend systems.',
        whyNeeded:
          'Off-the-shelf software forces teams to bend their processes to fit the tool. As businesses scale, those compromises compound into inefficiency, workarounds, and lost competitive advantage that custom-built systems are designed to eliminate.',
        whatWeProvide: [
          'Web application design and development with modern frontend frameworks',
          'Native and cross-platform mobile app development',
          'High-performance backend systems and APIs',
          'Enterprise software tailored to specific business workflows',
          'Technical discovery and product architecture planning',
          'Ongoing maintenance and feature development',
        ],
        keyFeatures: [
          'Architecture designed around your actual business logic',
          'Modern, maintainable frontend and backend frameworks',
          'Scalable foundations that support future growth',
          'Close collaboration with internal stakeholders throughout',
          'Documented, transferable codebase ownership',
        ],
        benefits: [
          'Software that fits your workflows instead of constraining them',
          'Long-term cost savings versus licensing rigid third-party tools',
          'Competitive differentiation through purpose-built capability',
          'Full ownership and control over your technology roadmap',
          'Faster iteration once the system reflects real business needs',
        ],
        process: [
          { title: 'Discovery & Planning', description: 'We define requirements, user needs, and technical architecture together with your team.' },
          { title: 'Design & Prototyping', description: 'We design interfaces and validate workflows before significant engineering investment.' },
          { title: 'Agile Development', description: 'We build in iterative sprints with regular demos and feedback cycles.' },
          { title: 'Launch & Support', description: 'We deploy to production and provide ongoing support as your needs evolve.' },
        ],
      },
      {
        slug: 'full-stack-development',
        title: 'Full-Stack Development',
        shortDescription: 'Frontend, backend, database architecture, and CI/CD pipelines.',
        heroTagline: 'One team, every layer of the stack.',
        whatIs:
          'Full-Stack Development covers the complete technical surface of an application, frontend interfaces, backend services, database architecture, secure APIs, and the automated pipelines that ship code reliably, delivered by a single accountable team.',
        whyNeeded:
          'Splitting frontend, backend, and infrastructure across disconnected vendors creates integration friction and finger-pointing when issues arise. A unified full-stack approach keeps architecture coherent and accelerates delivery.',
        whatWeProvide: [
          'Comprehensive frontend, backend, and database architectural design',
          'Secure API development, orchestration, and third-party integrations',
          'Scalable microservices architecture for distributed environments',
          'Automated DevOps and CI/CD pipeline implementation',
          'Database design, indexing, and performance tuning',
          'Cross-functional code review and engineering standards',
        ],
        keyFeatures: [
          'Single accountable team across the entire technical stack',
          'API-first design enabling future integrations',
          'Automated testing and deployment pipelines',
          'Microservices patterns suited to distributed scale',
          'Consistent engineering standards from database to UI',
        ],
        benefits: [
          'Faster delivery with no cross-vendor coordination overhead',
          'Coherent architecture that scales predictably',
          'Reduced deployment risk through automated pipelines',
          'Easier long-term maintenance with consistent standards',
          'Clear accountability for the entire technical product',
        ],
        process: [
          { title: 'Architecture Planning', description: 'We design the full technical architecture spanning frontend through database.' },
          { title: 'Parallel Stream Development', description: 'We build frontend, backend, and infrastructure in coordinated parallel tracks.' },
          { title: 'Integration & Testing', description: 'We integrate components and validate end-to-end functionality continuously.' },
          { title: 'CI/CD & Deployment', description: 'We automate build, test, and deployment pipelines for reliable releases.' },
        ],
      },
      {
        slug: 'legacy-system-modernization',
        title: 'Legacy System Modernization',
        shortDescription: 'Code migration, refactoring, and monolith-to-microservices redesign.',
        heroTagline: 'Modernize without starting from zero.',
        whatIs:
          'Legacy System Modernization migrates aging applications to current technology stacks, refactors brittle codebases, and redesigns monolithic architectures into scalable microservices, preserving business logic while removing technical debt.',
        whyNeeded:
          'Legacy systems become increasingly expensive to maintain, harder to secure, and difficult to find engineering talent for. Every year of delay increases both the cost and the risk of eventually modernizing under pressure.',
        whatWeProvide: [
          'Seamless code migration to modern technology stacks',
          'Database optimization, refactoring, and performance tuning',
          'Monolith-to-microservices architecture redesign',
          'Strategic technical debt reduction roadmaps',
          'Risk-managed phased migration planning',
          'Parallel-run and cutover strategy to minimize downtime',
        ],
        keyFeatures: [
          'Incremental migration paths that avoid high-risk rewrites',
          'Preserved business logic throughout the transition',
          'Modern, supportable technology stack outcomes',
          'Performance benchmarking before and after migration',
          'Clear technical debt prioritization and tracking',
        ],
        benefits: [
          'Lower long-term maintenance and hosting costs',
          'Easier hiring with current, in-demand technology stacks',
          'Improved system performance and reliability',
          'Reduced security risk from unsupported platforms',
          'A scalable foundation for future feature development',
        ],
        process: [
          { title: 'Legacy Assessment', description: 'We audit the existing system, dependencies, and business logic in detail.' },
          { title: 'Modernization Strategy', description: 'We define a phased migration path balancing risk, cost, and timeline.' },
          { title: 'Incremental Migration', description: 'We migrate components progressively, validating functionality at each stage.' },
          { title: 'Cutover & Stabilization', description: 'We complete the transition and stabilize the modernized system in production.' },
        ],
      },
      {
        slug: 'cloud-native-development',
        title: 'Cloud-Native Development',
        shortDescription: 'Containerization, serverless architecture, and multi-cloud deployment.',
        heroTagline: 'Built for the cloud, not retrofitted to it.',
        whatIs:
          'Cloud-Native Development builds applications specifically for cloud environments using containerization, serverless functions, and Infrastructure as Code, so systems scale elastically and deploy consistently across providers.',
        whyNeeded:
          'Applications designed without cloud-native principles often fail to scale efficiently, incur unnecessary infrastructure costs, and resist the automation that makes cloud platforms valuable in the first place.',
        whatWeProvide: [
          'Containerization solutions using enterprise container management systems',
          'Serverless application architecture using cloud functions',
          'Resilient multi-cloud application deployment design',
          'Infrastructure as Code (IaC) implementation',
          'Auto-scaling and cost-optimization configuration',
          'Cloud-native observability and logging setup',
        ],
        keyFeatures: [
          'Container orchestration built for elastic scale',
          'Serverless components reducing idle infrastructure cost',
          'Infrastructure defined and versioned as code',
          'Multi-cloud portability where business needs require it',
          'Automated scaling tuned to real traffic patterns',
        ],
        benefits: [
          'Lower infrastructure cost through elastic, on-demand scaling',
          'Faster, repeatable deployments via Infrastructure as Code',
          'Improved resilience through cloud-native fault tolerance',
          'Reduced operational overhead for infrastructure management',
          'Flexibility to adapt as cloud provider needs change',
        ],
        process: [
          { title: 'Cloud Architecture Design', description: 'We design a cloud-native architecture suited to your scale and budget needs.' },
          { title: 'Containerization & IaC', description: 'We containerize workloads and define infrastructure as version-controlled code.' },
          { title: 'Deployment Automation', description: 'We build automated pipelines for consistent, repeatable deployments.' },
          { title: 'Scaling & Optimization', description: 'We tune auto-scaling and cost configurations based on real usage data.' },
        ],
      },
      {
        slug: 'qa-automated-testing',
        title: 'QA & Automated Testing',
        shortDescription: 'End-to-end, performance, security, and UAT testing frameworks.',
        heroTagline: 'Ship with confidence, every release.',
        whatIs:
          'QA & Automated Testing builds comprehensive testing frameworks spanning end-to-end functional tests, performance and load testing, security testing, and structured User Acceptance Testing, catching issues before they reach production.',
        whyNeeded:
          'Manual-only testing cannot keep pace with frequent releases, and gaps in coverage routinely allow regressions and performance issues to reach customers, damaging trust and increasing the cost of fixes discovered late.',
        whatWeProvide: [
          'End-to-end automated testing framework development',
          'Performance testing and high-volume load testing',
          'Security testing, penetration testing, and code analysis',
          'Structured User Acceptance Testing (UAT) management',
          'Test automation integration into CI/CD pipelines',
          'Test coverage reporting and quality metrics dashboards',
        ],
        keyFeatures: [
          'Automated regression suites integrated into every release',
          'Load testing that simulates real production traffic',
          'Static and dynamic code security analysis',
          'Coordinated UAT cycles with structured sign-off',
          'Continuous quality metrics visible to stakeholders',
        ],
        benefits: [
          'Fewer production defects and emergency hotfixes',
          'Faster release cycles backed by automated confidence',
          'Reduced risk from performance issues under real load',
          'Earlier detection of security vulnerabilities in code',
          'Clear, measurable software quality over time',
        ],
        process: [
          { title: 'Test Strategy Design', description: 'We define test coverage priorities across functional, performance, and security dimensions.' },
          { title: 'Framework Build', description: 'We build automated test suites integrated into your development workflow.' },
          { title: 'Execution & Reporting', description: 'We run testing cycles and deliver clear, actionable quality reports.' },
          { title: 'Continuous Integration', description: 'We embed automated testing into CI/CD so every release is verified.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────── AI SOLUTIONS ───────────────────────────────────────────────
  {
    slug: 'ai-solutions',
    name: 'AI Agents & Intelligent Solutions',
    shortName: 'AI Solutions',
    navLabel: 'AI Solutions',
    tagline: 'Autonomous intelligence built for the enterprise',
    description:
      'We engineer automation, machine learning, and generative AI systems that act on your data, reduce manual work, and create measurable operational leverage across the business.',
    icon: 'Sparkles',
    stats: [
      { label: 'Hours automated monthly', value: '10,000+' },
      { label: 'Models deployed to production', value: '150+' },
      { label: 'Average process efficiency gain', value: '40%' },
    ],
    questionnaire: [
      { question: 'Which area are you most interested in?', type: 'select', options: ['Process automation', 'Predictive analytics / ML', 'AI agents', 'Generative AI / LLM integration', 'Data infrastructure for AI'] },
      { question: 'What data do you currently have available for AI initiatives?', type: 'select', options: ['Well-organized and accessible', 'Exists but fragmented', 'Limited or unstructured', 'Not sure'] },
      { question: 'Have you deployed any AI or ML systems to production before?', type: 'select', options: ['Yes, multiple', 'Yes, one or two', 'No, this is our first initiative'] },
      { question: 'What business process are you hoping to improve?', type: 'textarea', placeholder: 'e.g. customer support, document processing, demand forecasting' },
      { question: 'What is your expected timeline to see initial results?', type: 'select', options: ['Under 3 months', '3-6 months', '6+ months', 'Flexible'] },
    ],
    subServices: [
      {
        slug: 'intelligent-automation',
        title: 'Intelligent Automation',
        shortDescription: 'RPA, workflow automation, and conversational AI for business processes.',
        heroTagline: 'Let software handle the repetitive work.',
        whatIs:
          'Intelligent Automation combines Robotic Process Automation (RPA), workflow orchestration, and conversational AI to eliminate repetitive manual tasks, freeing teams to focus on higher-value work while improving consistency and speed.',
        whyNeeded:
          'Manual, repetitive processes consume significant staff time, introduce human error, and scale poorly as transaction volumes grow. Intelligent automation removes that bottleneck without requiring a full system overhaul.',
        whatWeProvide: [
          'Robotic Process Automation (RPA) for rules-based tasks',
          'End-to-end workflow automation design',
          'Business process optimization and re-engineering',
          'Conversational AI and chatbot development',
          'Integration with existing enterprise systems',
          'Automation governance and exception-handling design',
        ],
        keyFeatures: [
          'Bots that integrate with existing legacy and modern systems',
          'Workflow orchestration spanning multiple departments',
          'Conversational interfaces trained on your domain',
          'Exception handling that escalates to humans appropriately',
          'Centralized automation monitoring and analytics',
        ],
        benefits: [
          'Significant reduction in manual processing time',
          'Fewer errors in repetitive, high-volume tasks',
          'Faster turnaround on customer and internal requests',
          'Staff redirected toward higher-value strategic work',
          'Process consistency that scales with transaction volume',
        ],
        process: [
          { title: 'Process Discovery', description: 'We identify high-volume, rules-based processes best suited for automation.' },
          { title: 'Solution Design', description: 'We design bots and workflows aligned to your existing systems and exceptions.' },
          { title: 'Build & Integrate', description: 'We build and integrate automation into your operational environment.' },
          { title: 'Monitor & Scale', description: 'We monitor performance and expand automation to additional processes over time.' },
        ],
      },
      {
        slug: 'machine-learning-solutions',
        title: 'Machine Learning Solutions',
        shortDescription: 'Predictive analytics, recommendation engines, NLP, and computer vision.',
        heroTagline: 'Turn historical data into forward-looking decisions.',
        whatIs:
          'Machine Learning Solutions build predictive models that classify data, forecast trends, recommend actions, and interpret text and images, transforming raw historical data into decisions your team can act on today.',
        whyNeeded:
          'Organizations sitting on years of operational data often make decisions on intuition alone, missing patterns that predictive models can surface, from churn risk to demand spikes to fraud indicators.',
        whatWeProvide: [
          'Predictive analytics model development',
          'Recommendation engine design and deployment',
          'Text and data classification systems',
          'Natural Language Processing (NLP) solutions',
          'Computer vision model development',
          'Time-series forecasting for demand and trend prediction',
        ],
        keyFeatures: [
          'Models trained and validated on your actual business data',
          'Explainable outputs suited for business stakeholder review',
          'Production-grade deployment, not just proof-of-concept notebooks',
          'Ongoing model monitoring for drift and accuracy',
          'Integration with existing dashboards and decision workflows',
        ],
        benefits: [
          'Earlier identification of risk and opportunity in your data',
          'More accurate forecasting for planning and inventory decisions',
          'Personalized recommendations that improve engagement and revenue',
          'Faster, more consistent classification of high-volume content',
          'Decisions grounded in evidence rather than intuition alone',
        ],
        process: [
          { title: 'Use Case Definition', description: 'We identify and prioritize the business problems best suited to ML solutions.' },
          { title: 'Data Preparation', description: 'We clean, structure, and validate the data required to train effective models.' },
          { title: 'Model Development', description: 'We build, test, and validate models against real-world performance criteria.' },
          { title: 'Deployment & Monitoring', description: 'We deploy to production and monitor for accuracy drift over time.' },
        ],
      },
      {
        slug: 'ai-agent-development',
        title: 'AI Agent Development',
        shortDescription: 'Autonomous agents, multi-agent systems, and intelligent document processing.',
        heroTagline: 'Agents that take action, not just generate text.',
        whatIs:
          'AI Agent Development engineers autonomous decision-making agents and coordinated multi-agent systems that can plan, reason, and execute tasks, including intelligent document processing and cognitive customer service automation.',
        whyNeeded:
          'Conventional automation can only follow fixed rules. As tasks grow more complex and context-dependent, businesses increasingly need agents capable of reasoning over ambiguous information and adapting their actions accordingly.',
        whatWeProvide: [
          'Autonomous decision-making agent engineering',
          'Multi-agent collaborative system design',
          'Intelligent Document Processing (IDP) implementation',
          'Cognitive customer service automation',
          'Agent orchestration and tool-use frameworks',
          'Human-in-the-loop oversight and guardrail design',
        ],
        keyFeatures: [
          'Agents capable of multi-step reasoning and planning',
          'Coordinated multi-agent workflows for complex tasks',
          'Document understanding across varied formats and structures',
          'Built-in guardrails and human escalation paths',
          'Tool integration connecting agents to real business systems',
        ],
        benefits: [
          'Automation of complex, judgment-requiring tasks previously manual',
          'Faster processing of unstructured documents and requests',
          'Improved customer service responsiveness and consistency',
          'Reduced operational load on specialized staff',
          'A scalable foundation for expanding agentic capability over time',
        ],
        process: [
          { title: 'Use Case & Risk Assessment', description: 'We identify suitable agentic use cases and define appropriate guardrails.' },
          { title: 'Agent Architecture Design', description: 'We design agent reasoning, tool access, and escalation pathways.' },
          { title: 'Build & Validate', description: 'We build agents and rigorously validate behavior against real scenarios.' },
          { title: 'Deploy & Oversee', description: 'We deploy with human oversight and refine based on observed performance.' },
        ],
      },
      {
        slug: 'genai-solutions',
        title: 'GenAI Solutions',
        shortDescription: 'Custom LLM integration, summarization, and enterprise content generation.',
        heroTagline: 'Generative AI grounded in your business context.',
        whatIs:
          'GenAI Solutions integrate large language models, proprietary and open-source, into enterprise workflows, powering document summarization, code generation assistance, and tailored content generation platforms built around your data and use cases.',
        whyNeeded:
          'Generic AI tools lack context about your business, products, and processes. Effective enterprise GenAI requires careful integration, grounding, and governance to deliver reliable value rather than generic, unreliable output.',
        whatWeProvide: [
          'Custom Large Language Model (LLM) integration',
          'Retrieval-augmented generation grounded in proprietary data',
          'Document summarization and analysis tooling',
          'Automated code generation assistants',
          'Tailored enterprise content generation platforms',
          'Prompt engineering, evaluation, and governance frameworks',
        ],
        keyFeatures: [
          'Models grounded in your proprietary knowledge base',
          'Support for both proprietary and open-source LLMs',
          'Evaluation frameworks measuring accuracy and reliability',
          'Governance controls for responsible enterprise use',
          'Seamless integration with existing tools and workflows',
        ],
        benefits: [
          'Faster content and documentation production',
          'More accurate, context-aware AI outputs grounded in your data',
          'Reduced manual effort on repetitive writing and summarization tasks',
          'Accelerated developer productivity with code generation support',
          'A defensible, governed approach to enterprise AI adoption',
        ],
        process: [
          { title: 'Use Case Scoping', description: 'We identify high-value GenAI applications aligned to business priorities.' },
          { title: 'Grounding & Architecture', description: 'We design retrieval and grounding architecture using your proprietary data.' },
          { title: 'Build & Evaluate', description: 'We build the solution and rigorously evaluate output quality and reliability.' },
          { title: 'Deploy & Govern', description: 'We deploy with governance controls and monitor ongoing performance.' },
        ],
      },
      {
        slug: 'data-engineering-for-ai',
        title: 'Data Engineering for AI',
        shortDescription: 'Data pipelines, labeling, feature engineering, and MLOps infrastructure.',
        heroTagline: 'The data foundation every AI initiative depends on.',
        whatIs:
          'Data Engineering for AI builds the scalable pipelines, labeled datasets, and MLOps infrastructure that production AI systems require, the unglamorous but essential foundation that determines whether AI initiatives succeed at scale.',
        whyNeeded:
          'Most failed AI projects are not failures of modeling, they are failures of data infrastructure: inconsistent pipelines, poor data quality, and no reliable path from experimentation to production deployment.',
        whatWeProvide: [
          'Scalable data pipeline development',
          'High-accuracy data labeling and annotation services',
          'Feature engineering for model performance',
          'MLOps infrastructure for production AI lifecycle management',
          'Data quality monitoring and validation frameworks',
          'Model versioning and reproducibility tooling',
        ],
        keyFeatures: [
          'Pipelines built for reliability at production scale',
          'Quality-controlled labeling workflows with audit trails',
          'Automated feature stores for consistent model inputs',
          'End-to-end MLOps from experimentation to deployment',
          'Continuous data quality and drift monitoring',
        ],
        benefits: [
          'AI models built on reliable, consistent, high-quality data',
          'Faster path from prototype to production deployment',
          'Reduced risk of model degradation from data drift',
          'Reproducible, auditable machine learning workflows',
          'A scalable foundation supporting multiple AI initiatives',
        ],
        process: [
          { title: 'Data Landscape Assessment', description: 'We evaluate current data sources, quality, and infrastructure gaps.' },
          { title: 'Pipeline Architecture', description: 'We design scalable pipelines and feature engineering workflows.' },
          { title: 'MLOps Implementation', description: 'We build infrastructure supporting reliable, repeatable model deployment.' },
          { title: 'Monitoring & Governance', description: 'We implement ongoing data quality and model performance monitoring.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────── IT SOLUTIONS ───────────────────────────────────────────────
  {
    slug: 'it-solutions',
    name: 'IT Solutions & Managed Services',
    shortName: 'IT Solutions',
    navLabel: 'IT Solutions',
    tagline: 'Operational excellence across your technology estate',
    description:
      'We deliver infrastructure, managed services, enterprise systems, and digital transformation programs that keep operations running smoothly while positioning the business for what comes next.',
    icon: 'Server',
    stats: [
      { label: 'Infrastructure uptime', value: '99.9%' },
      { label: 'Help desk response', value: '<15 min' },
      { label: 'Enterprise systems managed', value: '200+' },
    ],
    questionnaire: [
      { question: 'What is your primary IT need right now?', type: 'select', options: ['Infrastructure modernization', 'Ongoing managed services', 'Enterprise system implementation', 'Digital transformation strategy', 'Day-to-day IT operations support'] },
      { question: 'How is IT currently managed in your organization?', type: 'select', options: ['Fully in-house team', 'Outsourced/managed provider', 'Mixed in-house and outsourced', 'No formal IT function'] },
      { question: 'Which systems or platforms are involved?', type: 'text', placeholder: 'e.g. AWS, Azure, on-prem data center, ERP, CRM' },
      { question: 'What is driving this initiative?', type: 'textarea', placeholder: 'e.g. cost reduction, scaling, compliance, outdated systems' },
      { question: 'What is your expected budget range for this engagement?', type: 'select', options: ['Under $25k', '$25k - $100k', '$100k - $500k', '$500k+', 'Not yet determined'] },
    ],
    subServices: [
      {
        slug: 'it-infrastructure',
        title: 'IT Infrastructure',
        shortDescription: 'Cloud migration, data center virtualization, and network optimization.',
        heroTagline: 'A technology foundation built to scale.',
        whatIs:
          'IT Infrastructure services design and manage the core technology foundation your business runs on, end-to-end cloud migration, data center virtualization, hybrid architecture, and network optimization built for reliability and growth.',
        whyNeeded:
          'Outdated or poorly architected infrastructure creates performance bottlenecks, scaling limitations, and rising operational costs. As businesses grow, infrastructure decisions made years ago often become the constraint on what is possible today.',
        whatWeProvide: [
          'End-to-end cloud migration and management',
          'Data center virtualization solutions',
          'Hybrid IT architecture design',
          'Advanced network design and optimization',
          'Infrastructure capacity planning and scaling strategy',
          'Disaster recovery-ready infrastructure design',
        ],
        keyFeatures: [
          'Architecture designed for current and future scale',
          'Virtualization that maximizes existing hardware investment',
          'Hybrid designs balancing control, cost, and flexibility',
          'Network optimization for performance and reliability',
          'Infrastructure documentation and operational runbooks',
        ],
        benefits: [
          'Improved system performance and reduced downtime',
          'Lower infrastructure costs through optimization and virtualization',
          'A scalable foundation that supports business growth',
          'Reduced risk from outdated or unsupported infrastructure',
          'Greater flexibility to adapt infrastructure as needs change',
        ],
        process: [
          { title: 'Infrastructure Audit', description: 'We assess current infrastructure performance, capacity, and risk.' },
          { title: 'Architecture Design', description: 'We design a target infrastructure architecture aligned to business goals.' },
          { title: 'Migration & Implementation', description: 'We execute migration and implementation with minimal business disruption.' },
          { title: 'Optimization', description: 'We continuously tune performance, cost, and capacity post-implementation.' },
        ],
      },
      {
        slug: 'managed-services',
        title: 'Managed Services',
        shortDescription: 'Managed cloud, 24/7 help desk, and real-time infrastructure monitoring.',
        heroTagline: 'Your technology, continuously managed and supported.',
        whatIs:
          'Managed Services provide ongoing operational support for your technology environment, comprehensive Managed Cloud Services, security operations, 24/7 technical help desk support, and real-time infrastructure monitoring, so systems stay reliable without consuming internal resources.',
        whyNeeded:
          'Maintaining round-the-clock technical support and infrastructure monitoring in-house is costly and difficult to staff. Managed services deliver enterprise-grade reliability and responsiveness at a predictable, scalable cost.',
        whatWeProvide: [
          'Comprehensive Managed Cloud Services (MCaaS)',
          'Managed Security Services (MSS) coordination',
          '24/7 technical help desk and enterprise support',
          'Real-time infrastructure monitoring and alerting',
          'Patch management and system maintenance',
          'Vendor and license management coordination',
        ],
        keyFeatures: [
          'Round-the-clock technical support coverage',
          'Proactive monitoring that catches issues before users notice',
          'Predictable, scalable monthly cost structure',
          'Defined service level agreements (SLAs) for response times',
          'Single point of accountability across managed systems',
        ],
        benefits: [
          'Reduced downtime through proactive issue detection',
          'Predictable IT operations cost versus building in-house capacity',
          'Faster issue resolution with dedicated support coverage',
          'Internal staff freed to focus on strategic initiatives',
          'Consistent, documented service quality over time',
        ],
        process: [
          { title: 'Environment Onboarding', description: 'We document and onboard your systems into our monitoring and support platform.' },
          { title: 'SLA & Process Definition', description: 'We define response times, escalation paths, and support processes.' },
          { title: 'Ongoing Operations', description: 'We provide continuous monitoring, support, and proactive maintenance.' },
          { title: 'Reporting & Review', description: 'We deliver regular performance reporting and service review meetings.' },
        ],
      },
      {
        slug: 'enterprise-solutions',
        title: 'Enterprise Solutions',
        shortDescription: 'ERP, CRM, warehouse automation, and business intelligence dashboards.',
        heroTagline: 'Systems that run the business, properly connected.',
        whatIs:
          'Enterprise Solutions implement and integrate the core systems that run business operations, full-lifecycle ERP, Customer Relationship Management platforms, smart warehouse automation, and business intelligence dashboards that turn operational data into decisions.',
        whyNeeded:
          'Disconnected enterprise systems force teams into manual data reconciliation and create blind spots in decision-making. Properly implemented and integrated enterprise platforms eliminate that friction and surface insight leadership can act on.',
        whatWeProvide: [
          'Full-lifecycle ERP implementation and configuration',
          'Customer Relationship Management (CRM) solution deployment',
          'Smart warehouse automation system integration',
          'Advanced business intelligence and analytics dashboards',
          'Cross-system data integration and synchronization',
          'User training and change management support',
        ],
        keyFeatures: [
          'End-to-end implementation from planning through go-live',
          'Integration across ERP, CRM, and warehouse systems',
          'Dashboards built around actual decision-making needs',
          'Configuration tailored to specific industry workflows',
          'Structured training to drive real user adoption',
        ],
        benefits: [
          'Eliminated manual data reconciliation between systems',
          'Faster, more informed decision-making through unified dashboards',
          'Improved operational efficiency across core business functions',
          'Reduced errors from disconnected, duplicate data entry',
          'A scalable enterprise platform that grows with the business',
        ],
        process: [
          { title: 'Requirements & Selection', description: 'We define requirements and help select or configure the right platform.' },
          { title: 'Implementation Planning', description: 'We plan phased implementation to minimize operational disruption.' },
          { title: 'Configuration & Integration', description: 'We configure systems and integrate them with existing tools and data.' },
          { title: 'Go-Live & Adoption', description: 'We support go-live with training and structured change management.' },
        ],
      },
      {
        slug: 'digital-transformation',
        title: 'Digital Transformation',
        shortDescription: 'Technology strategy, modernization roadmaps, and change management.',
        heroTagline: 'A clear path from where you are to where you need to be.',
        whatIs:
          'Digital Transformation combines technology strategy consulting, modernization roadmap development, enterprise change management, and technical training to help organizations evolve their operating model, not just their tools.',
        whyNeeded:
          'Technology investments fail to deliver value when they are not paired with clear strategy and structured change management. Successful transformation requires aligning people, process, and technology, not just deploying new systems.',
        whatWeProvide: [
          'Technology strategy consulting',
          'Digital modernization roadmap development',
          'Enterprise change management programs',
          'Comprehensive technical training and upskilling',
          'Stakeholder alignment and adoption planning',
          'Transformation progress measurement and reporting',
        ],
        keyFeatures: [
          'Roadmaps grounded in business outcomes, not technology trends',
          'Structured change management reducing adoption resistance',
          'Training programs tailored to actual user roles',
          'Clear milestones and measurable transformation metrics',
          'Cross-functional stakeholder engagement throughout',
        ],
        benefits: [
          'Higher technology adoption rates across the organization',
          'Reduced risk of stalled or abandoned transformation initiatives',
          'Clearer alignment between technology investment and business goals',
          'Improved organizational readiness for ongoing change',
          'Measurable progress against a defined transformation roadmap',
        ],
        process: [
          { title: 'Current State Assessment', description: 'We assess current technology, processes, and organizational readiness.' },
          { title: 'Strategy & Roadmap', description: 'We build a phased transformation roadmap tied to business outcomes.' },
          { title: 'Execution Support', description: 'We support implementation with structured change management.' },
          { title: 'Training & Adoption', description: 'We deliver training and measure adoption to ensure lasting change.' },
        ],
      },
      {
        slug: 'it-operations',
        title: 'IT Operations',
        shortDescription: 'System administration, backup, disaster recovery, and capacity planning.',
        heroTagline: 'Reliable operations, every single day.',
        whatIs:
          'IT Operations covers the daily disciplines that keep technology running reliably, system administration, backup and disaster recovery planning, performance optimization, and proactive capacity planning that prevents problems before they occur.',
        whyNeeded:
          'Operational gaps, missed backups, unplanned capacity limits, deferred maintenance, rarely cause problems until the worst possible moment. Disciplined IT operations management prevents those gaps from becoming costly incidents.',
        whatWeProvide: [
          'Ongoing system administration across servers and platforms',
          'Backup and disaster recovery (DR) planning and testing',
          'Continuous performance optimization',
          'Proactive capacity planning and forecasting',
          'Patch and lifecycle management',
          'Operational runbook development and documentation',
        ],
        keyFeatures: [
          'Regularly tested backup and recovery procedures',
          'Proactive capacity forecasting before limits are reached',
          'Documented operational runbooks for consistency',
          'Continuous performance tuning, not just reactive fixes',
          'Clear escalation paths for operational incidents',
        ],
        benefits: [
          'Reduced risk of data loss through tested recovery procedures',
          'Fewer capacity-related outages through proactive planning',
          'Improved day-to-day system performance and reliability',
          'Lower risk of operational surprises during peak demand',
          'A documented, repeatable operational foundation',
        ],
        process: [
          { title: 'Operational Assessment', description: 'We review current administration, backup, and capacity practices.' },
          { title: 'DR & Capacity Planning', description: 'We design and test disaster recovery plans and capacity forecasts.' },
          { title: 'Process Implementation', description: 'We implement documented operational procedures and runbooks.' },
          { title: 'Ongoing Operations', description: 'We provide continuous administration, monitoring, and optimization.' },
        ],
      },
    ],
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getSubService(categorySlug: string, subSlug: string) {
  const category = getCategory(categorySlug)
  if (!category) return undefined
  const subService = category.subServices.find((s) => s.slug === subSlug)
  if (!subService) return undefined
  return { category, subService }
}

export function allSubServiceParams() {
  return categories.flatMap((c) => c.subServices.map((s) => ({ category: c.slug, slug: s.slug })))
}
