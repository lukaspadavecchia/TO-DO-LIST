import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim() === '') return;
        setTasks([...tasks, { text: task, completed: false }]);
        setTask('');
    };

    const handleToggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Container maxWidth="sm">
            <h1>To-Do List</h1>
            <TextField 
                fullWidth 
                variant="outlined" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a new task" 
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>
                Add
            </Button>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index}>
                        <Checkbox 
                            checked={task.completed} 
                            onChange={() => handleToggleTask(index)} 
                        />
                        <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default App;
