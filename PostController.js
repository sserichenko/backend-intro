import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            res.status(200).json(post);
          } catch (error) {
            console.log('error >>> ', error);
            res.status(500).json(error.message)
          }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            res.status(200).json(posts);
        } catch (error) {
            console.log('error >>> ', error);
            res.status(500).json(error.message)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            res.status(200).json(post)
            
        } catch (error) {
            console.log('error >>> ', error);
            res.status(500).json(error.message)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        } catch (error) {
            console.log('error >>> ', error);
            res.status(500).json(error.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (error) {
            console.log('error >>> ', error);
            res.status(500).json(error.message)
        }
    }

    
}

export default new PostController();