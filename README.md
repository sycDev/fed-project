# fed-project

This is the final project for the module "Front-End Web Development" to design and develop a website for ABC Learning Center using HTML, CSS, JQuery & JQueryUI.
This website provides course information to students and is able to capture leads using Lead Generation Form.
A Lead Administration System is built to ease the admin of ABC Learning Center to manage their leads. 

---

### Pages

- Home
- About Us
- Course Listing
- Course Details
- Course Schedule
- Contact Us
- Lead Registration
- Registration Thank You
- Privacy Policy
- Sitemap
- Lead Administration Leads Listing
  * Search Leads
  * Delete Lead
- Lead Administration Add Lead
- Lead Administration Edit Lead

> **Note**
> Access the Lead Administration page by manually changing the route to: `/admin.html` in your browser's address bar.

---

### Limitations

#### Storing lead data in Local Storage

##### Security

- Data from user input stored in Local Storage, vulnerable to malicious JavaScript attacks.
- Hackers can potentially access sensitive information.
- User's ability to manually modify or clear Local Storage data.
- Data loss if the user clears browser site data.
- Limited security due to the lack of a server-side database.

##### Capacity

- Local Storage has a maximum capacity of around 5MB.
- Inadequate for storing increasing lead details.
- Potential revenue loss due to data storage limitations.

#### Compatibility

Currently, the website is not yet designed for a responsive, mobile-ready version but cross-browser compatibility was tested on Chrome, Firefox, and Microsoft Edge.

- Text may look smaller
- Misalignment of navigation bar blocking content
