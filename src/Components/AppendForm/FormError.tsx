import React, {FC} from 'react';

const FormError: FC<{reason: string}> = ({ reason }) => {
    return (
        <div className='form-error'>
            {reason}
        </div>
    );
};

export default FormError;