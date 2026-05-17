import { motion } from 'framer-motion';
export const Timeout = () => {


    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { duration: 0.5 }


    return (
        <motion.ul initial={initial}
            animate={animate}
            transition={{ ...duration, delay: 0.1 }} className="fixed top-22 left-0 right-0 z-40 text-center">
            <h1 className="text-4xl font-bold text-violet-900 dark:text-red-500 tracking-wide">
                TIME OUT!
            </h1>
        </motion.ul>
    )
}

export default Timeout
