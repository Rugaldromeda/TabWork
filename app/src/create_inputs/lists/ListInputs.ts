"use strict"

import { ModelInput } from "../models/ModelInput"

export class ListInputs{
    private inputs:ModelInput[]

    add(input:ModelInput){
        this.inputs.push(input);
    }

    get list(){
        return this.inputs;
    }
}