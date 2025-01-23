import React from 'react'
import Daniel from './assets/image-daniel.jpg'
import Jonathan from './assets/image-jonathan.jpg'
import Jeanette from './assets/image-jeanette.jpg'
import Patrick from './assets/image-patrick.jpg'
import Kira from './assets/image-kira.jpg'

const App = () => {
  return (
	<div className='font-barlow bg-light-gray-blue min-h-screen flex items-center justify-center mx-auto px-8 py-16 lg:px-48'>
		<div className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 [&_div]:bg-violet [&_div]:rounded-lg [&_div]:p-4'>
			<div className='lg:col-span-2' >
				<div className='flex flex-row'>
					<div>
						<img src={Daniel} alt="Daniel" className='rounded-full' />
					</div>	
					<div>
						<span className='text-light-gray'>Daniel Clifford</span><br></br>
						<span>Verified Graduate</span>
					</div>
				</div>
				<p>
					I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.
				</p>
				<p className='text-[13px]'>
					" I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and the most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. "
				</p>
			</div>
			<div className='lg:col-start-3'>
				<div className='flex flex-row'>
					<div>
						<img src={Jonathan} alt="Jonathan" className='rounded-full' />
					</div>	
					<div>
						<span>Jonathan Walters</span><br></br>
						<span>Verified Graduate</span>
					</div>
				</div>
				<p>
					The team was very supportive and kept me motivated
				</p>
				<p>
					" I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for big company. This was one of the best investments I've made in myself. "
				</p>
			</div>
			<div className='lg:col-start-1 lg:row-start-2'>
				<div>
					<img src={Jeanette} alt="Jeanette" className='rounded-full' />
					Jeanette Harmon
					Verified Graduate
				</div>
				<p>
					An overall wonderful and rewarding experience
				</p>
				<p>
					" Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. "
				</p>
			</div>
			<div className='lg:col-span-2 lg:col-start-2 lg:row-start-2'>
				<div>
					<img src={Patrick} alt="Patrick" className='rounded-full' />
					Patrick Abrams
					Verified Graduate
				</div>
				<p>
					Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
				</p>
				<p>
					" The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. "
				</p>
			</div>
			<div className='lg:row-span-2 lg:col-start-4 lg:row-start-1'>
				<div>
					<img src={Kira} alt="Kira" className='rounded-full' />
					Kira Whittle
					Verified Graduate
				</div>
				<p>
					Such a life-changing experience. Highly recommended!
				</p>
				<p>
					" Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my leaning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommended! "
				</p>
			</div>
		</div>
	</div>
  )
}

export default App
