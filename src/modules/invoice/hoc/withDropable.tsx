// import { useDrop } from "react-dnd";
// import { useContainer } from "../states/bloc.state";
// import React from "react";


// export const withDropable = (DropableComponent: string) =>  (props) => {
//     const {container} = useContainer();

//     const [{ canDrop, isOver }, drop] = useDrop(() => ({
//         accept: 'LAYOUT',
//         drop: (item,monitor) => {

//           const didDrop = monitor.didDrop();
//           console.log("DROP FROM CONTAINER",didDrop);
//           if(didDrop){
//             return
//           }
//           return { target: 'CANEVAS' , container, parent: container.rootBloc};
//         },
//         collect: (monitor) => ({
//           isOver: monitor.isOver(),
//           canDrop: monitor.canDrop(),
//         }),
//       }));

//     return (
//        <>
//         {React.createElement(DropableComponent,{key: drop} ,props)}
//        </>
//     )
// }
// // 

export const withDropable = '';