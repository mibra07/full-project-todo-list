// CONTROLLERS (BUSINESS LOGIC)

const Todo = require('../models/Todo.model');
console.log('Todo Schema added...');

// Create Todo (POST)

exports.createTodo = async (req, res) => {
  try {
    console.log('Creating Todo...');
    console.log('Request Body:', req.body);
    const todo = await Todo.create(req.body);
    console.log('Todo Cteated:', todo);
    res.status(201).json(todo);
  } catch (error) {
    console.error('Create Todo Error:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get All Todos (GET)

exports.getTodos = async (req, res) => {
  try {
    console.log('Fetching Todos...');
    const todo = await Todo.find();
    console.log(`${todo.length} Todos Found ...`);
    res.json(todo);
  } catch (error) {
    console.error('Fetched Error', error.message);
    res.status(500).json({ error: error.message });
  }
};

// PAGINATION & FILTERS (REAL API STYLE)

// exports.getTodos = async (req, res, next) => {
//   try {
//     console.log('📤 Fetching Todos with pagination');

//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const completed = req.query.completed;

//     const filter = {};
//     if (completed !== undefined) {
//       filter.completed = completed === 'true';
//     }

//     const todos = await Todo.find(filter)
//       .skip((page - 1) * limit)
//       .limit(limit);

//     const total = await Todo.countDocuments(filter);

//     res.json({
//       page,
//       limit,
//       total,
//       results: todos,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// Update Todo (PUT)

exports.updateTodo = async (req, res) => {
  try {
    console.log('Updating Todo:', req.params.id);
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log('Updated Todo:', todo);
    res.json(todo);
  } catch (error) {
    console.error('Update Error:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete Todo (DELETE)

exports.deleteTodo = async (req, res) => {
  try {
    console.log('Deleting Todo:', req.params.id);
    await Todo.findByIdAndDelete(req.params.id);
    console.log('Deleted Todo');
    res.status(200).json({ message: 'Todo Deleted' });
  } catch (error) {
    console.error('Delete Error:', error.message);
    res.status(500).json({ error: error.message });
  }
};
