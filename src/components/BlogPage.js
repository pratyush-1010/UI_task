import React,{useState} from 'react'
import TagSlider from '../elements/TagSlider'
import BlogCard from '../elements/BlogCard'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogPage = () => {

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [auth, setAuth] = useState('');
    const [tag, setTag] = useState('');
    const [link, setLink] = useState('');
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const [show, setShow] = useState(false);

    const [errors, setErrors] = useState({
        title: '',
        content: '',
        tag: '',
        auth: '',
        link: ''
    });

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = new Date().toLocaleDateString('en-US', options);
console.log(formattedDate);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const handleSubmit = (event) => {
      event.preventDefault();

      let newErrors = { title: '', content: '', tag: '', auth: '', link: '' };
      let isValid = true;

      if (!title) {
          newErrors.title = 'Title is required';
          isValid = false;
      }
      if (!content) {
          newErrors.content = 'Content is required';
          isValid = false;
      }
      if (!tag) {
          newErrors.tag = 'Tag is required';
          isValid = false;
      }
      if (!auth) {
          newErrors.auth = 'Author name is required';
          isValid = false;
      }
      if (!link) {
          newErrors.link = 'Image link is required';
          isValid = false;
      }

      setErrors(newErrors);

      if (isValid) {

      const newPost = { title,content,tag,auth,link};

      setPosts([...posts, newPost]);
    
      setTitle('');
      setContent('');
      setAuth('');
      setTag('');
      setLink('');


      handleClose();
    }
}
    

    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };
    return (
<>
    <TagSlider/>

    <div className='longblog'>
      <div className='container-fluid'>
            <div className='row p-5'>
                <div className='col-lg-6'>  
                     <p className='longtitle'>Title of a longer featured blog post</p>
                     <p className='longdes'>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                     <p className='longref'>Continue reading...</p>
                </div>
            </div>
        </div>
    </div>
    <div className='mx-5'>
        <div className='row g-5 py-5'>
            <div className='col-lg-6'>
                <BlogCard 
                tag={'World'}
                tagcolor={'blogtag'}
                title={'Featured Post'}
                content={'This is a wider card with supporting text below as a natural lead-in to additional content'}
                date={'Nov 12, 2023'}
                img={'https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?t=st=1725113067~exp=1725116667~hmac=c3fedfa2bd6304603f72303de1c38272d02fa05f6d73c2916053945d902d1a71&w=1060'}
                />
            </div>
            <div className='col-lg-6'>
                <BlogCard
                tag={'Design'}
                tagcolor={`blogtag2`}
                title={'Post title'}
                content={'This is a wider card with supporting text below as a natural lead-in to additional content'}
                date={'Nov 11, 2023'}
                img={'https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg?t=st=1725114760~exp=1725118360~hmac=6808b9f181a9779015390a9bf1d883d5438532f19848250daab3d97d97b2a749&w=996'}
                />
            </div>
            {
                posts.map((ele,ind)=>{
                    return(
                        <div className='col-lg-6'>
                            <BlogCard
                            tag={ele.tag}
                            tagcolor={`blogtag${randomNumber}`}
                            title={ele.title}
                            content={ele.content}
                            date={formattedDate}
                            img={ele.link}
                            />
                        </div>
                    )
                })
            }
        </div>
    </div>
    <div className='mx-5'>
        <div className='row'>
            <div className='col-lg-8'>
                <div>
                    <h3 className='itext text-start'>From the Firehoes</h3>
                    <hr></hr>
                    <h1 className='playfair'>Sample Blog Post</h1>
                    <p className='blogdate'> 1 January, 2024 by <span className='bluetext'>Mark</span></p>
                </div>
                <div>
                    <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <hr></hr>
                    <p >
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <span className='bluetext'>quis nostrud exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>

                    <p >
                     et dolore magna aliqua. Ut enim ad minim veniam, <span className='fw-bold'>quis nostrud exercitation ullamco</span> laboris nisi ut aliquip, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>

                    <p >
                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <h2 className='playfair'>Heading</h2>
                    <p >
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <h3 className='playfair'>Sub-Heading</h3>
                    <p >
                    quis nostrud exercitation ullamco laboris nisi ut aliquip, consectetur adipiscing elit.
                    </p>
                    <p>
                    ullamco laboris nisi ut aliquip.
                    </p>
                    <p>
                     exercitation ullamco laboris nisi ut aliquip, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Sed do eiusmod.
                    </p>
                    <h3 className='playfair'>Sub-Heading</h3>
                    <p >
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <ul>
                        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
                        <li>Ostrud exercitation ullamco laboris nisi ut aliquip</li>
                        <li>Exercitation ullamco laboris nisi ut aliquip</li>
                    </ul>
                    <p>
                    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ol>
                        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
                        <li>Ostrud exercitation ullamco laboris nisi ut aliquip</li>
                        <li>Exercitation ullamco laboris nisi ut aliquip</li>
                    </ol>
                    <p>
                    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                    <br></br>
                <div>
                    <h1 className='playfair'>Another Blog Post</h1>
                    <p className='blogdate'> 23 December, 2023 by <span className='bluetext'>Jacob</span></p>
                    <p>
                     Labore et dolore magna aliqua. Ut enim ad minim veniam, <span className='bluetext'>quis nostrud exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <p>
                    Ut enim ad minim veniam, et Ut enim ad minim veniam, <span className='fw-bold'>quis nostrud exercitation ullamco</span> laboris nisi ut aliquip, consectetur adipiscing elit ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <p>
                    Ad minim veniam, et Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, consectetur adipiscing elit ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <p >
                     Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>
                <br></br>
                <div>
                    <h1 className='playfair'>New Features</h1>
                    <p className='blogdate'> 14 December, 2023 by <span className='bluetext'>Chris</span></p>
                    <p>
                     Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <ul>
                        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
                        <li>Ostrud exercitation ullamco laboris nisi ut aliquip</li>
                        <li>Exercitation ullamco laboris nisi ut aliquip</li>
                    </ul>
                    <p>
                    Ut enim ad minim veniam, et Ut enim ad minim veniam, quis nostrud exercitation ullamco <em>laboris nisi ut aliquip,consectetur adipiscing elit</em> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                     <p>
                    exercitation ullamco laboris nisi ut aliquip, consectetur adipiscing elit ut labore et dolore magna aliqua.
                    </p>
             
                </div>

                {
                    posts.map((ele,ind)=>{
                        return(
                            <>
                            <div>
                                <h1 className='playfair'>{ele.title}</h1>
                                <p className='blogdate'> {formattedDate} by <span className='bluetext'>{ele.auth}</span></p>
                                <p dangerouslySetInnerHTML={{__html:ele.content}}>
                                    
                                </p>
                            </div>
                            <br></br>
                            </>
                        )
                    })
                }
        
               


            </div>
            <div className='col-lg-4'>
                <div className='bg-light p-3'>
                    <h4 className='itext itextm'>About</h4>
                    <p className='itextm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <br></br>
                <div className='linkdiv'>
                    <h4 className='itext itextm mb-2'>Archives</h4>
                    <ul style={{listStyle:"none"}} className='p-0 itextm'>
                        <li className='bluetext'>January 2024</li>
                        <li className='bluetext'>February 2024</li>
                        <li className='bluetext'>March 2024</li>
                        <li className='bluetext'>April 2024</li>
                        <li className='bluetext'>May 2024</li>
                        <li className='bluetext'>June 2024</li>
                        <li className='bluetext'>July 2024</li>
                        <li className='bluetext'>August 2024</li>
                        <li className='bluetext'>January 2023</li>
                        <li className='bluetext'>February 2023</li>
                        <li className='bluetext'>March 2023</li>
                        <li className='bluetext'>July 2023</li>
                    </ul>
                </div>
                <br></br>
                <div className='linkdiv'>
                    <h4 className='itext mb-2 itextm'>Elsewhere</h4>
                    <ul style={{listStyle:"none"}} className='p-0 itextm'>
                        <li className='bluetext'>Github</li>
                        <li className='bluetext'>Twitter</li>
                        <li className='bluetext'>Facebook</li>
                    </ul>
                </div>
            </div>
            <div className='butts'>
                    <button className='rounded-pill btn btn-outline-primary px-3 mx-2'>Older</button>
                    <button className='rounded-pill btn btn-outline-secondary px-3'>Newer</button>
            </div>
        </div>
    </div>

    <Button variant="primary" onClick={handleShow} className='my-5'>
        Add New Blog
      </Button>

      <Modal show={show} centered size="lg" onHide={handleClose}>
          <h3 className='text-center my-2'>Add New Blog</h3>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <label className='form-label'>Blog Title</label>
                <input type="text" className='form-control'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                ></input>
                {errors.title && <div className='text-danger'>{errors.title}</div>}

                <label className='form-label'>Blog Content</label>
                <ReactQuill theme="snow" value={content} onChange={handleEditorChange} />
                {errors.content && <div className='text-danger'>{errors.content}</div>}
                
                <label className='form-label'>Blog Tag</label>
                <input type="text" className='form-control'
                onChange={(e) => setTag(e.target.value)}
                value={tag}
                ></input>
                {errors.tag && <div className='text-danger'>{errors.tag}</div>}

                <label className='form-label'>Author Name</label>
                <input type="text" className='form-control'
                onChange={(e) => setAuth(e.target.value)}
                value={auth}
                ></input>
                {errors.auth && <div className='text-danger'>{errors.auth}</div>}

                <label className='form-label'>Blog Image Link</label>
                <input type="text" className='form-control'
                onChange={(e) => setLink(e.target.value)}
                value={link}
                ></input>
                {errors.link && <div className='text-danger'>{errors.link}</div>}

                <div className='d-flex justify-content-center my-3'>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </div>
            </form>
        </Modal.Body>
       
      </Modal>
</>
  )
}

export default BlogPage