# File Upload and Download

## Adding a File Picker (in Project):

* **Input Element**: Use <input type="file"> to create a file picker.

* **Multiple Files**: Add multiple attribute to allow selecting multiple files.

* **File Types**:  Use accept attribute to restrict file type (***e.g.***, *accept=".jpg, .png"*)


## Multipart Form?
* Multipart form data is an HTTP content type used to send different types of data, such as text and files, in a single request to a server. It's particularly useful for web forms that include file uploads, dividing the request into multiple parts, each separated by a unique boundary string. This allows for a structured way to send both binary data (like images) and standard text data together in one HTTP request, ensuring each piece of data is clearly identified and can be processed correctly by the server. 

