'use cliente'
import React from 'react';
import ItemLayout from './ItemLayout';




const AboutDetails = () => {
  
  return (
    <seccion className='w-full'>

      <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>

        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
           <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
             Senior Software Developer
           </h2>

           <p className='font-light text-xs sm:text-sm md:text-base'>
           My journey in senior web development is powered by an array of mystical tools and languages, 
           with JavaScript, Java and Dart casting the core of my enchantments. I wield frameworks like Angular, React.js, Next.js and Flutter,
            frameworks with Backend NodeJs, Java, SpringBoot, ExpressJS with precision, 
           crafting seamless portals (websites) that connect realms (users) across the digital universe. 
           The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, 
           while my design skills ensure every creation is not only functional 
           but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.
           </p>
        </ItemLayout>
       
       <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            30+ <sub className='font-semibold text-base'>clients</sub>
          </p>
       </ItemLayout>

        

       <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>

       <p className='font-semibold w-full text-left ext-2xl sm:text-5xl'>
            6+ <sub className='font-semibold text-base'>years of experience</sub>
          </p>
       </ItemLayout>

       <ItemLayout className={'col-span-full xs:col-span-6 md:col-span-4 !p-0'} >
          <img  className='w-full h-auto' 
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=javiermills&theme=transparent&hide_border=true
          &title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" 
          alt="JavierMills" loading='lazy'/>
        </ItemLayout>

        <ItemLayout className={'col-span-full md:col-span-8 !p-0'} >
          <img  className='w-full h-auto' 
          src="https://github-readme-stats.vercel.app/api?username=javiermills&theme=transparent&hide_border=true
          &title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" 
          alt="JavierMills" loading='lazy'/>
        </ItemLayout>

        <ItemLayout className={'col-span-full'} >
          <img  className='w-full h-auto' 
          src="https://skillicons.dev/icons?i=js,html,css,wasm,angular,apple,aws,bootstrap,eclipse,express,firebase,git,github,gitlab,graphql,idea,ai,jest,jquery,kubernetes,linkedin,linux,maven,mongodb,nestjs,netlify,nextjs,nginx,nodejs,npm,pnpm,postgres,postman,powershell,reactivex,react,redhat,redis,regex,rocket,sass,spring,stackoverflow,sublime,svg,tailwind,threejs,ts,ubuntu,vercel,visualstudio,vite,vscode,webpack,windows,yarn" 
          alt="JavierMills" loading='lazy'/>
        </ItemLayout>
       

        <ItemLayout className={'col-span-full md:col-span-6 !p-0'} >
        <img className='w-full h-auto' 
          src="https://github-readme-streak-stats.herokuapp.com?user=JavierMills&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B" 
          alt="JavierMills" loading='lazy'/>
        </ItemLayout>

        <ItemLayout className={'col-span-full md:col-span-6 !p-0'} >
          <img  className='w-full h-auto' 
          src="https://github-readme-stats.vercel.app/api/pin/?username=javiermills&repo=netflix&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" 
          alt="JavierMills" loading='lazy'/>
        </ItemLayout>
        
      
        
       


  

      </div>
    </seccion>
  )
}

export default AboutDetails;