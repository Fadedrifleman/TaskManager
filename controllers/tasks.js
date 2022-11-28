const Task = require('../models/task');

const getAllTasks = async(req,res) => {
    try {
        const task = await Task.find({});
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({Error: error});
    }}

const createTask = async(req,res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({Error: error.errors.name.properties.message});
    }  
}

const getTask = async(req,res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({msg: `No task found with ID: ${req.params.id}`})
        }
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({Error: error.message});
    }    
}

const updateTask = async(req,res) => {
    try {
        const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true});
        if(!task){
            return res.status(404).json({msg: `No task found with ID: ${req.params.id}`})
        }
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({Error: error});
    }
}

const deleteTask = async(req,res) => {
    try {
        const task = await Task.deleteOne({_id: req.params.id});
        if(!task){
            return res.status(404).json({msg: `No task found with ID: ${req.params.id}`})
        }
        res.status(201).send('Deleted');
    } catch (error) {
        res.status(500).json({Error: error});
    }
}


module.exports = {
    getAllTasks, 
    createTask,
    getTask,
    updateTask,
    deleteTask
};