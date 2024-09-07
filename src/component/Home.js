import React,  { useState }  from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import DataTable from './Atom/Table'
import PageContent from './Atom/PageContent';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getQuestionList } from '../store/question/Action';
import { useDispatch } from 'react-redux';

const Home = () => {

  
    const [showReadOnly, setShowReadOnly] = useState(false);
    const [questionData, setQuestionData] = useState([]);

    const [selectedPost, setSelectedPost] = useState(null);
    
    const resourcData = useSelector(state => state.question.get('datasources'));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    

    const handleReadOnlyClose = () => setShowReadOnly(false);
    
    const handleReadOnlyShow = (post) => {
        setSelectedPost(post);
        setShowReadOnly(true);
    };
    useEffect(() => {

        dispatch(getQuestionList());
    }, [])
   
    useEffect(()=>{
        if(resourcData){
            // console.log('asdfsfas',resourcData)
            setQuestionData(resourcData)
        }
    },[resourcData])

    const columns = [ { key: 1 , title : '#'}, {key: 2 , title : '제목'},{key: 3 , title : '작성자'}, {key: 4 , title :'날짜'}]

    return (
       <PageContent>
            
            <Button variant="primary" onClick={()=> navigate('/addItem')}>
                글 쓰기
            </Button>

            <DataTable columns={columns} datasource={questionData} onClick={handleReadOnlyShow}></DataTable>

            

            {selectedPost && (
                <Modal show={showReadOnly} onHide={handleReadOnlyClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>글 보기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>{selectedPost.title}</h5>
                        <p>{selectedPost.content}</p>
                        <p><strong>작성자:</strong> {selectedPost.author}</p>
                        <p><strong>날짜:</strong> {selectedPost.date}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleReadOnlyClose}>
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        
        </PageContent>
    );
}

export default Home;