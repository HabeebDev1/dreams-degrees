import Head from "next/head"
import { AnimatePresence, motion } from "framer-motion"
import { programsArray} from "../../components/utils"
import GetInvolved from "../../components/getinvolved"
import ProgramsMain from "../../components/programsmain"
import { useRouter } from "next/router"



export default function Programs(){

    const router = useRouter()

    return(
        <section >
             <Head>
                <title>Dreams&Degrees</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/favicon.png" />
                <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1652026702/dd/aboutline_vgyj9u.png" />
            </Head>

            <div className="program_bg pline py-[38px] md:pb-[62px] pt-[113px] md:pt-[180px]"> 
                <ProgramsMain >
                <div className="program_content md:mt-0 mt-[75px] w-[100%] md:border-t-none md:border-l-[0.5px] h-[930px] md:h-[988px]  border-[#A0AEC0] relative font-fellix">
                        { programsArray.map((program, index) => {
                            return (
                                <div key={index}>
                                    <AnimatePresence>
                                    <motion.div
                                        key={parseInt(router.query.id)}
                                        initial={{ opacity: 0  }}
                                        animate={parseInt(router.query.id) === program.id ? { opacity: 1 } : { opacity: 0  }}
                                        exit={{ opacity: 0 }}
                                        className={`${parseInt(router.query.id) === program.id ? "block" : "hidden"} md:px-[62px] pr-3 w-100p  md:py-[34px] leading-[24px] absolute`}
                                    >
                                        {program.component}
                                    </motion.div>
                                </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </ProgramsMain>
            </div>
            <section className="mt-[98px] md:mt-[118px] mb-[124px]">
                <GetInvolved />
            </section>
        </section>
    )

}