import React from 'react'
import {motion} from 'framer-motion';

const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white z-50'>
        <motion.div className='loader'
        animate={{rotate:360}}
        transition={{repeat: Infinity, duration: 5}}>
            <div className='w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full'></div>
        </motion.div>
    </div>
  );
};

export default Loader