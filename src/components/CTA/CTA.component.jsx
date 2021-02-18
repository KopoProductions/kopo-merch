import React from 'react';

import './CTA.styles.scss';

const CTA = ({ onClick, children, hover, expandable, small, instagram, addToCart,  ...otherProps }) => (
    <section onClick={onClick} className={`CTA ${addToCart ? 'CTAaddToCart' : ''} ${instagram ? 'CTAInstagram' : ''} ${hover ? 'CTAHover' : ''} ${expandable ? 'CTAExpandable' : ''} ${small ? 'CTASmall' : ''}` } {...otherProps} >
        {children}
    </section>
)

export default CTA