// App.js
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import reducer from "./redux/reducer";
import { MdOutlineNoteAlt } from "react-icons/md";




const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="body-bg">
        <div className=" p-6 flex flex-col items-center justify-center mt-[45px] mx-32 bg-slate-300 jinkies">
          <div className="flex gap-3">
            <h1
              className="text-[50px] font-bold mb-4"
              style={{
                fontFamily: "Bebas Neue",
                letterSpacing: "3px",
              }}
            >
              ToDo Checklist
            </h1>
            <MdOutlineNoteAlt className=" w-14 h-14"/>
          </div>
          <hr></hr>
          <AddTask />
          <ListTask />
        </div>
      </div>
    </Provider>
  );
};

export default App;
