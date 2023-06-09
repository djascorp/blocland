import { BlocText } from "../../../domain/entities/BlocText";
import { BlocVertical } from "../../../domain/entities/BlocVertical";
import { IBloc } from "../../../domain/entities/ibloc";
import { Container } from "../../../domain/services/container";
import { Master } from "../../../domain/services/master";
import { generateRandomId } from "../../../utils/primitive";

describe("Main Container", () => {
    const master = new Master;
    const  { logger } = master.init();

    it("Container must be created without error", () => {
        const container = new Container({logger});
        expect(container).toBeTruthy()
    })

    it("It should console log as default when log is use in container", () => {
        const container = new Container({logger});
        const consoleLogSpy = jest.spyOn(console,"log").mockImplementation();
        const text_bloc : IBloc = new BlocText({name: 'Text Bloc', property:{text: 'Djasnive'}});
        container.log("TEST LOG", text_bloc, null);
        expect(consoleLogSpy).toBeCalled();
    })

    it("It should init main block", () => {
        const container = new Container({logger});
        const vertical_bloc : IBloc = new BlocVertical({name: 'Vertical Bloc'});
        container.init({
            rootBloc: vertical_bloc
        });
        expect(container.registeredBlocs.length).toEqual(1);
        expect(container.rootBloc).toBeTruthy();
    })

    it("It should add child bloc", () => {
        const container = new Container({logger});
        const main_bloc : IBloc = new BlocVertical({name: 'Vertical Bloc'});
        container.init({
            rootBloc: main_bloc
        });
        expect(container.registeredBlocs.length).toEqual(1);
        const text_bloc : IBloc = new BlocText({name: 'HW', property: {text: 'Hello World'} });
        container.addChild(main_bloc,text_bloc);
        expect(container.registeredBlocs.length).toEqual(2);
        expect(main_bloc.children![0]).toBe(text_bloc);
    })

    it("It should add multple child bloc", () => {
        const container = new Container({logger});
        const main_bloc : IBloc = new BlocVertical({name: 'Vertical Bloc'});
        container.init({
            rootBloc: main_bloc
        });
        expect(container.registeredBlocs.length).toEqual(1);
        container.addChild(main_bloc, new BlocText({ name: generateRandomId(), property:{ text: generateRandomId()} }));
        container.addChild(main_bloc, new BlocText({ name: generateRandomId(), property:{ text: generateRandomId()} }));
        container.addChild(main_bloc, new BlocText({ name: generateRandomId(), property:{ text: generateRandomId()} }));
        expect(container.registeredBlocs.length).toEqual(4);
    })

    it("It should remove child bloc", () => {
        const container = new Container({logger});
        const main_bloc : IBloc = new BlocVertical({name: 'Vertical Bloc'});
        container.init({
            rootBloc: main_bloc
        });
        expect(container.registeredBlocs.length).toEqual(1);
        const text_bloc : IBloc = new BlocText({name: 'HW', property:{text: 'Hello World'} });
        container.addChild(main_bloc,text_bloc);
        expect(container.registeredBlocs.length).toEqual(2);
        expect(main_bloc.children![0]).toBe(text_bloc);
        container.removeChild(main_bloc,text_bloc);
        expect(main_bloc.children?.length).toEqual(0);
    })

    it("Should be able to get main Registered Bloc by Id", () => {
        const container = new Container({logger});
        const main_bloc : IBloc = new BlocVertical({name: 'Vertical Bloc'});
        container.init({
            rootBloc: main_bloc
        });
        expect(container.getBlocById(main_bloc.id)).toBe(main_bloc);
    })
    it("Should be able to get Other Registered Bloc by Id", () => {
        const container = new Container({logger});
        const main_bloc : IBloc = new BlocVertical({name: 'Vertical Bloc'});
        container.init({
            rootBloc: main_bloc
        });
        
        const text_bloc : IBloc = new BlocText({name: 'HW', property:{text: 'Hello World'} });
        container.addChild(main_bloc,text_bloc);
        expect(container.getBlocById(text_bloc.id)).toBe(text_bloc);
    })
})