import React, {Component} from 'react';
import { PostWrapper,Navigate,Post } from '../components';
import * as service from '../services/post';

class PostContainer extends Component {

    componentDidMount() {
        this.fetchPostInfo(1);
    }
    //arrow function으로 메소드 선언 하면 binding할 필요 없음 => transform-class-properties적용 되어 있기 때문.
    //async => 비동기 작업을 동기 작업 하듯이 코드를 작성할 수 있게 해준다.
    fetchPostInfo = async (postId) => {
        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);
        console.log(info);
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
