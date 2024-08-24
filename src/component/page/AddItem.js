import React from 'react';

import { Button, Form } from 'react-bootstrap';
import PageContent  from '../Atom/PageContent';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.title.value, e);
    }

    return (
       <PageContent>
           <Form  onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>제목</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="제목을 입력하세요"
                        name="title"
                        // value={newPost.title}
                        // onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>내용</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="내용을 입력하세요"
                        name="content"
                        // value={newPost.content}
                        // onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>작성자</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="작성자 이름을 입력하세요"
                        name="author"
                        // value={newPost.author}
                        // onChange={handleChange}
                    />
                </Form.Group>
                <div style={{margin: '20px'}}>
                    <Button variant="primary" type='submit'>
                        저장
                    </Button>
                    <Button variant="secondary" onClick={()=>navigate(-1)}>
                        닫기
                    </Button>
                </div>
            </Form>
               
           
            

       </PageContent>
                   
               
    )
}

export default AddItem;