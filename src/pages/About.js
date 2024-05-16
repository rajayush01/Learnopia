import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white justify-center items-center flex flex-col h-full"
        >
            <motion.h1
                variants={itemVariants}
                className='text-cyan-500 text-center mb-4 font-bold text-5xl'
            >
                Welcome to Learnopia
            </motion.h1>
            <motion.p
                variants={itemVariants}
                className="text-center mb-8 text-lg"
            >
                At Learnopia, we're not just another online learning platform. We're a community of passionate learners and educators, dedicated to making education accessible to all.
            </motion.p>
            <motion.h1
                variants={itemVariants}
                className='text-cyan-500 text-center mb-4 text-3xl font-semibold'
            >
                Our Mission
            </motion.h1>
            <motion.p
                variants={itemVariants}
                className="text-center mb-4 text-lg"
            >
                Our mission is simple yet powerful: to empower learners and educators to connect, collaborate, and succeed. We believe that education is the key to unlocking human potential, and we're here to support you every step of the way.
            </motion.p>
            <motion.h1
                variants={itemVariants}
                className='text-cyan-500 text-center mb-4 text-3xl font-semibold'
            >
                Why Choose Us?
            </motion.h1>
            <motion.ul
                variants={itemVariants}
                className="list-disc text-left mb-4 text-md"
            >
                <motion.li>
                    <b>Flexibility:</b> Learn at your own pace, whenever and wherever you want. Our platform is designed to fit into your busy schedule.
                </motion.li>
                <motion.li>
                    <b>Community:</b> Join a vibrant community of learners and educators who are passionate about teaching and learning.
                </motion.li>
                <motion.li>
                    <b>Innovation:</b> We're always looking for new ways to enhance your learning experience. From interactive courses to cutting-edge technology, we're constantly pushing the boundaries of online education.
                </motion.li>
                <motion.li>
                    <b>Quality:</b> Our courses are created by industry experts and are designed to help you acquire real-world skills that you can apply immediately.
                </motion.li>
            </motion.ul>
            <motion.h1
                variants={itemVariants}
                className='text-cyan-500 text-center mb-4 text-3xl font-semibold'
            >
                Our Commitment to You

            </motion.h1>
            <motion.p
                variants={itemVariants}
                className="text-center mb-4 text-lg"
            >
                We're committed to providing you with the best possible learning experience. Whether you're a student looking to expand your horizons or an educator looking to reach a wider audience, we're here to help you achieve your goals.            
            </motion.p>
            <motion.h1
                variants={itemVariants}
                className='text-cyan-500 text-center mb-4 text-3xl font-semibold'
            >
                Join Us Today

            </motion.h1>
            <motion.p
                variants={itemVariants}
                className="text-center mb-4 text-lg"
            >
                Ready to take the next step in your learning journey? Join us today and become a part of our growing community. Together, we can unlock a world of possibilities.
            </motion.p>
        </motion.div>



    );
};

export default About;