import Post from "../models/Post"

export class PostController {
    static addPost(req, res, next) {
        const userId = req.user._id
        const content = req.body.content
        const post = new Post({
            user_id: userId,
            content: content,
            created_at: new Date(),
            updated_at: new Date()
        })
        post.save().then((post) => {
            res.send(post)
        }).catch(err => {
            next(err)
        })
    }
    
    static async getPostbyUser(req, res, next) {
        const userId = req.user._id
        const page = parseInt(req.query.page) || 1
        const perPage = 2
        let currentpage = page 
        let prevPage = page === 1 ? null : page - 1
        let pagetoken = page + 1
        let totalpages;
        try {
            const postCount = await Post.countDocuments({ user_id: userId })
            totalpages = Math.ceil(postCount / perPage)
            if (totalpages === page || totalpages === 0) {
                pagetoken = null
            }

            if (page > totalpages) {
                throw new Error('No more post to show')
            }

            const posts = await Post.find({ user_id: userId }).populate('comments').skip((perPage * page)-perPage).limit(perPage);
            res.json({
                post: posts,
                pagetoken: pagetoken,
                totalpages: totalpages,
                currentpage: currentpage,
                prevPage: prevPage
            })
        } catch (e) {
            next(e)
        }
    }

    static async getAllPosts(req, res, next) {
        const page = parseInt(req.query.page) || 1
        const perPage = 2
        let currentpage = page
        let prevPage = page === 1 ? null : page - 1
        let pagetoken = page + 1
        let totalpages;
        try {
            const postCount = await Post.estimatedDocumentCount({})
            totalpages = Math.ceil(postCount / perPage)
            if (totalpages === page || totalpages === 0) {
                pagetoken = null
            }

            if (page > totalpages) {
                throw new Error('No more post to show')
            }

            const posts = await Post.find({ }).populate('comments').skip((perPage * page) - perPage).limit(perPage);
            res.json({
                post: posts,
                pagetoken: pagetoken,
                totalpages: totalpages,
                currentpage: currentpage,
                prevPage: prevPage
            })
        } catch (e) {
            next(e)
        }
    }

    static async getPostById(req, res, next) {
        res.json({
            post : req.post,
            comment_cout: req.post.commentCount
        })
    }

    static async editPost(req, res, next) {
        const content = req.body.content
        const postId = req.params.id
        try {
            const updatedPost = await Post.findOneAndUpdate({ _id: postId }, { content: content, updated_at: new Date() }, { new: true }).populate('comments')
            if (updatedPost) {
                res.send(updatedPost)
            } else {
                throw new Error('Post does not exist')
            }
        } catch (e) {
            next(e)
        }
    }

    static async deletePost(req, res, next) {
        const post = req.post
        try {
            await post.remove()
            res.send(post)
        } catch (err) {
            next(err)
        }
    }
}