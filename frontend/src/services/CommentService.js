import Axios from 'axios';
var axios = Axios.create({ withCredentials: true });

export default {
    query,
    getById,
    addComment,
    getEmpty
}
var comments = [];
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/comment'
    : '//localhost:3003/comment';

function query(filterQuery = '') {
    console.log(filterQuery);
    var api = `${BASE_URL}?${filterQuery}`;
    return axios.get(api)
        .then(res => res.data)
        .then(loadedComments => {
            comments = loadedComments;
            // console.log(comments);
            return comments;
        });
}

function getById(commentId) {
    // console.log(commentId);
    var api = `${BASE_URL}/${commentId}`;
    return axios.get(api)
        .then(res => {
            // console.log(res.data);
            return res.data;
        });
}

function addComment(comment) {
    var api = `${BASE_URL}`;
    return axios.post(api, comment)
        .then(res => res.data)
        .then(addedComment => {
            console.log(addedComment);
            // comments.push(addedComment);
            return addedComment;
        });
}

function getEmpty() {
    return {
        email: '',
        text: '',
        imgUrl: ''
    }
}