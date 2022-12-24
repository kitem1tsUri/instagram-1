const fs = require('fs')

exports.getPosts = async (req, res) => {
    const rawData = fs.readFileSync('posts.json');
    let postsRaw = JSON.parse(rawData);

    res.status('200').json(postsRaw.data)
}

exports.createPost = (req, res) => {
    const { title, message } = req.body

    const rawData = fs.readFileSync('posts.json');
    let postsRaw = JSON.parse(rawData);
    let posts = postsRaw.data

    posts.push({
        id: posts.length + 1 + '',
        title: title,
        message: message
    })

    const newData = { data: posts }

    fs.writeFileSync('posts.json', JSON.stringify(newData));

    res.status('200').json(posts)
}

exports.getPost = (req, res) => {
    const { id } = req.params;
    const post = posts.filter(cur => cur.id === id);

    if (post.length === 0)
        res.status(400).json({ message: 'post not found' });
    else
        res.status(200).json(post[0]);
}

exports.deletePost = (req, res) => {
    const { id } = req.params;
    const otherPost = posts.filter(cur => cur.id !== id);

    posts = otherPost;

    res.status(200).json(posts);
}

exports.updatePost = (req, res) => {
    const { id } = req.params;
    const { title, message } = req.body

    const post = posts.filter(cur => cur.id === id);

    if (post.length === 0)
        res.status(400).json({ message: 'post not found' });

    const otherPost = posts.filter(cur => cur.id !== id);

    const result = [...otherPost, { ...post[0], title, message }]

    posts = result;

    res.status(200).json(result);
}