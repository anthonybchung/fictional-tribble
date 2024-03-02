# Component Building

## Navbar

![image](https://github.com/anthonybchung/fictional-tribble/assets/99620815/25ef402a-3cc0-47e8-b76f-6f9a1b12e7f3)

### Button Component

- show menu-icon when state is true(closed).
- show cross-icon when state is false(opened).
- accept a function and change state of menu

### Menu Component

- height is 100% when state is false(opened)
- height is 0px, padding is 0px when state is true(closed)
- should receive a prop array(element {name,link}) for list-items.

### Navbar Component

- it should accept a prop:array and pass it to MenuList.
- it should contain a state that is passed to MenuButton.
- it should pass a handler to MenuButton to change the state when clicked.
- it should also pass the state to MenuList.
- it should accept a prop:string for Company Name.