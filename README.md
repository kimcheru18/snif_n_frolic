# Sniff'n Frolic

Link to live application:

# Goal & Use Case

This site is for a small dog walking business to display information and rates about the business.



# Screenshots
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/landing-page.png)

![image2](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/register-new-user-page.png)

![image3](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/questions-page.png)

![image4](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/instructions-to-create-sop.png)

![image5](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/create-sop-freestyle-page.png)

![image6](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/create-sop-template-page.png)

![image7](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/set-goals-page.png)

![image8](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/sop-values-beliefs-goals-final-page.png)

![image9](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/github-images/revise-sop-page.png)


# User Stories & Initial UX

**Landing Page**
Initial landing page
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/landing-page-image.png)

**Answer Questions Page**
Step 1 User will answer all questions on page. Step 2 user lists values and beliefs. User will then click "Save and continue."
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/answer-questions-image.png)

**Instructions for creating SOP Page**
Step 3 User can choose to create SOP free-style by clicking "Create free-style" or use a template by clicking "Create with template." The template will be filled in with their answers from questions page. User can edit if desired.
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/instructions-create-sop.png)

**Create Free-style Page**
Step 4 User can review answers from question section and create SOP in textarea, then clicks "Save"
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/create-free-style-image.png)

**Template Page**
Alternatively, Step 4 Users answers from the questions page will be inserted in input fields where user can alter text. User clicks "Save" to continue
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/template-image.png)

**Completed Statement of Purpose and Add Goals Page**
This page will have the users SOP displayed, along with a section to create goals. Once goals are created, user clicks "Save" to continue.
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/set-goals-page.png)

**SOP, Values, Beliefs, Goals Page**
Users SOP is displayed along with their Values, Beliefs and Goals. They have the option to click the edit button on Values and Beliefs which will direct them back to the Answer Questions Page where they can update their answers, values and beliefs. User may also click the edit button for Goals which will direct them back to Completed Statement of Purpose and Add Goals Page.
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/sop-values-beliefs-goals-final-page.png)

**Reflect, Create, Review, Revise Page**
Reflect: Directs user to their existing SOP, Values, Beliefs and Goals.
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/sop-values-beliefs-goals-final-page.png)

Create: After creating SOP initially, "Create" Directs user to Instructions for creating SOP Page where they can alter their SOP, either by clicking "Create free-style" where their SOP will be displayed in the textarea or clicking "Create with template" where their answers from the questionaire will be displayed in the input fields. Create nav-option will be hidden after initial logout.
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/instructions-create-sop.png)

Review: Directs user to Create free-style page if they want to review their answers and change their SOP. Answers are hidden after initial logout.
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/create-free-style-image.png)

Revise: Directs uer to Create page where they can alter their SOP.
![image1](https://github.com/kimcheru18/define-statement-of-purpose-node-capstone/blob/master/wireframe-images/login-create-free-style-image.png)


# Technical stack

**Front-end**
 * HTML5
 * CSS3
 * JavaScript
 * jQuery

**Back-end**
 * NodeJS
 * Mongoose / MongoDB
 * Heroku (hosting)

**Testing**
 * Mocha & Chai
 * TravisCI

**Responsiveness**
 * The site is fully responsive on most mobile & laptop devices.
 * Tested on Chrome, Firefox & Safari.

**Security**
 * Passport
 * Bcrypt

# Development Roadmap

### Version 1.1
 * Include additional questions in questionnaire
 * Let user update Values, Beliefs and Goals
 * Allow user to save multiple SOPs over time so they can look back at the changes
 * Allow user to add steps to their goals and check them off as they complete them
