import { BlocToObject } from "../../../domain/actions/BlocToObject"
import { BlocText } from "../../../domain/entities/BlocText"
import { BlocVertical } from "../../../domain/entities/BlocVertical"
import { IBloc } from "../../../domain/entities/ibloc"

describe("Bloc To Object", () => {
    it("Should Convert Bloc Without children To Object", () => {
        const text_bloc: IBloc = new BlocText({name : 'TX', property:{text: 'Hello World'}})
        const obj = (new BlocToObject(text_bloc)).execute();
        
        expect(Object.entries(text_bloc).sort()).toEqual(Object.entries(obj).sort());
    })

    it("Should Convert Bloc With children To Object", () => {
        const text_bloc: IBloc = new BlocText({name : 'TX', property:{text: 'Hello World'}})
        const parent_bloc: IBloc = new BlocVertical({name: 'VB'})
        parent_bloc.addChilden([text_bloc]);
        const obj = (new BlocToObject(parent_bloc)).execute();
    
        expect(Object.entries(JSON.parse(JSON.stringify(parent_bloc))).sort()).toEqual(Object.entries(obj).sort());
    })
})