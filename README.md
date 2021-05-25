# 💾 Better-OnSubmit
<p align="center">
    <a href="https://github.com/mvoloskov/better-onsubmit/blob/master/package.json"><img src="https://img.shields.io/badge/dependencies-0-brightgreen" alt="Dependencies"></a>
    <a href="https://www.npmjs.com/package/better-onsubmit"><img alt="npm" src="https://img.shields.io/npm/v/better-onsubmit"></a>
    <img alt="License" src="https://img.shields.io/github/license/mvoloskov/better-onsubmit?color=brightgreen">
    <a href="https://www.buymeacoffee.com/mvoloskov"><img alt="Sponsor this project" src="https://img.shields.io/badge/-sponsor-ffdd00?logo=buy-me-a-coffee&logoColor=black"></a>
    <a href="https://github.com/mvoloskov"><img alt="My github" src="https://img.shields.io/github/followers/mvoloskov?style=social"></a>
    <a href="https://twitter.com/intent/user?screen_name=mvoloskov"><img alt="My twitter" src="https://img.shields.io/twitter/follow/mvoloskov?style=social"></a>
</p>
<p align="center">
    <a href="https://miloslav.website/better-onsubmit">Demo</a>
    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="#usage">Usage</a>
    &nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://miloslav.website">Author</a>
</p>
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

```JS
import betterOnsubmit from 'better-onsubmit'

const onSubmit = betterOnsubmit(values => {
  console.log(values)
})

document.getElementById('myAmazingForm').onsubmit = onSubmit
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
