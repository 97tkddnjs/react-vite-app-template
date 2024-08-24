import React,  { useState }  from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import DataTable from './Atom/Table'
import PageContent from './Atom/PageContent';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [show, setShow] = useState(false);
    const [showReadOnly, setShowReadOnly] = useState(false);
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });
    const [selectedPost, setSelectedPost] = useState(null);


    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleReadOnlyClose = () => setShowReadOnly(false);
    
    const handleReadOnlyShow = (post) => {
        setSelectedPost(post);
        setShowReadOnly(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setPosts((prev) => [...prev, { ...newPost, date: new Date().toLocaleString(), id: prev.length + 1 }]);
        setNewPost({ title: '', content: '', author: '' });
        handleClose();
    };

    const columns = [ { key: 1 , title : '#'}, {key: 2 , title : '제목'},{key: 3 , title : '작성자'}, {key: 4 , title :'날짜'}]

    return (
       <PageContent>
            
            <Button variant="primary" onClick={()=> navigate('/addItem')}>
                글 쓰기
            </Button>

            <DataTable columns={columns} datasource={posts} onClick={handleReadOnlyShow}></DataTable>

            

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