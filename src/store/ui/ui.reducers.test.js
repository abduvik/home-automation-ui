import uiReducers from "./ui.reducers";
import { toggleSideDrawer } from "./ui.actions";

describe("UI Reducers testing", () => {
    it('Should change openSideDrawer if toggleSideDrawer() action is fired',() => {
        const state = {openSideDrawer: false};
        const newState = uiReducers(state, toggleSideDrawer());
        expect(newState.openSideDrawer).toBe(true);
    });
})