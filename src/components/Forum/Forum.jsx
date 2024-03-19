import "./Forum.scss";
import logo from './logo-yellow.png';


const Forum = () => {
    return(
        <div className="forum">

            <div className="forum-wrapper">


                <div className="center-top">
                    <h1>Explore our forum and get your questions answered!</h1>
                    <button>Login</button>
                </div>

                <div className="center-bottom">

                    <div className="left">
                        <h2>What is like to live in Gothenburg?</h2>
                        <img className="top-image" src="https://media-private.canva.com/g44So/MAEEV1g44So/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20240318%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240318T172052Z&X-Amz-Expires=97778&X-Amz-Signature=9639518fe06a03354b9c67d227c3e8b1b0ba94e436ce6b8e70714f601d8d3182&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2019%20Mar%202024%2020%3A30%3A30%20GMT"/>
                    </div>


                    <div className="center">
                        <h2>What is the cost of living in Stockholm?</h2>
                        <img className="middle-image" src="https://media-private.canva.com/MADFyyLSaQo/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20240318%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240318T212603Z&X-Amz-Expires=84746&X-Amz-Signature=9b9830d583e6db374678e5a4ffe0cb599a5d4aab8ec47cfce6e6a67aa6e26d17&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2019%20Mar%202024%2020%3A58%3A29%20GMT"/>
                    </div>

                    <div className="right">
                        <h2>What is the average salary in Malmö?</h2>
                        <img className="bottom-image" src="https://media-private.canva.com/3Hq4Q/MAEs0n3Hq4Q/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20240318%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240318T165724Z&X-Amz-Expires=98858&X-Amz-Signature=64a78aa28088c4f5cc8687029205054528d6c6f70dfdba231281a58c6d5e4c49&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2019%20Mar%202024%2020%3A25%3A02%20GMT"/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Forum;