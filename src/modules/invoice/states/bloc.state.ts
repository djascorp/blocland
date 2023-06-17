import { useRef } from "react";
import { BlocVertical } from "../../core/domain/entities/BlocVertical";
import { IBloc } from "../../core/domain/entities/ibloc";
import { Container } from "../../core/domain/services/container";
import { Master } from "../../core/domain/services/master";
import { atom, useAtom } from "jotai";
const atomPB = atom(new BlocVertical({ name: 'VB' }));
const atomBC = atom(new Map<string, IBloc>());
const master = new Master();
const { logger } = master.init()

const atomC = atom(new Container({
    logger
}));

export const useContainer = () => {



    // const { current: parent_bloc } = useRef<BlocVertical>(new BlocVertical({ name: 'VB' }))
    // const {current : bloc_container} = useRef(new Map<string,IBloc>())

    const [parent_bloc] = useAtom(atomPB);
    const [bloc_container] = useAtom(atomBC);
    const [container] = useAtom(atomC);

    container.init({
        rootBloc: parent_bloc,
        bloc_container: bloc_container
    })

    return {
        container,
        master,
        logger,
        parent_bloc,
    }
}