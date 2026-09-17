export interface KnowledgeItem {
  question: string;
  answer: string;
  keywords: string[];
}

export const chatbotKnowledge: KnowledgeItem[] = [
  // =========================================================
  // GREETINGS
  // =========================================================

  {
    question: "hi",
    answer: "Hi! 👋 I'm SmartFix AI Assistant. How can I help you today?",
    keywords: ["hi", "hello", "hey", "hai"],
  },
  {
    question: "hello",
    answer: "Hello! 👋 Welcome to SmartFix AI. How can I help you?",
    keywords: ["hello", "hi", "hey"],
  },
  {
    question: "hey",
    answer: "Hey! 👋 I'm here to help you with SmartFix AI.",
    keywords: ["hey", "hello", "hi"],
  },
  {
    question: "hai",
    answer: "Hai! 👋 How can I help you today?",
    keywords: ["hai", "hi", "hello"],
  },
  {
    question: "good morning",
    answer: "Good morning! ☀️ How can SmartFix AI help you today?",
    keywords: ["good", "morning"],
  },
  {
    question: "good afternoon",
    answer: "Good afternoon! 👋 How can I help you?",
    keywords: ["good", "afternoon"],
  },
  {
    question: "good evening",
    answer: "Good evening! 🌙 How can I help you with SmartFix AI?",
    keywords: ["good", "evening"],
  },
  {
    question: "how are you",
    answer:
      "I'm doing great! 🤖 I'm ready to help you with SmartFix AI.",
    keywords: ["how", "are", "you"],
  },
  {
    question: "who are you",
    answer:
      "I'm SmartFix AI Assistant, a virtual assistant designed to help users understand and use the SmartFix AI platform.",
    keywords: ["who", "you", "assistant"],
  },
  {
    question: "what can you do",
    answer:
      "I can help you understand SmartFix AI, report problems, create service requests, track requests, understand technician assignment, AI classification, SLA management, and more.",
    keywords: ["what", "can", "you", "do", "help"],
  },

  // =========================================================
  // SMARTFIX AI
  // =========================================================

  {
    question: "what is smartfix ai",
    answer:
      "SmartFix AI is an intelligent service management platform designed to simplify problem reporting, AI classification, technician assignment, real-time tracking, and SLA management.",
    keywords: ["smartfix", "ai", "platform", "what"],
  },
  {
    question: "what is smartfix",
    answer:
      "SmartFix is a smart service management platform that helps organizations manage problems, service requests, technicians, tracking, and SLA processes.",
    keywords: ["smartfix", "platform", "service"],
  },
  {
    question: "how does smartfix ai work",
    answer:
      "SmartFix AI works by allowing users to report problems, classify issues, prioritize requests, assign technicians, track progress, and monitor SLA performance.",
    keywords: ["smartfix", "work", "process", "how"],
  },
  {
    question: "why use smartfix ai",
    answer:
      "SmartFix AI helps organize service requests, reduce manual work, improve technician assignment, provide visibility into request progress, and support SLA management.",
    keywords: ["why", "use", "smartfix", "benefits"],
  },
  {
    question: "what are the features of smartfix ai",
    answer:
      "SmartFix AI includes AI Assistant, AI Classification, Smart Technician Assignment, Real-time Tracking, and SLA Management.",
    keywords: ["features", "smartfix", "ai", "functions"],
  },
  {
    question: "is smartfix an ai platform",
    answer:
      "Yes. SmartFix AI is designed around intelligent service management capabilities such as AI-assisted classification and technician assignment.",
    keywords: ["smartfix", "ai", "platform"],
  },

  // =========================================================
  // PROBLEM REPORTING
  // =========================================================

  {
    question: "how do i report a problem",
    answer:
      "To report a problem, create a service request and provide a clear description of the issue, category, priority, location, and other required information.",
    keywords: ["report", "problem", "issue", "complaint"],
  },
  {
    question: "how can i report an issue",
    answer:
      "You can report an issue by creating a service request and describing what happened, where it happened, and how it affects your work.",
    keywords: ["report", "issue", "problem"],
  },
  {
    question: "where can i report a problem",
    answer:
      "You can report a problem through the service request section of SmartFix AI.",
    keywords: ["where", "report", "problem"],
  },
  {
    question: "what should i include in a problem report",
    answer:
      "Include a clear problem description, affected equipment or system, location, priority, and any additional information that can help the technician understand the issue.",
    keywords: ["problem", "report", "details", "description"],
  },
  {
    question: "can i report a technical issue",
    answer:
      "Yes. SmartFix AI can be used to submit technical problems and service requests.",
    keywords: ["technical", "issue", "report"],
  },
  {
    question: "can i report hardware problems",
    answer:
      "Yes. Hardware-related problems can be submitted as service requests with relevant equipment and issue details.",
    keywords: ["hardware", "problem", "report"],
  },
  {
    question: "can i report software problems",
    answer:
      "Yes. Software-related problems can be reported through a service request with a clear description of the issue.",
    keywords: ["software", "problem", "report"],
  },

  // =========================================================
  // SERVICE REQUESTS
  // =========================================================

  {
    question: "what is a service request",
    answer:
      "A service request is a record created when a user reports a problem or requests technical assistance.",
    keywords: ["service", "request", "meaning"],
  },
  {
    question: "how do i create a service request",
    answer:
      "Go to the service request section, enter the required problem details, select the appropriate category and priority, and submit the request.",
    keywords: ["create", "service", "request", "submit"],
  },
  {
    question: "can i create a service request",
    answer:
      "Yes. You can create a service request by providing the required issue and request details.",
    keywords: ["create", "service", "request"],
  },
  {
    question: "what happens after creating a service request",
    answer:
      "After creation, the request can be classified, prioritized, assigned to a suitable technician, and tracked until resolution.",
    keywords: ["after", "create", "request", "happens"],
  },
  {
    question: "can i update a service request",
    answer:
      "Depending on the request status and your permissions, you may be able to update the details of a service request.",
    keywords: ["update", "service", "request", "edit"],
  },
  {
    question: "can i cancel a service request",
    answer:
      "Request cancellation depends on the request status and the permissions available to your account.",
    keywords: ["cancel", "service", "request"],
  },

  // =========================================================
  // TRACKING
  // =========================================================

  {
    question: "can i track my request",
    answer:
      "Yes. SmartFix AI provides request tracking so you can monitor the current status and progress of your service request.",
    keywords: ["track", "tracking", "request", "status"],
  },
  {
    question: "how do i track my request",
    answer:
      "Open the service request tracking section to view the current status and progress of your request.",
    keywords: ["track", "request", "how"],
  },
  {
    question: "where can i see my request status",
    answer:
      "You can view your request status from the service request tracking section.",
    keywords: ["status", "request", "track", "see"],
  },
  {
    question: "what does request tracking mean",
    answer:
      "Request tracking allows users to monitor the progress of a service request from submission through resolution.",
    keywords: ["tracking", "meaning", "request"],
  },
  {
    question: "can i track technician progress",
    answer:
      "Yes. SmartFix AI's real-time tracking capability is designed to provide visibility into technician progress and service request activity.",
    keywords: ["track", "technician", "progress"],
  },

  // =========================================================
  // AI CLASSIFICATION
  // =========================================================

  {
    question: "what is ai classification",
    answer:
      "AI Classification analyzes the reported problem and helps identify the appropriate problem category.",
    keywords: ["ai", "classification", "classify", "category"],
  },
  {
    question: "how does ai classification work",
    answer:
      "AI Classification analyzes information provided in a service request and helps determine the most suitable category for the reported problem.",
    keywords: ["ai", "classification", "work"],
  },
  {
    question: "why is ai classification useful",
    answer:
      "AI Classification can help organize incoming requests into appropriate categories and support faster service request processing.",
    keywords: ["classification", "useful", "benefit"],
  },
  {
    question: "can ai classify my problem",
    answer:
      "Yes. SmartFix AI includes AI Classification to help categorize reported problems.",
    keywords: ["ai", "classify", "problem"],
  },

  // =========================================================
  // TECHNICIAN ASSIGNMENT
  // =========================================================

  {
    question: "how are technicians assigned",
    answer:
      "SmartFix AI can support technician assignment based on factors such as problem category, technician skills, availability, and service requirements.",
    keywords: ["technician", "assignment", "assign", "skills"],
  },
  {
    question: "what is smart technician assignment",
    answer:
      "Smart Technician Assignment helps identify suitable technicians for service requests based on the requirements of the reported problem.",
    keywords: ["smart", "technician", "assignment"],
  },
  {
    question: "can technicians be assigned automatically",
    answer:
      "SmartFix AI is designed to support intelligent technician assignment using service request information and technician-related factors.",
    keywords: ["technician", "automatically", "assignment"],
  },
  {
    question: "does technician skill matter",
    answer:
      "Yes. Technician skills can be considered when determining a suitable technician for a particular service request.",
    keywords: ["technician", "skill", "assignment"],
  },
  {
    question: "does technician availability matter",
    answer:
      "Technician availability can be considered when assigning service requests.",
    keywords: ["technician", "availability", "assignment"],
  },

  // =========================================================
  // SLA
  // =========================================================

  {
    question: "what is sla",
    answer:
      "SLA stands for Service Level Agreement. It defines expected service response and resolution targets.",
    keywords: ["sla", "meaning", "service"],
  },
  {
    question: "what is sla management",
    answer:
      "SLA Management helps monitor service requests against defined response and resolution time targets.",
    keywords: ["sla", "management", "response", "resolution"],
  },
  {
    question: "why is sla important",
    answer:
      "SLA management helps organizations monitor whether service requests are being handled within their defined service targets.",
    keywords: ["sla", "important", "benefit"],
  },
  {
    question: "what is sla response time",
    answer:
      "SLA response time is the target time within which a service request should receive an appropriate response.",
    keywords: ["sla", "response", "time"],
  },
  {
    question: "what is sla resolution time",
    answer:
      "SLA resolution time is the target time within which a service request should be resolved according to the applicable service agreement.",
    keywords: ["sla", "resolution", "time"],
  },

  // =========================================================
  // PRIORITY
  // =========================================================

  {
    question: "what is priority",
    answer:
      "Priority indicates how urgently a service request needs attention.",
    keywords: ["priority", "urgent", "importance"],
  },
  {
    question: "what is high priority",
    answer:
      "A high-priority request generally represents an issue that requires faster attention because of its impact or urgency.",
    keywords: ["high", "priority", "urgent"],
  },
  {
    question: "what is low priority",
    answer:
      "A low-priority request generally represents an issue that does not require immediate attention.",
    keywords: ["low", "priority"],
  },
  {
    question: "can i change request priority",
    answer:
      "Whether you can change a request's priority depends on your permissions and the current request status.",
    keywords: ["change", "priority", "request"],
  },

  // =========================================================
  // COMMON TECHNICAL ISSUES
  // =========================================================

  {
    question: "my computer is not working",
    answer:
      "Please create a service request with details about what is not working, any error messages, and the affected equipment.",
    keywords: ["computer", "not", "working", "issue"],
  },
  {
    question: "my laptop is not working",
    answer:
      "Please report the laptop issue through a service request and include any error messages or symptoms you see.",
    keywords: ["laptop", "not", "working", "problem"],
  },
  {
    question: "my computer is slow",
    answer:
      "You can create a service request describing the performance issue. Include when the slowdown occurs and any applications affected.",
    keywords: ["computer", "slow", "performance"],
  },
  {
    question: "my laptop is slow",
    answer:
      "Please report the performance issue and mention when the laptop becomes slow and which applications are affected.",
    keywords: ["laptop", "slow", "performance"],
  },
  {
    question: "internet is not working",
    answer:
      "Please check whether other devices are also affected. If the issue continues, create a service request with the connection details.",
    keywords: ["internet", "network", "not", "working"],
  },
  {
    question: "wifi is not working",
    answer:
      "Please verify that Wi-Fi is enabled and check whether other devices can connect. If the problem continues, submit a service request.",
    keywords: ["wifi", "internet", "network"],
  },
  {
    question: "printer is not working",
    answer:
      "Please check the printer connection, power, paper, and error messages. If the issue continues, create a service request.",
    keywords: ["printer", "not", "working"],
  },
  {
    question: "email is not working",
    answer:
      "Please report the email issue and include details such as whether you can send, receive, or access your email.",
    keywords: ["email", "mail", "not", "working"],
  },
  {
    question: "password problem",
    answer:
      "If you are having a password or login problem, use the available account recovery option or contact support through the appropriate service request process.",
    keywords: ["password", "login", "account"],
  },
  {
    question: "i cannot login",
    answer:
      "Please verify your username and password. If you still cannot log in, create a service request describing the login issue.",
    keywords: ["login", "cannot", "account", "password"],
  },

  // =========================================================
  // ACCOUNT
  // =========================================================

  {
    question: "how do i create an account",
    answer:
      "Use the registration option provided by your SmartFix AI application and complete the required account information.",
    keywords: ["create", "account", "register", "signup"],
  },
  {
    question: "how do i login",
    answer:
      "Open the SmartFix AI login page and enter your registered account credentials.",
    keywords: ["login", "signin", "account"],
  },
  {
    question: "i forgot my password",
    answer:
      "Use the password recovery option available on the login page. If recovery is not available, contact your support team.",
    keywords: ["forgot", "password", "reset"],
  },
  {
    question: "can i update my profile",
    answer:
      "Profile updates depend on the features and permissions enabled for your account.",
    keywords: ["profile", "update", "account"],
  },

  // =========================================================
  // NOTIFICATIONS
  // =========================================================

  {
    question: "will i receive notifications",
    answer:
      "SmartFix AI can provide notifications about relevant service request activities depending on the features enabled for your account.",
    keywords: ["notification", "alerts", "receive"],
  },
  {
    question: "what are notifications",
    answer:
      "Notifications provide updates about relevant service request events, status changes, and other activities.",
    keywords: ["notifications", "meaning", "alerts"],
  },

  // =========================================================
  // FEEDBACK
  // =========================================================

  {
    question: "can i give feedback",
    answer:
      "Yes. Feedback can help improve the service experience. Use the available feedback or contact options in the application.",
    keywords: ["feedback", "review", "suggestion"],
  },
  {
    question: "how can i give feedback",
    answer:
      "Use the available feedback option or contact section in the SmartFix AI application to submit your feedback.",
    keywords: ["feedback", "give", "submit"],
  },

  // =========================================================
  // GENERAL
  // =========================================================

  {
    question: "thank you",
    answer: "You're welcome! 😊 I'm happy to help.",
    keywords: ["thank", "thanks", "welcome"],
  },
  {
    question: "thanks",
    answer: "You're welcome! 😊 Let me know if you need anything else.",
    keywords: ["thanks", "thank"],
  },
  {
    question: "bye",
    answer: "Goodbye! 👋 Have a great day!",
    keywords: ["bye", "goodbye"],
  },
  {
    question: "goodbye",
    answer: "Goodbye! 👋 Feel free to come back if you need help.",
    keywords: ["goodbye", "bye"],
  },
];