# Agent Reference Guide

## Overview

The iCodeWith.ai project utilizes a specialized 3-team ecosystem of 14 AI agents designed to handle every aspect of Hugo static site development on GitHub Pages. This comprehensive system ensures high-quality, secure, and performant implementations through specialized expertise and coordinated workflows.

### Architecture Context
- **Frontend**: Hugo static site deployed to GitHub Pages via GitHub Actions
- **Backend**: Netlify Functions for form handling (contact/reminder forms only)
- **CI/CD**: GitHub Actions workflows with Hugo build and GitHub Pages deployment
- **Hosting**: GitHub Pages (not Netlify hosting)

## How to Invoke Agents and Teams

### Communication Flow
- Users cannot directly message agents (no @agent-name communication)
- All agent invocation goes through the main Claude assistant
- Claude uses the Task tool to invoke specialized sub-agents
- Sub-agents work independently and report back to Claude
- Claude shares results with the user

### How to Request Agent/Team Work

#### Individual Agent Invocation
- "Use the [agent-name] to [specific task]"
- "Have the performance-optimizer analyze the site"
- "Ask the security-auditor to review backend functions"

#### Team-Level Requests
- "Use the site-analysis-team to audit the current architecture"
- "Have the site-implementation-team fix the security issues"
- "Ask the feature-development-team to plan the paywall feature"

#### Multi-Team Workflows
- "Coordinate with all teams to implement [feature]"
- "Use analysis team first, then implementation team"

### Example Invocation Patterns

#### Single Agent Tasks
- **Performance Analysis**: "Have the performance-optimizer analyze Core Web Vitals and suggest improvements"
- **Security Review**: "Use the security-auditor to check our Netlify Functions for vulnerabilities"
- **Code Quality**: "Ask the code-quality-analyzer to review the Hugo templates for best practices"
- **SEO Audit**: "Have the seo-accessibility-auditor check our site's search visibility"

#### Team Coordination
- **Full Site Analysis**: "Use the site-analysis-team to perform a comprehensive audit of performance, security, and code quality"
- **Feature Implementation**: "Have the site-implementation-team build the new contact form with proper validation and styling"
- **Strategic Planning**: "Ask the feature-development-team to plan and document the membership portal feature"

#### Multi-Phase Projects
- **Complete Feature Development**: 
  1. "Use the feature-development-team to plan the newsletter subscription feature"
  2. "Have the site-implementation-team build the frontend and backend components"
  3. "Ask the site-analysis-team to optimize performance and security"
  4. "Get final approval from the qa-engineer"

- **Site Optimization**:
  1. "Use the site-analysis-team to identify all performance bottlenecks"
  2. "Have the site-implementation-team implement the recommended fixes"
  3. "Ask the qa-engineer to validate improvements"

#### Emergency Fixes
- **Critical Security Issue**: "Immediately use the security-auditor to assess the vulnerability, then have the backend-developer implement a fix"
- **Site Down**: "Have the devops-engineer investigate build failures and restore deployment"
- **Performance Crisis**: "Use the performance-optimizer to identify the cause of slow loading times and implement emergency fixes"

#### Feature Development Workflows
- **New Component**: "Have the product-manager define requirements for a testimonials section, then coordinate with the ui-ux-developer and frontend-developer to implement it"
- **Content Strategy**: "Use the content-strategist to design the blog taxonomy, then have the hugo-specialist implement the custom content types"
- **Complex Integration**: "Ask the hugo-specialist to integrate the external API data, with the backend-developer handling any serverless functions needed"

### Best Practices for Agent Requests

#### Be Specific About Desired Outcomes
- **Good**: "Have the performance-optimizer analyze image loading times and implement lazy loading for the portfolio gallery"
- **Avoid**: "Make the site faster"

#### Mention Relevant Context or Constraints
- **Good**: "Use the security-auditor to review our contact form, keeping in mind we're using Netlify Functions and need GDPR compliance"
- **Good**: "Have the frontend-developer implement the mobile menu, ensuring it works with our existing SCSS architecture"

#### Specify Agent Preference or Let Claude Choose
- **Direct Request**: "I specifically need the hugo-specialist to handle this custom shortcode implementation"
- **Let Claude Decide**: "Fix the responsive layout issues" (Claude will choose the most appropriate agent/team)

#### Request Status Updates for Long-Running Tasks
- "Please provide progress updates as the site-implementation-team works on the redesign"
- "Let me know when each phase of the analysis is complete"

#### Common Workflow Patterns
- **Investigation → Planning → Implementation → Quality Assurance**
  - "First, have the analysis team identify the issues, then let the implementation team fix them"
  
- **Strategic → Technical → Validation**
  - "Start with the product-manager for requirements, then technical implementation, then qa-engineer validation"

- **Content → Development → Optimization**
  - "Use the content-strategist for architecture, hugo-specialist for implementation, then performance-optimizer for speed"

### Agent Selection Guidelines

When you're unsure which agent to request, consider:

#### For Analysis and Auditing
- **Performance issues** → performance-optimizer
- **Security concerns** → security-auditor  
- **Code quality problems** → code-quality-analyzer
- **SEO/accessibility** → seo-accessibility-auditor
- **Build/deployment issues** → build-dependencies-manager

#### For Implementation
- **UI/styling work** → frontend-developer or ui-ux-developer
- **Backend functionality** → backend-developer
- **CI/CD changes** → devops-engineer
- **Quality validation** → qa-engineer

#### For Strategic Work
- **Feature planning** → product-manager
- **Content strategy** → content-strategist
- **Complex Hugo features** → hugo-specialist
- **Documentation** → documentation-manager

Remember: Claude will coordinate between agents automatically when needed, ensuring the right expertise is applied at each phase of your project.

## Site Analysis Team (5 Agents)

The Site Analysis Team focuses on auditing, analyzing, and identifying optimization opportunities across the entire technology stack.

### Performance Optimizer (Green)
**Specialization**: Website performance optimization and Core Web Vitals improvement

**Primary Focus Areas**:
- Asset optimization (images, CSS/JS minification, bundle analysis)
- Loading performance (lazy loading, critical CSS, resource prioritization)
- Hugo + GitHub Pages build optimization
- Runtime performance and JavaScript execution efficiency
- Core Web Vitals (LCP, FID, CLS) measurements and improvements

**Key Capabilities**:
- JavaScript execution bottleneck identification
- CSS render-blocking issue resolution
- Image optimization and compression strategies
- Hugo build speed optimization in GitHub Actions
- GitHub Pages CDN optimization and browser caching

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write, WebFetch

**When to Use**: 
- Analyzing slow page load times
- Optimizing Core Web Vitals scores
- Improving Hugo build performance
- Bundle size analysis and optimization

---

### Security Auditor (Red)
**Specialization**: Security vulnerability assessment and remediation

**Primary Focus Areas**:
- Frontend security (XSS prevention, input validation, secure data handling)
- Netlify Functions security (CORS, rate limiting, serverless function security)
- GitHub Pages security (security headers, CSP, deployment security)
- Configuration security (GitHub Actions secrets, environment variables)
- Data protection and secure communication

**Key Capabilities**:
- Vulnerability scanning and assessment
- Input validation and sanitization implementation
- CORS configuration for form handlers
- GitHub Actions workflow security review
- Security header configuration for static sites

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Security audits and vulnerability assessments
- Implementing secure form handling
- Reviewing configuration files for exposed secrets
- Analyzing dependencies for security issues

---

### Build & Dependencies Manager (Yellow)
**Specialization**: Build process optimization and dependency management

**Primary Focus Areas**:
- Dependency management (package updates, vulnerability fixes)
- Hugo + GitHub Actions optimization
- Netlify Functions dependency management
- CI/CD optimization (GitHub Actions workflows, build caching)
- Version control and deployment automation

**Key Capabilities**:
- Package.json optimization and security updates
- GitHub Actions workflow performance tuning
- Hugo build performance optimization
- Environment variable management
- Automated deployment configuration

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Optimizing build times and CI/CD workflows
- Managing and updating dependencies
- Improving GitHub Pages deployment processes
- Analyzing build performance issues

---

### SEO & Accessibility Auditor (Purple)
**Specialization**: Search engine optimization and accessibility compliance

**Primary Focus Areas**:
- SEO optimization (meta tags, structured data, Core Web Vitals)
- Accessibility compliance (WCAG guidelines, screen reader compatibility)
- Static site SEO (GitHub Pages optimization, Hugo sitemap generation)
- Technical SEO (robots.txt, schema markup, Hugo templates)
- User experience and mobile responsiveness

**Key Capabilities**:
- WCAG 2.1 AA compliance auditing
- Meta descriptions and structured data implementation
- Internal linking and content optimization strategies
- Screen reader compatibility testing
- Core Web Vitals compliance verification

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write, WebFetch

**When to Use**:
- SEO audits and optimization
- Accessibility compliance testing
- Content structure and hierarchy analysis
- Mobile responsiveness reviews

---

### Code Quality Analyzer (Blue)
**Specialization**: Code quality assessment and maintainability improvements

**Primary Focus Areas**:
- Code quality issues (inconsistent naming, code smells, anti-patterns)
- Hugo best practices (template optimization, GitHub Pages compatibility)
- JavaScript quality (client-side code, Netlify Functions integration)
- Maintainability (code organization, modularity, documentation)
- Static site standards and Hugo-specific patterns

**Key Capabilities**:
- JavaScript ES6+ best practices analysis
- SCSS/CSS architecture review (BEM methodology, variable usage)
- Hugo template structure optimization
- Code organization and refactoring recommendations
- Performance-impacting code identification

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Code quality reviews and refactoring
- Identifying maintainability issues
- Hugo template optimization
- JavaScript and CSS architecture improvements

## Site Implementation Team (5 Agents)

The Site Implementation Team handles the actual development and implementation of features, fixes, and improvements across the full stack.

### Frontend Developer (Blue)
**Specialization**: HTML/CSS/JavaScript implementation for Hugo static sites

**Primary Focus Areas**:
- Hugo templates (layouts, partials, shortcodes, content templates)
- Static site JavaScript (client-side interactivity, form handling)
- Responsive design (mobile-first CSS, accessibility, cross-browser compatibility)
- Asset optimization (image optimization, lazy loading, resource hints)
- GitHub Pages integration and optimization

**Key Capabilities**:
- Hugo template development and optimization
- Progressive enhancement for static sites
- Accessibility-focused JavaScript interactions
- Component-based styling architecture
- Service worker implementation for caching

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Implementing new UI components
- Creating responsive design solutions
- Developing client-side JavaScript functionality
- Optimizing frontend performance

---

### Backend Developer (Red)
**Specialization**: Netlify Functions implementation and optimization

**Primary Focus Areas**:
- Netlify Functions (serverless function development, optimization, security)
- Form processing (contact forms, newsletter signups, data validation)
- API integration (third-party services like Resend)
- Security implementation (CORS, input validation, rate limiting)
- Performance optimization (cold start reduction, efficient data handling)

**Key Capabilities**:
- Serverless function architecture and development
- Email service integration (Resend API)
- CORS configuration and security implementation
- Input validation and sanitization
- Rate limiting with persistent storage

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Implementing or fixing backend functionality
- Adding new form processing capabilities
- Optimizing serverless function performance
- Implementing security measures for backend services

---

### DevOps Engineer (Orange)
**Specialization**: GitHub Actions workflows and deployment automation

**Primary Focus Areas**:
- GitHub Actions optimization (workflow efficiency, build caching)
- GitHub Pages deployment (multi-environment deployments, domain configuration)
- Hugo build optimization (build performance, asset processing)
- CI/CD security (secret management, deployment tokens, workflow security)
- Automation scripts (build scripts, deployment automation)

**Key Capabilities**:
- Workflow performance tuning and parallel job execution
- Build caching strategies for Hugo and dependencies
- Multi-repository deployment via peaceiris/actions-gh-pages
- Deployment rollback and recovery procedures
- Build failure analysis and automated recovery

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Optimizing CI/CD workflows and build times
- Implementing deployment automation
- Troubleshooting build and deployment issues
- Setting up multi-environment deployments

---

### UI/UX Developer (Purple)
**Specialization**: SCSS architecture and design system implementation

**Primary Focus Areas**:
- SCSS architecture (modular stylesheets, design tokens, component-based styling)
- Design system implementation (consistent components, typography, spacing)
- Responsive design (mobile-first approach, flexible layouts)
- Accessibility design (WCAG AA compliance, inclusive design patterns)
- Performance optimization (critical CSS, efficient stylesheets)

**Key Capabilities**:
- Modular SCSS structure with BEM methodology
- CSS custom properties and design token systems
- Mobile-first responsive design implementation
- WCAG 2.1 AA compliance implementation
- Critical CSS extraction and optimization

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Implementing design system components
- Creating responsive and accessible designs
- Optimizing CSS architecture and performance
- Fixing design consistency issues

---

### QA Engineer & Best Practices Enforcer (Green)
**Specialization**: Quality assurance and best practices enforcement

**Primary Focus Areas**:
- Best practices enforcement (Hugo, security, accessibility, performance standards)
- Functionality testing (form validation, JavaScript interactions, responsive behavior)
- Code quality validation (maintainability, security, performance standards)
- Accessibility compliance (WCAG AA enforcement)
- Build & deployment standards (CI/CD and deployment best practices)

**Key Capabilities**:
- Comprehensive quality gate processes
- Cross-browser and device compatibility testing
- Performance regression monitoring
- Security review and vulnerability assessment
- Pre-deployment validation and approval workflows

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write, WebFetch

**When to Use**:
- Final quality review before deployment
- Comprehensive testing of new features
- Validating best practices compliance
- Performance and accessibility audits

**Special Role**: Acts as the primary quality gatekeeper - nothing gets deployed without QA approval.

## Feature Development Team (4 Agents)

The Feature Development Team manages strategic planning, content strategy, advanced Hugo development, and comprehensive documentation.

### Product Manager (Gold)
**Specialization**: Feature planning and requirements management

**Primary Focus Areas**:
- Feature strategy (user needs analysis, competitive research, feature prioritization)
- Requirements gathering (specifications, acceptance criteria, user stories)
- Technical planning (Hugo-specific feature architecture, content strategy alignment)
- Stakeholder communication (documentation, progress tracking, decision making)
- User experience design (user journey mapping, workflow optimization)

**Key Capabilities**:
- Market research and competitive analysis
- Feature prioritization using impact vs effort matrices
- Technical feasibility assessment for Hugo static sites
- Content modeling and taxonomy planning
- Cross-team communication and project coordination

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Planning new features and capabilities
- Creating detailed requirements and user stories
- Assessing technical feasibility
- Coordinating complex multi-team projects

---

### Content Strategist (Teal)
**Specialization**: Content strategy and Hugo content optimization

**Primary Focus Areas**:
- Content architecture (Hugo content types, taxonomies, content modeling)
- SEO content strategy (keyword research, content optimization, search visibility)
- Content workflows (creation processes, editorial calendars, governance)
- Audience engagement (content personalization, user journey optimization)
- Performance analytics (content metrics, conversion optimization)

**Key Capabilities**:
- Hugo content type design and taxonomy planning
- Keyword research and competitive content analysis
- Editorial calendar planning and content scheduling
- Multi-format content strategy (text, audio, video)
- Content workflow management and automation

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write, WebFetch

**When to Use**:
- Designing content architecture and taxonomy
- Optimizing content for SEO and engagement
- Planning editorial calendars and workflows
- Analyzing content performance and strategy

---

### Hugo Specialist (Magenta)
**Specialization**: Advanced Hugo development and complex static site features

**Primary Focus Areas**:
- Advanced Hugo features (custom shortcodes, data processing, complex templating)
- Hugo architecture (theme development, module system, advanced configurations)
- Performance optimization (build speed, asset processing, content generation efficiency)
- Complex integrations (external APIs, data sources, dynamic content in static sites)
- Custom solutions (unique Hugo implementations for specialized requirements)

**Key Capabilities**:
- Custom shortcode development for reusable components
- External data source integration via Hugo data files
- Hugo build performance analysis and optimization
- Complex template logic and conditional rendering
- Advanced static site features (search, authentication, e-commerce integration)

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Implementing complex Hugo features
- Creating custom shortcodes and templates
- Optimizing Hugo build performance
- Integrating external data sources
- Solving unique static site challenges

---

### Documentation Manager (Indigo)
**Specialization**: .vibedocs structure management and comprehensive documentation

**Primary Focus Areas**:
- Documentation structure (.vibedocs/work/ folder organization, version management)
- Feature lifecycle (complete documentation from planning to retrospective)
- Template management (standardized document templates and workflows)
- Cross-reference tracking (feature dependencies and relationship mapping)
- Archive organization (historical feature documentation and knowledge management)

**Key Capabilities**:
- Automated `v1.x.x-feature-name` directory generation
- Standard document templates (plan.md, tasklist.md, discovery.md, retrospective.md)
- Feature history and decision tracking
- Team coordination through documentation
- Knowledge management and searchable information organization

**Tools Available**: Bash, Read, Glob, Grep, Edit, MultiEdit, Write

**When to Use**:
- Creating new feature documentation structures
- Managing project documentation lifecycle
- Organizing completed feature archives
- Maintaining knowledge base and cross-references

## Team Workflows

### When to Use Each Team

#### Site Analysis Team
**Use for**: Auditing, identifying issues, and providing recommendations
- Performance bottlenecks and optimization opportunities
- Security vulnerabilities and compliance gaps
- Build process inefficiencies
- SEO and accessibility issues
- Code quality problems

#### Site Implementation Team
**Use for**: Actually building, fixing, and implementing solutions
- Developing new features and components
- Implementing performance optimizations
- Creating responsive designs and user interfaces
- Building backend functionality
- Deploying and managing infrastructure

#### Feature Development Team
**Use for**: Strategic planning, content management, and advanced development
- Planning new features and initiatives
- Managing content strategy and architecture
- Implementing complex Hugo functionality
- Maintaining comprehensive documentation

### Team Coordination Workflows

#### Analysis → Implementation → Development Flow
1. **Analysis Team** identifies issues and provides recommendations
2. **Implementation Team** executes the technical solutions
3. **Feature Development Team** provides strategic guidance and documentation
4. **QA Engineer** validates all work meets quality standards

#### Feature Development Workflow
1. **Product Manager** defines requirements and creates user stories
2. **Content Strategist** designs content architecture if needed
3. **Hugo Specialist** implements complex Hugo functionality
4. **Implementation Team** builds frontend/backend components
5. **Analysis Team** optimizes performance, security, and quality
6. **Documentation Manager** maintains comprehensive project documentation
7. **QA Engineer** validates everything before deployment

#### Quality Assurance Process
The **QA Engineer** serves as the final quality gate:
- Reviews all implementations for best practices compliance
- Validates security, performance, and accessibility standards
- Conducts comprehensive testing across browsers and devices
- Ensures proper documentation and code quality
- Provides final approval before deployment

### Example Workflow Scenarios

#### Scenario 1: Performance Optimization
1. `@performance-optimizer` analyzes site performance and identifies bottlenecks
2. `@frontend-developer` implements JavaScript and CSS optimizations
3. `@devops-engineer` optimizes build processes and deployment
4. `@qa-engineer` validates improvements and ensures no regressions

#### Scenario 2: New Feature Development
1. `@product-manager` creates feature requirements and user stories
2. `@content-strategist` designs content architecture if needed
3. `@hugo-specialist` implements complex Hugo functionality
4. `@frontend-developer` and `@backend-developer` build components
5. `@ui-ux-developer` ensures design consistency and accessibility
6. `@security-auditor` reviews security implications
7. `@documentation-manager` creates comprehensive feature documentation
8. `@qa-engineer` conducts final testing and approval

#### Scenario 3: Site Maintenance and Optimization
1. `@code-quality-analyzer` identifies code quality issues
2. `@seo-accessibility-auditor` audits SEO and accessibility compliance
3. `@build-dependencies-manager` updates dependencies and optimizes builds
4. `@implementation-team` implements necessary fixes and improvements
5. `@qa-engineer` validates all changes meet quality standards

This comprehensive agent ecosystem ensures every aspect of Hugo static site development is handled by specialized expertise, from initial analysis through final deployment and documentation.