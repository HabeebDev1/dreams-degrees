import Image from "next/image"
import star from "../public/images/star.png"
import styled from "styled-components"
import wright from "../public/images/wright.png"



const Button = styled.button`
    background: ${props => props.primary ? "#D68676" : props.notprimary ? "transparent" : ""};
    color: ${props => props.primary ? "white" 
    : props.notprimary ? "#12022F" : "black" };

    font-size: 1em;
    padding: 15px 59px;
    border: ${props => props.primary ? "" : 
        props.notprimary ? "" : "2px solid #1A202C"  };
    border-radius: 28px;
    font-weight:600;
    display:flex;
    align-items:center;
`

export default function Membership(){

    return (
        <section className="mt-[57px] md:mt-28 mb-[110px]">
            <div className="container mx-auto">
            <h1 className='text-42 md:text-56 mb-[32px] md:mb-0 font-["paytone-one"] font-bold text-center'>Membership <span className="text-pry">Benefits</span></h1>
            <div className='md:w-[1024px] mx-auto mt-[32px] grid grid-cols-1 md:grid-cols-2 gap-7'>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[23px] h-[23px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Mentorship: Learn from experienced professionals in technology</p>
                </article>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[23px] h-[23px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Access to organized webinars, Workshop and events</p>
                </article>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[33px] h-[33px] relative mr-[23px] '>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600]">Book/schedule a 1:1 session with an experienced professional in tech instantly when you join our slack community</p>
                </article>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[33px] h-[33px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Build your Network: Connect, make friends in the slack community and virtual hangouts. </p>
                </article>
                <article className="flex items-center text-center md:text-left  flex-col md:flex-row">
                    <span className='block w-[23px] h-[23px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Access to 6 months female-focused technology mentorship program </p>
                </article>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[33px] h-[33px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Get matched with an Accountability buddy to help you stay motivated in your tech journey</p>
                </article>
            </div>
            <section className="md:w-[382px] mx-auto mt-7">
                <div className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[43px] h-[33px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Get matched with an Accountability buddy to help you stay motivated in your tech journey</p>
                </div>
            </section>
            <section className="flex justify-center mt-[48px] md:flex-row flex-col">
                <Button primary className="mr-7">
                    <span>Get Started </span>
                </Button>
                <Button className="mt-[39px] mb-[111px] md:mb-0 md:mt-0">
                    <span>Get Involved</span>
                </Button>
            </section>
            </div>
        </section>
    )

}