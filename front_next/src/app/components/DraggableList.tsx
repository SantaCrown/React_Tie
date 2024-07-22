// 'use client'

// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

// interface Item {
//     id: string;
//     content: string;
// }

// const DraggableList: React.FC = () => {
//     const [items, setItems] = useState<Item[]>([
//         { id: 'item1', content: 'Item 1' },
//         { id: 'item2', content: 'Item 2' },
//         { id: 'item3', content: 'Item 3' },
//         { id: 'item4', content: 'Item 4' },
//         { id: 'item5', content: 'Item 5' },
//     ]);

//     const onDragEnd = (result: DropResult) => {
//         if (!result.destination) {
//             return;
//         }

//         const newItems = Array.from(items);
//         const [reorderedItem] = newItems.splice(result.source.index, 1);
//         newItems.splice(result.destination.index, 0, reorderedItem);

//         setItems(newItems);
//     };

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable droppableId="list">
//                 {(provided) => (
//                     <ul {...provided.droppableProps} ref={provided.innerRef}>
//                         {items.map((item, index) => (
//                             <Draggable key={item.id} draggableId={item.id} index={index}>
//                                 {(provided) => (
//                                     <li
//                                         ref={provided.innerRef}
//                                         {...provided.draggableProps}
//                                         {...provided.dragHandleProps}
//                                         style={{
//                                             userSelect: 'none',
//                                             padding: 16,
//                                             margin: '0 0 8px 0',
//                                             minHeight: '50px',
//                                             backgroundColor: '#456C86',
//                                             color: 'white',
//                                             ...provided.draggableProps.style,
//                                         }}
//                                     >
//                                         {item.content}
//                                     </li>
//                                 )}
//                             </Draggable>
//                         ))}
//                         {provided.placeholder}
//                     </ul>
//                 )}
//             </Droppable>
//         </DragDropContext>
//     );
// };

// export default DraggableList;
