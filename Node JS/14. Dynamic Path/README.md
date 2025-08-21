# Dynamic Path

## What are Dynamic Paths?**

* **Path parameters are variables**: embedded directly in the URL path to capture dynamic values, like ***/users/:userId*** where **:userId is replaced with a specific user ID**.

* **Query parameters**: are key-value pairs appended to the URL after a **?**, used to send additional data, like ***/search?query=nodejs*** where **query=nodejs** specifies the search term.

<img src="./dynamic-path.png" height="150px">

### Example:
<img src="./dynamic-path-example.png" height="140px">


### Prectice:

1. Add a **details button** in ** house-list** to go link path **/house/:house-id**
2. Add a **random id to each house** in the data file.
3. Add a **random id on house object** before saving in the house model.
4. Add a **route in the storeRouter** for /house/:house-id
5. Add a **method in storeController to get the house-id using req.params** and log it, before sending out a dummy response with house-id.


## Showing Real House Data:
1. Add a **static findById method** in Houses Model that takes a callback.
2. Use this findById **method in the controller to load house details** and log them.
3. Now change the controller:
    a. Redirect to **/houses in case the house is not found**, logging an error.
    b. Rendering the **/house-details page with house data**.
4. **Create a house-details page** to use the entire page to show all the data. 


## Adding Favourite Feature:
1. Create a **partial with a form and a button**, that **submits to /favourite** path with a hidden input having
   **house-id** value.
2. Add this **partial to house-details page**.
3. Add this **partial to house-list page**.
4. Add router for **handling POST request to /favourite** path.
5. Add a method in store controller to add a house id as favourites, logging the id for now, before redirecting to /favourites path.


## Adding Favourite Model:
1. Create a **new Model** to handle favourite:
    a. A static method **getFavourite** that **reads the favourite.json file** and **return the ids of all houses marked favourte**.
    b. A **static method addFavourite** that adds the **houseId to favourite-id array** if not already there, updates the file.
2. Use this **model in addFavourite controller**.
3. Use this **model in getFavourite controller** while also fetching details of all houses from House Model.
4. **Change the UI of favourite** page to show new content.


## 1. Edit house - Adding Features Skeleton:
1. Rename the **add-house.ejs to edit-house.ejs**
2. Fix it's usage in the **add-house controller**.
3. Change the **path of edit button** everywhere.
4. Add a **new router for GET /edit-house/:house-id**
5. Add a **new controller method** in host controller, passing query param of **editing=true** to view.


## 2. Edit House - Showing Existing Data:
1. Change the **controller to now fetch the house details**, *if not found - redirect to /host-registered-houses* otherwise passing the data to view.
2. Change the **edit-house.ejs** to **show dynamic content** basesd on values:
    a. Different **submit path**.
    b. Different **button text**.
    c. **Pre-filled values if present**.


## 3. Handling Edit Request:
1. **Add a router for POST /edit-house**
2. **Add a controller for /edit-house**, which **creates a house model object** and saves it, before redirecting to /host-registered-houses
3. **Add hidden id input field** in the edit-house.ejs to get the **id as part of POST request**.
4. **Change the save method in model** to **handle creation of new** as well as **updation of existing house**.


## Adding Delete Feature:
1. Surround the **Delete button** with a form that submits to path /host/delete-house/:houseId
2. **Add a route** in the host routes.
3. **Add a static delete method to the House model** that takes an id and deletes the house.
4. **Add a method in host controller** to handles the request, delete the house and redirect to **/host-registered-houses** page.
5. **Pending**: *Deleted houses might still be in favourites list*.