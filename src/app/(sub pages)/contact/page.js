import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "../../components/Contact/Form";



export default function Contact() {
  return (
    <>
      <Image
      priority sizes="100vw" 
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      ></Image>


      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">

        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:*:w-3/4">
        <h1 className="text-accent font-semibold text-center text-4xl capitalize">
        Ramiro Javier Martínez Cruz (fullstack developer).
        </h1>
           <p className="text-center font-light text-sm xs:text-base">
           As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, 
           showcasing my expertise in React.js, Angular, Docker, SalesForce, Appian, Typescript, 
           Next.js, Jenkins, VeraCode, Tailwind, Boostrap, JavaScript, Node.js, Java, SpringBoot Framework, JSP, Arquitectura Agave, Dart, Flutter and web development."
           </p>

        </div>
        <Form />
      </article>
    </>
  );
}
