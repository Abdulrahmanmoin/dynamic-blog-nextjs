export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'previewText',
        type: 'string',
        title: 'Preview Text/Summary of Blog Content'
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        name: 'mainImage', // Name of the field
        type: 'image', // Field type
        title: 'Main Image', // Label for the field
        options: {
          hotspot: true, // Enables cropping and focus point selection
        }
      }
    ]
  };
  