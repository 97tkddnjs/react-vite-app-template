import React from 'react';

import { Button, Form } from 'react-bootstrap';
import PageContent  from '../Atom/PageContent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createQuestion, resetCreateData, setData } from '../../store/question/Action';
import { useEffect } from 'react';
// import { getQuestionForm } from '../../store/question/Action';

const AddItem = () => {
    
    const questionFormData = useSelector((state)=>state.question);
    const dispatch = useDispatch();


    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        dispatch(createQuestion(questionFormData.getIn(['data'])))

        dispatch(resetCreateData())
        navigate('/')
    }
    const handleChange = (e) => {   
    
        const { name, value } = e.target;

        dispatch(setData(['data', name], value));
        
    }

    useEffect(()=>{
        
    },[])

    return (
       <PageContent>
           <Form  onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>제목</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="제목을 입력하세요"
                        name="title"
                        value={questionFormData.getIn(['data', 'title'])}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>내용</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="내용을 입력하세요"
                        name="content"
                        value={questionFormData.getIn(['data', 'content'])}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>작성자</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="작성자 이름을 입력하세요"
                        value={questionFormData.getIn(['data', 'writer'])}
                        name="writer"
                        onChange={handleChange}
                        
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