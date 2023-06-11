'use strict'

// Bring in model
const Post = use('App/Models/Post')

class PostController {
    async index({ view }) {
        // const posts = [
        //     {title:'Post One', body:'This is Post one'},
        //     {title:'Post Two', body:'This is Post two'},
        //     {title:'Post Three', body:'This is Post three'},
        //     {title:'Post Four', body:'This is Post four'}
        // ]

        const posts = await Post.all()

        return view.render('posts.index', {
            title: 'Latest Posts',
            posts: posts.toJSON()
        })
    }
}

module.exports = PostController
