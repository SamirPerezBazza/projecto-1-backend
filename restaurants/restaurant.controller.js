import Restaurants from './restaurant.model';
import { Types } from 'mongoose';

export const createRestaurant = async (req, res) => {
  try {
    const { name, address, category } = req.body;

    const restaurant = await Restaurants.create({ name, address, category, rating: 0 });
    res.status(200).json({ data: restaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurants.findById(id);

    if (restaurant) return res.status(200).json(restaurant);

    return res.status(404).json({ message: 'Restaurant not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRestaurants = async (req, res) => {
  try {
    const { names, categories } = req.query;
    // const objectIds = ids.map((i) => ObjectId(i));
    //const objectIds = ids.map((id) => new Types.ObjectId(id));
    const restaurant = await Restaurants.find({
      $and: [
        {
          $or: [
            {
              name: {
                $in: names,
              },
            },
            {
              category: {
                $in: categories,
              },
            },
          ],
        },
        {
          enabled: true,
        },
      ],
    });

    if (restaurant) return res.status(200).json(restaurant);

    return res.status(404).json({ message: 'Restaurant not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRestaurant = async (req, res) => {};

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurants.findByIdAndUpdate(id, { enabled: false });

    return res.status(200).json({ message: 'Restaurant deleted' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
