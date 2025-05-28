import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import Asset from "../../components/Asset";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function PostCreateForm() {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        game: "",
        content: "",
        image: "",
    });
    const { title, game, content, image } = postData;

    const imageInput = useRef(null);
    const history = useHistory();

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const [imagePreview, setImagePreview] = useState(null); // State for image preview

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            const file = event.target.files[0];

            // Set image preview URL
            setImagePreview(URL.createObjectURL(file));

            setPostData({
                ...postData,
                image: file,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
    
        formData.append('title', title);
        formData.append('game', game);
        formData.append('content', content);
        formData.append('image', imageInput.current.files[0]);
        
        try {
            const { data } = await axios.post('/posts/', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            history.push(`/posts/${data.id}`);
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };
    

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    placeholder="Type the title of your post..."
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Game</Form.Label>
                <Form.Control
                    type="text"
                    name="game"
                    placeholder="Type the name of the game..."
                    value={game}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.game?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    placeholder="Share the story behind your post..."
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                create
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            {imagePreview ? (
                                // If image exists, show the preview using Asset
                                <img
                                    src={imagePreview}
                                    alt=""
                                    className="img-fluid mb-3"
                                    style={{ maxHeight: '200', objectFit: 'cover' }}
                                />
                            ) : (
                                // If no image, show upload icon + message via Asset
                                <Asset
                                    message="Click or tap to upload an image"
                                    spinner={false}
                                    src={null}
                                />
                            )}

                            {/* Upload Button (appears even if image is shown) */}
                            <Form.Label
                                className={`${btnStyles.uploadButton} ${btnStyles.Blue} btn mt-3`}
                                htmlFor="image-upload"
                            >
                                {image ? "Change the image" : (
                                    <div className="d-flex flex-column align-items-center">
                                        <i className="fa-solid fa-upload fa-3x mb-2"></i>
                                        Upload an image
                                    </div>
                                )}
                            </Form.Label>

                            {/* Hidden file input */}
                            <Form.Control
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                                className="d-none"
                            />
                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostCreateForm;