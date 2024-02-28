import PropTypes from 'prop-types';
import Arrow from '@mui/icons-material/ArrowForward';

const Breadcrum = (props) => {
    const { product } = props;

    Breadcrum.propTypes = {
        product: PropTypes.object.isRequired,
            category: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
    };

    return (
        <div className='flex flex-row space-x-2 w-auto h-auto bg-red-500'>
            <p className='text-black'>Home <Arrow className='text-black text-[18]'/> </p>
            <p className='text-black'>SHOP <Arrow  className='text-black text-[18]'/></p>
            <p className='text-black'>{product.category} <Arrow className='text-black text-[18]'/></p>
            <p className='text-black'> {product.name}</p>
        </div>
    );
};

export default Breadcrum;
