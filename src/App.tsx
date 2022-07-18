import React from 'react';
import './App.css';
import {Homepage} from "./components/Homepage/Homepage";
import {Route, Routes} from "react-router-dom";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Service} from "./components/Service/Service";
import {Notfound} from "./components/Notfound/Notfound";
import {Layout} from "./components/Layout/Layout";

function App() {
    return (
        <>
            <div className="wrapper">
                <Routes>
                    <Route path={"/"} element={<Layout />}>
                        <Route index element={<Homepage />}/>
                        <Route path="service" element={<Service />}/>
                        <Route path="contact" element={<Contact />}/>
                        <Route path="about" element={<About />}/>
                        <Route path="*" element={<Notfound />}/>
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default App;
