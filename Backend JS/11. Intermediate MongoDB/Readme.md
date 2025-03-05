# 📌 Searching Case-Insensitive Tags in MongoDB

## 🔍 Case-Insensitive Search
To perform a case-insensitive search in MongoDB, use `RegExp`:

```js
new RegExp("Search", "Flags");
```

### Example:
```js
new RegExp("Arbaz", "i"); // 'i' for case-insensitive search
```

---

## 🚀 Start and End Matching

- `^` → Matches the **start** of a string
- `$` → Matches the **end** of a string

### Example Usage:

```js
router.get('/find', async function(req, res) {
  const regexnew = RegExp("^aRbAz$", "i"); // Case-insensitive match for exact word
  const userData = await userModel.find({ nickname: regexnew });
  res.send(userData);
});
```
