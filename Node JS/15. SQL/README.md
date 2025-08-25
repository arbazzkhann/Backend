# Database

## What is a Database:
1. **Store Data**: Keep the **large amounts of data** in a **structured format**.
2. **Enable Data Management**: Allow for **adding**, **updating**, and **deleting** data easily.
3. **Favilitate Quick Access**: Provide **fast retrieval** of data **through queries**.
4. **Ensure Data Integrity**: Maintain **accuracy** and **consistency** of data over time.
5. **Support Multiple Users**: Handle **concurrent access by many users** simultaneously.
6. **Secure Data**: **Protect information** through **access controls** and **authentication**.


## SQL Databases:
* **Vertical Scalability**: Typically scaled by increasing the resource of a single server (scaling up).
* **Relationships**: Tables can have **multiple types of relationships**.
* **Relational Model**: Organize **data into tables** with ***rows*** and ***columns***.
* **Fixed Schema**: Require a ***predefined schema***, the *structure of the data must be known in advance*.

<img src="sql-database.png" height="250px"/>


## SQL (Structured Query Language):
* **Relational Model Use of SQL**: Utilize SQL for querying and managing data, which is a *standardized* and *widely-used language*.
* **ACID Compliance**: Support transctions that are ***Atomic***, ***Consistent***, ***Isolated***, and ***Durable***.
* **Complex Queries**: Excel at handling complex queries and relationships between data.

<img src="SQL-Language.png" height="325px"/>


## NoSQL Databases:
* **Flexible Schema**: Allow for ***dynamic schemas***, accommodating ***unstructured*** or ***semi-structured*** data ***without predefined structures***.
* **Duplicacy Over Relations**: Duplicates data across (**denormalization**) to enhanced performance and scalability, rather than relying on complex relationships and joins as in relational databases.
* **Horizontal Scalability**: Designed to scale out by adding more servers, handling large valumes of data efficiently.
* **Performance**: Optimized for high throghput and ***low latency***, ***suitable for real-time applications***.
* **Example**: ***MongoDB***

<img src="NoSQL-DB.png" height="200px"/>

## SQL VS NoSQL

> Structure - SQL VS NoSQL <br/>
<img src="sql-vs-nosql.png" height="300px"/>

> Comparison - SQL VS NoSQL <br/>
![sqlVSnoSql-table](sqlVSnoSql-table.png)


## Setup of MySQL:

STEP 1: Download and Install - MySQL (choose based on your OS).:
Download: https://dev.mysql.com/downloads/

STEP 2: Download and Install - MySQL Workbench:
Download: https://dev.mysql.com/downloads/

👉 Installation is straightforward — just keep clicking Next.


## Creating a Schema in MySQL Workbench:
STEP 1: Open MySQL Workbench & connect to your server (use the password you set during installation).

STEP 2: In the Navigator panel, right-click Schemas → Create Schema…

STEP 3: Enter schema name (e.g., college_db).

STEP 4: Click Apply → Review SQL → Apply → Finish.


## Connecting MySQL with Express.js:
STEP 1: Install MySQL with NPM:

```bash
npm install mysql2
```
* This package helps us to connect with MySQL Databases.


STEP 2: Create **databaseUtils.js** in utils directory:

> databaseUtils.js:
```js
const mysql = require('mysql2');
```

STEP 3: Creating table in database:

> EXAMPLE:
```sql
CREATE TABLE houses(
	id INT PRIMARY KEY AUTO_INCREMENT,
    houseName VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    description LONGTEXT NOT NULL,
    imageURL VARCHAR(255) NOT NULL,
    state VARCHAR(45) NOT NULL
);
```

STEP 4: Put all the database connection code into databaseUtils.js:

> EXAMPLE:
```js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: 'prectice_website'
});

module.exports = pool.promise();
```

STEP 5: Import Database and Use:

> EXAMPLE:
```js
//Database
const db = require('./utils/databaseUtils.js');

db.execute('SELECT * FROM houses')
.then(([rows, fields]) => {
    console.log('getting from database: ', rows);
})
.catch(err => {
    console.log("error while db houses records: ", err);
});
```