import React from 'react';
import {Worldwide} from "./Worldwide/Worldwide";
import {Service} from "./Service/Service";
import {Loads} from "./Loads/Loads";
import {Contact} from "./Contact/Contact";

export function Homepage(){
    return (
        <>
            <Worldwide />
            <Service />
            <Loads />
            <Contact />
        </>
    );
}