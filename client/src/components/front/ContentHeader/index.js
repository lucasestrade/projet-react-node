import React from 'react';
import Title from '../Title';

function ContentHeader({ children }){

    return(
        <div className="content-header">
            <Title>
                {children}
            </Title>
        </div>

    )

}

export default ContentHeader;