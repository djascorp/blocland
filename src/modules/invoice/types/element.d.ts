export interface ElementITemProps {
    icon: string,
    name: string,
    type: string,
    factory: Factory | null,
}
export interface DropResult{
    target: string,
    container: Container
}