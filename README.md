# 💾 Better-OnSubmit

Get values from HTML form as JSON.

# Usage

```HTML
<script src="https://cdn.jsdelivr.net/gh/mvoloskov/better-onsubmit/betterOnsubmit.min.js"></script>
<script>
  document.getElementById('myAmazingForm').onsubmit = betterOnsubmit(values => {
    // do whatever you want with the values
    console.log(values)
  })
</script>
```

Thanks to [Cosmopolite](https://github.com/mvoloskov/cosmopolite) Formie is also available as a NPM package:
```
npm install better-onsubmit
```

# JSON example

You'll get a JSON like this from your submitted form:

```JS
{
    about: "",
    country: "usa",
    date: "1930-08-05",
    email: "neil.armstrong@nasa.com",
    "eyes-color": "#000000",
    gender: "male",
    name: "Neil Alden Armstrong",
    password: "",
    phone: "",
    photo: FileList {length: 0},
    "has-speedy": true,
}

```
