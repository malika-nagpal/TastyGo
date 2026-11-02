# TastyGo Requirements Document – Enhanced Version

*Date:* 03/30/2025  
*Version:* 1.2 Enhanced

## Group Members
- Manpreet S. Brar – 169043920  
- Samir Bani – 169032821  
- Rusanth Pirabakaran – 169035969  
- Desman Kwan – 169041404  
- Kerem Erkoc – 200852570  
- Lucas Matheson – 169026453  
- Malika Nagpal – 169074451  
- Nitesh Sharma – 169046584  
- Ethan Farrar – 211504510  
- Smith Okeke – 169028129  

---

## 1. Introduction

### 1.1 Purpose
This document defines the functional and non-functional requirements for **TastyGo**—a modern web-based food delivery and restaurant management platform. It serves as a comprehensive blueprint for developers, testers, and project stakeholders, ensuring that the final product is robust, user-friendly, and scalable.

### 1.2 Scope
TastyGo enables:
- **Customers:** To register, browse menus, place orders, and securely make payments.
- **Restaurant Clients:** (Represented by the professor/administrator) to manage menus, update order statuses, and view sales reports.
- **Administrators:** To monitor overall system performance, manage user accounts, and handle customer service tasks.

### 1.3 Definitions and Acronyms
- **Customer:** End-user placing orders and providing feedback.
- **Client:** The stakeholder (professor/administrator) responsible for overseeing restaurant-related functionality.
- **Administrator:** User responsible for overall system oversight, user management, and quality assurance.
- **Menu:** A digital listing of available food items including descriptions, prices, images, and availability.
- **Order:** A request for food delivery or pickup, including item customizations.
- **API:** An interface that allows different software components to interact seamlessly.
- **PCI DSS:** Payment Card Industry Data Security Standard ensuring secure payment processing.

### 1.4 References
- CP317 Food Requirements Document
- SPMP – Group 8
- IEEE Software Requirements Specifications Standard
- Web Content Accessibility Guidelines (WCAG) 2.1
- PCI DSS Guidelines

### 1.5 Overview
This document is organized into the following sections:
1. Introduction  
2. Overall Description  
3. Specific Requirements  
4. Use Cases and Workflows  
5. User Interface Design  
6. System Architecture and Data Requirements  
7. External Interface Requirements  
8. Quality Attributes  
9. Version History  

---

## 2. Overall Description

### 2.1 Application Domain and Product Perspective
**Application Domain:**  
TastyGo operates within the dynamic online food delivery and restaurant management sector. It connects tech-savvy customers with local food providers, offering a seamless digital ordering experience.

**Product Perspective:**  
TastyGo is a standalone, responsive web application built with modern web technologies. It integrates with secure payment gateways, third-party mapping services, and (in future iterations) restaurant POS systems, ensuring a comprehensive platform for all stakeholders.

### 2.2 Product Functions
| **Function Category**       | **Description**                                                                 | **Priority** |
|-----------------------------|---------------------------------------------------------------------------------|--------------|
| User Management             | Registration, login, profile updates, and account recovery for all users       | High         |
| Menu Browsing               | Search, filter, and display detailed restaurant menus                           | High         |
| Order Processing            | Order placement, customization, tracking, and order history management          | High         |
| Payment Processing          | Multiple payment methods, secure transactions, and receipt generation           | High         |
| Client Management           | Menu updates, order status tracking, and sales analytics (managed by the client)  | High         |
| Administrative Controls     | User account management, system monitoring, and customer support                | Medium       |
| Notifications               | Email and in-app alerts for order updates and promotions                        | Medium       |
| Reviews & Ratings           | Feedback system for restaurants and individual menu items                       | Low          |

### 2.3 User Characteristics
- **Customers:** Varying technical proficiency; expect an intuitive and streamlined ordering experience.
- **Clients:** Represented by the professor/administrator; responsible for menu accuracy and order oversight.
- **Administrators:** Require detailed system controls, analytics, and support functionalities.

### 2.4 Constraints, Assumptions, and Dependencies
- Must support high concurrency during peak ordering times.
- Compliance with PCI-DSS and data protection regulations is mandatory.
- The application will be compatible with all major web browsers and responsive on various devices.
- Assumes reliable internet connectivity and stable integrations with third-party services (e.g., payment gateways, mapping APIs).

---

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 Customer Requirements
- **FR1.1 – Account Creation:**  
  Customers can create accounts using email/password or social login options.  
  **Priority:** High

- **FR1.2 – Profile Management:**  
  Customers can update personal details, including contact and payment information.  
  **Priority:** Medium

- **FR1.3 – Restaurant Browsing:**  
  Customers can search, filter, and view restaurants based on cuisine, price, and ratings.  
  **Priority:** High

- **FR1.4 – Menu Viewing:**  
  Customers can browse comprehensive menus with images, descriptions, and pricing details.  
  **Priority:** High

- **FR1.5 – Order Placement:**  
  Customers can select items, customize options (e.g., add/remove toppings), and add items to a dynamic shopping cart.  
  **Priority:** High

- **FR1.6 – Checkout Process:**  
  A multi-step process for reviewing orders, applying promotions, and securely completing payment.  
  **Priority:** High

- **FR1.7 – Order Tracking:**  
  Real-time tracking of order status from confirmation through delivery or pickup.  
  **Priority:** Medium

- **FR1.8 – Order History:**  
  Customers can view past orders and quickly reorder previous selections.  
  **Priority:** Medium

- **FR1.9 – Reviews & Ratings:**  
  Ability to rate and review restaurants and specific menu items.  
  **Priority:** Low

- **FR1.10 – Favorites:**  
  Customers can mark restaurants and items as favorites for easy access.  
  **Priority:** Low

#### 3.1.2 Client (Professor/Administrator) Requirements
- **FR2.1 – Profile Management:**  
  The client can update restaurant profile details to ensure accurate menu displays and pricing.  
  **Priority:** High

- **FR2.2 – Menu Management:**  
  Ability to add, edit, or remove menu items; update prices; and manage promotional offers.  
  **Priority:** High

- **FR2.3 – Order Management:**  
  View, accept/reject, and update the status of incoming orders with estimated preparation times.  
  **Priority:** High

- **FR2.4 – Sales Reporting:**  
  Access detailed daily, weekly, and monthly sales reports along with customer feedback.  
  **Priority:** Medium

- **FR2.5 – Promotions Management:**  
  Create and manage special offers and discounts to engage customers.  
  **Priority:** Low

#### 3.1.3 Administrator Requirements
- **FR3.1 – User Management:**  
  Administrators can view, edit, or deactivate user accounts and monitor system activity.  
  **Priority:** High

- **FR3.2 – Restaurant Approval:**  
  Approve new client (restaurant) accounts to ensure only verified entities are listed.  
  **Priority:** High

- **FR3.3 – System Monitoring:**  
  Monitor overall system performance, usage metrics, and security events.  
  **Priority:** Medium

- **FR3.4 – Content Moderation:**  
  Review and manage user-generated content, including reviews and complaints.  
  **Priority:** Medium

- **FR3.5 – Support Management:**  
  Handle customer support tickets, process refunds, and resolve service issues.  
  **Priority:** Low

### 3.2 Non-Functional Requirements

#### 3.2.1 Performance
- **NFR1.1 – Response Time:**  
  95% of requests shall receive a response within 3 seconds.
- **NFR1.2 – Concurrent Users:**  
  The system must support at least 1,000 concurrent users without degradation.
- **NFR1.3 – Page Load Time:**  
  All pages should load within 5 seconds on standard network connections.
- **NFR1.4 – Transaction Processing:**  
  99% of payment transactions must complete within 10 seconds.
- **NFR1.5 – Scalability:**  
  The system must handle up to a 200% increase in user load with minimal performance loss.

#### 3.2.2 Security
- **NFR2.1 – Data Encryption:**  
  Encrypt all sensitive data in transit and at rest.
- **NFR2.2 – Authentication & Authorization:**  
  Implement secure login methods and enforce role-based access controls.
- **NFR2.3 – Payment Security:**  
  Ensure all payment processing is PCI DSS compliant.
- **NFR2.4 – Audit Logging:**  
  Maintain detailed logs of all security-related events and transactions.

#### 3.2.3 Usability
- **NFR3.1 – Intuitive Interface:**  
  The user interface must be easy to navigate with minimal training.
- **NFR3.2 – Responsive Design:**  
  The application must function seamlessly on desktops, tablets, and mobile devices.
- **NFR3.3 – Accessibility:**  
  Adhere to WCAG 2.1 Level AA standards to support all users.
- **NFR3.4 – Error Handling:**  
  Provide clear error messages and recovery options.
- **NFR3.5 – Help Documentation:**  
  Context-sensitive help should be available throughout the application.

#### 3.2.4 Logical Database Requirements
- **DB1:** Securely store user profiles with unique identifiers and encrypted credentials.
- **DB2:** Maintain detailed records for orders, transactions, and menu items.
- **DB3:** Ensure high availability and scalability through optimized database design.
- **DB4:** Implement indexing and constraints to guarantee data integrity and efficient query performance.

---

## 4. Use Cases and Workflows

### 4.1 Customer Use Cases

#### 4.1.1 Account Creation
- **Actor:** Customer  
- **Description:** Customers create an account by providing their name, email, physical address, and preferred payment method. A verification email is sent upon registration.  
- **Goal:** Enable secure customer registration.

#### 4.1.2 Browse Restaurants and Menus
- **Actor:** Customer  
- **Description:** Customers search for restaurants by filtering based on cuisine, ratings, and promotions. Detailed menus with images, descriptions, and prices are presented.  
- **Goal:** Provide an intuitive browsing experience.

#### 4.1.3 Place an Order
- **Actor:** Customer  
- **Description:** Customers select menu items, customize orders (e.g., adding/removing toppings), and add them to a dynamic shopping cart. They then choose between delivery or pickup; an estimated delivery time (ETA) is provided upon order confirmation.  
- **Goal:** Streamline the ordering process with real-time updates.

#### 4.1.4 Make a Payment
- **Actor:** Customer  
- **Description:** At checkout, customers select a payment method (credit card, debit card, or TastyGo wallet) and complete the transaction. A confirmation email and receipt are generated automatically.  
- **Goal:** Securely process payments and confirm transactions.

#### 4.1.5 Provide Feedback
- **Actor:** Customer  
- **Description:** After receiving an order, customers can rate their experience and leave detailed reviews. An option to email the receipt along with the review is available.  
- **Goal:** Gather feedback to drive continuous improvement.

### 4.2 Client (Professor/Administrator) Use Cases

#### 4.2.1 Manage Menu
- **Actor:** Client (Professor)  
- **Description:** The client can add, edit, or remove menu items, update pricing, and manage promotional offers. Changes reflect immediately on the customer interface.  
- **Goal:** Ensure accurate and appealing menu presentation.

#### 4.2.2 Accept and Update Orders
- **Actor:** Client (Professor)  
- **Description:** The client reviews incoming orders, assigns estimated preparation times, and updates the order status (e.g., “Preparing” or “Ready for Pickup”).  
- **Goal:** Facilitate efficient order processing with real-time status updates.

#### 4.2.3 Monitor Sales and Promotions
- **Actor:** Client (Professor)  
- **Description:** Access analytical reports detailing daily, weekly, and monthly sales along with customer feedback to guide business decisions.  
- **Goal:** Provide actionable insights for continuous improvement.

### 4.3 Administrator Use Cases

#### 4.3.1 Manage Users
- **Actor:** Administrator  
- **Description:** Administrators can create, modify, or deactivate user accounts and monitor overall user activity across the platform.  
- **Goal:** Maintain system security and data integrity.

#### 4.3.2 Approve New Client Accounts
- **Actor:** Administrator  
- **Description:** Validate and approve new client (restaurant) registrations to ensure that only verified entities are listed.  
- **Goal:** Uphold quality standards across the system.

#### 4.3.3 Customer Service and Content Moderation
- **Actor:** Administrator  
- **Description:** Handle support tickets, process refunds, and moderate user-generated content (reviews, complaints) to maintain a positive service environment.  
- **Goal:** Provide efficient support and uphold service quality.

### 4.4 Workflow Diagram (Order Processing)
1. **Account Registration:** Customer creates an account and logs in.  
2. **Restaurant Browsing:** Customer searches for a restaurant and views the menu.  
3. **Order Placement:** Customer selects items, customizes the order, and adds them to the cart.  
4. **Checkout:** Customer chooses between delivery or pickup, selects a payment method, and confirms the order.  
5. **Order Confirmation & Tracking:** The system confirms the order, assigns an ETA, and updates the order status in real time.  
6. **Payment Processing:** Secure payment processing is executed, generating a confirmation and receipt.  
7. **Feedback Submission:** Post-delivery or pickup, the customer is prompted to submit a review.

*Note: Detailed use-case diagrams and wireframe mock-ups are available as supplementary documentation.*

---

## 5. User Interface Design

### 5.1 Design Principles
- **Simplicity:** Clean, modern design with a clear visual hierarchy.
- **Consistency:** Uniform layout, color scheme, and navigation patterns across the platform.
- **Feedback:** Immediate visual cues for user actions (e.g., loading indicators, confirmation messages).
- **Efficiency:** Minimal steps required for key tasks such as ordering and payment.
- **Accessibility:** Compliance with WCAG 2.1 Level AA standards to ensure usability for all users.

### 5.2 Color Scheme & Typography
**Color Scheme:**
- **Primary Orange (`#FF6B35`):** Used for buttons, headers, and call-to-action elements.
- **Secondary Teal (`#2EC4B6`):** Used for accents and secondary buttons.
- **Dark Blue (`#011627`):** For primary text, navigation, and footers.
- **Light Gray (`#F6F7F8`):** For backgrounds, cards, and container elements.
- **White (`#FFFFFF`):** For content backgrounds and contrast elements.

**Typography:**
- **Primary Font:** "Poppins", sans-serif (headings and emphasis)
- **Secondary Font:** "Open Sans", sans-serif (body text and detailed descriptions)

### 5.3 Key Interface Components
- **Customer Interface:**  
  - Homepage with featured restaurants and promotions.  
  - Searchable restaurant listings and detailed menu pages.  
  - Dynamic shopping cart, secure checkout, and real-time order tracking.  
  - Intuitive interface for feedback and review submission.
- **Client Interface:**  
  - Dashboard for managing menu items, reviewing orders, updating order statuses, and monitoring sales analytics.
- **Administrator Interface:**  
  - Control panel for user management, client approval, support ticket resolution, and content moderation.

### 5.4 GUI Usage and Wireframes
The GUI acts as the bridge between system functions and the user. Key workflows include:
1. **Registration and Login:** Simple forms with clear instructions and error handling.
2. **Restaurant & Menu Browsing:** Card-based layouts with filters for efficient searching.
3. **Order Flow:** A step-by-step ordering process from item selection/customization to secure payment.
4. **Feedback Interface:** Intuitive rating systems with options to email receipts along with reviews.

*Wireframes and annotated mock-up images are available as supplementary documentation.*

---

## 6. System Architecture and Data Requirements

### 6.1 High-Level Architecture
TastyGo is built on a robust three-tier architecture:
1. **Presentation Layer:** HTML, CSS, and JavaScript deliver a responsive, interactive frontend.
2. **Application Layer:** Server-side business logic handles orders, data management, and security enforcement.
3. **Data Layer:** A scalable, optimized database stores user profiles, orders, menus, payment records, and feedback data.

### 6.2 Data Requirements
- **User Data:** Unique identifiers, encrypted credentials, and contact information.
- **Restaurant/Menu Data:** Detailed information including images, descriptions, pricing, and availability.
- **Order Data:** Complete order details, item customizations, and transaction statuses.
- **Payment Data:** Secure transaction records compliant with PCI DSS.
- **Feedback Data:** Customer reviews and ratings linked to orders and user profiles.

---

## 7. External Interface Requirements

### 7.1 User Interfaces
The application will be accessed via modern web browsers on desktops, tablets, and smartphones. The interface is designed to be fully responsive and touch-friendly.

### 7.2 Hardware and Software Interfaces
- **Hardware:** Standard input devices (keyboard, mouse, touchscreen) and printer integration for receipt generation.
- **Software:** Integration with secure payment gateway APIs, email notification services, and mapping/location services.
- **Communication:** Secure HTTPS connections, WebSockets for real-time updates, and REST APIs for potential mobile integration.

---

## 8. Quality Attributes

### 8.1 Performance
- Supports at least 1,000 concurrent users.
- Page load times under 5 seconds on standard network connections.
- 95% of database queries execute within 500ms.

### 8.2 Security
- All sensitive data encrypted in transit and at rest.
- Regular security audits and penetration testing.
- Strict adherence to PCI DSS standards for payment processing.

### 8.3 Reliability and Maintainability
- Daily backups with point-in-time recovery.
- Modular code architecture and comprehensive logging for easy maintenance.

### 8.4 Accessibility and Portability
- Complies with WCAG 2.1 Level AA.
- Fully functional across all major web browsers and mobile devices.

---

## 9. Version History

| Date       | Version       | Author     | Description                                                        |
|------------|---------------|------------|--------------------------------------------------------------------|
| 03/01/2025 | 1.0           | Your Name  | Initial requirements document for TastyGo.                         |
| 03/15/2025 | 1.1           | Your Name  | Added UI design specifications and color scheme details.           |
| 03/30/2025 | 1.2 Enhanced  | Your Name  | Enhanced descriptions, detailed use cases, workflows, and GUI design.|

---

© 2025 TastyGo. All rights reserved.
