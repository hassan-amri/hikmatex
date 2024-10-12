import React from "react";
import "./WhyUs.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
function WhyUs() {
  return (
    <div className="whyUs">
      <div className="feat bg-gray pt-5 pb-5">
        <div className="container">
          <div className="section-head col-sm-12">
            <h4>
              <span>Why Choose</span> Us?
            </h4>
            <p>
              When you choose us, you'll feel the benefit of 10 years'
              experience of Web Development. Because we know the digital world
              and we know that how to handle it. With working knowledge of
              online, SEO and social media.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_one">
                  <AutorenewIcon className="mui__icon" />
                </span>
                <h6>Modern Design</h6>
                <p>
                  We use latest technology for the latest world because we know
                  the demand of peoples.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_two">
                <EmojiObjectsIcon className="mui__icon" />
                </span>
                <h6>Creative Design</h6>
                <p>
                  We are always creative and and always lisen our costomers and
                  we mix these two things and make beast design.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_three">
                <SupportAgentIcon className="mui__icon" />
                </span>
                <h6>24 x 7 User Support</h6>
                <p>
                  If our customer has any problem and any query we are always
                  happy to help then we are always happy to help then.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_four">
                <LocalShippingIcon className="mui__icon" />
                </span>
                <h6>Quick Delivery</h6>
                <p>
                  Everyone wants to live on top of the mountain, but all the
                  happiness and growth occurs while you're climbing it
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_five">
                <VerifiedUserIcon className="mui__icon" />
                </span>
                <h6>Trusted Company</h6>
                <p>
                  Holding back technology to preserve broken business models is
                  like allowing blacksmiths to veto the internal.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_six">
                <AttachMoneyIcon className="mui__icon" />
                </span>
                <h6>Affordable cost</h6>
                <p>
                  Love is a special word, and I use it only when I mean it. You
                  say the word too much and it becomes cheap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
