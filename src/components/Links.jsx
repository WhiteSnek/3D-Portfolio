import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import { github } from "../assets"
import { linkedin } from "../assets"
import { leetcode } from "../assets"
import {resume}from '../assets'
import { resumeImg } from "../assets"

const Links = () => {
  return (
    <>
    <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}>Important links</p>
        <h2 className={styles.sectionHeadText}>Links.</h2>
      </motion.div>
    <div className="flex flex-row mt-5 flex-wrap justify-center gap-10">
      <a href="https://www.linkedin.com/in/nikhil-kumar-088860257/" target="_blank" className="flex justify-center items-center gap-2 cursor-pointer hover:underline"><img src={linkedin} className="h-8 w-8"/>LinkedIn</a>
      <a href="https://github.com/WhiteSnek/" target="_blank" className="flex justify-center items-center gap-2 cursor-pointer hover:underline"><img src={github} className="h-8 w-8"/>GitHub</a>
      <a href="https://leetcode.com/u/white_snake/" target="_blank" className="flex justify-center items-center gap-2 cursor-pointer hover:underline"><img src={leetcode} className="h-8 w-8"/>LeetCode</a>
      <a href={resume} className="flex justify-center items-center gap-2 cursor-pointer hover:underline" download><img src={resumeImg} className="h-8 w-8"/>Resume</a>
    </div>
    </>
  )
}

export default SectionWrapper(Links, "")