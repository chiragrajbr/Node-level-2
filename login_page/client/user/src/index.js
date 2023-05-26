import App from "./App"
// import  ReactDOM  from "react-dom"
// ReactDOM.render(<App />,document.getElementById("aa"))
import { createRoot } from "react-dom/client"
//const element=document.getElementById("aa")
// const root=createRoot(document.getElementById("aa"))
// root.render(<App />)

createRoot(document.getElementById("aa")).render(<App/>)