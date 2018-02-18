import React, {Component} from 'react';
import { PostWrapper,Navigate,Post } from '../components';
import * as service from '../services/post';

class PostContainer extends Component {

  fetchPostInfo = async (postId) => {   //arrow function으로 메소드 선언 하면 binding할 필요 없음
    const post = await service.getPost(postId);
    console.log(post);
    const comments = await service.getComments(postId);
    console.log(comments);
}

    render() {
        return (
            <PostWrapper>
                <Navigate/>
                <Post/>
            </PostWrapper>
        );
    }
}

export default PostContainer;
