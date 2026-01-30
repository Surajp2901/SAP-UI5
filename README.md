# SAP UI5 – Product Browsing Application

This repository contains a SAPUI5 application developed using 
SAP Fiori design principles, enabling users to browse products 
and view product details in a responsive, side-by-side layout.

---

## Objective
- Provide a smooth product browsing experience with minimal navigation
- Enable side-by-side display of product list and details
- Demonstrate responsive UI5 application design using Fiori guidelines

---

## Key Features
- SplitApp / Flexible Column Layout with master–detail pattern
- Side-by-side display of product list and product details
- Responsive behavior across desktop, tablet, and mobile devices
- Reduced navigation steps with context-aware browsing

---

## Technology Stack
- SAPUI5 (MVC architecture)
- XML Views and reusable Fragments
- OData V2 Model
- SAP Fiori controls (sap.m, sap.f)
- Standard SAP S/4HANA OData service: API_PRODUCT_SRV

---

## Architecture Overview
- UI built using SAPUI5 MVC pattern for separation of concerns
- Backend data consumed via standard S/4HANA OData services
- Routing and navigation configured via manifest.json
- Flexible Column Layout adapts based on navigation and screen size

---

## Data Handling
- Product data retrieved in real time using OData V2 Model
- List binding for product list and element binding for product details
- Search and filtering implemented using OData query options
- Performance optimized using lazy loading and growing lists

---

## User Experience
- Responsive Fiori controls for consistent UX across devices
- Busy indicators and error handling for graceful backend failures
- Back navigation and deep linking supported

---

## Security & Deployment
- Deployed to ABAP repository using standard UI5 tooling
- Registered in SAP Fiori Launchpad (tile, catalog, target mapping)
- Role-based access control via business roles
- Secure communication using HTTPS and backend authorization

---

## Repository Notes
- Source code includes controllers, views, fragments, and configuration
- Designed as a reference for enterprise-ready SAPUI5 development
