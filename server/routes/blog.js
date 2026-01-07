import express from 'express';

const router = express.Router();

// In-memory blog storage (replace with database in production)
let blogs = [
    {
        id: 1,
        title: 'The Future of Web Development in 2025',
        slug: 'future-of-web-development-2025',
        excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
        content: `<p>The web development landscape is evolving rapidly. From AI-powered development tools to the rise of WebAssembly, here's what you need to know about the future of web development.</p>
    <h2>Key Trends</h2>
    <ul>
      <li>AI-Assisted Development</li>
      <li>Edge Computing</li>
      <li>Progressive Web Apps</li>
      <li>WebAssembly Adoption</li>
    </ul>`,
        author: 'WESELLIT Team',
        image: '/images/blog/web-development.jpg',
        category: 'Web Development',
        date: '2025-12-15',
        readTime: '5 min'
    },
    {
        id: 2,
        title: 'Why Your Business Needs a Mobile App',
        slug: 'why-business-needs-mobile-app',
        excerpt: 'Discover how a mobile app can transform your business and reach more customers.',
        content: `<p>In today's mobile-first world, having a mobile app is no longer optional for businesses looking to stay competitive.</p>
    <h2>Benefits of Mobile Apps</h2>
    <ul>
      <li>Increased Customer Engagement</li>
      <li>Brand Recognition</li>
      <li>Direct Marketing Channel</li>
      <li>Competitive Advantage</li>
    </ul>`,
        author: 'WESELLIT Team',
        image: '/images/blog/mobile-app.jpg',
        category: 'Mobile Development',
        date: '2025-12-10',
        readTime: '4 min'
    },
    {
        id: 3,
        title: 'Cloud Solutions: A Complete Guide',
        slug: 'cloud-solutions-complete-guide',
        excerpt: 'Everything you need to know about migrating your business to the cloud.',
        content: `<p>Cloud computing has revolutionized how businesses operate. Learn about the different cloud solutions available and how to choose the right one for your needs.</p>
    <h2>Types of Cloud Services</h2>
    <ul>
      <li>Infrastructure as a Service (IaaS)</li>
      <li>Platform as a Service (PaaS)</li>
      <li>Software as a Service (SaaS)</li>
    </ul>`,
        author: 'WESELLIT Team',
        image: '/images/blog/cloud-solutions.jpg',
        category: 'Cloud',
        date: '2025-12-05',
        readTime: '6 min'
    }
];

// GET /api/blogs - Get all blogs
router.get('/', (req, res) => {
    const { category, limit } = req.query;
    let result = [...blogs];

    if (category) {
        result = result.filter(blog =>
            blog.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (limit) {
        result = result.slice(0, parseInt(limit));
    }

    res.json({
        success: true,
        data: result
    });
});

// GET /api/blogs/:id - Get single blog
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const blog = blogs.find(b => b.id === parseInt(id) || b.slug === id);

    if (!blog) {
        return res.status(404).json({
            success: false,
            message: 'Blog post not found'
        });
    }

    res.json({
        success: true,
        data: blog
    });
});

// POST /api/blogs - Create blog (Admin)
router.post('/', (req, res) => {
    const { title, excerpt, content, author, image, category } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: 'Title and content are required'
        });
    }

    const newBlog = {
        id: blogs.length + 1,
        title,
        slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
        excerpt: excerpt || content.substring(0, 150) + '...',
        content,
        author: author || 'WESELLIT Team',
        image: image || '/images/blog/default.jpg',
        category: category || 'General',
        date: new Date().toISOString().split('T')[0],
        readTime: `${Math.ceil(content.split(' ').length / 200)} min`
    };

    blogs.push(newBlog);

    res.status(201).json({
        success: true,
        data: newBlog
    });
});

// PUT /api/blogs/:id - Update blog (Admin)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const blogIndex = blogs.findIndex(b => b.id === parseInt(id));

    if (blogIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Blog post not found'
        });
    }

    blogs[blogIndex] = { ...blogs[blogIndex], ...req.body };

    res.json({
        success: true,
        data: blogs[blogIndex]
    });
});

// DELETE /api/blogs/:id - Delete blog (Admin)
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const blogIndex = blogs.findIndex(b => b.id === parseInt(id));

    if (blogIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Blog post not found'
        });
    }

    blogs.splice(blogIndex, 1);

    res.json({
        success: true,
        message: 'Blog post deleted successfully'
    });
});

export default router;
