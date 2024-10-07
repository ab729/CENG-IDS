# Intrusion Detection System (IDS) for College Website Project Seminar

## Introduction
This seminar introduces the development of a new college website alongside the implementation of a Network-Based Intrusion Detection System (IDS) to protect it from cyber threats. The goal of the project is to secure the college's digital platform against various vulnerabilities and to integrate an IDS capable of detecting and mitigating a wide range of attacks, particularly those highlighted in the OWASP Top 10 2021 list.

## Project Overview
The objective of this project is twofold: 
- To create a secure and functional college website that meets the needs of students, faculty, and staff.
- To implement a Network-Based Intrusion Detection System (IDS) capable of monitoring, detecting, and mitigating security threats.

The IDS will target specific vulnerabilities identified in the OWASP Top 10 2021 list, including:

- **A01:2021 - Broken Access Control**: Ensuring proper access control mechanisms to prevent unauthorized access to sensitive data or functionalities.
- **A03:2021 - Injection**: Protecting against injection attacks, such as SQL injection, by properly sanitizing user inputs and using prepared statements.
- **A04:2021 - Insecure Design**: Addressing design flaws that could lead to security issues by implementing secure coding practices and thorough threat modeling.
- **A05:2021 - Security Misconfiguration**: Reducing the risk of security misconfigurations by ensuring proper configuration of servers, databases, and other components.
- **A06:2021 - Vulnerable and Outdated Components**: Keeping software components up to date to prevent vulnerabilities due to outdated libraries or frameworks.
- **A07:2021 - Identification and Authentication Failures**: Implementing robust authentication mechanisms to prevent unauthorized access.
- **A08:2021 - Software and Data Integrity Failures**: Ensuring data integrity by using secure update mechanisms and checksums.
- **A09:2021 - Security Logging and Monitoring Failures**: Implementing effective logging and monitoring to promptly detect and respond to incidents.
- **A10:2021 - Server-Side Request Forgery (SSRF)**: Protecting against SSRF by validating and restricting outbound requests.

## Technology Stack
The college website is developed using the **PERN Stack** (PostgreSQL, Express.js, React.js, and Node.js), creating a dynamic and user-friendly interface. **PostgreSQL** is used for data storage, including user information and course details. The website is hosted using **Apache** during the development phase, and later on **AWS EC2** for deployment.

The Network-Based IDS is implemented using **Python** due to its powerful libraries and ease of development. **Wireshark** is used for network packet capture and analysis. The IDS monitors network traffic to identify suspicious activities, and the detected events are logged into a **PostgreSQL** database. Visualization tools such as **Elasticsearch** and **Kibana** are used to present data in an accessible way, allowing for easy analysis of potential threats. Furthermore, a **Machine Learning model** (based on a chosen dataset) will be used to detect anomalies.

## IDS Design and Development
1. **Traffic Capture Module**: Uses Wireshark to capture real-time network traffic, allowing the IDS to monitor interactions between users and the website, and detect suspicious activities.
2. **Signature-Based Detection Module**: Uses a database of known attack signatures to identify common threats such as SQL injection, authentication failures, and server-side request forgery. This module is regularly updated to stay effective against evolving threats.
3. **Anomaly-Based Detection Module**: Analyzes network traffic to detect deviations from normal behavior, potentially indicating an ongoing attack. This module establishes a baseline of normal traffic patterns to detect anomalies, such as denial-of-service (DoS) attacks or unauthorized data access.
4. **Alerting and Logging Mechanism**: Logs detected threats into a PostgreSQL database and generates alerts to notify administrators of suspicious activities. This ensures timely response to potential threats.
5. **Visualization and Reporting**: Uses Elasticsearch and Kibana to create visual reports of detected threats, including charts, graphs, and timelines. This helps administrators understand the nature of threats and make informed decisions.

## Testing and Evaluation
The effectiveness of the IDS is evaluated by simulating various attacks against the college website, focusing on the vulnerabilities identified in the OWASP Top 10 2021 list. Tools like **Kali Linux**, **Metasploit**, and **Nmap** are used to perform penetration testing and simulate real-world attack scenarios. These tests include injection attacks, authentication bypass attempts, and server-side request forgery attacks using **Burp Suite**.

The performance of the IDS is measured based on metrics such as detection rate, false positive rate, and response time. By systematically testing the IDS against multiple attack vectors, we fine-tune the system to improve its detection capabilities while minimizing false positives.

## Conclusion
This project aims to create a secure and functional college website protected by a comprehensive Network-Based Intrusion Detection System. By focusing on the OWASP Top 10 2021 vulnerabilities, the IDS is equipped to detect and respond to a wide range of threats, thereby ensuring the safety and integrity of the college's digital assets. The integration of both signature-based and anomaly-based detection methods provides a robust solution for safeguarding the website against known and unknown attacks.

This project demonstrates the practical application of IDS technology in a real-world context and highlights the importance of proactive security measures. By developing a secure college website and implementing an effective IDS, we aim to contribute to the field of cybersecurity and ensure the protection of sensitive information in educational institutions.
