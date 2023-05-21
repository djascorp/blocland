import { useRef } from "react";
import { BlocVertical } from "../../core/domain/entities/BlocVertical";
import { IBloc } from "../../core/domain/entities/ibloc";
import { Container } from "../../core/domain/services/container";
import { Master } from "../../core/domain/services/master";

export const useContainer = () => {
    const { current: parent_bloc } = useRef<BlocVertical>(new BlocVertical({ name: 'VB' }))
    const {current : bloc_container} = useRef(new Map<string,IBloc>())
    const master = new Master();
    const { logger } = master.init()
    const { current: container } = useRef<Container>(new Container({
        logger
    }));
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