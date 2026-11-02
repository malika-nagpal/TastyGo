# Software Project Management Plan (SPMP) - TastyGo

*Version 1.1 — 03/01/2025*

---

## Table of Contents
1. [Overview](#1-overview)
   1. [Project Summary](#11-project-summary)
      1. [Project Purpose, Goals, and Objectives](#111-project-purpose-goals-and-objectives)
      2. [Assumptions and Constraints](#112-assumptions-and-constraints)
      3. [Project Deliverables](#113-project-deliverables)
      4. [Schedule and Budget Summaries](#114-schedule-and-budget-summaries)
      5. [Project Success Criteria](#115-project-success-criteria)
   2. [Stakeholder Management & Governance](#12-stakeholder-management--governance)
   3. [Evolution of the Plan](#13-evolution-of-the-plan)
2. [References](#2-references)
3. [Definitions](#3-definitions)
4. [Project Organization](#4-project-organization)
   1. [External Interfaces](#41-external-interfaces)
   2. [Internal Structure](#42-internal-structure)
   3. [Roles and Responsibilities](#43-roles-and-responsibilities)
5. [Managerial Process Plans](#5-managerial-process-plans)
   1. [Start-up Plan](#51-start-up-plan)
   2. [Work Plan](#52-work-plan)
   3. [Control Plan](#53-control-plan)
   4. [Risk Management Plan](#54-risk-management-plan)
   5. [Close-out Plan](#55-close-out-plan)
6. [Technical Process Plan](#6-technical-process-plan)
   1. [Process Model](#61-process-model)
   2. [Methods, Tools, and Techniques](#62-methods-tools-and-techniques)
   3. [Infrastructure Plan](#63-infrastructure-plan)
   4. [Product Acceptance Plan](#64-product-acceptance-plan)
7. [Supporting Process Plans](#7-supporting-process-plans)
   1. [Configuration Management Plan](#71-configuration-management-plan)
   2. [Verification and Validation Plan](#72-verification-and-validation-plan)
   3. [Documentation Plan](#73-documentation-plan)
   4. [Quality Assurance Plan](#74-quality-assurance-plan)
   5. [Reviews and Audits](#75-reviews-and-audits)
   6. [Problem Resolution Plan](#76-problem-resolution-plan)
   7. [Subcontractor Management Plan](#77-subcontractor-management-plan)
   8. [Process Improvement Plan](#78-process-improvement-plan)
8. [Team Member Participation & Rating](#8-team-member-participation--rating)
9. [Software Quality Assurance (SQA) Plan](#9-software-quality-assurance-sqa-plan)
   1. [Quality Objectives](#91-quality-objectives)
   2. [Roles and Responsibilities](#92-roles-and-responsibilities)
   3. [Standards and Procedures](#93-standards-and-procedures)
   4. [Verification and Validation Activities](#94-verification-and-validation-activities)
   5. [Documentation](#95-documentation)
   6. [Continuous Improvement](#96-continuous-improvement)
   7. [Independence of The SQA Group](#97-independence-of-the-sqa-group)

---

## 1. Overview

### 1.1 Project Summary

#### 1.1.1 Project Purpose, Goals, and Objectives

**Project Purpose**  
The TastyGo application aims to provide a comprehensive online food-ordering and management platform that connects customers, restaurant clients, and administrators. Its purpose is to streamline the entire food ordering ecosystem, from menu management and order processing to payment handling and customer service, creating a seamless experience for all stakeholders involved.

**Project Goals**  
TastyGo is designed to achieve three primary goals:

**Goal 1: Create an intuitive, user-friendly interface for all user roles.**
- Ensure clear navigation with minimal clicks or confusion across all user roles.
- Maintain a consistent look and feel (color schemes, button styles, fonts) across the application.
- Implement responsive design so that the platform is usable on desktops, tablets, and smartphones.
- Provide accessibility features to accommodate users with disabilities.
- Incorporate user feedback mechanisms to continuously improve the interface.

**Goal 2: Provide reliable order management, payment processing, and menu updates.**
- Integrate a secure payment gateway (credit card, wallet, etc.) with detailed transaction logs.
- Enable real-time menu updating so restaurants can add/edit/remove items seamlessly.
- Establish concurrency controls to handle multiple simultaneous user orders without data conflicts.
- Implement robust error handling and recovery mechanisms for failed transactions.
- Create a notification system for order status updates and delivery tracking.

**Goal 3: Offer real-time insights and analytics for restaurants and administrators.**
- Generate sales and order-tracking reports (daily, weekly, monthly) with user-friendly visualizations.
- Include customer feedback metrics for restaurants to see ratings and reviews in one place.
- Provide an admin dashboard summarizing platform-wide activities, user accounts, and potential issues.
- Implement predictive analytics for peak ordering times and popular menu items.
- Create customizable reporting tools for restaurant-specific business intelligence.

#### 1.1.2 Assumptions and Constraints

**Assumptions**
- Team members will adhere to deadlines and attend all scheduled meetings.
- Team members will follow the requirements specified in the SRS document.
- All team members possess the necessary technical skills or will acquire them as needed.
- The application will be developed for and tested on modern web browsers and devices.
- Integration with secure payment gateways and third-party systems is feasible.
- Development tools and frameworks will remain current throughout the project lifecycle.

**Constraints**
- The project must be completed within the academic semester timeframe.
- No monetary budget is allocated for this project.
- The application must be compatible with standard web technologies.
- The system must comply with data protection regulations.
- Team members must balance project work with other academic commitments.
- Limited access to professional testing environments may impact quality assurance.

#### 1.1.3 Project Deliverables

This project will deliver the following items:
- Fully functional TastyGo web application
- Requirements Document
- Software Project Management Plan (SPMP)
- Software Quality Assurance Plan (SQAP)
- Object-Oriented Analysis Document
- Object-Oriented Design Document
- Test Plan and Test Cases
- Documented Source Code
- User Manual
- Maintenance Manual
- Final Presentation Materials

#### 1.1.4 Schedule and Budget Summaries

**Schedule Summary**  
The project timeline is structured around key academic milestones:

| Milestone   | Deliverable                                          | Due Date         |
|-------------|------------------------------------------------------|------------------|
| Milestone 1 | Requirements Document                                | January 31, 2025 |
| Milestone 2 | Software Project Management Plan (SPMP)            | February 7, 2025 |
| Milestone 3 | Object-Oriented Analysis                             | March 7, 2025    |
| Milestone 4 | Object-Oriented Design                               | March 21, 2025   |
| Milestone 5 | Final Submission                                     | April 4, 2025    |

**Budget Summary**  
No monetary budget is allocated for this academic project. Resources are limited to:
- Team members' time and expertise
- Personal computing equipment
- Free development tools and platforms
- Academic resources provided by the institution

#### 1.1.5 Project Success Criteria

| Category              | Success Metric                                   | Measurement Method                              | Target                                   | Assigned to                   |
|-----------------------|--------------------------------------------------|-------------------------------------------------|------------------------------------------|-------------------------------|
| Scope                 | All core features (menus, ordering, payment, admin console) | Requirements Document vs. Implementation       | 100% coverage of required functionality  | Project Managers              |
| Schedule              | Submission deadlines (SPMP, OOA, OOD, Final) met | Milestone reviews                               | 100% on-time deliverables                | Everyone                      |
| Quality               | Low defect density & user-friendly interface     | QA metrics, user testing feedback               | < 5% user-reported defects post-release  | QA Tester (Desman)            |
| Stakeholder satisfaction | Positive feedback from client (instructor) & participants | Review sessions, acceptance testing            | Client sign-off; high acceptance rating  | Customer Feedback Coordinators|
| Risk management       | Identified risks mitigated or resolved in time   | Risk log updates, negative impact events on schedule | < 10% schedule overruns due to risks  | Project Managers              |

### 1.2 Stakeholder Management & Governance

| Role                        | Description                                   | Responsibilities                                                                        |
|-----------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------|
| Instructor (Client)         | Primary stakeholder and project evaluator     | Approves changes to scope, evaluates deliverables, provides feedback on project direction |
| Project Managers (Samir, Rusanth) | Day-to-day project leadership                | Coordinate tasks, manage schedule, facilitate communication, resolve conflicts           |
| Team Members                | Technical contributors                         | Execute assigned tasks, participate in reviews, report progress and issues                |
| End Users (represented by testers) | Customers, restaurant clients, administrators | Provide feedback on usability and functionality during testing phases                      |

**Decision-Making Process**
- Routine decisions: Made by Project Managers
- Technical decisions: Made by Lead Developer with team input
- Scope changes: Require instructor approval
- Conflict resolution: Escalation path from team member → Project Manager → Instructor

### 1.3 Evolution of the Plan

This SPMP is a living document that will evolve throughout the project lifecycle. Updates will occur:
- After each milestone review with the instructor
- When significant scope changes are approved
- If resource availability changes
- When risk assessments identify new threats or opportunities

The Project Managers will maintain version control of this document, with all team members notified of significant updates. The management team will meet with the client on Monday, February 10, to discuss application expectations and functionality. Based on this feedback and ongoing project progress, we will iterate on requirements, UI/UX design, and scope as necessary.

---

## 2. References

- CP317 Food Requirements (provided by instructor)
- SPMP - Group 8 (provided as reference)
- IEEE Software Project Management Plan Standard (IEEE 1058)
- IEEE Software Requirements Specifications Standard
- IEEE Standard for Software Quality Assurance Processes (IEEE 730)
- [IEEE Template](https://mobileappdev.academic.csusb.edu/wp-content/uploads/2019/0)
- [SPMP Standard IEEE 1058](https://mylearningspace.wlu.ca/d2l/le/content/569520/viewContent/4028192/View)

---

## 3. Definitions

- **SPMP:** Software Project Management Plan
- **SQA:** Software Quality Assurance
- **SRS:** Software Requirements Specification
- **UI:** User Interface - means by which a user and system interact
- **GUI:** Graphical User Interface - Interface represented by buttons and visuals
- **API:** Application Programming Interface
- **POS:** Point of Sale
- **CI/CD:** Continuous Integration/Continuous Deployment
- **OOA:** Object-Oriented Analysis
- **OOD:** Object-Oriented Design
- **QA:** Quality Assurance
- **UML:** Unified Modeling Language

---

## 4. Project Organization

### 4.1 External Interfaces

TastyGo will interface with several external systems:

1. **Payment Gateways**
   - Secure payment processing for customer orders
   - Transaction verification and receipt generation

2. **Restaurant POS Systems**
   - Menu synchronization
   - Order status updates
   - Inventory management

3. **Notification Services**
   - Email notifications for order confirmations
   - SMS alerts for delivery updates
   - Push notifications for mobile users

4. **Mapping Services**
   - Location-based restaurant searches
   - Delivery route optimization
   - Estimated delivery time calculations

5. **Authentication Services**
   - Social media login integration
   - Two-factor authentication

### 4.2 Internal Structure

The TastyGo system is organized into the following major components:

1. **Presentation Layer**
   - Customer-facing web interface
   - Restaurant management portal
   - Administrative dashboard

2. **Business Logic Layer**
   - User management
   - Order processing
   - Menu management
   - Payment processing
   - Reporting and analytics

3. **Data Access Layer**
   - Database interactions
   - Data validation
   - Caching mechanisms

4. **Integration Layer**
   - External API connectors
   - Authentication services
   - Notification services

### 4.3 Roles and Responsibilities

| Name                      | Role                                     | Responsibilities                                                                 |
|---------------------------|------------------------------------------|----------------------------------------------------------------------------------|
| Samir Bani                | Project Manager, Backend Developer       | Oversees schedule & deliverables, implements backend modules, coordinates team activities |
| Rusanth Pirabakaran       | Project Manager, Frontend Developer        | Oversees schedule & deliverables, implements frontend interfaces, manages client communication |
| Nitesh Sharma             | Lead Developer, Frontend Developer         | Maintains coding standards, ensures code efficiency, performs code reviews, implements key UI components |
| Ethan Farrar              | Database Designer                          | Designs and maintains database schema, ensures data integrity, optimizes queries, implements data access layer |
| Manpreet S. Brar          | Database Designer                          | Designs and maintains database schema, ensures data integrity, optimizes queries, implements data access layer |
| Desman Kwan               | QA Tester                                  | Leads module & integration testing, enforces quality metrics, documents defects, verifies fixes |
| Kerem Erkoc               | Documentation Specialist                   | Prepares SPMP, design docs, user guides, maintains documentation standards       |
| Malika Nagpal             | Documentation Specialist                   | Prepares SPMP, design docs, user guides, maintains documentation standards       |
| Lucas Matheson            | Customer Feedback Coordinator              | Liaises with client/stakeholders, communicates project progress and changes, collects and organizes feedback |
| Nitesh Sharma (additional) | (Included in Lead Developer role)          |                                                                                  |

---

## 5. Managerial Process Plans

### 5.1 Start-up Plan

#### 5.1.1 Estimation Plan
- Conduct initial client meetings to gather comprehensive requirements
- Research technologies required to meet project specifications
- Estimate effort for each major feature using function point analysis
- Create a work breakdown structure (WBS) to identify all necessary tasks
- Allocate time estimates to each task based on complexity and dependencies
- Build in contingency time (20%) for unforeseen challenges
- Establish milestone deadlines aligned with course requirements

#### 5.1.2 Staffing Plan
The project team was assembled by the instructor based on skills and academic requirements. One member has departed since the original group formation. The remaining team members—Manpreet S. Brar, Samir Bani, Rusanth Pirabakaran, Desman Kwan, Kerem Erkoc, Lucas Matheson, Malika Nagpal, Nitesh Sharma, and Ethan Farrar, as well as Smith Okeke—have been assigned roles based on their strengths and interests, with some members fulfilling multiple roles to ensure comprehensive coverage of all project needs.

#### 5.1.3 Resource Acquisition Plan
All software and tools required for this project are freely available. Team members will use:
- Personal computers for development
- GitHub for version control and project management
- Visual Studio Code or similar IDEs for coding
- Free web hosting services for testing
- Open-source frameworks and libraries as needed

#### 5.1.4 Project Staff Training Plan
All team members have foundational knowledge in the chosen technologies. Additional training will be self-directed as needed:
- Identify knowledge gaps in assigned areas
- Use online tutorials and documentation for skill development
- Encourage peer mentoring for knowledge sharing
- Conduct brief technical workshops during team meetings for critical skills

### 5.2 Work Plan

#### 5.2.1 Work Activities and Work Units
The project is divided into the following major work units:

**GUI Prototype**
- Design wireframes for all user interfaces
- Create a clickable prototype for user testing
- Document user flows and interaction patterns
- Establish visual design system (colors, typography, components)

**Object-Oriented Analysis and Design**
- Identify key classes and their relationships
- Document use cases and scenarios
- Create class diagrams and sequence diagrams
- Define data models and database schema
- Establish API specifications and interfaces

**Implementation**
- Develop frontend components and pages
- Implement backend services and APIs
- Create database and data access layer
- Integrate with external services
- Implement security features and authentication

**Testing and Quality Assurance**
- Develop test plans and test cases
- Perform unit testing of individual components
- Conduct integration testing of connected systems
- Execute user acceptance testing
- Perform security and performance testing

**Documentation and Delivery**
- Create user manuals and help documentation
- Prepare technical documentation for maintenance
- Finalize all project deliverables
- Prepare presentation materials

#### 5.2.2 Schedule Allocation

| Phase                      | Start Date        | End Date          | Deliverable                    |
|----------------------------|-------------------|-------------------|--------------------------------|
| Project Initiation         | January 11, 2025  | January 31, 2025  | Requirements Document          |
| Project Planning           | January 31, 2025  | February 7, 2025  | SPMP                           |
| Analysis                   | February 7, 2025  | March 7, 2025     | Object-Oriented Analysis       |
| Design                     | March 7, 2025     | March 21, 2025    | Object-Oriented Design         |
| Implementation & Testing   | March 21, 2025    | April 4, 2025     | Final Submission               |

#### 5.2.3 Resource Allocation
All team members have access to the same development resources:
- Development environments (IDEs, code editors)
- Version control system (GitHub)
- Documentation tools
- Testing frameworks
- Communication platforms

#### 5.2.4 Budget Allocation
No monetary budget has been allocated for this academic project.

### 5.3 Control Plan

#### 5.3.1 Requirements Control Plan
- Document all requirements in the SRS and track them in a requirements traceability matrix
- Evaluate change requests by Project Managers for impact on scope and schedule
- Require instructor approval for significant changes
- Provide weekly team meetings for requirements status updates
- Prioritize requirements using the MoSCoW method (Must have, Should have, Could have, Won't have)

#### 5.3.2 Schedule Control Plan
- Project Managers will track progress against milestones weekly
- Team members will report task completion status at each meeting
- Schedule variances greater than 10% will trigger mitigation planning
- Give priority to critical path tasks
- Communicate schedule updates to all stakeholders

#### 5.3.3 Budget Control Plan
Not applicable as no monetary budget is allocated.

#### 5.3.4 Quality Control Plan
- Require code reviews before merging changes
- Implement automated testing for critical components
- Conduct regular quality audits by the QA Tester
- Prioritize defect tracking and resolution based on severity
- Establish and monitor performance benchmarks
- Conduct user experience testing at key milestones

#### 5.3.5 Reporting Plan
- Share weekly status reports with all team members
- Provide bi-weekly progress updates to the instructor
- Issue milestone completion reports at each major deliverable
- Distribute issue and risk reports as needed
- Submit a final project report upon completion

#### 5.3.6 Metrics Collection Plan
Track the following metrics throughout the project:
- Percentage of requirements completed
- Code coverage by tests
- Defect density and resolution time
- Team velocity (tasks completed per week)
- Accumulated technical debt
- Documentation completeness

### 5.4 Risk Management Plan

The TastyGo project faces several potential risks that could impact successful delivery:

**Technical Risks**
- Integration challenges with external services
- Performance issues under high user load
- Security vulnerabilities in payment processing
- Browser compatibility issues

**Schedule Risks**
- Underestimation of development complexity
- Team member availability constraints
- Scope creep from evolving requirements
- Dependencies on external components

**Quality Risks**
- Usability issues affecting user adoption
- Data integrity problems
- Insufficient testing coverage
- Accessibility compliance gaps

**Mitigation Strategies**
- Prototype complex features early
- Conduct regular code reviews and quality checks
- Implement continuous integration and automated testing
- Prioritize core features
- Maintain clear communication channels for issue reporting
- Regularly review risk assessments

### 5.5 Close-out Plan

The project will be considered complete when:
- All required deliverables have been submitted and approved
- The application passes final acceptance testing
- All documentation is complete and up-to-date
- The source code is properly commented and stored in the repository
- The final presentation has been delivered

Close-out activities include:
- Final code review and cleanup
- Archiving all project artifacts
- Documenting lessons learned
- Evaluating team performance
- Submitting the final report

---

## 6. Technical Process Plan

### 6.1 Process Model

The TastyGo project will follow an iterative, Unified Process model with incremental deliverables. This approach allows for:
- Early validation of critical components
- Flexibility to adapt to changing requirements
- Regular delivery of working software
- Continuous integration and testing
- Risk mitigation through frequent feedback

The development lifecycle consists of four primary phases:
1. **Inception** (Requirements gathering and initial planning)
2. **Elaboration** (Architecture design and risk analysis)
3. **Construction** (Implementation of features in iterations)
4. **Transition** (Final testing, documentation, and delivery)

Each iteration includes analysis, design, implementation, and testing activities, with increasing fidelity and completeness as the project progresses.

### 6.2 Methods, Tools, and Techniques

#### Development Methods
- Object-Oriented Analysis and Design
- Component-based architecture
- Test-Driven Development (where appropriate)
- Pair programming for complex features
- Code reviews for quality assurance

#### Programming Languages and Frameworks
- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js or similar server-side technology
- Database: SQL or NoSQL based on data requirements
- Version Control: Git with GitHub

#### Development Tools
- Visual Studio Code or similar IDE
- GitHub for source control and issue tracking
- Automated testing frameworks
- UI prototyping tools
- UML modeling software

#### Quality Assurance Techniques
- Static code analysis
- Unit testing
- Integration testing
- User acceptance testing
- Performance profiling
- Security scanning

### 6.3 Infrastructure Plan

The development infrastructure for TastyGo is primarily local, including:

**Development Environment**
- Individual developer workstations
- Local development servers
- Local database instances

**Collaboration Infrastructure**
- GitHub repository for code sharing and version control
- Shared documentation platform
- Communication channels (messaging, video conferencing)

**Testing Environment**
- Local testing environments
- Browser testing tools
- Mobile device emulators

**Deployment Environment**
- Web hosting service for demonstration
- Database hosting
- Static asset storage

### 6.4 Product Acceptance Plan

Final acceptance of the TastyGo application is based on:

1. **Functional Completeness**
   - All required features implemented according to specifications
   - No critical defects remaining
   - All use cases successfully tested

2. **Quality Standards**
   - Performance benchmarks met
   - Security requirements satisfied
   - Accessibility guidelines followed
   - Browser compatibility verified

3. **Documentation Completeness**
   - Finalized user documentation
   - Completed technical documentation
   - Properly commented source code
   - Documented test cases and results

4. **Stakeholder Approval**
   - Instructor sign-off on deliverables
   - Successful demonstration of the application
   - Positive user testing feedback

---

## 7. Supporting Process Plans

### 7.1 Configuration Management Plan

**Version Control Strategy**
- Use a GitHub repository with branch protection
- Adopt a feature branch workflow (one branch per feature)
- Require pull request reviews before merging
- Use semantic versioning for releases

**Artifact Management**
- Store source code in GitHub
- Maintain documentation in markdown format in the repository
- Keep design assets in a shared folder with version tracking
- Version control database schemas with migration scripts

**Change Control Process**
- Propose changes via GitHub issues
- Conduct impact assessments by relevant team members
- Require Project Manager approval for significant changes
- Implement changes in feature branches
- Test before merging to the main branch

### 7.2 Verification and Validation Plan

**Module/Unit Testing**
- Developers write unit tests for their code
- Encourage test-driven development for complex components
- Set code coverage targets for critical modules
- Run automated tests on each commit

**Integration Testing**
- Perform component integration tests for connected modules
- Conduct API contract testing for service interfaces
- Test database interactions
- Use mock services for external dependencies

**System Testing**
- Conduct end-to-end testing of complete workflows
- Perform performance testing under various load conditions
- Execute security testing for vulnerabilities
- Verify cross-browser and device compatibility

**Acceptance Testing**
- Conduct user acceptance testing with defined scenarios
- Perform usability testing with representative users
- Validate against the requirements specification
- Obtain final review from the instructor

### 7.3 Documentation Plan

**Development Documentation**
- Maintain architecture documentation
- Create API specifications
- Document the database schema
- Follow code style guidelines
- Provide development setup instructions

**User Documentation**
- Prepare user manuals for each user role
- Create installation and setup guides
- Compile frequently asked questions
- Provide troubleshooting guides

**Project Documentation**
- Include the Requirements Document, SPMP, design documents, test plans, and reports
- Maintain meeting minutes and decision logs

**Documentation Standards**
- Use consistent formatting and terminology
- Version control all documents
- Review regularly for accuracy and completeness
- Clearly attribute authorship

### 7.4 Quality Assurance Plan

**Quality Standards**
- Adhere to coding standards and style guides
- Follow documentation requirements
- Meet test coverage thresholds
- Achieve performance benchmarks
- Satisfy security requirements

**Quality Control Activities**
- Conduct code reviews for all pull requests
- Use automated static code analysis tools
- Perform regular security scans
- Profile performance periodically
- Check accessibility compliance

**Defect Management**
- Track defects in GitHub issues
- Classify defects by severity and priority
- Follow a resolution verification process
- Perform root cause analysis for critical issues

**Metrics and Reporting**
- Track defect density
- Report test coverage
- Monitor code quality metrics
- Measure fix response times

### 7.5 Reviews and Audits

**Code Reviews**
- Review all code changes by at least one other developer
- Use automated checks for style and potential issues
- Focus on maintainability, performance, and security

**Design Reviews**
- Conduct architecture reviews at key milestones
- Evaluate UI/UX with a usability focus
- Review database design for efficiency and integrity

**Documentation Reviews**
- Verify technical accuracy
- Ensure completeness against requirements
- Assess clarity and usability

**Project Reviews**
- Hold milestone reviews with the instructor
- Conduct internal team retrospectives after each phase
- Perform a final project audit before submission

### 7.6 Problem Resolution Plan

**Issue Identification**
- Any team member can report issues
- Document issues in GitHub with clear reproduction steps
- Assign priority and severity by Project Managers

**Escalation Path**
1. Developer attempts resolution within their area
2. If unresolved, escalate to the Lead Developer
3. If still unresolved, escalate to the Project Managers
4. For critical issues, consult the instructor

**Resolution Process**
- Investigate the root cause by the assigned developer
- Propose and review a solution
- Implement the solution in a feature branch
- Test to verify the fix
- Update documentation if necessary

**Communication**
- Provide status updates at team meetings
- Immediately communicate critical issues to all affected parties
- Document resolution in the issue tracking system

### 7.7 Subcontractor Management Plan

Not applicable for this project as no subcontractors will be used.

### 7.8 Process Improvement Plan

**Continuous Improvement Approach**
- Conduct regular retrospectives to identify process issues
- Collect team feedback on tools and methods
- Adapt processes based on project needs

**Knowledge Sharing**
- Document lessons learned
- Hold technical knowledge sharing sessions
- Cross-train on critical components

**Tool Evaluation**
- Periodically assess development tools
- Explore productivity enhancements
- Integrate new tools when beneficial

**Metrics Analysis**
- Review project metrics to identify bottlenecks
- Adjust processes based on data
- Experiment with alternative approaches

---

## 8. Team Member Participation & Rating

### Team Member Participation Record

Each team member will maintain a record of their contributions throughout the project:
- Tasks completed and hours spent
- Code contributions (commits, lines of code)
- Documentation created or updated
- Reviews conducted
- Meetings attended

Project Managers will compile these records bi-weekly to ensure balanced workload distribution and to address any participation concerns promptly.

### Team Member Rating

At the conclusion of the project, a peer evaluation process will be conducted:
- Each team member will rate others on a scale of 0-5 (5 = excellent contribution, 0 = no contribution)
- Ratings will consider quantity and quality of work, timeliness, communication, and collaboration
- Self-assessments will also be included
- The compiled ratings will be reviewed by the entire team for fairness
- Final ratings will be submitted with the project documentation

This rating process ensures accountability and provides valuable feedback for professional development.

---

## 9. Software Quality Assurance (SQA) Plan

### 9.1 Quality Objectives

The TastyGo application will meet the following quality objectives:

1. **Functional Correctness**
   - All features work according to specifications
   - Edge cases and error conditions handled gracefully
   - Data integrity maintained throughout all operations

2. **Performance Efficiency**
   - Response times under 2 seconds for standard operations
   - Support for at least 1000 concurrent users
   - Efficient resource utilization (CPU, memory, network)

3. **Usability**
   - Intuitive navigation requiring minimal training
   - Consistent UI patterns across the application
   - Accessibility compliance with WCAG 2.1 AA standards

4. **Reliability**
   - System availability of 99.9% during testing
   - Graceful degradation under high load
   - Data backup and recovery mechanisms

5. **Security**
   - Protection against OWASP Top 10 vulnerabilities
   - Secure handling of payment information
   - Privacy protection for user data

6. **Maintainability**
   - Well-documented code with comments
   - Modular architecture for easy updates
   - Comprehensive technical documentation

### 9.2 Roles and Responsibilities

| Role                         | Name                     | Responsibilities                                                                      |
|------------------------------|--------------------------|---------------------------------------------------------------------------------------|
| QA Tester                    | Desman Kwan              | Leads testing efforts, verifies software compliance, ensures defect tracking and resolution |
| Project Managers             | Samir Bani, Rusanth Pirabakaran | Ensure adherence to quality standards, enforce testing schedules, oversee reviews         |
| Developers                   | All Team Members         | Write unit tests, document code properly, maintain code quality                       |
| Documentation Specialists    | Kerem Erkoc, Malika Nagpal | Maintain updated quality documentation and test reports                                |
| Customer Feedback Coordinator| Lucas Matheson           | Collect feedback and usability reports                                               |

### 9.3 Standards and Procedures

**Coding Standards**
- Follow consistent naming conventions
- Provide required comments for classes and methods
- Enforce maximum complexity metrics
- Use standardized error handling patterns

**Testing Standards**
- Maintain unit test coverage requirements
- Develop integration test scenarios
- Define performance test thresholds
- Use a security testing checklist

**Documentation Standards**
- Follow API documentation formats
- Maintain a clear user guide structure
- Adhere to code commenting guidelines
- Use standard templates for technical documentation

**Review Procedures**
- Employ a code review checklist
- Conduct design reviews as per established processes
- Evaluate documentation using review criteria
- Use a defect classification system

### 9.4 Verification and Validation Activities

**Static Analysis**
- Run automated code quality checks
- Conduct security vulnerability scans
- Perform dependency analysis
- Verify documentation completeness

**Dynamic Testing**
- Execute unit testing of individual components
- Conduct integration testing of connected modules
- Perform system testing of complete workflows
- Conduct performance testing under varying conditions
- Perform security penetration testing
- Execute usability testing with representative users

**Regression Testing**
- Use an automated test suite for core functionality
- Manually test critical user journeys
- Verify cross-browser compatibility
- Test mobile responsiveness

### 9.5 Documentation

Maintain the following quality-related documentation:

**Test Documentation**
- Test Plan outlining the testing strategy and approach
- Test Cases with detailed steps, expected results, and pass/fail criteria
- Test Reports summarizing test execution results
- Defect Reports detailing reproduction steps and severity

**Quality Metrics**
- Code coverage reports
- Results from static analysis
- Performance test results
- Defect density and trend reports

**Process Documentation**
- Quality assurance procedures
- Review checklists
- Testing standards documentation
- Defect management process documentation

### 9.6 Continuous Improvement

The quality assurance process will evolve throughout the project:

**Feedback Loops**
- Conduct retrospectives after each testing cycle
- Analyze defect patterns
- Incorporate user feedback
- Evaluate process efficiency

**Tool Enhancement**
- Assess the effectiveness of current testing tools
- Identify opportunities for automation
- Integrate new quality tools as needed

**Knowledge Sharing**
- Document best practices
- Provide training on quality techniques
- Facilitate cross-team knowledge transfer

### 9.7 Independence of The SQA Group

To ensure unbiased quality assessment:
- The QA Tester operates independently of development activities.
- Testing is performed by team members who did not implement the feature.
- External reviews are included when possible.
- Objective metrics are used for quality evaluation.
- Final acceptance testing involves multiple stakeholders.

By implementing this comprehensive Software Quality Assurance Plan, the TastyGo application will meet all required standards and deliver a reliable, user-friendly experience to all stakeholders.

---

© 2025 TastyGo. All rights reserved.
