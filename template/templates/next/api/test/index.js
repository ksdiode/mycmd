import createHandler from '../middleware';
import Model from '../models/Model';

const app = createHandler();

app.get(async (req, res) => {
  try {
    const result = await Model.find();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.get('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Model.findById(_id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.post(async (req, res) => {
  try {
    const model = new Model(req.body);
    await model.save();
    return res.status(200).json(model);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.put('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Model.findByIdAndUpdate(_id, req.body, { new: true });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Model.findByIdAndDelete(_id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default app;
