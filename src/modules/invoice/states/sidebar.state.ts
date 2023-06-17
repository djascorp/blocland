import { atom, useAtom } from "jotai";

const layoutSearchAtom = atom('');
export const useLayoutSearch = () => {

    const [layoutSearch, setLayoutSearch] = useAtom(layoutSearchAtom);

    return {
        layoutSearch,
        layoutSearchAtom,
        setLayoutSearch
    }
}

const componentSearchAtom = atom('');
export const useComponentSearch = () => {
    const [componentSearch, setComponentSearch] = useAtom(componentSearchAtom);

    return {
        componentSearch,
        componentSearchAtom,
        setComponentSearch
    }
}