import React from 'react';
import classes from './PublicationsStyle.module.css'
import ship0 from '../../../../assets/images/SectionPublications/Ship0.png'
import ship1 from '../../../../assets/images/SectionPublications/Ship1.png'
import ship2 from '../../../../assets/images/SectionPublications/Ship2.png'
import ship3 from '../../../../assets/images/SectionPublications/Ship3.png'

const PublicationsPost = ({data, subtitle, body, postIndex}) => {

    return (
        <div className={classes.post}>
            {
                postIndex === 0 ?
                    <img src={ship0} alt='PostImg'/>
                    :
                    postIndex === 1 ?
                        <img src={ship1}  alt='PostImg'/>
                        :
                        postIndex === 2 ?
                            <img src={ship2}  alt='PostImg'/>
                            :
                            <img src={ship3}  alt='PostImg'/>


            }
            <p className={classes.postData}>{data}</p>
            <p className={classes.postBody}>{body.toUpperCase()}</p>
            <p className={classes.postSubtitle}>{subtitle}</p>
        </div>
    );
};

export default PublicationsPost;