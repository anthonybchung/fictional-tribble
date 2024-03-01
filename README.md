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
