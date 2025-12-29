import { createClient } from 'contentful';

const client = createClient({
  space: 'ap2ugth218pu',
  accessToken: '0fGbAwOUgZKzv85CX5HOqkekbm0YZUYIHeuYRwEmDbg',
});

export const getParfumes = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'parfumes',
    });
    
    return response.items.map(item => ({
      id: item.sys.id,
      name: item.fields.name,
      description: item.fields.description.content[0].content[0].value,
      price: item.fields.price,
      category: item.fields.category,
      image: item.fields.image,
      featured: item.fields.featured || false,
    }));
  } catch (error) {
    console.error('Error fetching parfumes:', error);
    return [];
  }
};

export default client;