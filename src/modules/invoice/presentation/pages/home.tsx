import React, { useEffect, useRef, useState } from "react"
import { IBloc } from "../../../core/domain/entities/ibloc"
import { BlocText } from "../../../core/domain/entities/BlocText"
import { BlocElement } from "../ui/BlocElement";
import { BlocVertical } from "../../../core/domain/entities/BlocVertical";
import { BlocHorizontal } from "../../../core/domain/entities/BlocHorizontal";
import { Container } from "../../../core/domain/services/container";
import { Logger } from "../../../core/domain/services/logger";
import { Master } from "../../../core/domain/services/master";
import { generateRandomId } from "../../../core/utils/primitive";
import { BlocTextElement } from "../ui/BlocTextElement";
import { useContainer } from "../../domain/use_container";

class Test {
    
    a = 5;
    z = {
        x : 9,
        y: [1,2,3]
    }
    bloc = new BlocText({ name: 'TEXT 2', property: { text: 'Hello World' } })

    incrementA() {
        this.a += 1;
    }

    incrementZ(){
        this.z.x += 10;
    }
    incrementB(){
        this.z.y.push(this.a);
    }
    incrementBloc(){
        this.bloc.property.text = generateRandomId();
    }
}

const DebugElement = ({ bloc }: {bloc: string}) => {
    return (
        <>
            {bloc}
        </>
    )
}



export const HomePage = () => {
    const {container, parent_bloc} = useContainer();
    const [renderer, setRender] = useState(0);
    const current_id = useRef('');

    const changeValue = () => {
        let bloc = new BlocHorizontal({name: generateRandomId()});
        container.addChild(parent_bloc,bloc)
        current_id.current = bloc.id;

        setRender(renderer + 1);

    }

    const updateValue = () => {
        console.log(container.getBlocById(current_id.current), current_id.current);
        const bloc = new BlocText({name: generateRandomId(),property: {text: generateRandomId()}});
        container.addChild(container.getBlocById(current_id.current)!,bloc);
        setRender(renderer + 1);
    }



    return (
        <div>
            <div>
                Test Ground
            </div>
            <div>
                {/* { JSON.stringify(container)} */}
            </div>

            <div>
                <BlocElement bloc={parent_bloc} />
            </div>
            <div>
                <button onClick={changeValue} >
                    Add Vertical
                </button>
                <button onClick={updateValue}>
                    Change Value
                </button>
            </div>

        </div>
    )
}