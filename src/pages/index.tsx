import Wrapper from "../../components/wrapper";
import { ItemsWrapper, Item } from "../../components/icon";

export default function Home() {
	return (
		<Wrapper>
			<div className="w-full h-14 mt-10 mb-16 md:mb-5  hover:text-red-600">
				<b>
					<h1 className="text-center text-4xl ">We invesigate the unexplainable.</h1>
				</b>
			</div>
			<div className="border-y-2 border-solid border-black py-10">
				<ItemsWrapper>
					<Item 
						imgsrc="/ghost.png" 
						text="Ghosts" 
						iwidth={100} 
						iheight={100}
					/>
					<Item 
						imgsrc="/prediction.png" 
						text="Aliens" 
						iwidth={100} 
						iheight={100}
					/>
					<Item 
						imgsrc="/man.png" 
						text="Figures" 
						iwidth={100} 
						iheight={100}
					/>
					<Item 
						imgsrc="/pawprint.png" 
						text="Creatures" 
						iwidth={100} 
						iheight={100}
					/>
				</ItemsWrapper>
			</div>
			<div className="bg-black h-full text-white pt-5">
				<div className="text-center">
					<article>
						<h1 className="text-xl font-extrabold">Experienced something paranormal?</h1>
						<p className="px-2 md:px-40"> 
							<a href="/contact" className="text-blue-300">Tell us about it on our contact page</a>
						</p>
					</article>   
				</div>
				<div className="flex flex-col md:flex-row mt-10 pt-20  ">
					<article className="text-center w-full md:w-1/2 pb-20 md:p-0">
						<h1 className="text-2xl font-bold">What do we do?</h1>
						<p className="">
							We document and investigate paranormal activity across the world. In addition we can
							arrange an in person investigation if you live in <span className="text-red-500">London</span>.
						</p>
					</article>
					<article className="text-center w-full md:w-1/2 bg-black">
						<h1 className="text-2xl font-bold">Want to join our organization?</h1>
						<p className="">
							Want to help the world find the truth about paranormal activity? Contact us to help get involved.
						</p>
					</article>
				</div>
			</div>
		</Wrapper>	
	);
}
