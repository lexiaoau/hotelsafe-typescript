This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



# react-typescript


npx create-react-app react-typescript --template typescript


---

```js

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {


```
  
 - React.FC
    - react functional component
- &lt;Props&gt; 
  - parameters to this function

---


# hotel safe (  react hook + typescript + redux  )


## Docs:

https://react-redux.js.org/api/hooks

https://reactjs.org/docs/hooks-reference.html#usecallback

https://redux.js.org/api/store

https://react-redux.js.org/next/using-react-redux/connect-mapdispatch

https://cn.redux.js.org/docs/advanced/UsageWithTypeScript.html

https://thoughtbot.com/blog/using-redux-with-react-hooks

https://medium.com/@pie6k/better-way-to-create-type-safe-redux-actions-and-reducers-with-typescript-45386808c103



npm install react-redux @types/react-redux   @reduxjs/toolkit

---

useDispatch   -  makes dispatch with each component much easier









---

---






