## Add an event handler when button is clicked

```js
window.onload = () => {
  const button = document.getElementById("my-button");

  // Using anonymous functions
  button.addEventListener("click", function () {
    console.log("The button was clicked");
  });

  // Using lambda functions
  button.addEventListener("click", () => {
    console.log("The button was clicked");
  });
};
```

```js
window.onload = () => {
    const button = document.getElementById("add-button");
    
    button.addEventListener("click", () => {
        const list = document.getElementsByTagName("ul")[0];
        const newListItem = document.createElement("li");
        newListItem.innerText = "New list item";
        list.appendChild(newListItem);
    });
}
```
