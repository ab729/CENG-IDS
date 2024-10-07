Intrusion Detection System (IDS) for College Website Project
Introduction
This project involves the development of a college website alongside the implementation of a Network-Based Intrusion Detection System (IDS) to safeguard it from cyber threats. The system addresses the OWASP Top 10 (2021) vulnerabilities, ensuring the security and integrity of the platform.

Project Overview
The project aims to:

Develop a secure, functional college website.
Implement an IDS capable of monitoring, detecting, and mitigating security threats.
Targeted Vulnerabilities from OWASP Top 10 (2021):
A01:2021 - Broken Access Control
A03:2021 - Injection
A04:2021 - Insecure Design
A05:2021 - Security Misconfiguration
A06:2021 - Vulnerable and Outdated Components
A07:2021 - Identification and Authentication Failures
A08:2021 - Software and Data Integrity Failures
A09:2021 - Security Logging and Monitoring Failures
A10:2021 - Server-Side Request Forgery (SSRF)
Technology Stack
The project is developed using:

PERN Stack: PostgreSQL, Express.js, React.js, Node.js.
Web Hosting: Apache (development) and AWS EC2 (deployment).
IDS Implementation:
Python for IDS development.
Wireshark for network traffic capture and analysis.
PostgreSQL for logging detected threats.
Elasticsearch and Kibana for data visualization and reporting.
Machine Learning for anomaly detection.
IDS Design and Development
Key Modules:
Traffic Capture: Using Wireshark for real-time network traffic capture.
Signature-Based Detection: Recognizes known attack signatures, such as SQL injection and SSRF.
Anomaly-Based Detection: Identifies deviations from normal traffic behavior to detect unknown attacks (e.g., DoS).
Alerting and Logging: Logs suspicious activity and generates alerts for the admin.
Visualization and Reporting: Utilizes Elasticsearch and Kibana for threat reporting through visual graphs and timelines.
Testing and Evaluation
The IDS is evaluated using:

Penetration Testing Tools: Kali Linux, Metasploit, Nmap, and Burpsuite.
Attack simulations focus on the OWASP Top 10 vulnerabilities.
Metrics evaluated include detection rate, false positives, and response time.
Conclusion
This project demonstrates the practical application of IDS technology in securing a real-world web application. By addressing common vulnerabilities and incorporating both signature-based and anomaly-based detection methods, the IDS provides robust protection for the college’s digital assets.

Authors
Ahmed Mohammed Ahmed Albarazanchi (ID: 210212309)
Ammar Samy Khalil Ahmed (ID: 200212311)Intrusion Detection System (IDS) for College Website Project
Introduction
This project involves the development of a college website alongside the implementation of a Network-Based Intrusion Detection System (IDS) to safeguard it from cyber threats. The system addresses the OWASP Top 10 (2021) vulnerabilities, ensuring the security and integrity of the platform.

Project Overview
The project aims to:

Develop a secure, functional college website.
Implement an IDS capable of monitoring, detecting, and mitigating security threats.
Targeted Vulnerabilities from OWASP Top 10 (2021):
A01:2021 - Broken Access Control
A03:2021 - Injection
A04:2021 - Insecure Design
A05:2021 - Security Misconfiguration
A06:2021 - Vulnerable and Outdated Components
A07:2021 - Identification and Authentication Failures
A08:2021 - Software and Data Integrity Failures
A09:2021 - Security Logging and Monitoring Failures
A10:2021 - Server-Side Request Forgery (SSRF)
Technology Stack
The project is developed using:

PERN Stack: PostgreSQL, Express.js, React.js, Node.js.
Web Hosting: Apache (development) and AWS EC2 (deployment).
IDS Implementation:
Python for IDS development.
Wireshark for network traffic capture and analysis.
PostgreSQL for logging detected threats.
Elasticsearch and Kibana for data visualization and reporting.
Machine Learning for anomaly detection.
IDS Design and Development
Key Modules:
Traffic Capture: Using Wireshark for real-time network traffic capture.
Signature-Based Detection: Recognizes known attack signatures, such as SQL injection and SSRF.
Anomaly-Based Detection: Identifies deviations from normal traffic behavior to detect unknown attacks (e.g., DoS).
Alerting and Logging: Logs suspicious activity and generates alerts for the admin.
Visualization and Reporting: Utilizes Elasticsearch and Kibana for threat reporting through visual graphs and timelines.
Testing and Evaluation
The IDS is evaluated using:

Penetration Testing Tools: Kali Linux, Metasploit, Nmap, and Burpsuite.
Attack simulations focus on the OWASP Top 10 vulnerabilities.
Metrics evaluated include detection rate, false positives, and response time.
Conclusion
This project demonstrates the practical application of IDS technology in securing a real-world web application. By addressing common vulnerabilities and incorporating both signature-based and anomaly-based detection methods, the IDS provides robust protection for the college’s digital assets.

Authors
Ahmed Mohammed Ahmed Albarazanchi (ID: 210212309)
Ammar Samy Khalil Ahmed (ID: 200212311)