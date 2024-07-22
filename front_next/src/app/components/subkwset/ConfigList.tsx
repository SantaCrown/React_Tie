'use client'

import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Config from "./Config";

const ConfigList = () => {
    const [configs, setConfigs] = useState([
        { id: "config1", content: "" },
        { id: "config2", content: "" },
        { id: "config3", content: "" },
        { id: "config4", content: "" },
        { id: "config5", content: "" },
        { id: "config6", content: "" },
        { id: "config7", content: "" },
    ]);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(configs);
        console.log(items);
        
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setConfigs(items);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="configs">
                {(provided) => (
                    <table {...provided.droppableProps} ref={provided.innerRef}>
                        <tbody>
                            {configs.map((config, index) => (
                                <Draggable key={config.id} draggableId={config.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="w-full"
                                        >
                                            <Config />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </tbody>
                    </table>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default ConfigList;
