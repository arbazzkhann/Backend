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
1. Add a static findById method in Houses Model that takes a callback.
2. Use this findById method in the controller to load house details and log them.
3. Now change the controller:
    a. Redirect to /houses in case the house is not found, logging an error.
    b. Rendering the /house-details page with house data.
4. Create a house-details page to use the entire page to show all the data. 


## Adding Favourite Feature:
1. Create a **partial with a form and a button**, that **submits to /favourite** path with a hidden input having
   **house-id** value.
2. Add this **partial to house-details page**.
3. Add this **partial to house-list page**.
4. Add router for **handling POST request to /favourite** path.
5. Add a method in store controller to add a home id as favourites, logging the id for now, before redirecting to /favourites path.


## Adding Favourite Model:
1. Create a **new Model** to handle favourite:
    a. A static method **getFavourite** that **reads the favourite.json file** and **return the ids of all homes marked favourte**.
    b. A **static method addFavourite** that adds the **houseId to favourite-id array** if not already there, updates the file.
2. Use this **model in addFavourite controller**.
3. Use this **model in getFavourite controller** while also fetching details of all homes from House Model.
4. **Change the UI of favourite** page to show new content.