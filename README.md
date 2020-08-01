# Formie

Get values from HTML form as JSON.

# Usage

```HTML
<script src="https://cdn.jsdelivr.net/gh/uyouthe/formie/formie.min.js"></script>
<script>
  // do whatever you want with the values
  document.getElementById('myAmazingForm').onsubmit = formie(values => console.log(values))
</script>
```

# JSON example

You'll get a JSON like this from your submitted form:

```JS
{
    about: "",
    country: "usa",
    date: "1971-06-28",
    email: "elon.musk@spacex.com",
    eyes-color: "#000000",
    gender: "male",
    name: "Elon Reeve Musk",
    password: "",
    phone: "",
    photo: FileList {length: 0},
    sacrificed_soul: true,
}

```
