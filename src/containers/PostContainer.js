import React, {Component} from 'react';
import { PostWrapper,Navigate,Post } from '../components';
import * as service from '../services/post';

class PostContainer extends Component {

    constructor(props) {
        super();
        this.state = {
            postId: 1,
            fetching: false, //요청을 기다리고 있는지?
            post: {
                title: null,
                body: null
            },
            comments: []
        };
    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }
    //arrow function으로 메소드 선언 하면 binding할 필요 없음 => transform-class-properties적용 되어 있기 때문.
    //async => 비동기 작업을 동기 작업 하듯이 코드를 작성할 수 있게 해준다.
    fetchPostInfo = async (postId) => {
        this.setState({
            fetching: true
        });

        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);
        
        const {title, body} = info[0].data;                      
        const comments = info[1].data;

        this.setState({
            postId,
            post: {
                title, 
                body
            },
            comments,
            fetching: false
        });


    }

    render() {
        const {postId, fetching, post, comments} = this.state;

        return (
            <PostWrapper>
                <Navigate
                    postId={postId}
                    disabled={fetching}
                />
                <Post
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;
