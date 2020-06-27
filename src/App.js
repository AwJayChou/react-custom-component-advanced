import React from "react";
import FormPage from "./pages/FormPage";
import MyFormPage from "./pages/MyFormPage";
import { DialogPage } from "./pages/DialogPage";
import ReduxPage from "./pages/ReduxPage";
import Tree from './pages/Tree'
// function f1(arg) {
//   console.log("f1", arg);
//   return arg;
// }
// function f2(arg) {
//   console.log("f2", arg);
//   return arg;
// }
// function f3(arg) {
//   console.log("f3", arg);
//   return arg;
// }

// console.log(compose(f1, f2, f3)("omg"));

// function compose(...funcs) {
//   const len = funcs.length;
//   if (len === 0) {
//     return arg => arg;
//   }
//   if (len === 1) {
//     return funcs[0];
//   }
//   return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }

function App() {
  return (
    <div className="App">
      {/* <FormPage /> */}
      {/* <MyFormPage /> */}
      {/* <DialogPage /> */}
      <Tree />
    </div>
  );
}

export default App;
