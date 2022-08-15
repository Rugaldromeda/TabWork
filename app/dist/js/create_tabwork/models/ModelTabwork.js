"use strict";
import { BudgetControl } from "../../budget_balance/controllers/budget-controller.js";
export class ModelTabwork {
    constructor(name) {
        this.nameTabwork = name;
        this.tabworkControl = new BudgetControl(this.nameTabwork);
    }
    get name() {
        return this.nameTabwork;
    }
}
