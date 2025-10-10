# File Upload and Download

## Adding a File Picker (in Project):

* **Input Element**: Use <input type="file"> to create a file picker.

* **Multiple Files**: Add multiple attribute to allow selecting multiple files.

* **File Types**:  Use accept attribute to restrict file type (***e.g.***, *accept=".jpg, .png"*)


## Multipart Form?
* Multipart form data is an HTTP content type used to send different types of data, such as text and files, in a single request to a server. It's particularly useful for web forms that include file uploads, dividing the request into multiple parts, each separated by a unique boundary string. This allows for a structured way to send both binary data (like images) and standard text data together in one HTTP request, ensuring each piece of data is clearly identified and can be processed correctly by the server. 

### How it Works?

* **Multiple Parts**: The data is broken down into distinct "parts". 

* **Boundaries**: Each part is separated by a special string known as a "boundary". This boundary string is unique and ensures that each section of the data is clearly delineated. 

* **Headers and Content**: Each part can have its own headers, which specify the type of content within that part (e.g., text, a file), and the actual data itself. 

* **Enctype Attribute**: To enable this, a web form's enctype attribute is set to multipart/form-data. 

### Why It's Used?

* **File Uploads**: It's the standard for sending files (like PDFs, images, or documents) along with other form fields (like name, email, etc.).

* **Bundling Data**: It bundles different kinds of data into a single HTTP request.

* **Clarity for the Server**: The boundary strings allow the server to easily parse the request and distinguish between the text data and the binary file data.

### Example Scenario:
* When you fill out a job application and upload your resume, the form uses multipart/form-data to send both your personal information and the resume file in one go. 


## Handling Multipart Form Data:

### Intstall *multer*:
```bash
npm install multer
```

### Change form Type:
***enctype="multipart/formdata"***

<form action="_URL_" method="POST" enctype="multipart/formdata">


### Import "multer" and Use in app.js:

```js
//import
import multer = require('multer');

//middleware for single file
app.use(multer().single("_fileName_"));
```

Example:
```js
import multer = require('multer');

app.use(multer().single("image"));
```
