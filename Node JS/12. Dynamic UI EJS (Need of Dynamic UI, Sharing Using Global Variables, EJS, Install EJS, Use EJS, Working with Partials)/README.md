# Dynamic UI and EJS

## Need of Dynamic UI:

* **Personalized Content**: Tailors responses based on user profiles, preferences, or behaviours to enhance user experiance.

* **Dynamic Data Delivery**: Provides real-time information that updates with each request, such as lives scores or stock prices.

* **Security** and **Access Control**: Delivers different content based on user authentication and authorization levels.

* **Localization** and **Internationalization**: Adjusts responses to accommodate different languages, culture, or regional settings.

* **API Versatility**: Supports multiple client types (web, mobile, IoT) by providing appropriate data formats and structures.


## What is EJS?

* **Embedded JavaScript**.

* **Simple Syntax**: Uses **<% %>** for control flow and **<%= %>** for output.

* **Easy to Learn**: Familiar to those who know ***HTML*** and ***JavaScript***.

* **Template Reuse**: Supports ***partials*** for reusing code snippets.

* **Flexible Logic**: Allows full JavaScript expressions in templates.

<img alt="ejs work flow" src="ejs-work-flow.png" height="250px"/>


### Install EJS:

#### Step 1 - Run this command in terminal:
```bash
npm install ejs
```

#### Step 2 - add this in **app.js**:
```js
app.set('view engine', 'ejs');
```

#### Step 3 - Change ***.html*** to ***.ejs***:

#### Step 4 - Use:

* Now you can integrate javascript within HTML with the help of ***<%= _JS_code_here %>***

EXAMPLE:
```html
<h1>
    <%= helloWorldVariable %>
</h1>
```

#### Step 5 - Render:

```js
res.render('_ejs_file_name__', {
  key1: value1,
  key2: value2,
});
```

EXAMPLE:
```js
registeredHomesRoute.get('/registered-homes', (req, res, next) => {
    //render method
    res.render('registeredHomes', {registerdHouses: registerdHouses});
});
```