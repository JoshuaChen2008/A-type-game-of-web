import { motion } from 'framer-motion';
import { formatPercentage } from '../utils/helpers';

const Results = ({
    errors,
    accuracyPercentage,
    total,
    className,
}: {
    errors: number;
    accuracyPercentage: number; total: number;
    className?: string
}) => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { duration: 0.5 }
    
    return (

        <motion.ul className={`${className} flex flex-col items-center text-pink-600 dark:text-primary-400 space-y-3`}>

            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 0 }}
                
            >Results</motion.li>

            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 0.5 }}
              

            >Accuracy:
                {formatPercentage(accuracyPercentage)}</motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 0.5 }}
                className="text-violet-900 dark:text-red-400"
             

            >
                Errors:{errors}</motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 0.5 }}
                

            >Typed:{total}</motion.li>
        </motion.ul>
    )
}

export default Results;