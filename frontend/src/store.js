import Vue from 'vue'
import Vuex from 'vuex'
import commentService from './services/CommentService.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments: [],
        currComment: null
    },
    mutations: {
        setComments(state, { comments }) {
            state.comments = comments;
        },
        setComment(state, { comment }) {
            state.currComment = comment;
        },
        addComment(state, { comment }) {
            state.comments.push(comment);
        },
    },
    getters: {
        comments(state) {
            return state.comments;
        },
        currComment(state) {
            return state.currComment;
        },
    },
    actions: {
        loadComments(context, { filterQuery }) {
            console.log(filterQuery);
            return commentService.query(filterQuery)
                .then(comments => {
                    context.commit({ type: 'setComments', comments })
                })
        },
        loadComment(context, { commentId }) {
            commentService.getById(commentId)
                .then(comment => {
                    context.commit({ type: 'setComment', comment })
                })
        },
        addComment(context, { comment }) {
            return commentService.addComment(comment)
                .then((savedComment) => {
                    context.commit({ type: 'addComment', comment: savedComment });
                })
        },
    }
})
