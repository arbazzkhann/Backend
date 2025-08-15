# Dynamic Path

## What are Dynamic Paths?**

* **Path parameters are variables**: embedded directly in the URL path to capture dynamic values, like ***/users/:userId*** where **:userId is replaced with a specific user ID**.

* **Query parameters**: are key-value pairs appended to the URL after a **?**, used to send additional data, like ***/search?query=nodejs*** where **query=nodejs** specifies the search term.

<img src="./dynamic-path.png" height="150px">

### Example:
<img src="./dynamic-path-example.png" height="140px">


### Prectice:

1. Add a **details button** in **/home-list** to go link path **/house/:house-id**
2. Add a **random id to each home** in the data file.
3. Add a **random id on home object** before saving in the house model.
4. Add a **route in the storeRouter** for /house/:house-id
5. Add a **method in storeController to get the house-id using req.params** and log it, before sending out a dummy response with house-id.