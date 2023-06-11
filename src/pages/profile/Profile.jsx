import { Link } from "react-router-dom";
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/posts/Posts'
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/15258476/pexels-photo-15258476/free-photo-of-evler-ev-pencereler-pencere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/17147165/pexels-photo-17147165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <Link to="http://facebook.com" target="_blank" className="leftSocialMedia">
              <FacebookTwoToneIcon fontSize="large" />
            </Link>
            <Link to="http://instagram.com" target="_blank" className="leftSocialMedia">
              <InstagramIcon fontSize="large" />
            </Link>
            <Link to="http://twitter.com" target="_blank" className="leftSocialMedia">
              <TwitterIcon fontSize="large" />
            </Link>
            <Link to="http://linkedin.com" target="_blank" className="leftSocialMedia">
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link to="http://pinterest.com" target="_blank" className="leftSocialMedia">
              <PinterestIcon fontSize="large" />
            </Link>
          </div>
          <div className="center">
            <span>Batuhan Sevinç</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Turkey</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>KukaSocial</span>
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  );
};

export default Profile;
