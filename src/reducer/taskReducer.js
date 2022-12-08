const taskReducer = (taskList, action) => {
    switch(action.type) {
        case 'ADD' : {
            return(
                [
                    ...taskList,
                    action.payload
                ]
            )
        }
        case 'UPDATE' : {
            return(
                taskList = taskList.map(task => {
                    if(task.id === action.payload.id) {
                        task.title = action.payload.title;
                    }
                    return task
                })
            );
        }
        case 'DELETE' : {
            return(
                taskList = taskList.filter(task => task.id !== action.payload)
            )
        }
        case 'COMPLETE' : {
            return(
                taskList = taskList.map(task => {
                    if(task.id === action.payload.id) {
                        task.isComplete = action.payload.isComplete
                    }
                    return task
                })
            )
        }
        default: {
            return taskList
        }
    }
};

export { taskReducer };