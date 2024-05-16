import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Profile.scss";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ImageSelector from "../../components/ImageSelector/ImageSelector";
import axios from "axios";
import {useLogin} from "../../hooks/useLogin";
import {useLogout} from "../../hooks/useLogout";
import {useUpdate} from "../../hooks/useUpdate";

const Profile = () => {


    const { user, updateUser } = useAuthContext();
    const [selectedImage, setSelectedImage] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const { update } = useUpdate();


    const handleImageSelect = async (image) => {
        const requestBody = {
            userId: user.id,
            profilePicture: image,
        };

        try {
            const response = await axios.put("https://forumuserservice.onrender.com/user/updateProfilePicture", requestBody);
            await axios.put("https://forumservice.onrender.com/forum/updateProfilePicture", requestBody);

            if (response.status === 200) {
                await update(user.id);
                window.location.href = '/forum';

                //console.log(user);

            } else {

            }
        } catch (error) {

        } finally {
            setOpenDialog(false);
        }
    };



    const predeterminedImages = [
        "https://i.ebayimg.com/images/g/lMcAAOSwdFRjIReh/s-l1200.webp",
        "https://outofhome.se/media/catalog/product/cache/30/image/17f82f742ffe127f42dca9de82fb58b1/1/8/1819_bulle.jpg",
        "https://2.bp.blogspot.com/_TLNCcju9Yyw/THanGTnEBdI/AAAAAAAABcM/4VUt5EAc0EI/w1200-h630-p-k-no-nu/600px-Flygvapnet_roundel.svg.png",
        "https://mooseland.se/wp-content/uploads/2021/09/94D48D974D875DF21C535FA134715FA29F48336C.jpeg",
        "https://www.swedishgifts.se/cdn/shop/products/53170_grande.jpg?v=1588598094",
    ];



    return (
        <>
            <div className="profile">
                <h1>Profile</h1>
                <img src={user.profilePic} alt="Profile Picture" />
                <button onClick={() => setOpenDialog(true)}>Change picture</button>
                <p><span>Name:</span> {user.username}</p>
                <p><span>Email:</span> {user.email}</p>
            </div>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogContent>
                    {/* Render the ImageSelector component */}
                    <ImageSelector predeterminedImages={predeterminedImages} handleImageSelect={handleImageSelect} />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Profile;
